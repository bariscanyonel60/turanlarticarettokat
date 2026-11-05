import type { Metadata } from "next";
import { business } from "@/data/business";
import { products } from "@/data/products";
import { mapsSearchUrl } from "@/lib/maps";
import { getSiteUrl } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = new URL(path, getSiteUrl()).toString();
  const image = {
    url: new URL("/opengraph-image", getSiteUrl()).toString(),
    width: 1200,
    height: 630,
    alt: "Turanlar Ticaret, Tokat Merkez'de Hürgaz tüp hizmeti",
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: noIndex ? undefined : { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      siteName: business.name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.shortDescription,
    foundingDate: String(business.foundedYear),
    url: getSiteUrl(),
    sameAs: [business.instagramUrl, business.googleProfileUrl, mapsSearchUrl()],
    telephone: business.phoneTel,
    image: new URL("/opengraph-image", getSiteUrl()).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}, ${business.address.line}`,
      addressLocality: business.address.city,
      addressRegion: business.address.city,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: business.area,
    },
    brand: {
      "@type": "Brand",
      name: business.brandSold,
    },
    hasMap: mapsSearchUrl(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.phoneTel,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
      {
        "@type": "ContactPoint",
        telephone: `+${business.whatsappE164}`,
        contactType: "sales",
        areaServed: "TR",
        availableLanguage: "Turkish",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, getSiteUrl()).toString(),
    })),
  };
}

export function productJsonLd(slug: string) {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return null;
  }

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    category: product.usage,
    url: new URL(`/urunler/${product.slug}`, getSiteUrl()).toString(),
  };

  switch (product.categoryId) {
    case "ev-tipi":
    case "piknik":
    case "sanayi":
    case "ticari":
    case "diger":
      data.brand = {
        "@type": "Brand",
        name: business.brandSold,
      };
      break;
    case "kamp-ekipman":
      break;
    default: {
      const exhaustive: never = product.categoryId;
      return exhaustive;
    }
  }

  if (product.image.kind === "photo") {
    const photos = [product.image, ...(product.gallery ?? [])];
    data.image = photos.map((photo) => new URL(photo.src, getSiteUrl()).toString());
  }

  return data;
}

export function faqJsonLd(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Turanlar Ticaret ürünleri",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: new URL(`/urunler/${product.slug}`, getSiteUrl()).toString(),
    })),
  };
}
