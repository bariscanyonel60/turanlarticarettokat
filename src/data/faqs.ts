export const faqs = [
  {
    id: "tokat-tup-siparisi",
    question: "Tokat tüp siparişini nasıl veririm?",
    answer:
      "Tüpü siteden seçin, WhatsApp'tan yazın. Ev, piknik ve sanayi tüpü için Turanlar Ticaret'e ulaşmanız yeterli. Servis isteyecekseniz 0356 228 52 54'ü arayın.",
  },
  {
    id: "tokat-merkez-tup-servisi",
    question: "Eve tüp bırakıyor musunuz?",
    answer:
      "Evet, Tokat Merkez'deki evlere ve iş yerlerine bırakıyoruz. Adresinizi yazın, o gün bırakıp bırakamayacağımızı söyleyelim. İlçe ve şehir dışına düzenli gitmiyoruz.",
  },
  {
    id: "tokat-hurgaz-tup",
    question: "Hürgaz tüp var mı?",
    answer:
      "Var. Ev tipi, piknik tipi ve sanayi tipi Hürgaz tüp satıyoruz. Hangisi stokta, dükkândan ya da WhatsApp'tan sorun.",
  },
  {
    id: "ev-tup-piknik-tup",
    question: "Ev tüpü ile piknik tüpü aynı mı?",
    answer:
      "Değil. Ev tüpü mutfak içindir, 2 kg ve 12 kg olarak iki ayrı üründür. Piknik tüpü kamp ve taşınabilir işler içindir. İkisini de Tokat Merkez'den sorabilirsiniz.",
  },
  {
    id: "tokat-tup-fiyatlari",
    question: "Tokat tüp fiyatı ne kadar?",
    answer:
      "Fiyat tüpün cinsine ve o günkü satışa göre değişir. Kartta yazıyorsa güncel fiyat odur. Yazmıyorsa WhatsApp'tan ya da telefondan sorun.",
  },
  {
    id: "sanayi-tup-siparis",
    question: "İş yerine sanayi tüpü gelir mi?",
    answer:
      "Tokat Merkez'deki iş yerlerine 24 kg sanayi tüpü bırakıyoruz. Kaç tane lazım ve mahalleniz neresi, yazın. Stok ve saati birlikte konuşuruz.",
  },
] as const;

export type Faq = (typeof faqs)[number];
