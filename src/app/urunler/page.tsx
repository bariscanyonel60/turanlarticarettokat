import { ProductBrowser } from "@/components/products/ProductBrowser";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { getProducts } from "@/lib/catalog";
import { buildMetadata, productListJsonLd } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = buildMetadata({
  title: "Tokat Tüp ve Kamp Ürünleri",
  description:
    "Hürgaz ev tipi, piknik ve sanayi tüpü, soba ve ocak. Sipariş WhatsApp'tan. Turanlar Ticaret, Tokat Merkez.",
  path: "/urunler",
});

async function ProductsContent() {
  const products = await getProducts();
  return (
    <>
      <JsonLd data={productListJsonLd(products)} />
      <section className="bg-paper py-10 sm:py-14">
        <Container>
          <ProductBrowser products={products} />
        </Container>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Tokat Tüp", path: "/" },
              { name: "Ürünlerimiz", path: "/urunler" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-display text-4xl tracking-[-0.045em] text-navy sm:text-6xl">
            Tokat Tüp Ürünleri
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            Ev tipi, piknik ve sanayi tüpü ile soba ve ocak. Fiyatı olan ürünlerde rakam görünür;
            yoksa iletişime geçmeniz yeterlidir. Sipariş WhatsApp&apos;tan, servis telefondan.
          </p>
        </Container>
      </section>
      <Suspense
        fallback={
          <section className="bg-paper py-10 sm:py-14" aria-busy="true">
            <Container>
              <p className="text-sm text-ink-soft">Ürünler yükleniyor.</p>
            </Container>
          </section>
        }
      >
        <ProductsContent />
      </Suspense>
    </>
  );
}
