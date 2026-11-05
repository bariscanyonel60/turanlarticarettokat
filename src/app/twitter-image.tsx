import {
  createBrandImage,
  imageAlt,
  imageContentType,
  imageSize,
} from "@/lib/brand-image";

export const alt = imageAlt;
export const size = imageSize;
export const contentType = imageContentType;

export default function TwitterImage() {
  return createBrandImage();
}
