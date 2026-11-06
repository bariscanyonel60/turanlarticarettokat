import { formatPrice } from "@/lib/price";

export function buildSeoDescription(name: string, summary: string, priceKurus: number | null) {
  const detail = summary.replace(/\s+/g, " ").trim();
  const sentence = detail.endsWith(".") ? detail : `${detail}.`;
  const priceLine =
    priceKurus == null
      ? "Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler."
      : `Fiyatı ${formatPrice(priceKurus)}. Sipariş WhatsApp ile verilir.`;
  return `Tokat Tüp. Tokat Merkez'de ${name}. ${sentence} ${priceLine}`;
}
