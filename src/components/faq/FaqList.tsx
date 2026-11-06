import { faqs, type Faq } from "@/data/faqs";

export function FaqList({
  items = faqs,
  headingLevel,
  initiallyOpen = 3,
}: {
  items?: readonly Faq[];
  headingLevel: "h2" | "h3";
  initiallyOpen?: number;
}) {
  const Heading = headingLevel;

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, index) => (
        <details
          key={item.id}
          id={item.id}
          className="group scroll-mt-28 py-4"
          open={index < initiallyOpen}
        >
          <summary className="cursor-pointer list-none py-2 marker:content-none [&::-webkit-details-marker]:hidden">
            <Heading className="font-display text-2xl tracking-[-0.03em] text-navy sm:text-3xl">
              {item.question}
            </Heading>
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
