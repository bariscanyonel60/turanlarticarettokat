import { Container } from "@/components/ui/Container";
import { orderSteps } from "@/data/services";
import Link from "next/link";

export function OrderSteps() {
  return (
    <section id="siparis" className="border-t border-navy/10 bg-white py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">Sipariş</p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-4xl">
            Sipariş nasıl verilir?
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">
            Üç kısa adım. Sepet yok; yazışmada stok ve saat konuşulur.
          </p>
        </div>
        <ol className="relative mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div
            className="absolute top-7 right-8 left-8 hidden h-px bg-navy/15 lg:block"
            aria-hidden
          />
          {orderSteps.map((step, index) => (
            <li
              key={step.number}
              className="relative flex gap-4 rounded-2xl border border-navy/10 bg-paper p-5 lg:block lg:p-6"
            >
              <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-navy font-display text-sm text-cream">
                {step.number}
              </span>
              <div className="lg:mt-5">
                <p className="text-xs font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  Adım {index + 1}
                </p>
                <h3 className="mt-1 font-display text-2xl tracking-[-0.03em] text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft sm:text-base">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-base leading-7 text-ink-soft">
          Tüp çeşitlerine{" "}
          <Link href="/urunler" className="font-semibold text-navy underline">
            ürün sayfasından
          </Link>{" "}
          bakabilirsiniz. WhatsApp yazışmasından sonra{" "}
          <Link href="/tesekkurler" className="font-semibold text-navy underline">
            teşekkür sayfası
          </Link>{" "}
          açılır; sipariş orada tamamlanmış olmaz, yazışmada netleşir.
        </p>
      </Container>
    </section>
  );
}
