import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Product } from "@/types/product";

const HOME_PRODUCT_LIMIT = 12;

export function ProductShowcase({ products }: { products: Product[] }) {
  const preview = products.slice(0, HOME_PRODUCT_LIMIT);
  const hasMore = products.length > preview.length;

  return (
    <section id="urunler" className="bg-paper pt-6 pb-16 sm:pt-8 sm:pb-20">
      <Container>
        <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-display text-3xl tracking-[-0.05em] text-navy sm:text-5xl">
            Tokat Tüp
          </h1>
          <p className="max-w-xl text-sm leading-6 text-ink-soft">
            Tokat Tüp siparişi Turanlar Ticaret&apos;ten. 1977&apos;den beri Tokat Merkez&apos;de
            Hürgaz tüp. {products.length} ürün. Fiyat kartta yazar, sipariş WhatsApp ile verilir.
          </p>
        </div>
        <ProductGrid products={preview} />
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
