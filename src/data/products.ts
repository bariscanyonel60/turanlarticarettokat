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
    description: "Soba, kuzine, semaver, ocak, şalome, regülatör ve dedantör.",
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
    priceKurus: null,
    capacity: "2 kg",
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955057/turanlar-ticaret/products/ev-tipi-2kg.jpg",
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
      "Tokat Merkez'de 12 kg Ev Tüpü, Turanlar Ticaret vitrininde. Mutfak ve günlük kullanım için 12 kg ev tüpü. Güncel fiyatı WhatsApp veya telefondan sorun.",
    priceKurus: null,
    capacity: "12 kg",
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955057/turanlar-ticaret/products/ev-12kg.jpg",
      alt: "Hürgaz 12 kg ev tipi gümüş LPG tüpü",
      width: 1024,
      height: 1024,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955058/turanlar-ticaret/products/ev-12kg-mavi.jpg",
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
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793958076/turanlar-ticaret/products/piknik-tupu.jpg",
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
    priceKurus: null,
    capacity: "24 kg",
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955059/turanlar-ticaret/products/sanayi-24kg.jpg",
      alt: "Hürgaz 24 kg sanayi tipi gümüş LPG tüpü",
      width: 682,
      height: 1024,
    },
  },
  {
    slug: "soba",
    name: "Gönen Soba",
    categoryId: "kamp-ekipman",
    summary: "Gönen kahverengi emaye soba.",
    usage: "Isınma",
    seoDescription:
      "Tokat Merkez'de Gönen emaye soba. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955064/turanlar-ticaret/products/gonen-soba.jpg",
      alt: "Gönen kahverengi emaye soba",
      width: 768,
      height: 1024,
    },
  },
  {
    slug: "semaver",
    name: "Özenler Semaver",
    categoryId: "kamp-ekipman",
    summary: "Özenler krom semaver.",
    usage: "Çay",
    seoDescription:
      "Tokat Merkez'de Özenler semaver. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955064/turanlar-ticaret/products/ozenler-semaver.jpg",
      alt: "Özenler krom semaver",
      width: 768,
      height: 1024,
    },
  },
  {
    slug: "kouns-kuzine",
    name: "Kouns Kuzine",
    categoryId: "kamp-ekipman",
    summary: "Kouns emaye kuzine.",
    usage: "Pişirme",
    seoDescription:
      "Tokat Merkez'de Kouns emaye kuzine. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793955065/turanlar-ticaret/products/kouns-kuzine.jpg",
      alt: "Kouns kahverengi emaye kuzine",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "aorcamp-pr50",
    name: "Aorcamp PR-50 Kamp Ocağı",
    categoryId: "kamp-ekipman",
    summary: "Aorcamp PR-50 taşınabilir kamp ocağı.",
    usage: "Kamp",
    seoDescription:
      "Tokat Merkez'de Aorcamp PR-50 kamp ocağı. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957335/turanlar-ticaret/products/aorcamp-pr50.jpg",
      alt: "Aorcamp PR-50 kamp ocağı",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "gaz-salome-seti",
    name: "Gaz Şalomesi Seti",
    categoryId: "kamp-ekipman",
    summary: "Hortum, regülatör ve şalomeden oluşan set.",
    usage: "Şalome",
    seoDescription:
      "Tokat Merkez'de gaz şalomesi seti. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957471/turanlar-ticaret/products/gaz-salome-seti.jpg",
      alt: "Mavi hortumlu gaz şalomesi seti",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "mupa-elektrikli-ocak",
    name: "MUPA Tekli Elektrikli Ocak",
    categoryId: "kamp-ekipman",
    summary: "MUPA tek gözlü elektrikli ocak.",
    usage: "Pişirme",
    seoDescription:
      "Tokat Merkez'de MUPA tekli elektrikli ocak. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957472/turanlar-ticaret/products/mupa-elektrikli-ocak.jpg",
      alt: "MUPA tekli elektrikli ocak",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "femas-dortlu-ocak",
    name: "FEMAS Dörtlü Ocak",
    categoryId: "kamp-ekipman",
    summary: "FEMAS dört gözlü beyaz ocak.",
    usage: "Pişirme",
    seoDescription:
      "Tokat Merkez'de FEMAS dörtlü ocak. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957629/turanlar-ticaret/products/femas-dortlu-ocak.jpg",
      alt: "FEMAS dört gözlü beyaz ocak",
      width: 1024,
      height: 512,
    },
  },
  {
    slug: "femas-ikili-ocak",
    name: "FEMAS İkili Ocak",
    categoryId: "kamp-ekipman",
    summary: "FEMAS iki gözlü beyaz ocak.",
    usage: "Pişirme",
    seoDescription:
      "Tokat Merkez'de FEMAS ikili ocak. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957630/turanlar-ticaret/products/femas-ikili-ocak.jpg",
      alt: "FEMAS iki gözlü beyaz ocak",
      width: 1024,
      height: 512,
    },
  },
  {
    slug: "orgaz-kamp-ocagi",
    name: "Orgaz Kamp Ocağı",
    categoryId: "kamp-ekipman",
    summary: "Orgaz kamp ocağı.",
    usage: "Kamp",
    seoDescription:
      "Tokat Merkez'de Orgaz kamp ocağı. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957821/turanlar-ticaret/products/orgaz-kamp-ocagi.jpg",
      alt: "Orgaz kamp ocağı",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "orgaz-regulator-300-11",
    name: "Orgaz LPG Regülatör 300-11",
    categoryId: "kamp-ekipman",
    summary: "Orgaz 300-11 LPG regülatör.",
    usage: "Regülatör",
    seoDescription:
      "Tokat Merkez'de Orgaz 300-11 LPG regülatör. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957822/turanlar-ticaret/products/orgaz-regulator-300-11.jpg",
      alt: "Orgaz 300-11 LPG regülatör",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "orgaz-dedantor-mt-300-20",
    name: "Orgaz LPG Dedantör MT-300-20",
    categoryId: "kamp-ekipman",
    summary: "Orgaz MT-300-20 kırmızı LPG dedantör.",
    usage: "Dedantör",
    seoDescription:
      "Tokat Merkez'de Orgaz MT-300-20 LPG dedantör. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793957930/turanlar-ticaret/products/orgaz-dedantor-mt-300-20.jpg",
      alt: "Orgaz MT-300-20 kırmızı LPG dedantör",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "orgaz-dedantor-yb-150",
    name: "Orgaz Yüksek Basınç Dedantör YB-150",
    categoryId: "kamp-ekipman",
    summary: "Orgaz YB-150 yüksek basınç LPG dedantör.",
    usage: "Dedantör",
    seoDescription:
      "Tokat Merkez'de Orgaz YB-150 yüksek basınç LPG dedantör. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793958637/turanlar-ticaret/products/orgaz-dedantor-yb-150.jpg",
      alt: "Orgaz YB-150 yüksek basınç LPG dedantör",
      width: 1024,
      height: 682,
    },
  },
  {
    slug: "tuplu-sac-tava-45",
    name: "Tüplü Saç Tava 45 cm Portatif Kavurma Gözleme Katmer Sacı",
    categoryId: "kamp-ekipman",
    summary: "45 cm portatif tüplü saç tava. Kavurma, gözleme ve katmer için.",
    usage: "Pişirme",
    seoDescription:
      "Tokat Merkez'de Tüplü Saç Tava 45 cm Portatif Kavurma Gözleme Katmer Sacı. 45 cm portatif tüplü saç tava. Kavurma, gözleme ve katmer için. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793962937/turanlar-ticaret/products/tuplu-sac-tava-45-kapak.png",
      alt: "Tüplü saç tava 45 cm, çini desenli tüp üzerinde metal sac",
      width: 683,
      height: 560,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793962935/turanlar-ticaret/products/tuplu-sac-tava-45-gozleme.png",
        alt: "Tüplü saç tavada üstte gözleme, altta kavurma",
        width: 751,
        height: 523,
      },
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793962936/turanlar-ticaret/products/tuplu-sac-tava-45-siyah.png",
        alt: "Tüplü saç tava, siyah sac yüzeyiyle",
        width: 654,
        height: 485,
      },
    ],
  },
  {
    slug: "samdan-1003-doner-yuvarlak-firin",
    name: "Şamdan 1003 Döner Yuvarlak Fırın",
    categoryId: "kamp-ekipman",
    summary: "Şamdan 1003 kırmızı döner yuvarlak fırın.",
    usage: "Fırın",
    seoDescription:
      "Tokat Merkez'de Şamdan 1003 Döner Yuvarlak Fırın. Şamdan 1003 kırmızı döner yuvarlak fırın. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963060/turanlar-ticaret/products/samdan-1003-doner-firin-on.png",
      alt: "Şamdan 1003 kırmızı döner yuvarlak fırın",
      width: 565,
      height: 654,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963061/turanlar-ticaret/products/samdan-1003-doner-firin-yan.png",
        alt: "Şamdan 1003 döner yuvarlak fırın, yan görünüm",
        width: 571,
        height: 673,
      },
    ],
  },
  {
    slug: "gurme-mk101-elektrikli-katmer-saci",
    name: "Gurme Mk101 Elektrikli Ayarlanabilir Termostatlı Katmer Sacı",
    categoryId: "kamp-ekipman",
    summary: "Gurme Mk101 elektrikli katmer sacı. Termostatı ayarlanabilir.",
    usage: "Pişirme",
    seoDescription:
      "Tokat Merkez'de Gurme Mk101 Elektrikli Ayarlanabilir Termostatlı Katmer Sacı. Gurme Mk101 elektrikli katmer sacı. Termostatı ayarlanabilir. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963135/turanlar-ticaret/products/gurme-mk101-katmer-saci.jpg",
      alt: "Gurme Mk101 elektrikli ayarlanabilir termostatlı katmer sacı",
      width: 1024,
      height: 676,
    },
  },
  {
    slug: "buyuk-boy-lav-tasli-tuplu-mangal",
    name: "Büyük Boy Lav Taşlı Tüplü Mangal 32x54x22 cm",
    categoryId: "kamp-ekipman",
    summary: "Büyük boy lav taşlı tüplü mangal. Ölçüsü 32x54x22 cm.",
    usage: "Mangal",
    seoDescription:
      "Tokat Merkez'de Büyük Boy Lav Taşlı Tüplü Mangal 32x54x22 cm. Büyük boy lav taşlı tüplü mangal. Ölçüsü 32x54x22 cm. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963497/turanlar-ticaret/products/lav-tasli-tuplu-mangal-on.png",
      alt: "Büyük boy lav taşlı tüplü mangal, 32x54x22 cm",
      width: 504,
      height: 615,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963499/turanlar-ticaret/products/lav-tasli-tuplu-mangal-ust.png",
        alt: "Lav taşlı tüplü mangalın ızgara üst görünümü",
        width: 539,
        height: 451,
      },
    ],
  },
  {
    slug: "beyaz-surgulu-aspirator",
    name: "Beyaz Sürgülü Aspiratör",
    categoryId: "kamp-ekipman",
    summary:
      "Beyaz sürgülü aspiratör. Genişlik 600 mm. Baca çıkış çapı 120 mm. Motor gücü 2×95 W. Halojen lamba aydınlatma. Switch kontrol. Hava debisi 450 m³/h. 2 alüminyum filtre. Ses seviyesi 48 dBA.",
    usage: "Aspiratör",
    seoDescription:
      "Tokat Merkez'de Beyaz Sürgülü Aspiratör. Genişlik 600 mm, baca çıkışı 120 mm, hava debisi 450 m³/h. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963605/turanlar-ticaret/products/beyaz-surgulu-aspirator.png",
      alt: "Beyaz sürgülü aspiratör",
      width: 824,
      height: 622,
    },
  },
  {
    slug: "demaver-celik-cay-makinesi",
    name: "Demaver Çelik Çay Makinesi 2 Lt 1800 W",
    categoryId: "kamp-ekipman",
    summary: "Demaver çelik çay makinesi. 2 lt, 1800 W.",
    usage: "Çay",
    seoDescription:
      "Tokat Merkez'de Demaver Çelik Çay Makinesi 2 Lt 1800 W. Demaver çelik çay makinesi. 2 lt, 1800 W. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: "2 lt",
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963683/turanlar-ticaret/products/demaver-cay-makinesi.png",
      alt: "Demaver çelik çay makinesi, 2 lt",
      width: 503,
      height: 591,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963684/turanlar-ticaret/products/demaver-cay-makinesi-parca.png",
        alt: "Demaver çelik çay makinesi, demlik ve süzgeç ayrı",
        width: 428,
        height: 555,
      },
    ],
  },
  {
    slug: "orgaz-lantern-l-627",
    name: "Orgaz Lantern L-627 ( Büyük ) Kamp Lamba ( Löküs ) Tüp Üzeri ( Aygaz Dar Musluk ) 500w",
    categoryId: "kamp-ekipman",
    summary: "Orgaz L-627 büyük kamp lambası. Tüp üzeri, Aygaz dar musluk, 500 W.",
    usage: "Lamba",
    seoDescription:
      "Tokat Merkez'de Orgaz Lantern L-627 ( Büyük ) Kamp Lamba ( Löküs ) Tüp Üzeri ( Aygaz Dar Musluk ) 500w. Orgaz L-627 büyük kamp lambası. Tüp üzeri, Aygaz dar musluk, 500 W. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963843/turanlar-ticaret/products/orgaz-lantern-l-627.png",
      alt: "Orgaz L-627 büyük kamp lambası ve kutusu",
      width: 545,
      height: 546,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963844/turanlar-ticaret/products/orgaz-lantern-l-627-yakin.png",
        alt: "Orgaz L-627 kamp lambası, yakın plan",
        width: 547,
        height: 546,
      },
    ],
  },
  {
    slug: "orgaz-dedantorlu-kamp-sobasi",
    name: "Orgaz Dedantörlü Kamp Sobası",
    categoryId: "kamp-ekipman",
    summary: "Orgaz dedantörlü kamp sobası.",
    usage: "Kamp",
    seoDescription:
      "Tokat Merkez'de Orgaz Dedantörlü Kamp Sobası. Orgaz dedantörlü kamp sobası. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963901/turanlar-ticaret/products/orgaz-dedantorlu-kamp-sobasi.png",
      alt: "Orgaz dedantörlü kamp sobası",
      width: 490,
      height: 567,
    },
  },
  {
    slug: "aorcamp-cakmakli-kartus-purmuz-set",
    name: "Aorcamp Çakmaklı Kartuş Pürmüz Set",
    categoryId: "kamp-ekipman",
    summary:
      "Aorcamp çakmaklı kartuş pürmüz set. Stok kodu CX-500 + KTS-227. KTS-227 gaz kartuşu ile uyumlu.",
    usage: "Pürmüz",
    seoDescription:
      "Tokat Merkez'de Aorcamp Çakmaklı Kartuş Pürmüz Set. Aorcamp çakmaklı kartuş pürmüz set. Stok kodu CX-500 + KTS-227. KTS-227 gaz kartuşu ile uyumlu. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963979/turanlar-ticaret/products/aorcamp-cx-500-purmuz-set.png",
      alt: "Aorcamp çakmaklı kartuş pürmüz set, gaz kartuşu ile",
      width: 473,
      height: 568,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963980/turanlar-ticaret/products/aorcamp-cx-500-purmuz-yan.png",
        alt: "Aorcamp çakmaklı kartuş pürmüz, yan görünüm",
        width: 821,
        height: 695,
      },
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793963981/turanlar-ticaret/products/aorcamp-cx-500-purmuz-baglanti.png",
        alt: "Aorcamp çakmaklı kartuş pürmüz, kartuş bağlantısı",
        width: 811,
        height: 704,
      },
    ],
  },
  {
    slug: "lt-44-tost-makinesi",
    name: "LT-44 Tost Makinesi",
    categoryId: "kamp-ekipman",
    summary:
      "LT-44 tost makinesi. 2000 W, 220-240 V, 50-60 Hz. Pişirme alanı 23,5x33 cm. Izgaralar çıkartılabilir ve kolay temizlenir. Teflon ve granit kaplamalı yanmaz, yapışmaz ızgara seçeneği. Sıcaklık ayarlanabilir. Dikey saklanır.",
    usage: "Tost",
    seoDescription:
      "Tokat Merkez'de LT-44 Tost Makinesi. 2000 W, pişirme alanı 23,5x33 cm. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: null,
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793964111/turanlar-ticaret/products/lt-44-tost-makinesi.png",
      alt: "LT-44 kırmızı tost makinesi",
      width: 584,
      height: 469,
    },
    gallery: [
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793964111/turanlar-ticaret/products/lt-44-tost-makinesi-acik.png",
        alt: "LT-44 tost makinesi, ızgaralar açık",
        width: 573,
        height: 474,
      },
      {
        kind: "photo",
        src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793964112/turanlar-ticaret/products/lt-44-tost-makinesi-yan.png",
        alt: "LT-44 tost makinesi, yan görünüm",
        width: 565,
        height: 455,
      },
    ],
  },
  {
    slug: "nazar-reso-yakiti-jel-1-litre",
    name: "Nazar Reşo Yakıtı (Jel) 1 Litre",
    categoryId: "kamp-ekipman",
    summary: "Nazar jel reşo yakıtı. 1 litre.",
    usage: "Yakıt",
    seoDescription:
      "Tokat Merkez'de Nazar Reşo Yakıtı (Jel) 1 Litre. Nazar jel reşo yakıtı. 1 litre. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: "1 litre",
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793964234/turanlar-ticaret/products/nazar-reso-yakiti-1-litre.png",
      alt: "Nazar jel reşo yakıtı, 1 litre",
      width: 286,
      height: 501,
    },
  },
  {
    slug: "tuplu-sac-ekmek-katmer-60-cm",
    name: "Tüplü Sac Ekmek Sacı Katmer Sacı 60 Cm Hortum Vana Setli",
    categoryId: "kamp-ekipman",
    summary: "60 cm tüplü ekmek ve katmer sacı. Hortum ve vana seti ile.",
    usage: "Pişirme",
    seoDescription:
      "Tokat Merkez'de Tüplü Sac Ekmek Sacı Katmer Sacı 60 Cm Hortum Vana Setli. 60 cm tüplü ekmek ve katmer sacı. Hortum ve vana seti ile. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: "60 cm",
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793964301/turanlar-ticaret/products/tuplu-sac-ekmek-katmer-60.jpg",
      alt: "60 cm tüplü ekmek ve katmer sacı, hortum ve vana seti ile",
      width: 935,
      height: 1024,
    },
  },
  {
    slug: "aorcamp-227-gram-gaz-kartusu",
    name: "Aorcamp 227 Gram Gaz Kartuşu",
    categoryId: "kamp-ekipman",
    summary: "Aorcamp gaz kartuşu. 227 gram.",
    usage: "Kartuş",
    seoDescription:
      "Tokat Merkez'de Aorcamp 227 Gram Gaz Kartuşu. Aorcamp gaz kartuşu. 227 gram. Turanlar Ticaret fiyatı WhatsApp veya telefonla söyler.",
    priceKurus: null,
    capacity: "227 gram",
    image: {
      kind: "photo",
      src: "https://res.cloudinary.com/ddm7ouuwk/image/upload/v1793965044/turanlar-ticaret/products/aorcamp-227-gram-gaz-kartusu.png",
      alt: "Aorcamp 227 gram gaz kartuşu",
      width: 433,
      height: 525,
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
