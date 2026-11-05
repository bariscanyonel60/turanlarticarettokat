"use client";

import { useMenu } from "@/components/layout/Providers";
import { business } from "@/data/business";
import { generalWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export function MobileOrderBar() {
  const { open } = useMenu();
  if (open) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-navy/10 bg-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${business.phoneTel}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white text-sm font-semibold text-navy"
        >
          <Phone className="size-4" aria-hidden />
          Ara
        </a>
        <a
          href={generalWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-whatsapp text-sm font-semibold text-white"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
