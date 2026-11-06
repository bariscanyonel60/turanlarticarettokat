import { Container } from "@/components/ui/Container";
import { orderSteps } from "@/data/services";
import Link from "next/link";

export function OrderSteps() {
  return (
    <section id="siparis" className="border-t border-navy/10 bg-white py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
            Sipariş
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-5xl">
            Sipariş Nasıl Verilir?
          </h2>
        </div>
        <div className="relative mt-12">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-navy/15 lg:block"
            aria-hidden
          />
          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {orderSteps.map((step) => (
              <li key={step.number} className="relative lg:pl-0">
                <span className="relative z-10 grid size-12 place-items-center rounded-full bg-navy font-display text-sm text-cream">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-[-0.03em] text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft sm:text-base">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-10 max-w-2xl text-base leading-7 text-ink-soft">
          Tüp çeşitlerine{" "}
          <Link href="/urunler" className="font-semibold text-navy underline">
            ürün sayfasından
          </Link>{" "}
          bakın. Yazışma bitince{" "}
          <Link href="/tesekkurler" className="font-semibold text-navy underline">
            teşekkür sayfası
          </Link>{" "}
          açılır; sipariş orada tamamlanmış sayılmaz.
        </p>
      </Container>
    </section>
  );
}
