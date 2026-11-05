import { ProductVisual } from "@/components/products/ProductVisual";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SiteLinks } from "@/components/shared/SiteLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { getCategory, getProductBySlug, products } from "@/data/products";
import { buildMetadata, productJsonLd } from "@/lib/seo";
import { productWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Ürün bulunamadı" };
  }

  return buildMetadata({
    title: `${product.name} — Tokat`,
    description: product.seoDescription,
    path: `/urunler/${product.slug}`,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const category = getCategory(product.categoryId);
  const schema = productJsonLd(product.slug);
  const others = products.filter((item) => item.slug !== product.slug);
  const photos =
    product.image.kind === "photo" ? [product.image, ...(product.gallery ?? [])] : null;

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <section className="border-b border-navy/10 bg-cream">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Ana Sayfa", path: "/" },
              { name: "Ürünlerimiz", path: "/urunler" },
              { name: product.name, path: `/urunler/${product.slug}` },
            ]}
          />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            {photos ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {photos.map((photo, index) => (
                  <div key={photo.src} className="overflow-hidden rounded-2xl bg-white">
                    <ProductVisual
                      image={photo}
                      priority={index === 0}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#f3f4f6,#ffffff)]">
                <ProductVisual
                  image={product.image}
                  priority
                  className="h-auto w-full object-contain p-6"
                />
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
                {category.name}
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-[-0.045em] text-navy sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 text-base leading-7 text-ink-soft sm:text-lg">
                {product.summary} {category.description}
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                  <dt className="text-ink-soft">Kullanım alanı</dt>
                  <dd className="font-medium text-ink">{product.usage}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                  <dt className="text-ink-soft">
                    {product.categoryId === "kamp-ekipman" ? "Model" : "Kapasite"}
                  </dt>
                  <dd className="text-right font-medium text-ink">
                    {product.capacity ??
                      (product.categoryId === "kamp-ekipman"
                        ? "Stokta netleşir"
                        : "WhatsApp siparişinde netleşir")}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-navy/10 pt-3">
                  <dt className="text-ink-soft">Hizmet bölgesi</dt>
                  <dd className="font-medium text-ink">{business.area}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={productWhatsappUrl(product.name)}
                  variant="whatsapp"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp&apos;tan Sipariş Ver
                </Button>
                <Button
                  href={`tel:${business.phoneTel}`}
                  variant="line"
                  className="w-full sm:w-auto"
                >
                  <Phone className="size-4" aria-hidden />
                  Telefonla Ara
                </Button>
              </div>
            </div>
          </div>
          {product.image.kind === "photo" && product.image.credit ? (
            <p className="mt-4 max-w-3xl text-sm leading-6 text-ink-soft">{product.image.credit}</p>
          ) : null}
        </Container>
      </section>
      <section className="py-14">
        <Container>
          <h2 className="font-display text-3xl tracking-[-0.04em] text-navy">
            Diğer ürünler
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/urunler/${item.slug}`}
                  className="flex min-h-14 items-center justify-between rounded-2xl border border-navy/10 px-5 hover:border-navy/30"
                >
                  <span className="font-medium text-navy">{item.name}</span>
                  <span className="text-sm text-ink-soft">{item.usage}</span>
                </Link>
              </li>
            ))}
          </ul>
          <SiteLinks />
        </Container>
      </section>
    </>
  );
}
