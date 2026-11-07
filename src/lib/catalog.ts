import { products as seedProducts } from "@/data/products";
import { getPool } from "@/lib/db";
import { applyEditorial } from "@/lib/editorial";
import type { Product, ProductCategoryId, ProductImage, TubeCategoryId } from "@/types/product";
import { productCategoryIds } from "@/types/product";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { cacheLife, cacheTag } from "next/cache";

export type ProductRecord = Product & { id: number; sortOrder: number };

type ProductRow = RowDataPacket & {
  id: number;
  slug: string;
  name: string;
  category_id: string;
  summary: string;
  usage_label: string;
  seo_description: string;
  capacity: string | null;
  price_kurus: number | null;
  image_kind: "photo" | "illustration";
  image_src: string | null;
  image_alt: string | null;
  image_width: number | null;
  image_height: number | null;
  image_credit: string | null;
  illustration_variant: string | null;
  sort_order: number;
};

type GalleryRow = RowDataPacket & {
  id: number;
  product_id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string | null;
  sort_order: number;
};

export type StoredPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string | null;
};

export type ProductInput = {
  id?: number;
  slug: string;
  name: string;
  categoryId: ProductCategoryId;
  summary: string;
  usage: string;
  seoDescription: string;
  capacity: string | null;
  priceKurus: number | null;
  sortOrder: number;
  image: ProductImage;
  gallery: StoredPhoto[];
};

const tubeCategories: TubeCategoryId[] = ["ev-tipi", "piknik", "sanayi", "ticari", "diger"];

export function isCategoryId(value: string): value is ProductCategoryId {
  return (productCategoryIds as readonly string[]).includes(value);
}

export function isTubeCategory(value: string): value is TubeCategoryId {
  return (tubeCategories as readonly string[]).includes(value);
}

export async function ensureCatalogSchema() {
  const pool = getPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      slug VARCHAR(120) NOT NULL,
      name VARCHAR(160) NOT NULL,
      category_id VARCHAR(40) NOT NULL,
      summary TEXT NOT NULL,
      usage_label VARCHAR(120) NOT NULL,
      seo_description TEXT NOT NULL,
      capacity VARCHAR(40) NULL,
      image_kind ENUM('photo','illustration') NOT NULL,
      image_src TEXT NULL,
      image_alt VARCHAR(255) NULL,
      image_width INT NULL,
      image_height INT NULL,
      image_credit TEXT NULL,
      illustration_variant VARCHAR(40) NULL,
      sort_order INT NOT NULL DEFAULT 0,
      PRIMARY KEY (id),
      UNIQUE KEY products_slug (slug)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  const [priceColumn] = await pool.query<RowDataPacket[]>(
    `SELECT COLUMN_NAME AS columnName
     FROM information_schema.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'products' AND COLUMN_NAME = 'price_kurus'`,
  );
  if (priceColumn.length === 0) {
    await pool.query("ALTER TABLE products ADD COLUMN price_kurus INT UNSIGNED NULL AFTER capacity");
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS product_gallery (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      product_id INT UNSIGNED NOT NULL,
      src TEXT NOT NULL,
      alt VARCHAR(255) NOT NULL,
      width INT NOT NULL,
      height INT NOT NULL,
      credit TEXT NULL,
      sort_order INT NOT NULL DEFAULT 0,
      PRIMARY KEY (id),
      KEY gallery_product (product_id),
      CONSTRAINT gallery_product_fk FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
}

function imageFromRow(row: ProductRow): ProductImage {
  switch (row.image_kind) {
    case "illustration": {
      const variant = row.illustration_variant ?? "";
      if (!isTubeCategory(variant)) {
        throw new Error("Çizim türü geçersiz.");
      }
      return { kind: "illustration", variant };
    }
    case "photo": {
      if (!row.image_src || !row.image_alt || !row.image_width || !row.image_height) {
        throw new Error("Ürün görseli eksik.");
      }
      return {
        kind: "photo",
        src: row.image_src,
        alt: row.image_alt,
        width: row.image_width,
        height: row.image_height,
        credit: row.image_credit ?? undefined,
      };
    }
    default: {
      const exhaustive: never = row.image_kind;
      return exhaustive;
    }
  }
}

function toRecord(row: ProductRow, gallery: GalleryRow[]): ProductRecord {
  if (!isCategoryId(row.category_id)) {
    throw new Error("Ürün kategorisi geçersiz.");
  }
  const image = imageFromRow(row);
  const photos = gallery
    .filter((item) => item.product_id === row.id)
    .sort((left, right) => left.sort_order - right.sort_order)
    .map((item) => ({
      id: item.id,
      kind: "photo" as const,
      src: item.src,
      alt: item.alt,
      width: item.width,
      height: item.height,
      credit: item.credit ?? undefined,
    }));
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    categoryId: row.category_id,
    summary: row.summary,
    usage: row.usage_label,
    seoDescription: row.seo_description,
    capacity: row.capacity,
    priceKurus: row.price_kurus == null ? null : Number(row.price_kurus),
    sortOrder: row.sort_order,
    image,
    gallery: image.kind === "photo" && photos.length > 0 ? photos : undefined,
  };
}

export async function readProductRecords(): Promise<ProductRecord[]> {
  await ensureCatalogSchema();
  const pool = getPool();
  const [productRows] = await pool.query<ProductRow[]>(
    "SELECT * FROM products ORDER BY sort_order ASC, id ASC",
  );
  const [galleryRows] = await pool.query<GalleryRow[]>(
    "SELECT * FROM product_gallery ORDER BY sort_order ASC, id ASC",
  );
  return productRows.map((row) => toRecord(row, galleryRows));
}

async function readCachedProductRecords() {
  "use cache";
  // Kısa stale: admin yazısından sonra eski vitrinin uzun süre kalmasını engeller.
  cacheLife({ stale: 60, revalidate: 300, expire: 3600 });
  cacheTag("products");
  try {
    return await readProductRecords();
  } catch {
    return [];
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const records = await readCachedProductRecords();
    if (records.length === 0) {
      return seedProducts.map(applyEditorial);
    }
    return records.map(applyEditorial);
  } catch {
    return seedProducts.map(applyEditorial);
  }
}

export async function getProductRecord(id: number) {
  const records = await readProductRecords();
  return records.find((item) => item.id === id) ?? null;
}

async function replaceGallery(productId: number, gallery: StoredPhoto[]) {
  const pool = getPool();
  await pool.execute("DELETE FROM product_gallery WHERE product_id = ?", [productId]);
  for (const [index, photo] of gallery.entries()) {
    await pool.execute(
      `INSERT INTO product_gallery (product_id, src, alt, width, height, credit, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [productId, photo.src, photo.alt, photo.width, photo.height, photo.credit, index],
    );
  }
}

function imageValues(image: ProductImage) {
  switch (image.kind) {
    case "illustration":
      return {
        image_kind: "illustration",
        image_src: null,
        image_alt: null,
        image_width: null,
        image_height: null,
        image_credit: null,
        illustration_variant: image.variant,
      };
    case "photo":
      return {
        image_kind: "photo",
        image_src: image.src,
        image_alt: image.alt,
        image_width: image.width,
        image_height: image.height,
        image_credit: image.credit ?? null,
        illustration_variant: null,
      };
    default: {
      const exhaustive: never = image;
      return exhaustive;
    }
  }
}

export async function saveProduct(input: ProductInput) {
  await ensureCatalogSchema();
  const pool = getPool();
  const image = imageValues(input.image);
  const [existing] = await pool.query<RowDataPacket[]>(
    "SELECT id FROM products WHERE slug = ? AND id <> ? LIMIT 1",
    [input.slug, input.id ?? 0],
  );
  if (existing.length > 0) {
    throw new Error("Bu adres başka bir üründe kullanılıyor.");
  }

  if (input.id) {
    const [result] = await pool.execute<ResultSetHeader>(
      `UPDATE products
       SET slug = ?, name = ?, category_id = ?, summary = ?, usage_label = ?, seo_description = ?,
           capacity = ?, price_kurus = ?, image_kind = ?, image_src = ?, image_alt = ?, image_width = ?,
           image_height = ?, image_credit = ?, illustration_variant = ?, sort_order = ?
       WHERE id = ?`,
      [
        input.slug,
        input.name,
        input.categoryId,
        input.summary,
        input.usage,
        input.seoDescription,
        input.capacity,
        input.priceKurus,
        image.image_kind,
        image.image_src,
        image.image_alt,
        image.image_width,
        image.image_height,
        image.image_credit,
        image.illustration_variant,
        input.sortOrder,
        input.id,
      ],
    );
    if (result.affectedRows === 0) {
      throw new Error("Ürün bulunamadı.");
    }
    await replaceGallery(input.id, input.image.kind === "photo" ? input.gallery : []);
    return input.id;
  }

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO products
      (slug, name, category_id, summary, usage_label, seo_description, capacity, price_kurus, image_kind,
       image_src, image_alt, image_width, image_height, image_credit, illustration_variant, sort_order)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      input.slug,
      input.name,
      input.categoryId,
      input.summary,
      input.usage,
      input.seoDescription,
      input.capacity,
      input.priceKurus,
      image.image_kind,
      image.image_src,
      image.image_alt,
      image.image_width,
      image.image_height,
      image.image_credit,
      image.illustration_variant,
      input.sortOrder,
    ],
  );
  await replaceGallery(result.insertId, input.image.kind === "photo" ? input.gallery : []);
  return result.insertId;
}

export async function deleteProduct(id: number) {
  const pool = getPool();
  const [result] = await pool.execute<ResultSetHeader>("DELETE FROM products WHERE id = ?", [id]);
  if (result.affectedRows === 0) {
    throw new Error("Ürün bulunamadı.");
  }
}

export async function seedCatalogFromSite() {
  await ensureCatalogSchema();
  const current = await readProductRecords();
  if (current.length > 0) {
    return current.length;
  }
  for (const [index, product] of seedProducts.entries()) {
    await saveProduct({
      slug: product.slug,
      name: product.name,
      categoryId: product.categoryId,
      summary: product.summary,
      usage: product.usage,
      seoDescription: product.seoDescription,
      capacity: product.capacity,
      priceKurus: product.priceKurus,
      sortOrder: index,
      image: product.image,
      gallery: (product.gallery ?? []).map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        width: photo.width,
        height: photo.height,
        credit: photo.credit ?? null,
      })),
    });
  }
  return seedProducts.length;
}
