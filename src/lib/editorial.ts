import { tubeGuides } from "@/data/tube-guides";
import { buildSeoDescription } from "@/lib/product-seo";
import type { Product } from "@/types/product";

export function applyEditorial(product: Product): Product {
  const guide = tubeGuides[product.slug];
  return {
    ...product,
    seoDescription: buildSeoDescription(product.name, product.summary, product.priceKurus),
    longDescription: guide?.longDescription ?? product.longDescription ?? null,
    features: guide?.features ?? product.features ?? [],
    faq: guide?.faq ?? product.faq ?? [],
    priceNote: product.priceNote ?? null,
    priceUpdatedAt: product.priceUpdatedAt ?? null,
  };
}
