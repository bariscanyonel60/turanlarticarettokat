import { revalidatePath, updateTag } from "next/cache";

/** Site genelinde kullanılan Next.js cache etiketleri. */
export const SITE_CACHE_TAGS = ["products", "gallery"] as const;

export type SiteCacheTag = (typeof SITE_CACHE_TAGS)[number];

const PATHS_TO_REVALIDATE = [
  "/",
  "/urunler",
  "/galeri",
  "/hizmetlerimiz",
  "/sss",
  "/iletisim",
  "/hakkimizda",
  "/kurumsal",
  "/blog",
  "/sitemap.xml",
] as const;

/**
 * Ürün/galeri önbelleğini ve ana sayfa ağacını yeniler.
 * Eski Data Cache kayıtlarının birikmesini engeller.
 */
export function purgeSiteCache(tags: readonly SiteCacheTag[] = SITE_CACHE_TAGS) {
  for (const tag of tags) {
    updateTag(tag);
  }
  revalidatePath("/", "layout");
  for (const path of PATHS_TO_REVALIDATE) {
    revalidatePath(path);
  }
}

export function purgeProductCache() {
  purgeSiteCache(["products"]);
}

export function purgeGalleryCache() {
  purgeSiteCache(["gallery"]);
}
