export const services = [
  {
    id: "ev",
    title: "Ev Tipi Tüp Satışı",
    summary: "Mutfak ve günlük kullanım için ev tipi tüpler.",
    detail:
      "Tokat Merkez'deki evler için mutfak ve günlük kullanıma yönelik tüp çeşitlerini satıyoruz. Hangi seçeneğin uygun olduğunu, stok durumunu ve servis imkânını WhatsApp veya telefonla netleştiriyoruz.",
  },
  {
    id: "isletme",
    title: "İşletmelere Tüp Tedariği",
    summary: "İş yeri, restoran ve ticari mutfaklar için tüp tedariki.",
    detail:
      "Tokat Merkez'de faaliyet gösteren işletmelerin tüp ihtiyacını dinleyip uygun çeşidi birlikte belirliyoruz. Teslimat süresi veya ücretsiz servis gibi doğrulanmamış bir vaat paylaşmıyoruz; uygunluk sipariş sırasında konuşulur.",
  },
  {
    id: "servis",
    title: "Tokat Merkez Tüp Servisi",
    summary: "Servis bölgesi Tokat Merkez ile sınırlıdır.",
    detail:
      "Tüp servisi yalnızca Tokat Merkez için geçerlidir. İlçelere veya Tokat dışına hizmet verildiği belirtilmez. Servis talebini sabit telefondan iletebilir, siparişinizi WhatsApp hattından yazabilirsiniz.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp ile Kolay Sipariş",
    summary: "Ürün adı hazır mesaja yazılır, fiyat WhatsApp'ta konuşulur.",
    detail:
      "Sitede sepet ve online ödeme yoktur. Bir tüp çeşidini seçtiğinizde WhatsApp, ürün adını içeren bir mesajla açılır. Fiyat, stok ve Tokat Merkez servis durumu bu yazışmada netleşir.",
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const orderSteps = [
  {
    number: "01",
    title: "Tüp Çeşidini Seç",
    text: "Ev, piknik, sanayi, ticari veya diğer tüp çeşitleri arasından ihtiyacınıza uygun olanı belirleyin.",
  },
  {
    number: "02",
    title: "WhatsApp'tan Bize Yaz",
    text: "Sipariş bağlantısı, seçtiğiniz ürünün adını içeren hazır bir mesajla WhatsApp'ı açar.",
  },
  {
    number: "03",
    title: "Servis ve Sipariş Detaylarını Netleştir",
    text: "Tokat Merkez için stok, fiyat ve servis uygunluğunu birlikte konuşup siparişi netleştiririz.",
  },
] as const;

export const aboutCopy = {
  title: "1977'den bugüne Tokat Merkez",
  lead: "Turanlar Ticaret, 1977'den bugüne Tokat Merkez'de hizmet verir. Yıllar boyu güvenli, samimi ve dürüst bir alışveriş gerçekleştirir.",
  paragraphs: [
    "Hürgaz tüp çeşitlerinin satışını Tokat Merkez'de yaparız. Ev tipi, piknik tipi, sanayi tipi ve ticari kullanıma yönelik tüplerin yanında stoktaki diğer seçenekler için de yazabilirsiniz.",
    "Sipariş WhatsApp hattından, servis talebi sabit telefondan alınır. Sitede fiyat, sepet veya online ödeme yer almaz. Stok, fiyat ve servis uygunluğu her siparişte ayrıca konuşulur.",
    "Hizmet bölgesi Tokat Merkez'dir. Müşteri sayısı veya yetkili bayi unvanı gibi paylaşılmamış bilgiler bu sitede kullanılmaz.",
  ],
} as const;
