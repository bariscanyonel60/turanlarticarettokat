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
    "Turanlar Ticaret kurumsal sayfaları: hakkımızda, blog, sıkça sorulan sorular, KVKK, gizlilik ve çerez politikası. Hizmet Tokat Merkez'dedir.",
  path: "/kurumsal",
});

const principles = [
  {
    title: "Güvenli",
    text: "Sipariş ve servis konuşması açık kanallardan yürür. Stok, fiyat ve servis uygunluğu her talepte ayrıca netleşir.",
  },
  {
    title: "Samimi",
    text: "Tokat Merkez'de yıllardır aynı işletmeyle, doğrudan telefon ve WhatsApp üzerinden konuşulur.",
  },
  {
    title: "Dürüst",
    text: "Sitede doğrulanmamış süre, ücretsiz servis veya yetki iddiası yer almaz. Hizmet bölgesi Tokat Merkez'dir.",
  },
] as const;

export default function CorporatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Kurumsal"
        title="1977'den bugüne Tokat Merkez"
        lede="Turanlar Ticaret, 1977'den bugüne Tokat Merkez'de hizmet verir. Yıllar boyu güvenli, samimi ve dürüst bir alışveriş gerçekleştirir."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Kurumsal", path: "/kurumsal" },
        ]}
      />
      <section className="py-14 sm:py-20">
        <Container>
          <p className="font-display text-7xl tracking-[-0.06em] text-navy sm:text-8xl">
            {business.foundedYear}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
            {business.name}, {business.area} sınırında {business.brandSold} tüp
            çeşitlerinin satışını yapar. Sipariş WhatsApp, servis talebi sabit
            telefon üzerinden alınır.
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
