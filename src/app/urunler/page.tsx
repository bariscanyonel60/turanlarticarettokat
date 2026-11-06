import { ProductBrowser } from "@/components/products/ProductBrowser";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { getProducts } from "@/lib/catalog";
import { buildMetadata, productListJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tokat Tüp ve Kamp Ürünleri",
  description:
    "Tokat Tüp ve kamp ürünleri. Tokat Merkez'de Hürgaz tüp, Gönen soba, Kouns kuzine, Özenler semaver, FEMAS ocak, Orgaz kamp ocağı, regülatör ve dedantör. Fiyat ürün kartında, sipariş WhatsApp ile.",
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
            Tokat Tüp vitrini: fotoğrafı olan tüp, soba, kuzine, semaver, ocak ve
            bağlantı parçaları. Tokat Merkez siparişi WhatsApp ile verilir. Fiyat
            ürün kartında yazar.
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
