import { AboutPreview } from "@/components/home/AboutPreview";
import { Reviews } from "@/components/home/Reviews";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeHero } from "@/components/home/HomeHero";
import { OrderSteps } from "@/components/home/OrderSteps";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ServiceBanner } from "@/components/home/ServiceBanner";
import { Services } from "@/components/home/Services";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/data/faqs";
import { getProducts } from "@/lib/catalog";
import { faqJsonLd, productListJsonLd, buildMetadata } from "@/lib/seo";
import { Suspense } from "react";

export const metadata = buildMetadata({
  title: "Tokat Tüp Siparişi ve Servisi | Turanlar Ticaret",
  description:
    "Tokat Bahçelievler'de Turanlar Ticaret. 1977'den beri Hürgaz ev tipi, piknik ve sanayi tüpü. Sipariş WhatsApp'tan, servis telefondan.",
  path: "/",
  absoluteTitle: true,
});

function ProductShowcaseFallback() {
  return (
    <section id="urunler" className="bg-paper py-14 sm:py-20" aria-busy="true">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">Vitrin</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-4xl">
            Vitrindeki ürünler
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">Ürünler yükleniyor.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="aspect-[4/5] animate-pulse rounded-2xl bg-navy/5"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

async function HomeProducts() {
  const products = await getProducts();
  return (
    <>
      <JsonLd data={productListJsonLd(products)} />
      <ProductShowcase products={products} />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <HomeHero />
      <Suspense fallback={<ProductShowcaseFallback />}>
        <HomeProducts />
      </Suspense>
      <Services />
      <ServiceBanner />
      <AboutPreview />
      <OrderSteps />
      <HomeFaq />
      <Reviews />
      <HomeContact />
    </>
  );
}
