import type { Metadata } from "next";
import { business, businessHours } from "@/data/business";
import type { Product } from "@/types/product";
import { mapsSearchUrl } from "@/lib/maps";
import { getSiteUrl } from "@/lib/site";

type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
  openGraphType?: "website" | "product";
  image?: OgImage;
};

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
  openGraphType = "website",
  image,
}: PageMetaInput): Metadata {
  const url = new URL(path, getSiteUrl()).toString();
  const sharedImage = image ?? {
    url: new URL("/opengraph-image", getSiteUrl()).toString(),
    width: 1200,
    height: 630,
    alt: "Tokat tüp: Turanlar Ticaret vitrininde Hürgaz tüp",
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: noIndex ? undefined : { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      ...(openGraphType === "website" ? { type: "website" as const } : {}),
      locale: "tr_TR",
      url,
      siteName: business.name,
      title,
      description,
      images: [sharedImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: sharedImage.url,
          alt: sharedImage.alt,
          width: sharedImage.width,
          height: sharedImage.height,
        },
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tokat Tüp",
    alternateName: business.name,
    url: getSiteUrl(),
    description: business.shortDescription,
    inLanguage: "tr-TR",
  };
}

export function localBusinessJsonLd() {
  // TODO: koordinatlar doğrulanınca geo ekle.
  const hours = businessHours.openingTime
    ? {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...businessHours.schemaDayOfWeek],
        opens: businessHours.openingTime,
        closes: businessHours.closingTime,
      }
    : null;

  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: business.name,
    alternateName: "Tokat Tüp",
    description: business.shortDescription,
    foundingDate: String(business.foundedYear),
    url: getSiteUrl(),
    sameAs: [business.instagramUrl, business.googleProfileUrl, mapsSearchUrl()],
    telephone: "+90-356-228-52-54",
    ...(hours ? { openingHoursSpecification: hours } : {}),
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

export function productJsonLd(product: Product) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    category: product.usage,
    url: new URL(`/urunler/${product.slug}`, getSiteUrl()).toString(),
  };

  if (product.priceKurus != null) {
    data.offers = {
      "@type": "Offer",
      priceCurrency: "TRY",
      price: (product.priceKurus / 100).toFixed(2),
      url: data.url,
    };
  }

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

export function productListJsonLd(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tokat Tüp ürünleri",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: new URL(`/urunler/${product.slug}`, getSiteUrl()).toString(),
    })),
  };
}
