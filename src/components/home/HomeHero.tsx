import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { cloudinaryDeliveryUrl } from "@/lib/cloudinary";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

const heroImage = {
  src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955057/turanlar-ticaret/products/ev-12kg.jpg",
  alt: "Tokat tüp, Hürgaz 12 kg ev tipi gümüş LPG tüpü",
  width: 1024,
  height: 1024,
} as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-[radial-gradient(circle_at_12%_18%,#ffffff_0%,#eef1f5_55%,#e4e8ee_100%)]">
      <Container className="grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-navy/70 uppercase">
            1977&apos;den Beri Tokat&apos;ta
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[2.35rem] leading-[1.08] tracking-[-0.045em] text-navy sm:text-5xl lg:text-[3.35rem]">
            Tokat Tüp Siparişi ve Servisi
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft sm:text-lg">
            Turanlar Ticaret olarak Tokat Bahçelievler&apos;de evleriniz ve iş yerleriniz için tüp
            satış ve servis hizmeti sunuyoruz. Ev tipi, piknik ve sanayi tüpü çeşitlerimizle
            ihtiyaçlarınıza çözüm sağlıyoruz. Sipariş için WhatsApp&apos;tan yazabilir, servis için
            bizi arayabilirsiniz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={generalWhatsappUrl()} variant="whatsapp" className="w-full sm:w-auto">
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp&apos;tan Sipariş
            </Button>
            <Button
              href={`tel:${business.phoneTel}`}
              variant="line"
              className="w-full border-navy/25 sm:w-auto"
            >
              <Phone className="size-4" aria-hidden />
              Telefonla Servis
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[1.75rem] border border-navy/10 bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#e7eaee_78%)] shadow-[0_28px_60px_-36px_rgba(12,35,72,0.55)] lg:max-w-none">
            <Image
              src={cloudinaryDeliveryUrl(heroImage.src)}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1023px) 90vw, 480px"
              className="h-full w-full object-contain p-8 sm:p-10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
