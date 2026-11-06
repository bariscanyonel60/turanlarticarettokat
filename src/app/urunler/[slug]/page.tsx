import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductVisual } from "@/components/products/ProductVisual";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SiteLinks } from "@/components/shared/SiteLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { getCategory } from "@/data/products";
import { getProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/price";
import { buildMetadata, productJsonLd } from "@/lib/seo";
import { productWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return { title: "Ürün bulunamadı" };
  }

  return buildMetadata({
    title: `${product.name} — Tokat Tüp`,
    description: product.seoDescription,
    path: `/urunler/${product.slug}`,
  });
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense
      fallback={
        <section className="bg-paper">
          <Container className="py-16">
            <p className="text-sm text-ink-soft">Ürün yükleniyor.</p>
          </Container>
        </section>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: ProductPageProps) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    notFound();
  }

  const category = getCategory(product.categoryId);
  const schema = productJsonLd(product);
  const others = products.filter((item) => item.slug !== product.slug);
  const photos =
    product.image.kind === "photo" ? [product.image, ...(product.gallery ?? [])] : null;

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <section className="bg-paper">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs
            items={[
              { name: "Tokat Tüp", path: "/" },
              { name: "Ürünlerimiz", path: "/urunler" },
              { name: product.name, path: `/urunler/${product.slug}` },
            ]}
          />
          <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
            <div className="overflow-hidden rounded-[1.6rem] border border-navy/10 bg-[radial-gradient(circle_at_50%_42%,#ffffff_0%,#f3f4f6_74%)] shadow-[0_30px_70px_-46px_rgba(12,35,72,0.8)]">
              {photos ? (
                <ProductGallery photos={photos} />
              ) : (
                <ProductVisual
                  image={product.image}
                  priority
                  className="h-auto w-full object-contain p-8"
                />
              )}
            </div>
            <div className="rounded-[1.6rem] border border-navy/10 bg-white p-6 shadow-[0_24px_50px_-40px_rgba(12,35,72,0.7)] sm:p-8 lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy">
                {category.name}
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-[-0.045em] text-navy sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-7 text-ink-soft">{product.summary}</p>
              <p className="mt-6 font-display text-4xl tracking-[-0.045em] text-navy">
                {product.priceKurus == null ? "Fiyat için sorun" : formatPrice(product.priceKurus)}
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                  <dt className="text-ink-soft">Kullanım</dt>
                  <dd className="font-semibold text-ink">{product.usage}</dd>
                </div>
                {product.capacity ? (
                  <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                    <dt className="text-ink-soft">Kapasite</dt>
                    <dd className="font-semibold text-ink">{product.capacity}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                  <dt className="text-ink-soft">Bölge</dt>
                  <dd className="font-semibold text-ink">{business.area}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                <Button href={productWhatsappUrl(product.name)} variant="whatsapp" className="w-full">
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp&apos;tan sipariş ver
                </Button>
                <Button href={`tel:${business.phoneTel}`} variant="line" className="w-full">
                  <Phone className="size-4" aria-hidden />
                  Telefonla ara
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-14">
        <Container>
          <h2 className="font-display text-3xl tracking-[-0.04em] text-navy">
            Vitrindeki diğer ürünler
          </h2>
          <div className="mt-6">
            <ProductGrid products={others.slice(0, 4)} />
          </div>
          <SiteLinks />
        </Container>
      </section>
    </>
  );
}
