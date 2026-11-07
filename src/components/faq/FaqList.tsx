import { faqs, type Faq } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export function FaqList({
  items = faqs,
  headingLevel,
  initiallyOpen = 1,
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
          className="group scroll-mt-28 py-3 sm:py-4"
          open={index < initiallyOpen}
        >
          <summary className="flex cursor-pointer list-none items-start gap-3 py-2 marker:content-none [&::-webkit-details-marker]:hidden">
            <Heading className="flex-1 font-display text-xl tracking-[-0.03em] text-navy sm:text-2xl">
              {item.question}
            </Heading>
            <ChevronDown
              aria-hidden
              className="mt-1 size-5 shrink-0 text-navy transition-transform group-open:rotate-180"
            />
          </summary>
          <p className="mt-3 max-w-3xl pb-2 text-base leading-7 text-ink">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
