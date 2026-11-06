export const productCategoryIds = [
  "ev-tipi",
  "piknik",
  "sanayi",
  "ticari",
  "diger",
  "kamp-ekipman",
] as const;

export type ProductCategoryId = (typeof productCategoryIds)[number];

export type TubeCategoryId = Exclude<ProductCategoryId, "kamp-ekipman">;

export type ProductPhoto = {
  kind: "photo";
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Lisanslı örnek görselin kısa kaynağı. */
  credit?: string;
  id?: number;
};

export type ProductImage =
  | {
      kind: "illustration";
      variant: TubeCategoryId;
    }
  | ProductPhoto;

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  categoryId: ProductCategoryId;
  summary: string;
  usage: string;
  seoDescription: string;
  /** Kuruş cinsinden satış fiyatı. Boşsa sitede rakam gösterilmez. */
  priceKurus: number | null;
  /** Fiyatın yanındaki kısa not. Boşsa gösterilmez. */
  priceNote?: string | null;
  /** YYYY-AA-GG. Boşsa tarih satırı gösterilmez. */
  priceUpdatedAt?: string | null;
  /** Yalnızca doğrulanmış dolum bilgisi. */
  capacity: string | null;
  longDescription?: string | null;
  features?: string[];
  faq?: ProductFaq[];
  image: ProductImage;
  /** Ana görsele ek ürün fotoğrafları. */
  gallery?: ProductPhoto[];
};

export type ProductCategory = {
  id: ProductCategoryId;
  name: string;
  description: string;
};
