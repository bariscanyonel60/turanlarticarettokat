import { business } from "@/data/business";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <div className="fixed right-6 bottom-6 z-30 hidden flex-col gap-3 md:flex">
      <a
        href={`tel:${business.phoneTel}`}
        aria-label={`Telefon: ${business.phoneDisplay}`}
        className="flex size-14 items-center justify-center rounded-full bg-navy text-white shadow-[0_16px_40px_-18px_rgba(12,35,72,0.9)] transition-transform motion-safe:hover:-translate-y-0.5"
      >
        <Phone className="size-6" aria-hidden />
      </a>
      <a
        href={generalWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan sipariş ver"
        className="flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_16px_40px_-18px_rgba(15,92,58,0.9)] transition-transform motion-safe:hover:-translate-y-0.5"
      >
        <MessageCircle className="size-6" aria-hidden />
      </a>
    </div>
  );
}
