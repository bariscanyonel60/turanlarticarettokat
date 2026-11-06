import { ProductBrowser } from "@/components/products/ProductBrowser";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { getProducts } from "@/lib/catalog";
import { buildMetadata, productListJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tokat Tüp ve Kamp Ürünleri",
  description:
    "Tokat tüp vitrini: Hürgaz ev, piknik ve sanayi tüpü, soba ve ocak. Fiyat kartta yazar, sipariş WhatsApp'tan.",
  path: "/urunler",
});

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <JsonLd data={productListJsonLd(products)} />
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
            Ev tüpü, piknik tüpü, sanayi tüpü, soba ve ocak. Fiyatı kartta görürsünüz.
            Siparişi WhatsApp&apos;tan bırakın, servis için arayın.
          </p>
        </Container>
      </section>
      <section className="bg-paper py-10 sm:py-14">
        <Container>
          <ProductBrowser products={products} />
        </Container>
      </section>
    </>
  );
}
