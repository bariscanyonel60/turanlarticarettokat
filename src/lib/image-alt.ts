const keyword = /tokat\s+tüp/i;

/** Görseli anlatan alt metne, içinde yoksa "Tokat tüp" ifadesini ekler. */
export function imageAlt(description: string): string {
  const text = description.trim();
  if (text.length === 0) {
    return "";
  }
  if (keyword.test(text)) {
    return text;
  }
  return `Tokat tüp, ${text}`;
}
