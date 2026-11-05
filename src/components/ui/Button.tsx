import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "navy" | "cream" | "line" | "whatsapp";

const variants: Record<Variant, string> = {
  navy: "bg-navy text-cream hover:bg-navy-deep focus-visible:outline-cream",
  cream: "bg-cream text-navy hover:bg-white focus-visible:outline-navy",
  line: "border border-navy/15 bg-transparent text-navy hover:border-navy/40 hover:bg-white focus-visible:outline-navy",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-deep focus-visible:outline-cream",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href: string;
  external?: boolean;
};

export function Button({
  children,
  variant = "navy",
  className,
  href,
  external = false,
}: ButtonProps) {
  const controlsDisplay = /(^|\s)(hidden|inline-flex|flex|grid)(!|\s|$)/.test(
    className ?? "",
  );
  const controlsSize = /(^|\s)text-(xs|sm|base|lg|xl|2xl)(!|\s|$)/.test(className ?? "");
  const controlsWeight = /(^|\s)font-(medium|semibold|bold|extrabold)(!|\s|$)/.test(
    className ?? "",
  );
  const controlsPadding = /(^|\s)px-/.test(className ?? "");
  const classes = cn(
    "min-h-12 items-center justify-center gap-2 rounded-xl tracking-[-0.01em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3",
    controlsPadding ? undefined : "px-5",
    controlsSize ? undefined : "text-sm",
    controlsWeight ? undefined : "font-semibold",
    controlsDisplay ? undefined : "inline-flex",
    variants[variant],
    className,
  );

  const isExternal =
    external || href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
