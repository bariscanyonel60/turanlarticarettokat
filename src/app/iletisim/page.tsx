import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { HoursPanel } from "@/components/shared/HoursPanel";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business, fullAddress } from "@/data/business";
import { mapsDirectionsUrl, mapsEmbedUrl, mapsSearchUrl } from "@/lib/maps";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Tokat Tüp Siparişi İletişim",
  description:
    "Tokat Tüp siparişi için Turanlar Ticaret. Bahçelievler, Yazıcıoğlu Caddesi, Tokat Merkez. Telefon 0356 228 52 54, WhatsApp ile tüp siparişi.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Tokat Tüp", path: "/" },
              { name: "İletişim", path: "/iletisim" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl tracking-[-0.045em] text-navy sm:text-6xl">
            Tokat Tüp için bize ulaşın
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            Tokat Tüp siparişi için WhatsApp hattını, servis talebi için sabit telefonu
            kullanın. Adres Tokat Merkez&apos;dedir. Harita, Google&apos;daki işletme
            kaydını gösterir.
          </p>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                İşletme
              </p>
              <p className="mt-2 font-display text-3xl text-navy">{business.name}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Adres
              </p>
              <address className="mt-2 text-base leading-7 text-ink not-italic">
                {fullAddress()}
              </address>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  Telefon
                </p>
                <a href={`tel:${business.phoneTel}`} className="mt-2 block text-lg text-ink">
                  {business.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                  WhatsApp
                </p>
                <a
                  href={generalWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg text-ink"
                >
                  {business.whatsappDisplay}
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Çalışma saatleri
              </p>
              <div className="mt-3 text-base leading-7">
                <HoursPanel />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button href={mapsDirectionsUrl()} variant="navy" className="w-full">
                <MapPin className="size-4" aria-hidden />
                Yol Tarifi Al
              </Button>
              <Button href={`tel:${business.phoneTel}`} variant="line" className="w-full">
                <Phone className="size-4" aria-hidden />
                Telefon Et
              </Button>
              <Button href={generalWhatsappUrl()} variant="whatsapp" className="w-full">
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp&apos;tan Yaz
              </Button>
              <SocialLinks
                className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-base font-semibold"
                linkClassName="text-navy underline"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-mist">
              <iframe
                title="Turanlar Ticaret adresini Google Haritalar'da göster"
                src={mapsEmbedUrl()}
                className="h-[320px] w-full border-0 sm:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              Harita, Google&apos;daki işletme kaydını gösterir.{" "}
              <a
                href={mapsSearchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy underline"
              >
                Google Haritalar&apos;da aç
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
