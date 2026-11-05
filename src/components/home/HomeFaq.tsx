import { FaqList } from "@/components/faq/FaqList";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeFaq() {
  return (
    <section id="sss" className="border-t border-navy/10 bg-paper py-16 sm:py-24">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
          Sıkça sorulan sorular
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-[-0.04em] text-navy sm:text-5xl">
          Tokat tüp siparişi hakkında
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
          Tokat Merkez&apos;de Hürgaz ev, piknik ve sanayi tüpü siparişi, servis
          bölgesi ve fiyat bilgisi için gelen sorular.
        </p>
        <div className="mt-10">
          <FaqList headingLevel="h3" />
        </div>
        <Button href="/sss" variant="line" className="mt-8">
          Sıkça sorulan sorular sayfası
        </Button>
      </Container>
    </section>
  );
}
