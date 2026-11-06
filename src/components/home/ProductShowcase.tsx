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
    <section id="urunler" className="bg-paper pt-6 pb-16 sm:pt-8 sm:pb-20">
      <Container>
        <h1 className="font-display text-3xl tracking-[-0.05em] text-navy sm:text-5xl">
          Tokat Tüp Siparişi
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-7 text-ink">
          Tokat tüp için Bahçelievler&apos;deki dükkândan yazın. Evde kullanılan 2 kg ve 12 kg
          Hürgaz tüp, piknik tüpü ve iş yerleri için 24 kg sanayi tüpü var. Sipariş
          WhatsApp&apos;tan, servis için telefondan.
        </p>
        <h2 className="mt-10 font-display text-2xl tracking-[-0.04em] text-navy sm:text-3xl">
          Vitrindeki ürünler
        </h2>
        <div className="mt-5">
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
