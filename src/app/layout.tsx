import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileOrderBar } from "@/components/layout/MobileOrderBar";
import { Providers } from "@/components/layout/Providers";
import { SiteShell } from "@/components/layout/SiteShell";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/shared/JsonLd";
import { business } from "@/data/business";
import { getGalleryImages } from "@/lib/gallery";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Turanlar Ticaret | Tokat Merkez Tüp Hizmeti",
    template: "%s | Turanlar Ticaret",
  },
  description: business.shortDescription,
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: business.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "0KjKlJxfcXll4Mtoke7PRzX_uzPuzyXY3qjttgefing",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0C2348",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

async function HeaderWithGallery() {
  const galleryImages = await getGalleryImages();
  return <Header showGallery={galleryImages.length > 0} />;
}

async function FooterWithGallery() {
  const galleryImages = await getGalleryImages();
  return <Footer showGallery={galleryImages.length > 0} />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${jakarta.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full overflow-x-clip bg-paper text-ink antialiased">
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-xl focus:bg-navy focus:px-4 focus:py-3 focus:text-cream"
        >
          İçeriğe geç
        </a>
        <Providers>
          <SiteShell
            header={
              <Suspense fallback={<Header showGallery={false} />}>
                <HeaderWithGallery />
              </Suspense>
            }
            footer={
              <Suspense fallback={<Footer showGallery={false} />}>
                <FooterWithGallery />
              </Suspense>
            }
            mobile={<MobileOrderBar />}
            whatsapp={<WhatsAppFloat />}
          >
            {children}
          </SiteShell>
        </Providers>
      </body>
    </html>
  );
}
