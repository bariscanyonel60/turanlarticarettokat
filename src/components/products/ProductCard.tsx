import { ProductVisual } from "@/components/products/ProductVisual";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/price";
import { productWhatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-navy/10 bg-white shadow-[0_24px_50px_-36px_rgba(12,35,72,0.7)] transition duration-300 motion-safe:hover:-translate-y-1 hover:border-navy/25">
      <Link
        href={`/urunler/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f3f4f6_72%)]"
      >
        <span className="absolute left-3 top-3 z-10 rounded-full bg-navy px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white">
          {product.usage}
        </span>
        <ProductVisual
          image={product.image}
          className={cn(
            "h-full w-full object-contain p-5 transition duration-500 motion-safe:group-hover:scale-[1.04]",
            product.image.kind === "illustration" && "p-8",
          )}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="font-display text-[1.35rem] leading-tight tracking-[-0.04em] text-navy">
          <Link href={`/urunler/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="font-display text-2xl tracking-[-0.04em] text-navy">
          {product.priceKurus == null ? (
            <span className="text-base font-semibold text-ink-soft">Fiyat için sorun</span>
          ) : (
            formatPrice(product.priceKurus)
          )}
        </p>
        <p className="line-clamp-2 text-sm leading-6 text-ink-soft">{product.summary}</p>
        <Button
          href={productWhatsappUrl(product.name)}
          variant="whatsapp"
          className="mt-auto w-full"
        >
          <MessageCircle aria-hidden className="size-4" />
          Sipariş ver
        </Button>
      </div>
    </article>
  );
}
