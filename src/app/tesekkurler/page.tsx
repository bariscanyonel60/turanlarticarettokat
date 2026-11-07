import { SiteLinks } from "@/components/shared/SiteLinks";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business, hoursLabel } from "@/data/business";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Teşekkürler",
  description:
    "Yazıştığınız için teşekkürler. Sipariş bu sayfada bitmez; stok ve fiyat WhatsApp ya da telefonda konuşulur.",
  path: "/tesekkurler",
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { name: "Tokat Tüp", path: "/" },
          { name: "Teşekkürler", path: "/tesekkurler" },
        ]}
        eyebrow="Tokat Merkez"
        title="Bize ulaştığınız için teşekkürler"
        lede="Mesajınız için teşekkürler. Sipariş burada bitmiş sayılmaz. Stok, fiyat ve bırakma durumunu WhatsApp'ta ya da telefonda konuşuyoruz."
      />
      <section className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={generalWhatsappUrl()} variant="whatsapp">
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp&apos;ı aç
            </Button>
            <Button href={`tel:${business.phoneTel}`} variant="navy">
              <Phone className="size-4" aria-hidden />
              {business.phoneDisplay}
            </Button>
          </div>
          <p className="mt-6 text-base leading-7 text-ink-soft">
            Hizmet bölgesi {business.area}&apos;dir. Açık {hoursLabel()}. Çalışma günleri
            telefonda öğrenilir.
          </p>
          <SiteLinks title="Siparişe devam etmek için" />
        </Container>
      </section>
    </>
  );
}
