import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { getProducts } from "@/lib/catalog";
import { getSiteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const siteUrl = getSiteUrl();
  const lastModified = "2026-11-05";
  const staticPaths = [
    "/",
    "/urunler",
    "/galeri",
    "/hizmetlerimiz",
    "/sss",
    "/kurumsal",
    "/hakkimizda",
    "/blog",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
    "/iletisim",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: new URL(path, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/urunler/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
