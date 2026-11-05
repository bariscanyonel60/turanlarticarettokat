import { faqs, type Faq } from "@/data/faqs";

export function FaqList({
  items = faqs,
  headingLevel,
}: {
  items?: readonly Faq[];
  headingLevel: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item) => (
        <article key={item.id} id={item.id} className="scroll-mt-28 py-8">
          <Heading className="font-display text-2xl tracking-[-0.03em] text-navy sm:text-3xl">
            <a href={`#${item.id}`} className="hover:underline">
              {item.question}
            </a>
          </Heading>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink-soft">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
