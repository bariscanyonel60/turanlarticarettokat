import { Container } from "@/components/ui/Container";
import { services, type ServiceId } from "@/data/services";
import { Factory, House, MessageCircle, MapPinned } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

export function Services() {
  return (
    <section id="hizmetler" className="bg-cream py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
            Hizmetlerimiz
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-5xl">
            Tokat Tüp Hizmetleri
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Tüpü Tokat Merkez&apos;e bırakıyoruz. Sipariş WhatsApp&apos;tan, servis telefondan.
          </p>
        </div>
        <ol className="mt-12 divide-y divide-navy/10 border-y border-navy/10">
          {services.map((service, index) => {
            const Icon = serviceIcon(service.id);
            return (
              <li
                key={service.id}
                className="grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm tracking-[0.16em] text-navy">
                    0{index + 1}
                  </span>
                  <span className="grid size-11 place-items-center rounded-xl bg-paper text-navy">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-[-0.03em] text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft sm:text-base">
                    {service.summary}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
