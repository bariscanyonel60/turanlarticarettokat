import { cn } from "@/lib/cn";
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
      src="/images/branding/turanlar-logo.png"
      alt=""
      width={989}
      height={273}
      priority={priority}
      className={cn("h-10 w-auto max-w-[9.5rem] sm:h-11 sm:max-w-[11.5rem]", className)}
    />
  );
}
