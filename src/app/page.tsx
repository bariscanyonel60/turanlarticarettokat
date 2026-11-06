import { AboutPreview } from "@/components/home/AboutPreview";
import { Reviews } from "@/components/home/Reviews";
import { HomeContact } from "@/components/home/HomeContact";
import { HomeFaq } from "@/components/home/HomeFaq";
import { OrderSteps } from "@/components/home/OrderSteps";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { ServiceBanner } from "@/components/home/ServiceBanner";
import { Services } from "@/components/home/Services";
import { JsonLd } from "@/components/shared/JsonLd";
import { faqs } from "@/data/faqs";
import { getProducts } from "@/lib/catalog";
import { faqJsonLd, productListJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tokat Tüp Siparişi | Turanlar Ticaret Tokat Merkez",
  description:
    "Tokat tüp siparişi Bahçelievler'deki Turanlar Ticaret'ten. 1977'den beri Hürgaz ev, piknik ve sanayi tüpü. WhatsApp'tan yazın, servis için arayın.",
  path: "/",
  absoluteTitle: true,
});

export default async function HomePage() {
  const products = await getProducts();
  return (
    <>
      <JsonLd data={productListJsonLd(products)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <ProductShowcase products={products} />
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
