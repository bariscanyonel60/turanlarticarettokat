export const services = [
  {
    id: "ev",
    title: "Ev tüpü",
    summary: "Mutfak için 2 kg ve 12 kg Hürgaz tüp.",
    detail:
      "Evde ocak, çay ve günlük yemek için küçük ya da büyük tüp bakıyorsanız ikisini de sorun. Hangisi stokta, WhatsApp'tan ya da telefondan söyleyelim.",
  },
  {
    id: "isletme",
    title: "İş yerine tüp",
    summary: "Lokanta, kafe ve iş yeri için tüp.",
    detail:
      "Tokat Merkez'deki iş yerlerine tüp bırakıyoruz. Kaç tane ve hangi çeşit lazım, yazın. Ne zaman bırakılacağını siparişte konuşuruz.",
  },
  {
    id: "servis",
    title: "Tokat Merkez'e servis",
    summary: "Tüpü Tokat Merkez içine bırakıyoruz.",
    detail:
      "Servis Tokat Merkez ile sınırlı. İlçeye ya da şehir dışına düzenli gitmiyoruz. Servis için sabit telefonu arayın, sipariş için WhatsApp yeter.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp'tan sipariş",
    summary: "Ürüne tıklayınca mesaj, tüpün adıyla açılır.",
    detail:
      "Sitede sepet yok. Tüpü seçince WhatsApp hazır bir mesajla açılır. Fiyatı ve Tokat Merkez'e bırakıp bırakamayacağımızı orada netleştiririz.",
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const orderSteps = [
  {
    number: "01",
    title: "Tüpü seçin",
    text: "Ev, piknik ya da sanayi tüpüne bakın. Vitrinde soba, ocak ve bağlantı parçaları da var.",
  },
  {
    number: "02",
    title: "WhatsApp'tan yazın",
    text: "Sipariş bağlantısı, seçtiğiniz ürünün adını mesaja koyup WhatsApp'ı açar.",
  },
  {
    number: "03",
    title: "Yeri ve saati konuşun",
    text: "Stok, fiyat ve Tokat Merkez'e bırakma işini birlikte netleştiririz.",
  },
] as const;

export const aboutCopy = {
  title: "1977'den beri Tokat'ta",
  lead: "Tokat tüp lazım olduğunda Bahçelievler'deki dükkâna yazın. Turanlar Ticaret 1977'den beri Tokat Merkez'de Hürgaz tüp satıyor.",
  paragraphs: [
    "Ev için 2 kg ve 12 kg tüp, piknik tüpü ve iş yeri için 24 kg sanayi tüpü var. Yanında soba, kuzine, semaver, ocak ve bağlantı parçaları da duruyor.",
    "Siparişi WhatsApp'tan bırakın. Servis için sabit telefonu arayın. Fiyat ve stok o günkü duruma göre söylenir.",
    "Tüpü Tokat Merkez'e bırakıyoruz. İlçe ve il dışına düzenli servis yok. Dükkân 07:30 ile 22:00 arasında açık. Hangi günler çalıştığımızı arayınca öğrenirsiniz.",
  ],
} as const;
