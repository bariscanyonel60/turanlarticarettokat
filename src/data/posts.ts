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
      "Turanlar Ticaret 1977'den beri Tokat Merkez'de. Tokat tüp için Hürgaz ev, piknik ve sanayi tüpü satıyoruz.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "1977'den beri Tokat Merkez'deyiz. Dükkân Bahçelievler'de. Tokat tüp deyince kastettiğimiz yer burası.",
      "Hürgaz ev tipi, piknik tipi ve sanayi tipi tüp satıyoruz. Soba, kuzine, semaver, ocak ve bağlantı parçaları da vitrinde. Vitrinde olmayan bir parçayı WhatsApp'tan sorun.",
      "Siteden kartla ödeme yok. Siparişi WhatsApp'tan bırakın, servis için arayın. Fiyat ve stok o gün neyse onu söyleriz.",
    ],
  },
  {
    slug: "whatsapp-ile-tup-siparisi",
    title: "WhatsApp ile tüp siparişi nasıl verilir?",
    description:
      "Tüpü seçin, WhatsApp açılsın. Tokat tüp fiyatı ve Tokat Merkez'e bırakma işi yazışmada netleşir.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "Üç adım. Tüpü seçin. Ürün sayfasındaki bağlantı, adını yazılmış bir mesajla WhatsApp'ı açsın. Sonra stok, fiyat ve adresi konuşalım.",
      "Hazır mesaj bir fiş değil. Ödemeyi siteden almıyoruz. Uygunluk yazışmada ya da 0356 228 52 54'te belli olur.",
      "Telefon servis içindir. WhatsApp sipariş ve ürün sorusu içindir. Sitede üyelik hesabı yok.",
    ],
  },
  {
    slug: "hizmet-bolgesi-tokat-merkez",
    title: "Neden yalnız Tokat Merkez?",
    description:
      "Tokat tüp servisi Tokat Merkez ile sınırlı. İlçe ve şehir dışına düzenli gitmiyoruz.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "Tüpü Tokat Merkez'deki eve ve iş yerine bırakıyoruz. İlçeye ya da şehir dışına düzenli gitmiyoruz. Adresinizi yazın, Merkez'de mi birlikte bakalım.",
      "Ne zaman bırakılacağını da o günkü stok ve sıraya göre söyleriz. Sitede 'şu kadar dakikada gelir' diye bir cümle yok.",
      "Dükkân Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. Harita aynı adresi açar.",
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
