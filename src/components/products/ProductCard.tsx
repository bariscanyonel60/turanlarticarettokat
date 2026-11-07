import { HoverZoom } from "@/components/products/HoverZoom";
import { ProductVisual } from "@/components/products/ProductVisual";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { formatPrice, missingPriceLabel } from "@/lib/price";
import { productWhatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_10px_24px_-18px_rgba(12,35,72,0.55)] transition duration-300 md:rounded-[1.4rem] md:shadow-[0_24px_50px_-36px_rgba(12,35,72,0.7)] md:hover:-translate-y-1 md:hover:border-navy/25">
      <Link href={`/urunler/${product.slug}`} className="flex min-h-0 flex-col">
        <div className="relative aspect-square overflow-hidden bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#e7eaee_78%)]">
          <HoverZoom>
            <ProductVisual
              image={product.image}
              priority={priority}
              sizes="(max-width: 767px) 46vw, (max-width: 1023px) 50vw, 280px"
              className={cn(
                "h-full w-full object-contain p-2 md:p-5",
                product.image.kind === "illustration" && "p-4 md:p-8",
              )}
            />
          </HoverZoom>
        </div>
        <div className="flex flex-col border-t border-navy/10 px-3 pt-2.5 pb-1 md:border-0 md:px-5 md:pt-5 md:pb-0">
          <h3 className="line-clamp-2 min-h-10 text-[15px] leading-5 font-semibold tracking-normal text-navy md:min-h-0 md:font-display md:text-[1.35rem] md:leading-7 md:font-normal md:tracking-[0.01em] md:[word-spacing:0.25em]">
            {product.name}
          </h3>
          {product.priceKurus == null ? (
            <p className="mt-1 text-sm leading-5 text-ink-soft md:text-base md:leading-7 md:tracking-[0.02em] md:[word-spacing:0.25em]">
              {missingPriceLabel()}
            </p>
          ) : (
            <p className="mt-1 text-base leading-5 font-bold tracking-normal text-navy md:font-display md:text-2xl md:leading-snug md:font-normal md:[word-spacing:0.25em]">
              {formatPrice(product.priceKurus)}
            </p>
          )}
        </div>
      </Link>
      <div className="mt-auto flex flex-1 flex-col gap-3 px-3 pt-2 pb-3 md:gap-4 md:px-5 md:pt-3 md:pb-5">
        <p className="hidden line-clamp-2 min-h-12 text-sm leading-6 text-ink md:block md:[word-spacing:0.25em]">
          {product.summary}
        </p>
        <dl className="hidden grid-cols-[5.25rem_minmax(0,1fr)] content-start gap-x-3 gap-y-2 border-t border-navy/10 pt-3 text-sm leading-5 md:grid md:min-h-[4.5rem]">
          <dt className="text-ink-soft">Kullanım</dt>
          <dd className="font-semibold text-navy">{product.usage}</dd>
          {product.capacity ? (
            <>
              <dt className="text-ink-soft">Ölçü</dt>
              <dd className="font-semibold text-navy">{product.capacity}</dd>
            </>
          ) : null}
        </dl>
        <Button
          href={productWhatsappUrl(product.name)}
          variant="whatsapp"
          className="mt-auto w-full !min-h-11 !rounded-xl !px-3 !text-sm md:!min-h-12 md:!text-base"
        >
          <MessageCircle aria-hidden className="size-4" />
          Sipariş ver
        </Button>
        <Link
          href={`/urunler/${product.slug}`}
          className="text-center text-sm leading-6 font-semibold text-navy underline decoration-navy/30 underline-offset-4"
        >
          Detayları gör
        </Link>
      </div>
    </article>
  );
}
