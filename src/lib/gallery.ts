import { getPool } from "@/lib/db";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { cacheLife, cacheTag } from "next/cache";

export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type GalleryRow = RowDataPacket & GalleryImage;

export async function ensureGallerySchema() {
  const pool = getPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS site_gallery (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      src TEXT NOT NULL,
      alt VARCHAR(255) NOT NULL,
      width INT NOT NULL,
      height INT NOT NULL,
      sort_order INT NOT NULL DEFAULT 0,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
}

async function readGalleryRows() {
  const pool = getPool();
  const [rows] = await pool.query<GalleryRow[]>(
    "SELECT id, src, alt, width, height FROM site_gallery ORDER BY id DESC",
  );
  return rows.map((row) => ({
    id: row.id,
    src: row.src,
    alt: row.alt,
    width: row.width,
    height: row.height,
  }));
}

export async function listGalleryImages() {
  await ensureGallerySchema();
  return readGalleryRows();
}

async function readCachedGalleryImages() {
  "use cache";
  cacheLife("hours");
  cacheTag("gallery");
  try {
    await ensureGallerySchema();
    return await readGalleryRows();
  } catch {
    return [];
  }
}

export async function getGalleryImages() {
  try {
    return await readCachedGalleryImages();
  } catch {
    return [];
  }
}

export async function addGalleryImage(image: Omit<GalleryImage, "id">) {
  await ensureGallerySchema();
  const pool = getPool();
  const [maxRows] = await pool.query<RowDataPacket[]>(
    "SELECT COALESCE(MAX(sort_order), 0) AS maxSort FROM site_gallery",
  );
  const sortOrder = Number(maxRows[0]?.maxSort ?? 0) + 1;
  const [result] = await pool.execute<ResultSetHeader>(
    "INSERT INTO site_gallery (src, alt, width, height, sort_order) VALUES (?, ?, ?, ?, ?)",
    [image.src, image.alt, image.width, image.height, sortOrder],
  );
  return result.insertId;
}

export async function deleteGalleryImage(id: number) {
  await ensureGallerySchema();
  const pool = getPool();
  const [result] = await pool.execute<ResultSetHeader>("DELETE FROM site_gallery WHERE id = ?", [id]);
  if (result.affectedRows === 0) {
    throw new Error("Görsel bulunamadı.");
  }
}
