import { Logo } from "@/components/brand/Logo";
import { MediaCredit } from "@/components/shared/MediaCredit";
import { Container } from "@/components/ui/Container";
import { business, hoursLabel } from "@/data/business";
import { corporateLinks, legalLinks, navItems } from "@/data/navigation";
import { showcaseGroups } from "@/data/showcase";
import { mapsSearchUrl } from "@/lib/maps";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { cacheLife } from "next/cache";
import Link from "next/link";
import type { ReactNode } from "react";

const pageLinks = [
  ...navItems.filter((item) => item.href !== "/kurumsal"),
  ...corporateLinks.filter(
    (item) => item.href === "/hakkimizda" || item.href === "/blog" || item.href === "/sss",
  ),
];

const { street, line, district, city, postalCode } = business.address;

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <Container className="py-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Turanlar Ticaret ana sayfa"
              className="inline-flex rounded-2xl bg-cream px-3 py-2"
            >
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-mist">
              1977&apos;den beri Tokat Merkez&apos;de Hürgaz tüp. Sipariş WhatsApp&apos;tan, servis
              telefondan.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">Açık {hoursLabel()}</p>
            <p className="mt-1 text-sm text-mist">Açık günler telefonda öğrenilir.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`tel:${business.phoneTel}`}
                className="inline-flex min-h-10 items-center rounded-lg bg-white px-3 text-sm font-semibold text-navy"
              >
                Ara {business.phoneDisplay}
              </a>
              <a
                href={generalWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-lg bg-whatsapp px-3 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn title="Sayfalar">
              {pageLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>
            <FooterColumn title="Vitrin">
              {showcaseGroups.map((group) => (
                <li key={group.id}>
                  <Link href={`/urunler#grup-${group.id}`} className="hover:text-white">
                    {group.name}
                  </Link>
                </li>
              ))}
            </FooterColumn>
            <div>
              <p className="border-b border-white/15 pb-2 text-xs font-semibold tracking-[0.14em] text-white/60">
                İletişim
              </p>
              <address className="mt-3 space-y-1 text-sm leading-6 not-italic text-cream/90">
                <p>{street}</p>
                <p>{line}</p>
                <p>
                  {district} / {city}, {postalCode}
                </p>
              </address>
              <ul className="mt-3 space-y-2 text-sm text-cream/90">
                <li>
                  <a href={`tel:${business.phoneTel}`} className="hover:text-white">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={generalWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp {business.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a href={mapsSearchUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Haritada aç
                  </a>
                </li>
                <li className="flex gap-4 pt-1">
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href={business.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Copyright />
          <nav aria-label="Yasal sayfalar">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-mist">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MediaCredit tone="onNavy" />
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="border-b border-white/15 pb-2 text-xs font-semibold tracking-[0.14em] text-white/60">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-cream/90">{children}</ul>
    </div>
  );
}

async function Copyright() {
  "use cache";
  cacheLife("weeks");
  const year = new Date().getFullYear();
  return <p className="text-sm text-mist">© {year} — Turanlar Ticaret. Tüm hakları saklıdır.</p>;
}
