import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-cream" aria-labelledby="hero-title">
      <Container className="pt-10 pb-6 sm:pt-14 sm:pb-8">
        <h1
          id="hero-title"
          className="font-display text-4xl tracking-[-0.05em] text-navy sm:text-6xl"
        >
          Tokat Tüp
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
          Tokat tüp için Turanlar Ticaret, 1977&apos;den bugüne Tokat Merkez&apos;de
          hizmet verir. Ev, piknik, sanayi ve ticari tüplerde sipariş WhatsApp
          üzerinden, servis talebi telefonla alınır.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={generalWhatsappUrl()} variant="whatsapp" className="w-full sm:w-auto">
            <MessageCircle className="size-4" aria-hidden />
            WhatsApp&apos;tan Sipariş Ver
          </Button>
          <Button href="#urunler" variant="line" className="w-full sm:w-auto">
            Tüp çeşitlerini gör
          </Button>
        </div>
      </Container>
      <div className="relative">
        <Image
          src="/images/branding/anasayfa-banner.jpg"
          alt="Tokat Tüp bannerı. Turanlar Ticaret, Tokat Merkez'de Hürgaz tüp hizmeti."
          width={1024}
          height={512}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
        <a
          href={generalWhatsappUrl()}
          aria-label="WhatsApp'tan hemen sipariş ver"
          className="absolute top-[83.9%] left-[4.1%] h-[11.6%] w-[25.4%] rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        />
        <a
          href={`tel:${business.phoneTel}`}
          aria-label={`Telefon: ${business.phoneDisplay}`}
          className="absolute top-[82%] left-[32%] h-[14%] w-[26%] rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        />
      </div>
    </section>
  );
}
