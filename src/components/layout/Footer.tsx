import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { MediaCredit } from "@/components/shared/MediaCredit";
import { Container } from "@/components/ui/Container";
import { business, businessHours, fullAddress } from "@/data/business";
import { corporateLinks, legalLinks, navItems } from "@/data/navigation";
import { products } from "@/data/products";
import { mapsSearchUrl } from "@/lib/maps";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { cacheLife } from "next/cache";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <Container className="flex flex-col gap-5 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[-0.03em] sm:text-3xl">
            Tokat Merkez için bize ulaşın
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-mist">
            Sipariş WhatsApp hattından, servis talebi telefondan alınır. Kapanış{" "}
            {businessHours.closingTime}. Açılış saati ve çalışma günleri telefonda öğrenilir.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href={`tel:${business.phoneTel}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-5 text-base font-semibold text-navy"
          >
            Ara {business.phoneDisplay}
          </a>
          <a
            href={generalWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-whatsapp px-5 text-base font-semibold text-white"
          >
            WhatsApp sipariş
          </a>
        </div>
      </Container>
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-3">
          <Link href="/" aria-label="Turanlar Ticaret ana sayfa" className="inline-flex rounded-2xl bg-cream px-4 py-3">
            <Logo className="h-12 max-w-[15rem] sm:h-14" />
          </Link>
          <p className="mt-5 max-w-sm text-base leading-7 text-mist">
            {business.foundedYear}&apos;den bugüne {business.shortDescription}
          </p>
          <p className="mt-4 text-sm text-mist">Kapanış: {businessHours.closingTime}</p>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">
            Sayfalar
          </p>
          <ul className="mt-4 space-y-3 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-mist">
            Kurumsal
          </p>
          <ul className="mt-4 space-y-3 text-base font-medium">
            {corporateLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">
            Tüp çeşitleri
          </p>
          <ul className="mt-4 space-y-3 text-base font-medium">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/urunler/${product.slug}`} className="hover:text-white">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">
            İletişim
          </p>
          <address className="mt-4 space-y-3 text-base font-medium not-italic leading-7">
            <p>{fullAddress()}</p>
            <p>
              <a href={`tel:${business.phoneTel}`} className="hover:text-white">
                {business.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={generalWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp {business.whatsappDisplay}
              </a>
            </p>
            <p>
              <a
                href={mapsSearchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Google Haritalar&apos;da aç
              </a>
            </p>
            <SocialLinks className="space-y-3" linkClassName="hover:text-white" />
          </address>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-5 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <Copyright />
          <nav aria-label="Yasal sayfalar">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <div className="border-t border-white/15 bg-navy-deep">
        <Container className="flex justify-center py-5">
          <MediaCredit tone="onNavy" />
        </Container>
      </div>
    </footer>
  );
}

async function Copyright() {
  "use cache";
  cacheLife("weeks");
  const year = new Date().getFullYear();
  return (
    <p>
      © {year} — Turanlar Ticaret. Tüm hakları saklıdır.
    </p>
  );
}
