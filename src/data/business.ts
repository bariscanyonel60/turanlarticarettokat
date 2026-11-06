export const business = {
  name: "Turanlar Ticaret",
  brandSold: "Hürgaz",
  area: "Tokat Merkez",
  /** İşletmenin bildirdiği hizmete başlama yılı. */
  foundedYear: 1977,
  shortDescription:
    "Tokat Merkez'de Tokat Tüp hizmeti veren yerel işletme. Hürgaz tüp çeşitlerinin satışını yapar. Sipariş WhatsApp üzerinden, servis talebi telefonla alınır.",
  address: {
    street: "Bahçelievler Mahallesi, Yazıcıoğlu Caddesi",
    line: "3. Geçit No: 47/C",
    district: "Merkez",
    city: "Tokat",
    postalCode: "60000",
    country: "TR",
  },
  phoneDisplay: "0356 228 52 54",
  phoneTel: "+903562285254",
  whatsappDisplay: "+90 555 860 63 69",
  whatsappE164: "905558606369",
  instagramUrl: "https://www.instagram.com/turanlar8852/",
  /** İşletmenin paylaştığı Google kaydı. Adres ve telefon sitedeki bilgilerle aynı. */
  googleProfileUrl: "https://share.google/b9QIsuO7bDHTReIRW",
  /** Bu kaydın Google Haritalar kimliği. */
  googleMapsCid: "2294887463116232504",
} as const;

/**
 * TODO: tam çalışma saatleri.
 * Açılış saati ve çalışma günleri doğrulanmadan doldurulmamalıdır.
 * Kapanış saati işletme tarafından 22:00 olarak paylaşılmıştır.
 */
export const businessHours: {
  closingTime: string;
  openingTime: string | null;
  workingDays: string | null;
} = {
  closingTime: "22:00",
  openingTime: null,
  workingDays: null,
};

/**
 * TODO: gerçek dükkân fotoğrafı ekle.
 * Boşken sayfa, dükkân varmış gibi bir fotoğraf üretmez.
 */
export const shopPhoto: {
  src: string;
  alt: string;
  width: number;
  height: number;
} | null = null;

/**
 * TODO: mahalle listesi doğrulanınca hizmet bölgesine ekle.
 * Şu an yalnızca Tokat Merkez biliniyor.
 */
export const serviceNeighborhoods: string[] = [];

/**
 * Gerçek servis aracı fotoğrafı eklendiğinde doldurun.
 * Boşken sayfa, işletmeye ait araç varmış gibi bir görsel üretmez.
 */
export const servicePhoto: {
  src: string;
  alt: string;
  width: number;
  height: number;
} | null = null;

export function fullAddress() {
  const { street, line, district, city, postalCode } = business.address;
  return `${street}, ${line}, ${district} / ${city}, ${postalCode}`;
}
