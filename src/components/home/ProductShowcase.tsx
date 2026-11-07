import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { compareShowcase } from "@/data/showcase";
import type { Product } from "@/types/product";

const HOME_PRODUCT_LIMIT = 8;

export function ProductShowcase({ products }: { products: Product[] }) {
  const ordered = [...products].sort(compareShowcase);
  const preview = ordered.slice(0, HOME_PRODUCT_LIMIT);
  const hasMore = products.length > preview.length;

  return (
    <section id="urunler" className="bg-paper py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">Vitrin</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-4xl">
            Vitrindeki ürünler
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">
            Ev tipi, piknik ve sanayi tüpü ile günlük kullanım ürünleri. Fiyatı olanlarda rakam
            görünür; yoksa iletişime geçmeniz yeterlidir.
          </p>
        </div>
        <div className="mt-8">
          <ProductGrid products={preview} priorityFirst />
        </div>
        {hasMore ? (
          <div className="mt-8 flex justify-center">
            <Button href="/urunler" variant="line">
              Tüm ürünleri gör
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
