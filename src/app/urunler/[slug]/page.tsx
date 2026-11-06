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
import { cloudinaryDeliveryUrl } from "@/lib/cloudinary";
import { getProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/price";
import { buildMetadata, faqJsonLd, productJsonLd } from "@/lib/seo";
import { productPageTitle } from "@/lib/product-seo";
import { productWhatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";
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

  const photo = product.image.kind === "photo" ? product.image : null;

  return buildMetadata({
    title: productPageTitle(product.name),
    description: product.seoDescription,
    path: `/urunler/${product.slug}`,
    openGraphType: "product",
    image: photo
      ? {
          url: cloudinaryDeliveryUrl(photo.src),
          width: photo.width,
          height: photo.height,
          alt: photo.alt,
        }
      : undefined,
  });
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={null}>
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
  const others = products.filter((item) => item.slug !== product.slug);
  return <ProductView product={product} others={others.slice(0, 4)} />;
}

function ProductView({ product, others }: { product: Product; others: Product[] }) {
  const category = getCategory(product.categoryId);
  const photos =
    product.image.kind === "photo" ? [product.image, ...(product.gallery ?? [])] : null;
  const faqs = product.faq ?? [];

  return (
    <>
      <meta property="og:type" content="product" />
      <JsonLd data={productJsonLd(product)} />
      {faqs.length > 0 ? <JsonLd data={faqJsonLd(faqs)} /> : null}
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
                  sizes="(min-width: 1024px) 55vw, 100vw"
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
              <p className="mt-4 text-base leading-7 text-ink">{product.summary}</p>
              <div className="mt-6">
                {product.priceKurus == null ? (
                  <p className="text-sm font-medium text-[#3d4a5c]">Fiyat için sorun</p>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-ink">Güncel fiyat</p>
                    <p className="mt-1 font-display text-4xl tracking-[-0.045em] text-navy">
                      {formatPrice(product.priceKurus)}
                    </p>
                    {product.priceUpdatedAt ? (
                      <p className="mt-2 text-sm text-ink">
                        Güncelleme: <time dateTime={product.priceUpdatedAt}>{product.priceUpdatedAt}</time>
                      </p>
                    ) : null}
                    {product.priceNote ? (
                      <p className="mt-2 text-sm leading-6 text-ink">{product.priceNote}</p>
                    ) : null}
                  </>
                )}
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                  <dt className="text-ink">Kullanım</dt>
                  <dd className="font-semibold text-ink">{product.usage}</dd>
                </div>
                {product.capacity ? (
                  <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                    <dt className="text-ink">Kapasite</dt>
                    <dd className="font-semibold text-ink">{product.capacity}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                  <dt className="text-ink">Bölge</dt>
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
      {product.longDescription ? (
        <section className="bg-white py-14">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-navy">Bu ürün hakkında</h2>
            {product.longDescription.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mt-4 text-base leading-7 text-ink">
                {paragraph}
              </p>
            ))}
            {product.features && product.features.length > 0 ? (
              <>
                <h2 className="mt-10 font-display text-3xl tracking-[-0.04em] text-navy">Özellikler</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-ink">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </Container>
        </section>
      ) : null}
      {faqs.length > 0 ? (
        <section className="bg-paper py-14">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-navy">Kısa sorular</h2>
            <div className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
              {faqs.map((item) => (
                <details key={item.question} className="py-4" open>
                  <summary className="cursor-pointer text-lg font-semibold text-navy">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-base leading-7 text-ink">{item.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <section className="bg-white py-14">
        <Container>
          <h2 className="font-display text-3xl tracking-[-0.04em] text-navy">
            Vitrindeki diğer ürünler
          </h2>
          <div className="mt-6">
            <ProductGrid products={others} />
          </div>
          <SiteLinks />
        </Container>
      </section>
    </>
  );
}
