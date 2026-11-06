import { PageHeader } from "@/components/shared/PageHeader";
import { SiteLinks } from "@/components/shared/SiteLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { getPost, posts } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Yazı bulunamadı" };
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: PostPageProps) {
  return (
    <Suspense
      fallback={
        <section className="bg-paper">
          <Container className="py-16">
            <p className="text-sm text-ink-soft">Yazı yükleniyor.</p>
          </Container>
        </section>
      }
    >
      <BlogPostContent params={params} />
    </Suspense>
  );
}

async function BlogPostContent({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  const url = new URL(`/blog/${post.slug}`, getSiteUrl()).toString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: business.name },
    publisher: { "@type": "Organization", name: business.name },
    mainEntityOfPage: url,
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHeader
        eyebrow="Blog"
        title={post.title}
        lede={post.description}
        crumbs={[
          { name: "Tokat Tüp", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm text-ink-soft">
            <time dateTime={post.date}>{post.dateLabel}</time>
            <span aria-hidden> · </span>
            {business.name}
          </p>
          <div className="mt-8 space-y-10 text-base leading-8 text-ink-soft">
            {post.sections?.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl tracking-[-0.03em] text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
            {post.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {post.links ? (
            <nav aria-label="Yazıdaki sayfalar" className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                Yazıdaki sayfalar
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.links.map((link) => (
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
          ) : null}
          <SiteLinks />
        </Container>
      </article>
    </>
  );
}
