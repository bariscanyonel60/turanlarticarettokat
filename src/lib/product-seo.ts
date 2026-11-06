import { formatPrice } from "@/lib/price";

export function productPageTitle(name: string) {
  return `${name} Tokat`;
}

export function buildSeoDescription(name: string, summary: string, priceKurus: number | null) {
  const detail = summary.replace(/\s+/g, " ").trim().replace(/[. ]+$/g, "");
  const priceLine =
    priceKurus == null
      ? "Güncel fiyatı WhatsApp veya telefondan sorun."
      : `Güncel fiyat ${formatPrice(priceKurus)}.`;
  let text = `Tokat Merkez'de ${name}. ${detail}. ${priceLine}`;
  const extras = [" Fiyat kartta yazar.", " Sipariş WhatsApp ile verilir."];
  for (const extra of extras) {
    if (text.length >= 140) {
      break;
    }
    const next = `${text.replace(/[. ]+$/g, "")}.${extra}`;
    if (next.length <= 160) {
      text = next;
    }
  }
  if (text.length > 160) {
    const clipped = text.slice(0, 157).replace(/\s+\S*$/, "").replace(/[.,;: ]+$/g, "");
    text = `${clipped}.`;
  }
  if (text.length < 140) {
    const next = `${text.replace(/[. ]+$/g, "")}. Tokat Merkez servisi.`;
    if (next.length <= 160) {
      text = next;
    }
  }
  return text;
}
