import { SiteLinks } from "@/components/shared/SiteLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Sayfa bulunamadı",
    description:
      "Aradığınız Tokat tüp sayfası bulunamadı. Turanlar Ticaret ürün, servis, sıkça sorulan sorular ve iletişim sayfalarına dönebilirsiniz.",
    path: "/",
    noIndex: true,
  }),
  alternates: undefined,
};

export default function NotFound() {
  return (
    <Container className="py-16 sm:py-24">
      <nav aria-label="Sayfa yolu">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
          <li>
            <Link href="/" className="hover:text-navy">
              Ana Sayfa
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <span aria-current="page" className="text-navy">
              Sayfa bulunamadı
            </span>
          </li>
        </ol>
      </nav>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-navy">404</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-[-0.04em] text-navy sm:text-6xl">
        Sayfa bulunamadı
      </h1>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={generalWhatsappUrl()} variant="whatsapp">
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp&apos;tan Sipariş Ver
        </Button>
        <Button href={`tel:${business.phoneTel}`} variant="navy">
          <Phone className="size-4" aria-hidden />
          {business.phoneDisplay}
        </Button>
      </div>
      <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft">
        Aradığınız adres taşınmış veya hiç açılmamış olabilir. Tokat Merkez tüp
        çeşitleri, servis ve iletişim sayfaları aşağıda.
      </p>
      <SiteLinks />
    </Container>
  );
}
