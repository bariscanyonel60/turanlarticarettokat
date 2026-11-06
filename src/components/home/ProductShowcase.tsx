import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { compareShowcase } from "@/data/showcase";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";
import { MessageCircle, Phone } from "lucide-react";

const HOME_PRODUCT_LIMIT = 8;

export function ProductShowcase({ products }: { products: Product[] }) {
  const ordered = [...products].sort(compareShowcase);
  const preview = ordered.slice(0, HOME_PRODUCT_LIMIT);
  const hasMore = products.length > preview.length;

  return (
    <section id="urunler" className="bg-paper pt-6 pb-16 sm:pt-8 sm:pb-20">
      <Container>
        <h1 className="font-display text-3xl tracking-[-0.05em] text-navy sm:text-5xl">
          Tokat Tüp
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-7 text-ink">
          Tokat Merkez&apos;e tüp siparişi ve servis.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href={generalWhatsappUrl()} variant="whatsapp">
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp ile sipariş
          </Button>
          <Button href={`tel:${business.phoneTel}`} variant="line">
            <Phone className="size-4" aria-hidden />
            Telefonla ara
          </Button>
        </div>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink">
          1977&apos;den beri Tokat Merkez&apos;de Hürgaz tüp. Vitrinde {products.length} ürün.
          Fiyat kartta yazar, sipariş WhatsApp ile verilir.
        </p>
        <h2 className="mt-10 font-display text-2xl tracking-[-0.04em] text-navy sm:text-3xl">
          Vitrindeki ürünler
        </h2>
        <div className="mt-5">
          <ProductGrid products={preview} priorityFirst />
        </div>
        {hasMore ? (
          <div className="mt-8 flex justify-center">
            <Button href="/urunler" variant="line">
              Tüm ürünleri gör
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
