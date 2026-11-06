import { CylinderArt } from "@/components/brand/CylinderArt";
import { cloudinaryDeliveryUrl } from "@/lib/cloudinary";
import type { ProductImage } from "@/types/product";
import Image from "next/image";

export function ProductVisual({
  image,
  className,
  priority = false,
  sizes = "(max-width: 1023px) 50vw, 280px",
}: {
  image: ProductImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  switch (image.kind) {
    case "illustration":
      return <CylinderArt variant={image.variant} className={className} />;
    case "photo":
      return (
        <Image
          src={cloudinaryDeliveryUrl(image.src)}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className={className}
          sizes={sizes}
        />
      );
    default: {
      const exhaustive: never = image;
      return exhaustive;
    }
  }
}
