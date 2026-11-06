import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { business, fullAddress, serviceNeighborhoods, servicePhoto } from "@/data/business";
import { mapsDirectionsUrl, mapsSearchUrl } from "@/lib/maps";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export function ServiceBanner() {
  return (
    <section className="bg-navy py-16 text-cream sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
            Sipariş ve servis
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl">
            Tokat tüp için yazın ya da arayın
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-mist sm:text-lg">
            Siparişi WhatsApp&apos;tan bırakın. Servis için sabit telefonu arayın. Tüpü
            Tokat Merkez&apos;e bırakıyoruz.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={generalWhatsappUrl()} variant="whatsapp" className="w-full sm:w-auto">
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp&apos;tan Sipariş Oluştur
            </Button>
            <Button
              href={`tel:${business.phoneTel}`}
              variant="cream"
              className="w-full sm:w-auto"
            >
              <Phone className="size-4" aria-hidden />
              Telefonla Ara
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          {servicePhoto ? (
            <Image
              src={servicePhoto.src}
              alt={servicePhoto.alt}
              width={servicePhoto.width}
              height={servicePhoto.height}
              className="h-auto w-full rounded-2xl object-cover"
            />
          ) : (
            <div className="flex min-h-72 flex-col justify-between rounded-2xl bg-navy-deep p-7 sm:min-h-80 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                Hizmet bölgesi
              </p>
              <div>
                <p className="font-display text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                  Tokat
                  <br />
                  Merkez
                </p>
                <p className="mt-4 max-w-xs text-base leading-7 text-mist">{fullAddress()}</p>
                {serviceNeighborhoods.length > 0 ? (
                  <p className="mt-3 text-sm leading-6 text-mist">
                    {serviceNeighborhoods.join(", ")}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 text-sm font-semibold">
                <a href={mapsSearchUrl()} className="underline" target="_blank" rel="noopener noreferrer">
                  Haritada aç
                </a>
                <a href={mapsDirectionsUrl()} className="underline" target="_blank" rel="noopener noreferrer">
                  Yol tarifi
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
