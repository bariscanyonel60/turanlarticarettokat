import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { shopPhoto } from "@/data/business";
import { aboutCopy } from "@/data/services";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section id="hakkimizda" className="bg-paper py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-12">
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-navy text-cream lg:col-span-5 lg:min-h-[28rem]">
          {shopPhoto ? (
            <Image
              src={shopPhoto.src}
              alt={shopPhoto.alt}
              width={shopPhoto.width}
              height={shopPhoto.height}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full min-h-80 flex-col justify-between p-8 lg:min-h-[28rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                Tokat Merkez
              </p>
              <p className="font-display text-7xl leading-none tracking-[-0.06em] sm:text-8xl">
                1977
              </p>
              <p className="max-w-xs text-base leading-7 text-mist">
                1977&apos;den beri aynı mahalledeyiz.
              </p>
            </div>
          )}
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
            Hakkımızda
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-5xl">
            {aboutCopy.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-ink-soft">{aboutCopy.lead}</p>
          <p className="mt-4 text-base leading-7 text-ink-soft">{aboutCopy.paragraphs[0]}</p>
          <Button href="/hakkimizda" variant="navy" className="mt-8">
            Hakkımızda
          </Button>
        </div>
      </Container>
    </section>
  );
}
