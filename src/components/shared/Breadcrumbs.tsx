import { breadcrumbJsonLd } from "@/lib/seo";
import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ name: string; path: string }>;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(items)) }}
      />
      <nav aria-label="Sayfa yolu">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={`${item.path}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden>/</span> : null}
                {last ? (
                  <span aria-current="page" className="text-navy">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-navy">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
