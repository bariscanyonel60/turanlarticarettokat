import { cn } from "@/lib/cn";
import { cloudinaryDeliveryUrl } from "@/lib/cloudinary";
import Image from "next/image";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={cloudinaryDeliveryUrl(
        "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955055/turanlar-ticaret/branding/turanlar-logo.png",
      )}
      alt=""
      width={989}
      height={273}
      sizes="288px"
      priority={priority}
      className={cn("h-12 w-auto max-w-[14rem] sm:h-14 sm:max-w-[18rem]", className)}
    />
  );
}
