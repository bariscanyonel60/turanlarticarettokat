import { formatPrice, missingPriceLabel } from "@/lib/price";

export function withTokatTup(text: string) {
  const clean = text.trim();
  if (/tokat\s+tüp/i.test(clean)) {
    return clean;
  }
  const next = `Tokat tüp. ${clean}`;
  if (next.length <= 160) {
    return next;
  }
  return clean;
}

export function productPageTitle(name: string) {
  if (/tokat\s+tüp/i.test(name)) {
    return name;
  }
  return `Tokat Tüp: ${name}`;
}

export function buildSeoDescription(name: string, summary: string, priceKurus: number | null) {
  const detail = summary.replace(/\s+/g, " ").trim().replace(/[. ]+$/g, "");
  const priceLine =
    priceKurus == null ? missingPriceLabel() : `Güncel fiyat ${formatPrice(priceKurus)}.`;
  let text = `Tokat tüp: ${name}. ${detail}. ${priceLine}`;
  const extras = [" Sipariş WhatsApp'tan verilir.", " Tokat Merkez servisi."];
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
  return text;
}
