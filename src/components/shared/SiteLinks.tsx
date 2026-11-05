import Link from "next/link";

const links = [
  { href: "/urunler", label: "Tüp çeşitleri" },
  { href: "/hizmetlerimiz", label: "Tokat Merkez servisi" },
  { href: "/sss", label: "Sıkça sorulan sorular" },
  { href: "/iletisim", label: "İletişim ve adres" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/gizlilik-politikasi", label: "Gizlilik politikası" },
] as const;

export function SiteLinks({ title = "İlgili sayfalar" }: { title?: string }) {
  return (
    <nav aria-label={title} className="mt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">{title}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full border border-navy/15 px-4 text-sm font-semibold text-navy hover:bg-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
