export function formatPrice(kurus: number) {
  const lira = kurus / 100;
  const hasKurus = kurus % 100 !== 0;
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: hasKurus ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(lira);
}

/** Fiyat yoksa kullanıcıya gösterilen kısa ifade. Sahte fiyat üretilmez. */
export function missingPriceLabel() {
  return "Fiyat için iletişime geçin";
}

export function priceInputValue(kurus: number | null | undefined) {
  if (kurus == null) {
    return "";
  }
  const lira = kurus / 100;
  return Number.isInteger(lira) ? String(lira) : lira.toFixed(2).replace(".", ",");
}

export function parsePriceInput(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  if (!/^\d{1,7}([.,]\d{1,2})?$/.test(trimmed)) {
    throw new Error("Fiyatı 1250 veya 1250,50 biçiminde yazın. Binlik ayırıcı kullanmayın.");
  }
  const kurus = Math.round(Number(trimmed.replace(",", ".")) * 100);
  if (!Number.isSafeInteger(kurus) || kurus < 0) {
    throw new Error("Fiyat geçersiz.");
  }
  return kurus;
}
