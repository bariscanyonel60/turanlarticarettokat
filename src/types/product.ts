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
};

export type ProductImage =
  | {
      kind: "illustration";
      variant: TubeCategoryId;
    }
  | ProductPhoto;

export type Product = {
  slug: string;
  name: string;
  categoryId: ProductCategoryId;
  summary: string;
  usage: string;
  seoDescription: string;
  /** Yalnızca doğrulanmış dolum bilgisi. */
  capacity: string | null;
  image: ProductImage;
  /** Ana görsele ek ürün fotoğrafları. */
  gallery?: ProductPhoto[];
};

export type ProductCategory = {
  id: ProductCategoryId;
  name: string;
  description: string;
};
