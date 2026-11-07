import { HoursPanel } from "@/components/shared/HoursPanel";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business, fullAddress } from "@/data/business";
import { mapsSearchUrl } from "@/lib/maps";
import { generalWhatsappUrl } from "@/lib/whatsapp";

export function HomeContact() {
  return (
    <section id="iletisim" className="border-t border-navy/10 bg-cream py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
            İletişim
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-5xl">
            Bize ulaşın
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">
            Sipariş için WhatsApp, servis için telefon. Dükkân Bahçelievler&apos;de;
            harita da aynı adresi gösterir.
          </p>
        </div>
        <div className="grid gap-8 rounded-3xl border border-navy/10 bg-paper p-6 sm:p-8 lg:col-span-7">
          <address className="text-base leading-7 text-ink not-italic">{fullAddress()}</address>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                Telefon
              </p>
              <a href={`tel:${business.phoneTel}`} className="mt-2 block text-lg font-semibold text-navy">
                {business.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                WhatsApp
              </p>
              <a
                href={generalWhatsappUrl()}
                className="mt-2 block text-lg font-semibold text-navy"
              >
                {business.whatsappDisplay}
              </a>
            </div>
          </div>
          <HoursPanel />
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/iletisim" variant="navy">
              İletişim sayfası
            </Button>
            <Button href={mapsSearchUrl()} variant="line">
              Haritada aç
            </Button>
          </div>
          <SocialLinks
            className="flex flex-wrap gap-x-5 gap-y-2 text-base font-semibold"
            linkClassName="text-navy underline"
          />
        </div>
      </Container>
    </section>
  );
}
