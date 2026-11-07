import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/ui/Container";
import { posts } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Tokat Tüp Yazıları",
  description:
    "Sipariş, ev tüpü, piknik tüpü, güvenlik ve kamp notları. Turanlar Ticaret, Tokat Merkez.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Yazılar"
        lede="Sipariş, ev tüpü, piknik tüpü ve günlük kullanım notları. Model ve fiyat için WhatsApp'tan yazın."
        crumbs={[
          { name: "Tokat Tüp", path: "/" },
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
