import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { aboutCopy } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsappUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Tokat Tüp Hakkımızda",
  description:
    "Tokat Tüp için Turanlar Ticaret. 1977'den bugüne Tokat Merkez'de güvenli, samimi ve dürüst bir alışverişle Hürgaz tüp hizmeti.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="grid items-start gap-10 lg:grid-cols-12">
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-navy p-8 text-cream lg:col-span-5 lg:min-h-[36rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
            {business.area}
          </p>
          <p className="mt-8 font-display text-5xl leading-none tracking-[-0.06em] text-cream sm:text-6xl">
            1977&apos;den
            <br />
            bugüne
          </p>
          <p className="absolute right-8 bottom-8 left-8 text-sm leading-6 text-mist">
            {business.brandSold} ürünleri · {business.area}
          </p>
        </div>
        <div className="lg:col-span-7">
          <Breadcrumbs
            items={[
              { name: "Tokat Tüp", path: "/" },
              { name: "Kurumsal", path: "/kurumsal" },
              { name: "Hakkımızda", path: "/hakkimizda" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl tracking-[-0.045em] text-navy sm:text-5xl">
            {aboutCopy.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink">{aboutCopy.lead}</p>
          <div className="mt-6 space-y-4 text-base leading-7 text-ink-soft">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={generalWhatsappUrl()} variant="whatsapp">
              WhatsApp&apos;tan Yaz
            </Button>
            <Button href="/iletisim" variant="line">
              İletişim Bilgileri
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
