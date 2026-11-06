"use server";

import {
  adminCredentialsMatch,
  clearAdminSession,
  createAdminSession,
  isAdmin,
} from "@/lib/admin-auth";
import {
  deleteProduct,
  getProductRecord,
  isCategoryId,
  isTubeCategory,
  saveProduct,
  seedCatalogFromSite,
  type StoredPhoto,
} from "@/lib/catalog";
import { uploadProductImage } from "@/lib/cloudinary-upload";
import { addGalleryImage, deleteGalleryImage } from "@/lib/gallery";
import { parsePriceInput } from "@/lib/price";
import { buildSeoDescription } from "@/lib/product-seo";
import { slugify } from "@/lib/slug";
import type { ProductImage } from "@/types/product";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

export type AdminFormState = { error: string };

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function actionError(error: unknown) {
  if (typeof error === "object" && error && "sqlMessage" in error) {
    const message = error.sqlMessage;
    if (typeof message === "string" && message.length > 0) {
      return message;
    }
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return "İşlem tamamlanamadı.";
}

function imageFiles(formData: FormData, key: string) {
  const files = formData
    .getAll(key)
    .filter((value): value is File => value instanceof File && value.size > 0);
  if (files.length > 12) {
    throw new Error("Bir seferde en fazla 12 görsel yüklenebilir.");
  }
  for (const file of files) {
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      throw new Error("Görsel JPG, PNG veya WebP olmalı.");
    }
    if (file.size > 8 * 1024 * 1024) {
      throw new Error("Görsel 8 MB sınırını aşıyor.");
    }
  }
  return files;
}

async function requireAdminAction() {
  if (!(await isAdmin())) {
    redirect("/admin/giris");
  }
}

export async function loginAction(_previous: AdminFormState, formData: FormData) {
  const username = text(formData, "username");
  const password = text(formData, "password");
  if (!adminCredentialsMatch(username, password)) {
    return { error: "Kullanıcı adı veya şifre hatalı." };
  }
  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/giris");
}

export async function setupCatalogAction(_previous: AdminFormState): Promise<AdminFormState> {
  void _previous;
  await requireAdminAction();
  try {
    await seedCatalogFromSite();
    updateTag("products");
  } catch (error) {
    return { error: actionError(error) };
  }
  redirect("/admin");
}

export async function deleteProductAction(formData: FormData) {
  await requireAdminAction();
  const id = Number(text(formData, "id"));
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Ürün bulunamadı.");
  }
  await deleteProduct(id);
  updateTag("products");
  redirect("/admin");
}

export async function saveProductAction(
  _previous: AdminFormState,
  formData: FormData,
): Promise<AdminFormState> {
  await requireAdminAction();
  try {
    const idValue = text(formData, "id");
    const id = idValue ? Number(idValue) : undefined;
    if (id !== undefined && (!Number.isInteger(id) || id <= 0)) {
      return { error: "Ürün bulunamadı." };
    }
    const existing = id ? await getProductRecord(id) : null;
    if (id && !existing) {
      return { error: "Ürün bulunamadı." };
    }

    const name = text(formData, "name");
    const slug = slugify(text(formData, "slug") || name);
    const categoryId = text(formData, "categoryId");
    const summary = text(formData, "summary");
    const usage = text(formData, "usage");
    const capacity = text(formData, "capacity");
    let priceKurus: number | null;
    try {
      priceKurus = parsePriceInput(text(formData, "price"));
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Fiyat geçersiz." };
    }
    const sortText = text(formData, "sortOrder");
    const sortOrder = sortText ? Number(sortText) : 0;
    const imageKind = text(formData, "imageKind");
    const alt = text(formData, "alt") || name;
    const variant = text(formData, "variant");
    const seoDescription = buildSeoDescription(name, summary, priceKurus);

    if (!name || !slug || !summary || !usage) {
      return { error: "Ad, adres, açıklama ve kullanım alanı zorunlu." };
    }
    if (name.length > 160 || slug.length > 120 || usage.length > 120) {
      return { error: "Ad, adres veya kullanım alanı çok uzun." };
    }
    if (!isCategoryId(categoryId)) {
      return { error: "Kategori geçersiz." };
    }
    if (!Number.isInteger(sortOrder)) {
      return { error: "Sıra tam sayı olmalı." };
    }

    let image: ProductImage;
    if (imageKind === "illustration") {
      if (!isTubeCategory(variant)) {
        return { error: "Çizim türünü seçin." };
      }
      image = { kind: "illustration", variant };
    } else if (imageKind === "photo") {
      const file = imageFiles(formData, "image")[0] ?? null;
      const current = existing?.image.kind === "photo" ? existing.image : null;
      const uploaded = file
        ? await uploadProductImage(file, `turanlar-ticaret/products/${slug}-${Date.now()}`)
        : null;
      const src = uploaded?.src ?? current?.src;
      const width = uploaded?.width ?? current?.width;
      const height = uploaded?.height ?? current?.height;
      if (!src || !width || !height) {
        return { error: "Ürün görseli yükleyin." };
      }
      image = {
        kind: "photo",
        src,
        alt,
        width,
        height,
        credit: current?.credit,
      };
    } else {
      return { error: "Görsel türü geçersiz." };
    }

    let gallery: StoredPhoto[] = [];
    if (image.kind === "photo") {
      const removed = new Set(
        formData
          .getAll("removeGallery")
          .map((value) => Number(value))
          .filter((value) => Number.isInteger(value) && value > 0),
      );
      const kept = (existing?.gallery ?? [])
        .filter((photo) => photo.id === undefined || !removed.has(photo.id))
        .map((photo) => ({
          src: photo.src,
          alt: photo.alt,
          width: photo.width,
          height: photo.height,
          credit: photo.credit ?? null,
        }));
      const uploaded = await Promise.all(
        imageFiles(formData, "gallery").map(async (galleryFile, index) => {
          const photo = await uploadProductImage(
            galleryFile,
            `turanlar-ticaret/products/${slug}-galeri-${Date.now()}-${index}`,
          );
          return {
            src: photo.src,
            alt: name,
            width: photo.width,
            height: photo.height,
            credit: null,
          };
        }),
      );
      gallery = [...kept, ...uploaded];
    }

    await saveProduct({
      id,
      slug,
      name,
      categoryId,
      summary,
      usage,
      seoDescription,
      capacity: capacity || null,
      priceKurus,
      sortOrder,
      image,
      gallery,
    });
    updateTag("products");
  } catch (error) {
    return { error: actionError(error) };
  }
  redirect("/admin");
}

export async function saveGalleryAction(
  _previous: AdminFormState,
  formData: FormData,
): Promise<AdminFormState> {
  await requireAdminAction();
  try {
    const files = imageFiles(formData, "images");
    if (files.length === 0) {
      return { error: "Galeriye en az bir görsel seçin." };
    }
    const caption = text(formData, "alt") || "Turanlar Ticaret galeri görseli";
    for (const [index, file] of files.entries()) {
      const photo = await uploadProductImage(file, `turanlar-ticaret/galeri/${Date.now()}-${index}`);
      await addGalleryImage({
        src: photo.src,
        alt: caption,
        width: photo.width,
        height: photo.height,
      });
    }
    updateTag("gallery");
  } catch (error) {
    return { error: actionError(error) };
  }
  redirect("/admin/galeri");
}

export async function deleteGalleryAction(formData: FormData) {
  await requireAdminAction();
  const id = Number(text(formData, "id"));
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Görsel bulunamadı.");
  }
  await deleteGalleryImage(id);
  updateTag("gallery");
  redirect("/admin/galeri");
}
