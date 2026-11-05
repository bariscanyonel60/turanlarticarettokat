import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { posts } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Tokat Tüp Yazıları",
  description:
    "Tokat tüp, güvenlik, ekipman, mangal, ısıtıcı ve kamp ocağı üzerine Turanlar Ticaret yazıları.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Tokat tüp yazıları"
        lede="Tokat Merkez'de tüp, tüp ekipmanı, mangal, soba, ısıtıcı ve kamp ürünü. Güvenlik notları genel bilgidir; model ve fiyat WhatsApp'ta netleşir."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Kurumsal", path: "/kurumsal" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <section className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="rounded-2xl border border-navy/10 bg-paper p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </p>
                  <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-ink-soft">
                    {post.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
