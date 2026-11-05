import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  crumbs,
  eyebrow,
  title,
  lede,
}: {
  crumbs: Array<{ name: string; path: string }>;
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-navy/10 bg-cream">
      <Container className="py-12 sm:py-16">
        <Breadcrumbs items={crumbs} />
        {eyebrow ? (
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-navy">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-[-0.045em] text-navy sm:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">{lede}</p>
        ) : null}
      </Container>
    </section>
  );
}
