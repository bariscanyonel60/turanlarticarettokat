import { FaqList } from "@/components/faq/FaqList";
import { PageHeader } from "@/components/shared/PageHeader";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/data/faqs";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { generalWhatsappUrl } from "@/lib/whatsapp";

const title = "Tokat Tüp Sıkça Sorulan Sorular";
const description =
  "Sipariş, eve bırakma, Hürgaz tüp ve fiyat hakkında kısa cevaplar. Turanlar Ticaret, Tokat Merkez.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/sss",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader
        crumbs={[
          { name: "Tokat Tüp", path: "/" },
          { name: "Sıkça Sorulan Sorular", path: "/sss" },
        ]}
        eyebrow="Tokat Tüp"
        title="Sıkça sorulan sorular"
        lede="Sipariş, eve bırakma ve fiyat için en çok gelen sorular. Aradığınız burada yoksa arayın, bakalım."
      />
      <section className="py-14 sm:py-20" aria-label="Sorular ve cevaplar">
        <Container>
          <FaqList headingLevel="h2" />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={generalWhatsappUrl()} variant="whatsapp">
              WhatsApp&apos;tan fiyat ve sipariş sor
            </Button>
            <Button href="/urunler" variant="line">
              Tüp çeşitlerini incele
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
