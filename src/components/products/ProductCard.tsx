import { ProductVisual } from "@/components/products/ProductVisual";
import { Button } from "@/components/ui/Button";
import { getCategory } from "@/data/products";
import { cn } from "@/lib/cn";
import { productWhatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categoryId);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-[0_24px_50px_-36px_rgba(12,35,72,0.65)] transition duration-300 motion-safe:hover:-translate-y-1 hover:border-navy/30">
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden",
          product.image.kind === "photo"
            ? "bg-white"
            : "bg-[radial-gradient(circle_at_50%_18%,#ffffff,transparent_42%),linear-gradient(180deg,#f3f4f6_0%,#ffffff_100%)]",
        )}
      >
        <ProductVisual
          image={product.image}
          className={cn(
            "h-full w-full object-contain transition duration-500 motion-safe:group-hover:scale-105",
            product.image.kind === "illustration" && "p-6",
          )}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            {category.name}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-[-0.04em] text-navy">
            <Link href={`/urunler/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{product.summary}</p>
        </div>
        <dl className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex items-baseline justify-between gap-4 border-t border-navy/10 pt-3">
            <dt className="text-ink-soft">Kullanım</dt>
            <dd className="text-right font-medium text-ink">{product.usage}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-ink-soft">
              {product.categoryId === "kamp-ekipman" ? "Model" : "Kapasite"}
            </dt>
            <dd className="text-right font-medium text-ink">
              {product.capacity ??
                (product.categoryId === "kamp-ekipman" ? "Stokta netleşir" : "Siparişte netleşir")}
            </dd>
          </div>
        </dl>
        {product.image.kind === "photo" && product.image.credit ? (
          <p className="text-[0.7rem] leading-4 text-ink-soft">{product.image.credit}</p>
        ) : null}
        <Button
          href={productWhatsappUrl(product.name)}
          variant="whatsapp"
          className={cn("mt-auto w-full")}
        >
          <MessageCircle aria-hidden className="size-4" />
          WhatsApp&apos;tan Sipariş Ver
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          />
        </Button>
      </div>
    </article>
  );
}
