import type { Post } from "@/data/posts";

const published = { date: "2026-11-05", dateLabel: "5 Kasım 2026" } as const;

export const guidePosts: readonly Post[] = [
  {
    ...published,
    slug: "tokat-tup",
    title: "Tokat Tüp Siparişi",
    description:
      "Tokat tüp siparişi Bahçelievler'deki Turanlar Ticaret'ten. Ev, piknik ve sanayi tüpü. WhatsApp'tan yazın, servis için arayın.",
    links: [
      { href: "/urunler", label: "Tüp çeşitleri" },
      { href: "/hizmetlerimiz", label: "Tokat Merkez hizmetleri" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
      { href: "/iletisim", label: "Adres ve telefon" },
    ],
    sections: [
      {
        heading: "Tokat tüp deyince ne kastediyoruz",
        paragraphs: [
          "Çoğu kişi şunu soruyor: evde, piknikte ya da iş yerinde kullanılacak tüpü Tokat'ta kimden alırım? Cevap kısa. Turanlar Ticaret, Bahçelievler'de. 1977'den beri aynı işi yapıyoruz. Satılan marka Hürgaz.",
          "Siteden kartla ödeme yok. Tüpü seçin, WhatsApp'tan yazın. Fiyat ve stok o gün neyse onu söyleriz. Servis için 0356 228 52 54'ü arayın.",
        ],
      },
      {
        heading: "Hangi tüpler var",
        paragraphs: [
          "Mutfak için iki ayrı tüp var: 2 kg ev tipi tüp ve 12 kg ev tüpü. İkisi aynı şeyin iki adı değil. Piknik tüpü kamp ve taşınabilir işler için. Kilogramı fotoğrafta yazmıyor, siparişte sorun. İş yeri için 24 kg sanayi tüpü var.",
          "Fotoğrafı olan tüpler ürün sayfasında duruyor. Fotoğrafı olmayan bir ölçüyü uydurup yazmıyoruz.",
        ],
      },
      {
        heading: "Nasıl sipariş verilir",
        paragraphs: [
          "Ürüne tıklayınca WhatsApp, tüpün adını yazılmış bir mesajla açılır. Hat +90 555 860 63 69. Mesaj bir fiş değil. Ödemeyi siteden almıyoruz.",
          "Mahallenizi ve ev mi iş yeri mi olduğunu yazarsanız işimiz hızlanır. Dükkân 07:30 ile 22:00 arasında açık. Hangi günler çalıştığımızı arayınca öğrenirsiniz.",
        ],
      },
      {
        heading: "Nereye bırakıyoruz",
        paragraphs: [
          "Tüpü Tokat Merkez'deki eve ve iş yerine bırakıyoruz. Adres Merkez dışındaysa düzenli servis yok. Ne zaman bırakılacağını stok ve o günkü sıraya göre konuşuruz.",
          "Dükkân Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. Harita iletişim sayfasında.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-ev-tipi-tup",
    title: "Tokat Ev Tipi Tüp",
    description:
      "Tokat tüp içinde ev tipi olanlar: 2 kg ve 12 kg Hürgaz mutfak tüpü. İkisi ayrı ürün. Sipariş WhatsApp veya 0356 228 52 54.",
    links: [
      { href: "/urunler/ev-tipi-tup", label: "2 kg ev tipi tüp" },
      { href: "/urunler/12kg-ev-tupu", label: "12 kg ev tüpü" },
      { href: "/urunler/piknik-tupu", label: "Piknik tüpü" },
      { href: "/sss", label: "Ev tüpü soruları" },
    ],
    sections: [
      {
        heading: "Ev tüpü iki ayrı ürün",
        paragraphs: [
          "Tokat tüp aramasında ev tipi dediğimiz şey mutfak tüpüdür. Bizde iki tane var: 2 kg ve 12 kg. İkisi de Hürgaz. Biri diğerinin küçüğü diye yazılmasın, ayrı kartlar.",
          "Piknik tüpü bu listenin içinde değil. O, kamp ve taşınabilir pişirme için.",
        ],
      },
      {
        heading: "2 kg ne zaman yeter",
        paragraphs: [
          "Az yemek pişen, çay ve kısa ocak işi olan evlerde 2 kg rahat eder. Fotoğraf, dükkândaki gümüş Hürgaz tüptür. Etikette birden fazla gaz adı görülebilir. O gün hangi dolum stokta, siparişte söyleriz.",
          "Ne kadar süreceği evden eve değişir. Gün sayısı biçmiyoruz.",
        ],
      },
      {
        heading: "12 kg ne zaman lazım",
        paragraphs: [
          "Her gün yemek pişen evler genelde 12 kg soruyor. Mavi gövdeli fotoğraf da aynı 12 kg ev tüpüne ait. Kaç gün gideceği ocağın ne kadar yandığına bağlı.",
        ],
      },
      {
        heading: "Eve nasıl gelir",
        paragraphs: [
          "Tokat Merkez'deki eve bırakıyoruz. WhatsApp'tan tüpün adını ve mahalleyi yazın. Servis için telefonu arayın. İlçe ve şehir dışına düzenli gitmiyoruz.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-tup-teslimati",
    title: "Tokat'ta Tüp Teslimatı",
    description:
      "Tokat tüp teslimatı Tokat Merkez'e. Süre her siparişte konuşulur. Turanlar Ticaret, Bahçelievler.",
    links: [
      { href: "/hizmetlerimiz", label: "Hizmetler" },
      { href: "/iletisim", label: "Adres" },
      { href: "/sss", label: "Sorular" },
    ],
    sections: [
      {
        heading: "Tüp eve gelir mi",
        paragraphs: [
          "Evet, Tokat Merkez'deki eve ve iş yerine bırakıyoruz. İlçeye ya da şehir dışına düzenli gitmiyoruz. Adresi yazın, o gün bırakıp bırakamayacağımızı söyleyelim.",
        ],
      },
      {
        heading: "Ne kadar sürer",
        paragraphs: [
          "Tek bir dakika bütün Tokat için doğru olmaz. Stok, adres ve o anki sıra değişir. Bu yüzden sitede 'aynı gün gelir' diye bir cümle yok. Saati WhatsApp'ta ya da telefonda konuşuruz.",
          "Dükkân 07:30 ile 22:00 arasında açık. Geç saatte yazılan mesaj ertesi çalışmaya kalabilir.",
        ],
      },
      {
        heading: "Dükkândan almak da olur",
        paragraphs: [
          "Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. Kendiniz gelmek ile adrese bırakmak ayrı. Hangisi o gün mümkünse onu söyleriz.",
          "Mesajda tüpün adını, ürün sayfasındaki gibi yazın: 2 kg, 12 kg, piknik ya da 24 kg sanayi.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-sanayi-tipi-tup",
    title: "Tokat Sanayi Tipi Tüp",
    description:
      "Tokat tüp içinde sanayi tipi: 24 kg Hürgaz. İş yerine Tokat Merkez'de bırakıyoruz. Fiyat için WhatsApp.",
    links: [
      { href: "/urunler/sanayi-tipi-tup", label: "24 kg sanayi tüpü" },
      { href: "/hizmetlerimiz", label: "İş yeri hizmeti" },
      { href: "/iletisim", label: "Telefon" },
    ],
    sections: [
      {
        heading: "Sanayi tüpü kime",
        paragraphs: [
          "24 kg sanayi tüpü, lokanta, imalathane ve sürekli yanan ocaklar içindir. Her ev mutfağına uygun diye anlatmayız. Cihazın bağlantısı ve iş yerinin Tokat Merkez'de olması birlikte bakılır.",
        ],
      },
      {
        heading: "Nasıl sipariş edilir",
        paragraphs: [
          "WhatsApp +90 555 860 63 69, servis telefonu 0356 228 52 54. Mesajda mahalle, tüpün adı ve adet yazın. Birden fazla tüp lazımsa adedi de yazın, sitede form yok.",
          "Ne zaman bırakılacağını siparişte konuşuruz. Gece boyu açık olduğumuzu söylemiyoruz. Kapanış 22:00.",
        ],
      },
      {
        heading: "Nereden alınır",
        paragraphs: [
          "Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. Marka Hürgaz. Harita iletişim sayfasında, işaret dükkânı gösterir.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-piknik-tupu",
    title: "Tokat Piknik Tüpü",
    description:
      "Tokat tüp çeşitlerinden piknik tüpü, kamp ve taşınabilir pişirme içindir. Ev tüpünden ayrıdır. Sipariş WhatsApp'tan.",
    links: [
      { href: "/urunler/piknik-tupu", label: "Piknik tüpü" },
      { href: "/urunler/ev-tipi-tup", label: "2 kg ev tipi tüp" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Piknik tüpü ev tüpü değil",
        paragraphs: [
          "Mavi piknik tüpü kamp ocağı, semaver ve açık alanda kısa pişirme içindir. 2 kg ve 12 kg ev tüplerinin küçüğü diye düşünmeyin. Onlar mutfak içindir.",
          "Fotoğrafta kilogram yazmıyor. Dolumu burada tahmin etmiyoruz. Net rakamı WhatsApp'tan sorun.",
        ],
      },
      {
        heading: "Nasıl alınır",
        paragraphs: [
          "Ürün sayfasından WhatsApp'ı açın ya da 0356 228 52 54'ü arayın. Hangi ocağa uyduğunu, hortum gerekiyorsa onu da yazın.",
          "Tokat Merkez'e bırakıyoruz. Dükkân Bahçelievler'de. Kapalı ve havasız bir odada ısıtıcı gibi kullanmayın.",
        ],
      },
    ],
  },
];
