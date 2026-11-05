import { CylinderArt } from "@/components/brand/CylinderArt";
import type { ProductImage } from "@/types/product";
import Image from "next/image";

export function ProductVisual({
  image,
  className,
  priority = false,
}: {
  image: ProductImage;
  className?: string;
  priority?: boolean;
}) {
  switch (image.kind) {
    case "illustration":
      return <CylinderArt variant={image.variant} className={className} />;
    case "photo":
      return (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          className={className}
          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
        />
      );
    default: {
      const exhaustive: never = image;
      return exhaustive;
    }
  }
}
