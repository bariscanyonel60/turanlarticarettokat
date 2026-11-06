import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { aboutBanner } from "@/data/business";
import { aboutCopy } from "@/data/services";
import { cloudinaryDeliveryUrl } from "@/lib/cloudinary";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Tokat Tüp Hakkımızda",
  description:
    "Tokat tüp için Turanlar Ticaret. 1977'den beri Bahçelievler'de Hürgaz tüp satıyoruz. Sipariş WhatsApp'tan, servis telefondan.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
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
        <Image
          src={cloudinaryDeliveryUrl(aboutBanner.src)}
          alt={aboutBanner.alt}
          width={aboutBanner.width}
          height={aboutBanner.height}
          priority
          className="mt-8 h-auto w-full rounded-2xl"
        />
        <p className="mt-8 max-w-3xl text-lg leading-8 text-ink">{aboutCopy.lead}</p>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-ink-soft">
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
      </Container>
    </section>
  );
}
