import { guidePosts } from "@/data/blog-guides";
import { outdoorPosts } from "@/data/blog-outdoor";

export type PostSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type PostLink = {
  href: string;
  label: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  paragraphs?: readonly string[];
  sections?: readonly PostSection[];
  links?: readonly PostLink[];
};

export const posts: readonly Post[] = [
  ...outdoorPosts,
  ...guidePosts,
  {
    slug: "1977den-bugune-tokat-merkez",
    title: "1977'den bugüne Tokat Merkez",
    description:
      "Turanlar Ticaret, 1977'den bu yana Tokat Merkez'de güvenli, samimi ve dürüst bir alışverişle tüp hizmeti verir.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "Turanlar Ticaret, 1977'den bugüne Tokat Merkez'de hizmet verir. Yıllar içinde değişen tek şey tüp ihtiyacının kendisi olmadı; alışverişin güvenli, samimi ve dürüst kalması da aynı çizgide tutuldu.",
      "İşletme, Hürgaz ev tipi, piknik tipi ve sanayi tipi tüplerin satışını Tokat Merkez ile sınırlı bir alanda yapar. Soba, kuzine, semaver, ocak ve bağlantı parçaları da vitrindedir. Vitrinde olmayan bir parça WhatsApp'tan sorulur.",
      "Sitede sepet ve online ödeme yoktur. Sipariş WhatsApp üzerinden, servis talebi sabit telefon üzerinden alınır. Fiyat, stok ve servis uygunluğu her talepte ayrıca konuşulur.",
    ],
  },
  {
    slug: "whatsapp-ile-tup-siparisi",
    title: "WhatsApp ile tüp siparişi nasıl verilir?",
    description:
      "Turanlar Ticaret'te tüp seçilir, WhatsApp hazır mesajla açılır; fiyat ve servis Tokat Merkez için yazışmada netleşir.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "Sipariş üç adımdan oluşur. Önce tüp çeşidi seçilir. Sonra ürün sayfasındaki bağlantı, ürün adını içeren bir mesajla WhatsApp'ı açar. Ardından stok, fiyat ve Tokat Merkez servis durumu birlikte netleştirilir.",
      "Hazır mesaj bir sipariş fişi değildir. Online tahsilat yapılmaz. Uygunluk, yazışmada veya 0356 228 52 54 hattından konuşularak belli olur.",
      "Sabit telefon servis talebi içindir. WhatsApp hattı sipariş ve ürün bilgisi içindir. İki kanal da yalnızca Turanlar Ticaret'e ulaşır; sitede üyelik hesabı açılmaz.",
    ],
  },
  {
    slug: "hizmet-bolgesi-tokat-merkez",
    title: "Hizmet bölgesi neden yalnızca Tokat Merkez?",
    description:
      "Turanlar Ticaret tüp satışı ve servis talebini Tokat Merkez ile sınırlar. İlçe ve il dışı hizmet vaadi verilmez.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "Turanlar Ticaret'in hizmet bölgesi Tokat Merkez'dir. İlçelere veya Tokat dışına düzenli hizmet verildiği söylenmez. Sipariş yazılırken adresin Merkez sınırında olup olmadığı birlikte kontrol edilir.",
      "Bu sınır, yanlış teslim beklentisini baştan kapatmak içindir. Uygunluk her talepte ayrıca değerlendirilir; sitede süre veya ücretsiz servis sözü yer almaz.",
      "Adres: Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C, Merkez / Tokat. Harita, bu adresin aramasını açar.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

/** Yayınlanmayan taslaklar. Blog listesine ve site haritasına eklenmez. */
export const draftPosts: readonly Post[] = [
  {
    slug: "12-kg-tup-ne-kadar-gider",
    title: "12 kg tüp ne kadar gider",
    description: "Taslak. Tüketim süresi eve göre değişir; bu yazı henüz yayınlanmadı.",
    date: "2026-11-06",
    dateLabel: "Taslak",
  },
  {
    slug: "tup-degisiminde-guvenlik-kontrolu",
    title: "Tüp değişiminde güvenlik kontrolü",
    description: "Taslak. Hortum, regülatör ve bağlantı kontrolü henüz yayınlanmadı.",
    date: "2026-11-06",
    dateLabel: "Taslak",
  },
  {
    slug: "tup-kacagi-nasil-anlasilir",
    title: "Tüp kaçağı nasıl anlaşılır",
    description: "Taslak. Kaçak belirtileri henüz yayınlanmadı.",
    date: "2026-11-06",
    dateLabel: "Taslak",
  },
  {
    slug: "kis-oncesi-soba-ve-tup-hazirligi",
    title: "Kış öncesi soba ve tüp hazırlığı",
    description: "Taslak. Kış hazırlığı notları henüz yayınlanmadı.",
    date: "2026-11-06",
    dateLabel: "Taslak",
  },
];
