import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { getGalleryImages } from "@/lib/gallery";
import { cloudinaryDeliveryUrl } from "@/lib/cloudinary";
import { buildMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import Image from "next/image";
import { Suspense } from "react";

export const metadata = buildMetadata({
  title: "Tokat Merkez Galeri",
  description: "Turanlar Ticaret'in Tokat Merkez'de paylaştığı görseller.",
  path: "/galeri",
});

export default function GalleryPage() {
  return (
    <section className="bg-paper py-10 sm:py-14">
      <Container>
        <Breadcrumbs
          items={[
            { name: "Tokat Tüp", path: "/" },
            { name: "Galeri", path: "/galeri" },
          ]}
        />
        <h1 className="mt-6 font-display text-4xl tracking-[-0.045em] text-navy sm:text-6xl">
          Tokat Merkez Galeri
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
          Turanlar Ticaret&apos;in Tokat Merkez&apos;de paylaştığı görseller.
        </p>
        <Suspense fallback={<p className="mt-10 text-sm text-ink-soft">Galeri yükleniyor.</p>}>
          <GalleryImages />
        </Suspense>
      </Container>
    </section>
  );
}

async function GalleryImages() {
  const images = await getGalleryImages();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Tokat Tüp galeri",
    url: new URL("/galeri", getSiteUrl()).toString(),
    image: images.map((image) => image.src),
  };

  if (images.length === 0) {
    return <p className="mt-10 text-sm text-ink-soft">Galeride henüz görsel yok.</p>;
  }

  return (
    <>
      <JsonLd data={schema} />
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <li key={image.id} className="overflow-hidden rounded-2xl bg-white">
            <Image
              src={cloudinaryDeliveryUrl(image.src)}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 280px"
              className="aspect-square w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
