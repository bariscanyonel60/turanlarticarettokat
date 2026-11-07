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
      "Turanlar Ticaret 1977'den beri Tokat Merkez'de. Ev, piknik ve sanayi tipi Hürgaz tüp satıyoruz.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "1977'den beri Tokat Merkez'deyiz. Dükkân Bahçelievler'de. Tüp için arayan çoğu kişi bizi buradan buluyor.",
      "Hürgaz ev tipi, piknik tipi ve sanayi tipi tüp satıyoruz. Soba, kuzine, semaver, ocak ve bağlantı parçaları da vitrinde. Aradığınız vitrinde yoksa WhatsApp'tan sorun, bakalım.",
      "Siteden kartla ödeme almıyoruz. Siparişi WhatsApp'tan bırakın, servis için arayın. Fiyat ve stok o günkü duruma göre söylenir.",
    ],
  },
  {
    slug: "whatsapp-ile-tup-siparisi",
    title: "WhatsApp ile tüp siparişi nasıl verilir?",
    description:
      "Tüpü seçin, WhatsApp açılsın. Fiyat ve Tokat Merkez'e bırakma yazışmada konuşulur.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "Önce tüpü seçin. Ürün sayfasındaki bağlantı, ürün adını yazılmış bir mesajla WhatsApp'ı açar. Sonra stok, fiyat ve adresi konuşuruz.",
      "Hazır mesaj ödeme fişi değildir. Ödemeyi siteden almıyoruz. Uygunluk yazışmada ya da 0356 228 52 54'te belli olur.",
      "Telefon daha çok servis içindir. WhatsApp sipariş ve ürün sorusu için. Sitede üyelik hesabı yoktur.",
    ],
  },
  {
    slug: "hizmet-bolgesi-tokat-merkez",
    title: "Neden yalnız Tokat Merkez?",
    description:
      "Servisimiz Tokat Merkez ile sınırlı. İlçe ve şehir dışına düzenli çıkmıyoruz.",
    date: "2026-11-05",
    dateLabel: "5 Kasım 2026",
    paragraphs: [
      "Tüpü Tokat Merkez'deki eve ve iş yerine bırakıyoruz. İlçeye ya da şehir dışına düzenli çıkmıyoruz. Adresinizi yazın, Merkez içinde mi birlikte bakalım.",
      "Bırakma saati o günkü stok ve sıraya göre değişir. Bu yüzden sitede sabit bir süre yazmıyoruz; saati yazışmada konuşuyoruz.",
      "Dükkân Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. Harita aynı adresi gösterir.",
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
