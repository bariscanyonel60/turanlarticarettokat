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
    <section id="hizmetler" className="bg-cream py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-navy uppercase">
            Hizmetlerimiz
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-navy sm:text-4xl">
            Tokat Tüp Hizmetleri
          </h2>
          <p className="mt-3 text-base leading-7 text-ink-soft">
            Ev ve iş yeri için tüp satıyoruz. Siparişi WhatsApp&apos;tan bırakabilir, servis için
            bizi arayabilirsiniz. Bırakma yalnızca Tokat Merkez içindir.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcon(service.id);
            return (
              <li
                key={service.id}
                className="flex h-full flex-col rounded-2xl border border-navy/10 bg-paper p-5 shadow-[0_16px_40px_-32px_rgba(12,35,72,0.55)] sm:p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-navy text-cream">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl tracking-[-0.03em] text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{service.summary}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
