// TODO: depozito, teslim süresi ve doğrulanmamış fiyat bu metinlere yazılmaz.
import type { ProductFaq } from "@/types/product";

export type TubeGuide = {
  longDescription: string;
  features: string[];
  faq: ProductFaq[];
};

const safety =
  "Tüp değişirken ocak kapalı olsun ve ortamda açık alev bulunmasın. Hortum çatlak, ezik ya da sertleşmişse bağlantı yenilenmeden kullanılmamalı. Regülatör tüpe tam oturmalı. Bağlantı noktasında sabunlu su kabarcık yapıyorsa kullanım bırakılır, vana kapatılır. Tüp düz zeminde, devrilmeyecek şekilde durur. Kapalı yerde havalandırma açık tutulur. Gaz kokusu alınırsa ateş yakılmaz, elektrik anahtarıyla oynanmaz; Turanlar Ticaret 0356 228 52 54 hattından aranır. Hortum, kelepçe ve regülatörün tüpe uyup uymadığı siparişte sorulur; uygunluk fotoğraftan tahmin edilmez. Değişim sırasında tüpün vanası kapalı tutulur ve eski bağlantı zorlanarak sökülmez.";

export const tubeGuides: Record<string, TubeGuide> = {
  "ev-tipi-tup": {
    longDescription: `2 kg ev tipi tüp, mutfakta daha az gaz kullanan evler için satılan küçük Hürgaz ev tüpüdür. Günlük ocak işi, çay ve kısa süreli pişirme için tercih edilir. Tek kişilik ya da seyrek yemek pişen mutfaklarda yer kaplamadan durur. Tüketim evden eve değişir; ne kadar süreceği bu sayfada yazılmaz.

Tokat Merkez'de sipariş Turanlar Ticaret'e WhatsApp veya telefonla verilir. Stok, o günkü satış koşuluyla birlikte konuşulur. Sitede sepet ve online ödeme yoktur.

${safety}`,
    features: [
      "2 kg dolum, ev tipi Hürgaz tüp",
      "Günlük mutfak kullanımı",
      "Sipariş WhatsApp, servis talebi telefon",
    ],
    faq: [
      {
        question: "2 kg ev tipi tüp kimler için uygundur?",
        answer:
          "Daha az gaz kullanan ev mutfakları için satılır. Günlük ocak ve çay gibi kısa pişirme işlerinde tercih edilir. Ne kadar süreceği eve göre değişir ve burada süre verilmez.",
      },
      {
        question: "2 kg ev tipi tüpün fiyatı nedir?",
        answer:
          "Güncel fiyat bu sayfada rakam olarak yazmıyorsa WhatsApp veya 0356 228 52 54 hattından sorulur. Depozito ve teslim süresi ayrıca konuşulur.",
      },
    ],
  },
  "12kg-ev-tupu": {
    longDescription: `12 kg ev tüpü, Tokat Merkez'de ev mutfağında günlük pişirme için satılan Hürgaz ev tüpüdür. Aile mutfağında ocak, fırın ve düzenli yemek için en sık sorulan ev tüpüdür. Tüpün bir evde kaç gün gideceği ocak sayısına ve pişirme alışkanlığına bağlıdır; bu sayfa süre vermez.

Sipariş Turanlar Ticaret WhatsApp hattından açılır. Servis talebi 0356 228 52 54 numaralı telefondan alınır. Adresin Tokat Merkez içinde olup olmadığı yazışmada netleşir.

${safety}`,
    features: [
      "12 kg dolum, ev tipi Hürgaz tüp",
      "Günlük ev mutfağı kullanımı",
      "Sipariş WhatsApp, servis talebi telefon",
    ],
    faq: [
      {
        question: "12 kg ev tüpü nerede kullanılır?",
        answer:
          "Ev mutfağında günlük pişirme için satılır. Kaç gün yeteceği evin tüketimine bağlıdır ve burada gün sayısı verilmez.",
      },
      {
        question: "12 kg ev tüpünün fiyatı nedir?",
        answer:
          "Güncel fiyat kartta yazmıyorsa WhatsApp veya telefondan sorulur. Depozito ve teslim süresi bu sayfada belirtilmez.",
      },
    ],
  },
  "piknik-tupu": {
    longDescription: `Piknik tüpü, Turanlar Ticaret vitrininde kamp ve taşınabilir pişirme için duran mavi tüptür. Küçük ocak, semaver ve açık alanda kısa süreli pişirme için sorulur. Fotoğrafta kilogram yazmadığı için bu sayfada dolum miktarı belirtilmez.

Tokat Merkez siparişi WhatsApp ile verilir. Tüpün hangi ocağa uyduğu, hortum ve musluk dahil, stokta olan parçayla birlikte konuşulur. Sitede sepet yoktur.

${safety} Piknik tüpü kapalı ve havasız bir odada ısıtıcı gibi kullanılmamalıdır. Kullanım sırasında tüpün düz durduğundan emin olun.

Fiyat, kilogram ve teslimat koşulu kartta yoksa WhatsApp veya telefondan sorulur.`,
    features: [
      "Taşınabilir piknik tüpü",
      "Kamp ve kısa süreli pişirme",
      "Dolum miktarı fotoğrafta yazmadığı için boş bırakıldı",
    ],
    faq: [
      {
        question: "Piknik tüpü kaç kilogramdır?",
        answer:
          "Vitrindeki fotoğrafta kilogram yazmıyor. Dolum miktarı bu yüzden sayfada belirtilmez. Net bilgi için WhatsApp'tan sorun.",
      },
      {
        question: "Piknik tüpü evin içinde kullanılır mı?",
        answer:
          "Taşınabilir pişirme içindir. Kapalı ve havasız bir yerde ısıtıcı gibi kullanılmamalıdır. Hortum ve bağlantı, kullanımdan önce kontrol edilir.",
      },
    ],
  },
  "sanayi-tipi-tup": {
    longDescription: `24 kg sanayi tüpü, iş yeri ve daha yüksek gaz ihtiyacı olan kullanım için satılan Hürgaz tüptür. Lokanta, imalathane ve sürekli çalışan ocaklar bu tüpü sorar. Her eve uygun bir mutfak tüpü olarak anlatılmaz. Uygunluk, cihazın bağlantısı ve iş yerinin Tokat Merkez'de olması birlikte kontrol edilir.

Sipariş WhatsApp ile açılır, servis talebi telefonla alınır. Stok ve o günkü satış koşulu yazışmada netleşir. Sitede online ödeme yoktur.

${safety} Sanayi tüpünün vanası ve yüksek tüketimli cihazın regülatörü, ev tüpü bağlantısıyla karıştırılmadan kontrol edilir. Emin olunmayan bağlantı takılmadan Turanlar Ticaret'e sorulur.`,
    features: [
      "24 kg dolum, sanayi tipi Hürgaz tüp",
      "İş yeri ve yüksek tüketim",
      "Sipariş WhatsApp, servis talebi telefon",
    ],
    faq: [
      {
        question: "24 kg sanayi tüpü eve uygun mudur?",
        answer:
          "İş yeri ve yüksek tüketim için satılır. Ev mutfağına uygun olup olmadığı, cihaz ve bağlantı sorulmadan söylenmez.",
      },
      {
        question: "24 kg sanayi tüpünün fiyatı nedir?",
        answer:
          "Güncel fiyat kartta yazmıyorsa WhatsApp veya telefondan sorulur. Depozito ve teslim süresi bu sayfada yer almaz.",
      },
    ],
  },
};
