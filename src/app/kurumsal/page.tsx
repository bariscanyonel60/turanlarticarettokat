import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { corporateLinks } from "@/data/navigation";
import { buildMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Kurumsal",
  description:
    "Turanlar Ticaret kurumsal sayfası. Hakkımızda, sipariş ve iletişim. Hizmet Tokat Merkez'de.",
  path: "/kurumsal",
});

const principles = [
  {
    title: "Sipariş",
    text: "Tüpü seçip WhatsApp'tan yazmanız yeterli. Fiyat ve stok o günkü duruma göre söylenir.",
  },
  {
    title: "Servis",
    text: "Tüpü Tokat Merkez'deki eve ya da iş yerine bırakıyoruz. Servis için sabit telefonu arayın.",
  },
  {
    title: "Saat",
    text: "Dükkân haftanın her günü 07:30 ile 22:00 arasında açık.",
  },
] as const;

export default function CorporatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Kurumsal"
        title="1977'den bugüne Tokat Merkez"
        lede="1977'den beri Tokat Merkez'deyiz. Tüp, soba ve bağlantı parçası için Bahçelievler'deki dükkâna yazmanız ya da aramanız yeterli."
        crumbs={[
          { name: "Tokat Tüp", path: "/" },
          { name: "Kurumsal", path: "/kurumsal" },
        ]}
      />
      <section className="py-14 sm:py-20">
        <Container>
          <p className="font-display text-7xl tracking-[-0.06em] text-navy sm:text-8xl">
            {business.foundedYear}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
            {business.name}, {business.area}&apos;de {business.brandSold} tüp satar. Sipariş
            için WhatsApp, servis için telefon yeterlidir. İlçe ve şehir dışına düzenli
            çıkmıyoruz.
          </p>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <li key={item.title} className="rounded-2xl border border-navy/10 bg-paper p-6">
                <h2 className="font-display text-2xl tracking-[-0.04em] text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
            {corporateLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span>
                    <span className="block font-display text-2xl tracking-[-0.04em] text-navy">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">{item.description}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-5 shrink-0 text-navy transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
