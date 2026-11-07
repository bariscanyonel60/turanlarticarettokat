// TODO: depozito, teslim süresi ve doğrulanmamış fiyat bu metinlere yazılmaz.
import type { ProductFaq } from "@/types/product";

export type TubeGuide = {
  longDescription: string;
  features: string[];
  faq: ProductFaq[];
};

const safety =
  "Tüpü değiştirirken ocağı kapatın, ortamda açık alev olmasın. Hortum çatlak, ezik ya da sertse yenilemeden kullanmayın. Regülatör tüpe tam otursun. Bağlantıya sabunlu su sürdüğünüzde kabarcık çıkıyorsa vanayı kapatın. Tüp düz zeminde, devrilmeyecek şekilde dursun. Kapalı yerde pencere açık kalsın. Gaz kokusu alırsanız ateş yakmayın, elektrik anahtarıyla oynamayın ve 0356 228 52 54'ü arayın. Hortum ve regülatörün bu tüpe uyup uymadığını da siparişte sorun.";

export const tubeGuides: Record<string, TubeGuide> = {
  "ev-tipi-tup": {
    longDescription: `2 kg ev tipi tüp, az yemek pişen mutfaklar için küçük Hürgaz tüpüdür. Çay, kahvaltı ve kısa ocak işi için yeter. Tek kişilik evde yer kaplamaz. Ne kadar süreceği evden eve değişir.

Siparişi WhatsApp'tan bırakabilir, servis için arayabilirsiniz. Stok o günkü duruma göre söylenir.

${safety}`,
    features: [
      "2 kg dolum, Hürgaz ev tüpü",
      "Günlük mutfak işi",
      "Sipariş WhatsApp, servis telefon",
    ],
    faq: [
      {
        question: "2 kg ev tipi tüp kimler için?",
        answer:
          "Az gaz harcayan mutfaklar için. Çay ve kısa pişirme işlerinde rahat eder. Ne kadar gideceği evin kullanımına bağlı.",
      },
      {
        question: "2 kg ev tipi tüpün fiyatı nedir?",
        answer:
          "Kartta fiyat varsa o günkü fiyattır. Yoksa WhatsApp'tan ya da 0356 228 52 54'ten sorun. Depozito ve bırakma saatini de o görüşmede konuşuruz.",
      },
    ],
  },
  "12kg-ev-tupu": {
    longDescription: `12 kg ev tüpü, her gün yemek pişen evlerin en çok sorduğu Hürgaz tüptür. Ocak ve düzenli mutfak işi için tercih edilir. Bir evde kaç gün gideceği ocağın ne kadar yandığına bağlıdır.

Siparişi WhatsApp'tan açabilirsiniz. Servis için 0356 228 52 54'ü arayın. Adresin Tokat Merkez'de olup olmadığına birlikte bakarız.

${safety}`,
    features: [
      "12 kg dolum, Hürgaz ev tüpü",
      "Günlük ev mutfağı",
      "Sipariş WhatsApp, servis telefon",
    ],
    faq: [
      {
        question: "12 kg ev tüpü nerede kullanılır?",
        answer:
          "Ev mutfağında, her gün yemek pişen yerlerde. Kaç gün yeteceği evin tüketimine bağlı.",
      },
      {
        question: "12 kg ev tüpünün fiyatı nedir?",
        answer:
          "Kartta yazıyorsa güncel fiyat odur. Yazmıyorsa WhatsApp ya da telefondan sorun. Depozito ve bırakma saatini de orada konuşuruz.",
      },
    ],
  },
  "piknik-tupu": {
    longDescription: `Piknik tüpü, vitrindeki mavi tüptür. Kamp ocağı, semaver ve açık alanda kısa pişirme için sorulur. Fotoğrafta kilogram yazmadığı için dolum miktarını burada tahmin etmiyoruz. Net rakamı WhatsApp'tan sorun.

Sipariş WhatsApp ile verilir. Hangi ocağa uyduğu, hortum ve muslukla birlikte stoktan konuşulur.

${safety} Piknik tüpünü kapalı ve havasız bir odada ısıtıcı gibi kullanmayın. Kullanırken düz dursun.

Fiyat ve bırakma koşulu kartta yoksa arayın, söyleyelim.`,
    features: [
      "Taşınabilir mavi piknik tüpü",
      "Kamp ve kısa pişirme",
      "Dolum miktarı fotoğrafta yazmıyor, sorun",
    ],
    faq: [
      {
        question: "Piknik tüpü kaç kilogramdır?",
        answer:
          "Vitrindeki fotoğrafta kilogram yazmıyor. Net dolumu WhatsApp'tan sorun.",
      },
      {
        question: "Piknik tüpü evin içinde kullanılır mı?",
        answer:
          "Taşınabilir pişirme içindir. Kapalı ve havasız bir yerde ısıtıcı gibi kullanmayın. Hortumu kullanmadan önce kontrol edin.",
      },
    ],
  },
  "sanayi-tipi-tup": {
    longDescription: `24 kg sanayi tüpü, iş yeri ve daha çok gaz yakan yerler için Hürgaz tüpüdür. Lokanta, imalathane ve sürekli yanan ocaklar bunu sorar. Her ev mutfağına uygun diye anlatmayız. Cihazın bağlantısı ve iş yerinin Tokat Merkez'de olması birlikte bakılır.

Sipariş WhatsApp ile açılır, servis telefonla alınır. Stok o günkü duruma göre söylenir.

${safety} Sanayi tüpünün vanasını ev tüpü bağlantısıyla karıştırmayın. Emin değilseniz takmadan önce arayın.`,
    features: [
      "24 kg dolum, Hürgaz sanayi tüpü",
      "İş yeri ve yüksek tüketim",
      "Sipariş WhatsApp, servis telefon",
    ],
    faq: [
      {
        question: "24 kg sanayi tüpü eve gelir mi?",
        answer:
          "Tokat Merkez'deki iş yerlerine bırakıyoruz. Ev mutfağı için genelde 2 kg veya 12 kg bakılır. İş yeriniz Merkez'deyse adedi yazın, bakalım.",
      },
      {
        question: "Sanayi tüpünün fiyatı nedir?",
        answer:
          "Kartta yazıyorsa o günkü fiyattır. Yazmıyorsa WhatsApp'tan sorun. Adet ve bırakma saatini de orada konuşuruz.",
      },
    ],
  },
};
