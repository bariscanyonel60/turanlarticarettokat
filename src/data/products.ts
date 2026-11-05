import type { Product, ProductCategory } from "@/types/product";

/**
 * Kapasite yalnızca işletmenin verdiği fotoğraf veya net bilgiyle doldurulur.
 * 2 kg ev tipi tüp: gümüş Hürgaz etiketi bütan ve propan için 2,0 kg dolum yazar.
 * 12 kg ev tüpü: işletmenin verdiği Hürgaz fotoğrafları ve kilogram bilgisi.
 * Piknik tüpü: işletmenin verdiği mavi tüp fotoğrafı. Kilogram ayrıca belirtilmedi.
 * 24 kg sanayi tüpü: işletmenin verdiği Hürgaz fotoğrafı ve kilogram bilgisi.
 * Diğer çeşitlerin kilogramı hâlâ boştur.
 */
export const categories: ProductCategory[] = [
  {
    id: "ev-tipi",
    name: "Ev Tipi Tüpler",
    description: "Evlerde mutfak ve günlük kullanım için tercih edilen tüpler.",
  },
  {
    id: "piknik",
    name: "Piknik Tüpleri",
    description: "Kamp, piknik ve taşınabilir kullanım ihtiyaçları.",
  },
  {
    id: "sanayi",
    name: "Sanayi Tipi Tüpler",
    description: "İşletmeler ve uygun endüstriyel kullanım alanları.",
  },
  {
    id: "ticari",
    name: "Ticari Kullanım Tüpleri",
    description: "Restoran, kafe ve ticari mutfak ihtiyaçları.",
  },
  {
    id: "diger",
    name: "Diğer Tüp Çeşitleri",
    description: "İşletmenin stok ve ürün kataloğunda bulunan diğer seçenekler.",
  },
  {
    id: "kamp-ekipman",
    name: "Kamp ve Ekipman",
    description:
      "Tüp ekipmanı, mangal, soba, ısıtıcı, kamp ürünü ve barbekü aksesuarı. Model stokta netleşir.",
  },
];

export const products: Product[] = [
  {
    slug: "ev-tipi-tup",
    name: "2 kg Ev Tipi Tüp",
    categoryId: "ev-tipi",
    summary: "Mutfak ve günlük kullanım için 2 kg ev tipi tüp.",
    usage: "Ev ve mutfak",
    seoDescription:
      "Tokat Merkez'de 2 kg Hürgaz ev tipi tüp. Mutfak kullanımı için Turanlar Ticaret'e WhatsApp'tan yazın; servis talebi telefonla alınır.",
    capacity: "2 kg",
    image: {
      kind: "photo",
      src: "/images/products/ev-tipi-2kg.jpg",
      alt: "Hürgaz 2 kg ev tipi gümüş LPG tüpü",
      width: 1024,
      height: 1024,
    },
  },
  {
    slug: "12kg-ev-tupu",
    name: "12 kg Ev Tüpü",
    categoryId: "ev-tipi",
    summary: "Mutfak ve günlük kullanım için 12 kg ev tüpü.",
    usage: "Ev ve mutfak",
    seoDescription:
      "Tokat Merkez'de 12 kg Hürgaz ev tüpü. 2 kg tüpten ayrı bir üründür. Stok ve sipariş için Turanlar Ticaret WhatsApp hattına yazın.",
    capacity: "12 kg",
    image: {
      kind: "photo",
      src: "/images/products/ev-12kg.jpg",
      alt: "Hürgaz 12 kg ev tipi gümüş LPG tüpü",
      width: 1024,
      height: 1024,
    },
    gallery: [
      {
        kind: "photo",
        src: "/images/products/ev-12kg-mavi.jpg",
        alt: "Hürgaz 12 kg ev tipi mavi LPG tüpü",
        width: 682,
        height: 1024,
      },
    ],
  },
  {
    slug: "piknik-tupu",
    name: "Piknik Tüpü",
    categoryId: "piknik",
    summary: "Kamp, piknik ve taşınabilir kullanım için tercih edilen tüpler.",
    usage: "Kamp ve piknik",
    seoDescription:
      "Tokat piknik tüpü için Turanlar Ticaret. Tokat Merkez'de taşınabilir tüp siparişini WhatsApp üzerinden iletebilirsiniz.",
    capacity: null,
    image: {
      kind: "photo",
      src: "/images/products/piknik-tupu.jpg",
      alt: "Turanlar Ticaret'te satılan mavi piknik tüpü",
      width: 1024,
      height: 1024,
    },
  },
  {
    slug: "sanayi-tipi-tup",
    name: "24 kg Sanayi Tüpü",
    categoryId: "sanayi",
    summary: "İşletmeler ve uygun endüstriyel kullanım için 24 kg sanayi tüpü.",
    usage: "İş yeri ve sanayi",
    seoDescription:
      "Tokat Merkez'de 24 kg sanayi tüpü. Turanlar Ticaret, işletmeler için Hürgaz sanayi tüplerinde WhatsApp siparişi ve telefonla servis talebi alır.",
    capacity: "24 kg",
    image: {
      kind: "photo",
      src: "/images/products/sanayi-24kg.jpg",
      alt: "Hürgaz 24 kg sanayi tipi gümüş LPG tüpü",
      width: 682,
      height: 1024,
    },
  },
  {
    slug: "ticari-kullanim-tupu",
    name: "Ticari Kullanım Tüpü",
    categoryId: "ticari",
    summary: "Restoran, kafe ve ticari mutfakların tüp ihtiyacı için.",
    usage: "Restoran ve kafe",
    seoDescription:
      "Tokat Merkez'de restoran ve ticari mutfaklar için tüp tedariki. Turanlar Ticaret'e WhatsApp'tan yazarak sipariş oluşturun.",
    capacity: null,
    image: { kind: "illustration", variant: "ticari" },
  },
  {
    slug: "diger-tup-cesitleri",
    name: "Diğer Tüp Çeşitleri",
    categoryId: "diger",
    summary:
      "Stokta bulunan diğer tüp seçenekleri. Uygun çeşidi birlikte netleştirelim.",
    usage: "Özel ihtiyaçlar",
    seoDescription:
      "Tokat Merkez'de diğer tüp çeşitleri. Turanlar Ticaret, Hürgaz stoğundaki seçenekler için WhatsApp'tan bilgi verir.",
    capacity: null,
    image: { kind: "illustration", variant: "diger" },
  },
  {
    slug: "tup-ekipmanlari",
    name: "Tüp Ekipmanları",
    categoryId: "kamp-ekipman",
    summary:
      "Regülatör, hortum ve bağlantı gibi tüp ekipmanları. Stoktaki parça WhatsApp'ta sorulur.",
    usage: "Tüp bağlantısı",
    seoDescription:
      "Tokat Merkez'de tüp ekipmanı: regülatör, hortum ve bağlantı parçaları. Turanlar Ticaret'te model ve fiyat WhatsApp ile netleşir.",
    capacity: null,
    image: {
      kind: "photo",
      src: "/images/products/tup-ekipman-v2.jpg",
      alt: "Gaz hortumu ve regülatörle bağlı tüp örneği",
      width: 914,
      height: 973,
      credit:
        "Örnek görsel: Santeri Viinamäki, CC BY-SA 4.0, Wikimedia Commons. Kırpıldı. Stoktaki parça ayrıca sorulur.",
    },
  },
  {
    slug: "mangal",
    name: "Mangal",
    categoryId: "kamp-ekipman",
    summary: "Mangal çeşitleri. Ölçü ve model satışta netleşir, fiyat sitede yazılmaz.",
    usage: "Mangal ve ızgara",
    seoDescription:
      "Tokat Merkez'de mangal. Turanlar Ticaret mangal çeşitlerinde ölçü ve fiyatı WhatsApp üzerinden paylaşır.",
    capacity: null,
    image: {
      kind: "photo",
      src: "/images/products/mangal-v2.jpg",
      alt: "Paslanmaz gazlı mangal örneği",
      width: 1600,
      height: 1202,
      credit: "Örnek görsel: Santeri Viinamäki, CC BY-SA 4.0, Wikimedia Commons. Stoktaki model ayrıca sorulur.",
    },
  },
  {
    slug: "soba",
    name: "Soba",
    categoryId: "kamp-ekipman",
    summary: "Soba çeşitleri. Yakıt tipi ve model stokta belli olur.",
    usage: "Isınma",
    seoDescription:
      "Tokat Merkez'de soba. Turanlar Ticaret'te soba modeli ve fiyatı WhatsApp veya telefonla öğrenilir.",
    capacity: null,
    image: {
      kind: "photo",
      src: "/images/products/soba-v2.jpg",
      alt: "Döküm soba örneği",
      width: 1050,
      height: 1400,
      credit: "Örnek görsel: Victor Grigas, CC BY-SA 3.0, Wikimedia Commons. Stoktaki model ayrıca sorulur.",
    },
  },
  {
    slug: "isitici",
    name: "Isıtıcı",
    categoryId: "kamp-ekipman",
    summary: "Isıtıcı çeşitleri. Açık alan veya iç mekân tipi siparişte ayrılır.",
    usage: "Isıtma",
    seoDescription:
      "Tokat Merkez'de ısıtıcı. Turanlar Ticaret ısıtıcı modelini ve fiyatını WhatsApp üzerinden bildirir.",
    capacity: null,
    image: {
      kind: "photo",
      src: "/images/products/isitici-v2.jpg",
      alt: "Ayaklı dış mekân ısıtıcısı örneği",
      width: 960,
      height: 1280,
      credit: "Örnek görsel: John Riddick, CC BY-SA 4.0, Wikimedia Commons. Stoktaki model ayrıca sorulur.",
    },
  },
  {
    slug: "kamp-urunleri",
    name: "Kamp Ürünleri",
    categoryId: "kamp-ekipman",
    summary: "Kamp ocağı ve kamp ürünleri. Eldeki çeşit WhatsApp'ta sorulur.",
    usage: "Kamp",
    seoDescription:
      "Tokat Merkez'de kamp ürünleri. Turanlar Ticaret kamp ocağı ve kamp malzemesinde stok ve fiyatı WhatsApp ile paylaşır.",
    capacity: null,
    image: {
      kind: "photo",
      src: "/images/products/kamp-urunleri-v2.jpg",
      alt: "Kartuşlu taşınabilir kamp ocağı örneği",
      width: 1600,
      height: 1200,
      credit: "Örnek görsel: Oaktree b, CC BY-SA 4.0, Wikimedia Commons. Stoktaki model ayrıca sorulur.",
    },
  },
  {
    slug: "barbeku-aksesuarlari",
    name: "Barbekü Aksesuarları",
    categoryId: "kamp-ekipman",
    summary: "Şiş, ızgara ve barbekü aksesuarları. Set içeriği stokta netleşir.",
    usage: "Barbekü",
    seoDescription:
      "Tokat Merkez'de barbekü aksesuarı. Turanlar Ticaret şiş ve ızgara aksesuarlarında içeriği ve fiyatı WhatsApp'ta söyler.",
    capacity: null,
    image: {
      kind: "photo",
      src: "/images/products/barbeku-aksesuar-v2.jpg",
      alt: "Metal mangal maşası örneği",
      width: 1600,
      height: 1200,
      credit:
        "Örnek görsel: Ashish Bhatnagar, kamu malı, Wikimedia Commons. Stoktaki set ayrıca sorulur.",
    },
  },
];

export function getCategory(id: Product["categoryId"]) {
  const category = categories.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Bilinmeyen ürün kategorisi: ${id}`);
  }
  return category;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
