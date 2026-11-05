import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";

export function ProductShowcase() {
  return (
    <section id="urunler" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
              Ürünlerimiz
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-5xl">
              Tüp, mangal ve kamp ürünleri
            </h2>
          </div>
          <p className="text-base leading-7 text-ink-soft lg:col-span-5">
            Tüp çeşitlerinin yanında tüp ekipmanı, mangal, soba, ısıtıcı, kamp
            ürünü ve barbekü aksesuarı da bulunur.
          </p>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-ink-soft">
            2 kg ve 12 kg ev tüpleri, piknik tüpü ve 24 kg sanayi tüpü fotoğrafları
            ürüne aittir. Mangal, soba, ısıtıcı, kamp ve ekipman görselleri ürün
            grubunu tanıtır; stoktaki model WhatsApp'ta sorulur. Fiyat sitede yazılmaz.
          </p>
          <Button href="/urunler" variant="line" className="shrink-0">
            Ürün sayfası
          </Button>
        </div>
      </Container>
    </section>
  );
}
