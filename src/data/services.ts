export const services = [
  {
    id: "ev",
    title: "Ev Tüpü",
    summary: "Mutfak için 2 kg ve 12 kg Hürgaz tüp.",
    detail:
      "Evde az yemek pişiyorsa 2 kg, her gün ocak yanıyorsa genelde 12 kg bakılır. İkisini de stoktan sorabilirsiniz. WhatsApp'tan yazın ya da dükkânı arayın, o gün hangisi varsa söyleyelim.",
  },
  {
    id: "isletme",
    title: "İş Yerine Tüp",
    summary: "Lokanta, kafe ve iş yeri için tüp.",
    detail:
      "Tokat Merkez'deki iş yerlerine de tüp bırakıyoruz. Kaç tane lazım, hangi ölçü olduğuna göre stok ve saati birlikte konuşuruz.",
  },
  {
    id: "servis",
    title: "Tokat Merkez Servis",
    summary: "Tüpü Tokat Merkez içine bırakıyoruz.",
    detail:
      "Servisimiz Tokat Merkez ile sınırlı. İlçeye ya da şehir dışına düzenli çıkmıyoruz. Servis için sabit telefonu aramanız yeterli; ürün sorusu WhatsApp'tan da olur.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp'tan Sipariş",
    summary: "Ürüne tıklayınca mesaj, tüpün adıyla açılır.",
    detail:
      "Sitede sepet yok. Ürünü seçince WhatsApp hazır mesajla açılır. Fiyat, stok ve bırakma durumunu orada konuşuyoruz.",
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
    text: "Sipariş bağlantısı seçtiğiniz ürünün adını mesaja koyup WhatsApp'ı açar.",
  },
  {
    number: "03",
    title: "Servis saatini konuşun",
    text: "Stok, fiyat ve Tokat Merkez'e bırakma saatini birlikte netleştiririz.",
  },
] as const;

export const aboutCopy = {
  title: "1977'den beri Tokat'ta",
  lead: "Turanlar Ticaret, 1977'den beri Tokat Merkez Bahçelievler'de Hürgaz tüp satıyor. Tüp lazım olduğunda dükkâna yazmanız ya da aramanız yeterli.",
  paragraphs: [
    "Ev için 2 kg ve 12 kg tüp, piknik tüpü ve iş yeri için 24 kg sanayi tüpü var. Yanında soba, kuzine, semaver, ocak ve bağlantı parçaları da bulunuyor.",
    "Siparişi WhatsApp'tan bırakabilirsiniz. Servis için sabit telefonu aramanız yeterli. Fiyat ve stok o günkü duruma göre söylenir.",
    "Tüpü Tokat Merkez'e bırakıyoruz. İlçe ve il dışına düzenli servis yok. Dükkân haftanın her günü 07:30 ile 22:00 arasında açık.",
  ],
} as const;
