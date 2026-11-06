import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services, type ServiceId } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { Factory, House, MapPinned, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = buildMetadata({
  title: "Tokat Tüp Hizmetleri",
  description:
    "Tokat tüp hizmeti: ev tüpü, iş yerine tüp ve Tokat Merkez'e servis. Sipariş WhatsApp'tan, Turanlar Ticaret.",
  path: "/hizmetlerimiz",
});

function serviceIcon(id: ServiceId): LucideIcon {
  switch (id) {
    case "ev":
      return House;
    case "isletme":
      return Factory;
    case "servis":
      return MapPinned;
    case "whatsapp":
      return MessageCircle;
    default: {
      const exhaustive: never = id;
      return exhaustive;
    }
  }
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-cream">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Tokat Tüp", path: "/" },
              { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-display text-4xl tracking-[-0.045em] text-navy sm:text-6xl">
            Tokat Tüp Hizmetleri
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
            Ev tüpü, iş yeri tüpü ve Tokat Merkez&apos;e servis. Ne zaman bırakılacağını
            siparişte konuşuruz. İlçe ve şehir dışına düzenli gitmiyoruz.
          </p>
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container className="grid gap-6">
          {services.map((service) => {
            const Icon = serviceIcon(service.id);
            return (
              <article
                key={service.id}
                className="grid gap-5 rounded-2xl border border-navy/10 bg-paper p-6 sm:grid-cols-[auto_1fr] sm:p-8"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-mist text-navy">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-2xl tracking-[-0.03em] text-navy sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-ink-soft">
                    {service.detail}
                  </p>
                </div>
              </article>
            );
          })}
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button href={generalWhatsappUrl()} variant="whatsapp">
              WhatsApp&apos;tan Sipariş Ver
            </Button>
            <Button href="/sss" variant="line">
              Sıkça sorulan sorular
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
