import { Container } from "@/components/ui/Container";

export function LegalBody({
  sections,
}: {
  sections: ReadonlyArray<{ title: string; paragraphs: readonly string[] }>;
}) {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl tracking-[-0.04em] text-navy">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-ink-soft">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </section>
  );
}
