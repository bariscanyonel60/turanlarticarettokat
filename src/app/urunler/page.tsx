import { ProductBrowser } from "@/components/products/ProductBrowser";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { categories, products } from "@/data/products";
import { buildMetadata, productListJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tokat Tüp ve Kamp Ürünleri",
  description:
    "Tokat Merkez'de Hürgaz tüp, tüp ekipmanı, mangal, soba, ısıtıcı, kamp ürünü ve barbekü aksesuarı. Fiyat Turanlar Ticaret WhatsApp hattında netleşir.",
  path: "/urunler",
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productListJsonLd()} />
      <section className="border-b border-navy/10 bg-cream">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Ana Sayfa", path: "/" },
              { name: "Ürünlerimiz", path: "/urunler" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-display text-4xl tracking-[-0.045em] text-navy sm:text-6xl">
            Tüp, ekipman ve kamp ürünleri
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            Eviniz ve kampınız için tüp, ekipman, mangal, soba, ısıtıcı ve barbekü
            aksesuarı. Tokat Merkez siparişi WhatsApp ile verilir. Ekipman
            görselleri ürün grubunu tanıtır; stoktaki model ayrıca sorulur.
          </p>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          <ProductBrowser products={products} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <li key={category.id} className="rounded-2xl border border-navy/10 p-5">
                <h2 className="font-display text-xl text-navy">{category.name}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{category.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
