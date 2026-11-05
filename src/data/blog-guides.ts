import type { Post } from "@/data/posts";

const published = { date: "2026-11-05", dateLabel: "5 Kasım 2026" } as const;

export const guidePosts: readonly Post[] = [
  {
    ...published,
    slug: "tokat-tup",
    title: "Tokat Tüp Siparişi",
    description:
      "Tokat tüp siparişi için Turanlar Ticaret. 1977'den bugüne Tokat Merkez'de Hürgaz ev, piknik ve sanayi tüpü; fiyat WhatsApp'ta, kapanış 22:00.",
    links: [
      { href: "/urunler", label: "Tüp çeşitleri" },
      { href: "/hizmetlerimiz", label: "Tokat Merkez hizmetleri" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
      { href: "/iletisim", label: "Adres ve telefon" },
    ],
    sections: [
      {
        heading: "Tokat tüp araması ne anlatır",
        paragraphs: [
          "Tokat tüp diye arayan kişinin sorusu çoğu zaman aynıdır: evde, piknikte ya da iş yerinde kullanılacak tüp Tokat Merkez'de kimden alınır, sipariş nasıl bırakılır ve servis hangi sınırın içinde konuşulur. Bu yazı o soruyu Turanlar Ticaret'in gerçekten yaptığı iş üzerinden cevaplar. Sitede sepet, üyelik ve online ödeme yoktur. Tüp çeşidi seçilir, stok ve fiyat yazışmada veya telefonda netleşir.",
          "Turanlar Ticaret, 1977'den bugüne Tokat Merkez'de hizmet verir. Yıllar boyu güvenli, samimi ve dürüst bir alışveriş çizgisi işletmenin kendi tarifidir. Satılan marka Hürgaz'dır. İşletme bu sitede kendini yetkili bayi diye tanımlamaz ve müşteri sayısı paylaşmaz. Hizmet bölgesi Tokat Merkez'dir; ilçe veya il dışı için düzenli servis vaadi yoktur.",
        ],
      },
      {
        heading: "Tokat Merkez'de hangi tüpler bulunur",
        paragraphs: [
          "Ev tipi tarafta iki ayrı ürün vardır. Biri mutfak ve günlük kullanım için 2 kg ev tipi tüptür. Diğeri yine mutfak için 12 kg ev tüpüdür. İkisi aynı ürünün iki adı değildir. Piknik tüpü kamp ve taşınabilir kullanım içindir; kilogramı sitede yazılmaz, siparişte sorulur. Sanayi tarafında 24 kg sanayi tüpü vardır. Restoran ve ticari mutfaklar için ayrı bir ticari kullanım tüpü sayfası bulunur; onun da kilogramı siparişte netleşir. Stoktaki diğer seçenekler, fotoğrafı henüz eklenmemiş ayrı bir başlık altındadır.",
          "2 kg ve 12 kg ev tüpleri, piknik tüpü ve 24 kg sanayi tüpü için işletmenin verdiği fotoğraflar ürün sayfalarındadır. Ticari ve diğer çeşitlerde fotoğraf yoktur; sayfa bunu çizimle kapatıp gerçek ürün fotoğrafı gibi sunmaz. Kapasitesi yazılanlar yalnızca 2 kg, 12 kg ve 24 kg'dır. Yazılmayan kilograma tahmin eklenmez.",
        ],
      },
      {
        heading: "Sipariş nereden verilir",
        paragraphs: [
          "Tokat'ta tüp siparişi vermek için Turanlar Ticaret ile iletişime geçilir. Ürün sayfasındaki bağlantı, seçilen tüpün adını içeren hazır bir mesajla WhatsApp'ı açar. Mesaj kabaca şunu söyler: ürün hakkında bilgi almak ve sipariş vermek istendiği, Tokat Merkez için servis durumunun sorulduğu. Genel sipariş cümlesi de aynı hatta gider. Hazır mesaj bir satış fişi değildir. Online tahsilat yapılmaz.",
          "WhatsApp hattı +90 555 860 63 69 numarasıdır. Servis talebi sabit telefon 0356 228 52 54 üzerinden alınır. İki kanal da işletmeye aittir. Sitede hesap açılmaz. Fiyat, tüpün türüne, kapasitesine ve güncel satış koşullarına göre değişebilir; bu yüzden sitede rakam yoktur. Güncel fiyat WhatsApp yazışmasında öğrenilir.",
        ],
      },
      {
        heading: "Eve ve iş yerine servis",
        paragraphs: [
          "Turanlar Ticaret, Tokat Merkez'de evlere ve iş yerlerine tüp servisi sunar. Teslimat bilgisi telefon veya WhatsApp ile alınır. Servis vardır diye sabit bir dakika, aynı gün garantisi veya ücretsiz servis yazılmaz. Adresin Merkez sınırında olup olmadığı ve o anki stok, her talepte ayrıca konuşulur. İlçeye veya Tokat dışına gidildiği bu sitede iddia edilmez.",
          "Siparişi hızlandıran şey abartılı bir vaat değil, net bilgidir. Yazarken tüpün adını, mahalleyi ve kullanımın ev mi iş yeri mi olduğunu söylemek yeter. Kapanış saati 22:00'dır. Açılış saati ve çalışma günleri sitede boş bırakılmıştır; bunlar telefonda öğrenilir. Gece yarısı kesintisiz hizmet iddiası yoktur.",
        ],
      },
      {
        heading: "Satış noktası ve harita",
        paragraphs: [
          "Adres Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C, Merkez / Tokat, 60000'dir. İletişim sayfasındaki harita, işletmenin Google kaydını açar. Yol tarifi de bu adrese göre alınır. Instagram profili instagram.com/turanlar8852 adresindedir. Profil bir sipariş formu değildir; sipariş yine WhatsApp ve telefondadır.",
          "Tokat tüp aramasında karşılaşılan üçüncü taraf fiyat listeleri bu sitenin kataloğu sayılmaz. Burada yazan kapasiteler, işletmenin verdiği ürün bilgisi ve fotoğraflarla sınırlıdır. Karar vermeden önce ürün sayfasını açıp çeşidi görmek, sonra WhatsApp'tan stok ve fiyat sormak doğru sıradır.",
        ],
      },
      {
        heading: "Yazıyı okuduktan sonra",
        paragraphs: [
          "Tokat tüp ihtiyacı tek bir ürüne indirgenemez. Mutfak için 2 kg veya 12 kg, taşınabilir kullanım için piknik tüpü, iş yeri için 24 kg sanayi tüpü ayrı sayfalardadır. Hangisinin uygun olduğu kullanım yerine ve stoğa göre birlikte seçilir. Sıkça sorulan sorular sayfası sipariş, servis, Hürgaz, ev ve piknik, fiyat ve sanayi başlıklarını kısa cevaplarla toplar. Bu yazı o kısa cevapların geniş halidir.",
          "Satın alma bu sayfada tamamlanmaz. Teşekkür sayfası da bir sipariş onayı değildir. Görüşme bittikten sonra stok, fiyat ve Tokat Merkez servisi konuşulmuş olur. Kapanış 22:00 olduğu için geç saatte bırakılan mesajın dönüşü bir sonraki çalışma dilimine kalabilir. Açılış saati telefonda teyit edilir.",
        ],
      },
      {
        heading: "Tokat tüp sayfasında ne aranmaz",
        paragraphs: [
          "Bu sitede sepet, üyelik, kartla ödeme ve kayıtlı adres defteri yoktur. Kişi tüpü seçer, WhatsApp veya sabit telefonu kendisi açar. Hazır mesaj yalnızca ürün adını ve Tokat Merkez servis sorusunu taşır. Mesaj gönderilmeden stok ayırılmaz, fiyat kilitlenmez ve kurye çıkmaz. Teşekkür sayfasına dönmek de siparişin tamamlandığı anlamına gelmez. Tamamlanan şey, görüşmenin kendisidir.",
          "Aramada sık geçen ama burada yazılmayan başlıklar da vardır. İlçe servisi, il dışı sevkiyat, ücretsiz taşıma, dakika cinsinden teslimat, gece boyu açık olma ve yetkili bayi unvanı bunlardandır. Müşteri sayısı ve puan da yazılmaz. Google kaydındaki yorumlar Google'ın kendi kartında kalır; metinleri bu yazıya kopyalanmaz. Tokat tüp kararı, ürün sayfası ile 0356 228 52 54 veya WhatsApp hattı arasında verilir.",
          "Ana sayfanın görünür başlığı da Tokat Tüp'tür. Bu yazı aynı aramanın uzun halidir. Altındaki bağlantılar tüp çeşitlerine, Tokat Merkez hizmetlerine, sıkça sorulan sorulara ve adrese gider. Hakkımızda sayfası 1977 cümlesini, gizlilik sayfası ise verinin ancak kişi aradığında veya WhatsApp'tan yazdığında oluştuğunu anlatır. Sıra değişmez: çeşit seçilir, hat açılır, fiyat ve servis o görüşmede öğrenilir. Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C, Merkez / Tokat adresindedir.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-ev-tipi-tup",
    title: "Tokat Ev Tipi Tüp",
    description:
      "Tokat ev tipi tüp: Turanlar Ticaret'te 2 kg ve 12 kg Hürgaz mutfak tüpleri ayrı ürünlerdir. Tokat Merkez siparişi WhatsApp veya 0356 228 52 54 ile verilir.",
    links: [
      { href: "/urunler/ev-tipi-tup", label: "2 kg ev tipi tüp" },
      { href: "/urunler/12kg-ev-tupu", label: "12 kg ev tüpü" },
      { href: "/urunler/piknik-tupu", label: "Piknik tüpü" },
      { href: "/sss", label: "Ev tüpü soruları" },
    ],
    sections: [
      {
        heading: "Ev tipi tüp Tokat Merkez'de neyin adıdır",
        paragraphs: [
          "Tokat ev tipi tüp, mutfak ve günlük kullanım için satılan tüpleri anlatır. Turanlar Ticaret bu başlık altında iki ayrı Hürgaz ürünü tutar: 2 kg ev tipi tüp ve 12 kg ev tüpü. İkisi de ev ve mutfak kullanımı için listelenir. Biri diğerinin küçük yazılmış hali değildir. Ürün sayfalarının açıklamaları da bu ayrımı özellikle söyler. Piknik tüpü ev tipi listenin içinde değildir; kamp ve taşınabilir kullanım için ayrı bir sayfası vardır.",
          "Satış Tokat Merkez ile sınırlıdır. 1977'den bugüne aynı işletme, güvenli, samimi ve dürüst alışveriş tarifini ev tüpü siparişinde de kullanır. Sitede fiyat yazılmaz. Güncel bedel, tüpün türüne ve o günkü satış koşuluna göre WhatsApp'ta konuşulur. Sepet yoktur. Bir tüpe tıklamak tarayıcıda WhatsApp'ı veya telefonu açar.",
        ],
      },
      {
        heading: "2 kg ev tipi tüp",
        paragraphs: [
          "2 kg ev tipi tüp, mutfak ve günlük kullanım için listelenen daha küçük kapasitedir. Sitede görünen kapasite 2 kg'dır. Fotoğraf, işletmenin verdiği gümüş Hürgaz tüpüdür. Etikette birden fazla gaz adı görülse bile site, tüpün aynı anda hem bütan hem propan dolu olduğunu söylemez. Siparişte hangi dolumun stokta olduğu sorulur. Dara veya taşıma ağırlığı ürün kartında ayrıca bir vaat olarak yazılmaz.",
          "Küçük kapasite, az yer kaplayan ve daha seyrek tüp kullanan evler için bakılan seçenektir. Kaç günde biteceği bu sitede hesaplanmaz; kullanım ocağın sıklığına göre değişir ve işletme buna gün sayısı biçmez. Uygun olup olmadığı stokla birlikte netleşir. Fotoğrafı olmayan bir kapasite uydurulmaz.",
        ],
      },
      {
        heading: "12 kg ev tüpü",
        paragraphs: [
          "12 kg ev tüpü, mutfak ve günlük kullanım için listelenen daha büyük ev tüpüdür. Kapasite 12 kg'dır. İşletmenin verdiği fotoğraflarda gümüş halka yakalı Hürgaz tüp ve mavi Hürgaz tüp vardır. İkisi de 12 kg ev tüpü galerisindedir. 2 kg tüple karıştırılmaması için ürün açıklaması ayrı bir ürün olduğunu yazar.",
          "Daha sık ocak kullanan evler 12 kg'a bakar. Yine de site, bir evin mutlaka 12 kg alması gerektiğini söylemez. Seçim, evin kullanımına ve o günkü stoğa göre yapılır. Mavi ve gümüş görünümden hangisinin elde olduğu WhatsApp'ta sorulur. Fotoğraf, stoktaki her tüpün birebir kopyası diye sunulmaz; işletmenin gösterdiği ürün görselidir.",
        ],
      },
      {
        heading: "Ev tüpü ile piknik tüpünü ayırmak",
        paragraphs: [
          "Tokat'ta ev tüpü ve piknik tüpü satışı yapılır. Ev tüpü mutfak içindir. Piknik tüpü kamp, piknik ve taşınabilir kullanım içindir. Piknik tüpünün kilogramı işletme tarafından ayrıca belirtilmediği için sitede boştur. Mavi piknik fotoğrafı, 2 kg mutfak tüpünün ikinci görseli değildir. İki sayfayı yan yana açmak karışıklığı keser.",
          "Piknik tüpünü ev tüpü diye sipariş etmek yanlış ürün mesajı üretir. WhatsApp metni, tıklanan sayfanın adını taşır. 2 kg sayfasından yazılırsa mesaj 2 kg ev tipi tüpü söyler. Piknik sayfasından yazılırsa piknik tüpünü söyler. Emin olunmayan ihtiyaçta her iki adı da yazıp hangisinin stokta olduğunu sormak yeterlidir.",
        ],
      },
      {
        heading: "Tokat Merkez'de eve servis",
        paragraphs: [
          "Ev tipi tüp için servis, Tokat Merkez'deki evlere yöneliktir. Teslimat bilgisi telefon veya WhatsApp ile alınır. Süre için dakika yazılmaz. Ücretsiz servis veya kesintisiz gece hizmeti de yazılmaz. Kapanış 22:00'dır. Açılış ve haftanın hangi günleri olduğu telefonda öğrenilir. Adres Merkez dışındaysa düzenli hizmet vaadi verilmez.",
          "Servis talebi için sabit hat 0356 228 52 54'tür. Sipariş ve ürün sorusu için WhatsApp +90 555 860 63 69'dur. Ev adresini, mahalleyi ve istenen kapasiteyi aynı mesajda yazmak görüşmeyi uzatmaz. Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C, Merkez / Tokat adresindedir. Harita bu kaydı açar.",
        ],
      },
      {
        heading: "Evde kullanım için sitede olmayanlar",
        paragraphs: [
          "Site montaj, kaçak kontrolü veya tesisat işi sattığını söylemez. Tüpün dik durması, havalanan bir yerde tutulması ve kaçak şüphesinde vananın kapatılıp ateşten uzak durulması genel kullanım bilgisidir; işletmenin ayrıca sattığı bir kontrol paketi değildir. Arıza ve bağlantı için ne yapılabileceği telefonda sorulur, sitede işlem adımı diye yazılmaz.",
          "Fiyat karşılaştırması için üçüncü parti listeler kaynak kabul edilmez. 2 kg ve 12 kg kartlarında rakam yoktur. Güncel koşul WhatsApp'tadır. Sipariş bu blog sayfasında kapanmaz. Ürün sayfasına geçip ilgili tüpün bağlantısını kullanmak, hazır mesajın doğru ürün adını taşımasını sağlar.",
        ],
      },
      {
        heading: "Ev tipi tüp siparişinde sorulacaklar",
        paragraphs: [
          "Eve tüp isterken ilk ayrım kapasitedir. 2 kg ev tipi tüp ile 12 kg ev tüpü aynı mutfak başlığının altında durur ama ayrı ürünlerdir. Hangisinin elde olduğu, gümüş ya da mavi görünümün o günkü stokta bulunup bulunmadığı ve adresin Tokat Merkez içinde olup olmadığı aynı konuşmada sorulur. Piknik tüpü bu ikilinin yedeği gibi eklenmez. Taşınabilir ihtiyaç varsa adı ayrıca yazılır.",
          "İkinci ayrım kanaldır. Ürün bilgisi ve sipariş cümlesi WhatsApp hattına, servis talebi 0356 228 52 54 numarasına gider. İkisi de Turanlar Ticaret'e ulaşır. Sitede form, üyelik ve ödeme adımı olmadığı için eksik kalan tek şey kişinin kendi cümlesidir: tüpün adı, mahalle ve ev adresi. Kapanış 22:00'dır. O saatten sonra bırakılan yazının hemen servise çıktığı varsayılmaz. Açılış saati telefonda öğrenilir.",
          "Ev tipi tüp yazısını okuyan kişi 2 kg ve 12 kg sayfalarını ayrı açmalıdır. Hazır mesaj, tıklanan kartın adını taşır. Yanlış kart, yanlış ürün cümlesi üretir. Mavi bir tüp görmek tek başına 12 kg veya piknik kararı değildir. 12 kg galerisindeki mavi kare ev tüpüne, piknik sayfasındaki mavi tüp taşınabilir kullanıma aittir. Ölçüsü yazılmayan piknik tüpü bu ev yazısının yerine geçmez. Satış noktası Bahçelievler'dedir. Sipariş yine WhatsApp ve 0356 228 52 54 ile, yalnızca Tokat Merkez için konuşulur.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-tup-teslimati",
    title: "Tokat'ta Tüp Teslimatı",
    description:
      "Tokat'ta tüp teslimatı Turanlar Ticaret ile Tokat Merkez'deki ev ve iş yerleri içindir. Süre siparişte netleşir; sitede dakika veya ücretsiz servis vaadi yoktur. Kapanış 22:00.",
    links: [
      { href: "/hizmetlerimiz", label: "Servis bölgesi" },
      { href: "/iletisim", label: "Telefon ve adres" },
      { href: "/sss", label: "Servis sorusu" },
      { href: "/urunler", label: "Sipariş edilecek tüpler" },
    ],
    sections: [
      {
        heading: "Hızlı teslimat arayan kişi ne sormalı",
        paragraphs: [
          "Tokat'ta hızlı tüp teslimatı diye arayan kişi aslında iki şeyi öğrenmek ister: tüp eve veya iş yerine gelir mi, ne kadar sürede gelir. Birinci sorunun cevabı işletmenin kendi metnindedir. Turanlar Ticaret, Tokat Merkez'de evlere ve iş yerlerine tüp servisi sunar. İkinci sorunun cevabı sitede sabit bir dakika değildir. Teslimat bilgisi her siparişte telefon veya WhatsApp ile alınır. Dakika, aynı gün garantisi veya ücretsiz servis yazılmaz.",
          "Bu ayrım bilerek yapılır. Doğrulanmamış bir hız vaadi, adresi Merkez dışında olan ya da stokta olmayan bir talebi yanıltır. Hız, sitede bir slogan olarak değil, görüşmede netleşen servis durumu olarak durur. Kapanış 22:00'dır. Bu saatten sonra yeni bir teslimat penceresi açıldığı iddia edilmez. Açılış saati ve çalışma günleri boştur; telefonda sorulur.",
        ],
      },
      {
        heading: "Teslimatın sınırı Tokat Merkez",
        paragraphs: [
          "Servis bölgesi Tokat Merkez'dir. İlçelere veya Tokat dışına düzenli hizmet verildiği söylenmez. Sipariş yazılırken adresin Merkez içinde olup olmadığı birlikte kontrol edilir. Sınır, yanlış teslim beklentisini baştan kapatmak içindir. Uygunluk her talepte ayrıca değerlendirilir.",
          "Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C adresindeki satış noktası da Merkez / Tokat, 60000 içindedir. Harita bu işletme kaydını gösterir. Yol tarifi almak, teslimat süresinin kendiliğinden kısaldığı anlamına gelmez. Mağazadan almak ile adrese servis ayrı konuşulur. Hangisinin o an mümkün olduğu telefonda belli olur.",
        ],
      },
      {
        heading: "Sipariş teslimata nasıl bağlanır",
        paragraphs: [
          "Sıra üç adımdır. Önce tüp çeşidi seçilir: 2 kg veya 12 kg ev tüpü, piknik tüpü, 24 kg sanayi tüpü, ticari kullanım veya stoktaki diğer seçenek. Sonra WhatsApp, ürün adını taşıyan bir mesajla açılır. Mesaj, Tokat Merkez için servis durumunu da sorar. Üçüncü adımda stok, fiyat ve servis uygunluğu birlikte netleşir. Hazır mesaj siparişi kendiliğinden tamamlamaz.",
          "Servis talebi sabit telefon 0356 228 52 54 ile de bırakılır. WhatsApp hattı +90 555 860 63 69'dur. Teslimat konuşmasında işe yarayan bilgiler tüpün adı, mahalle ve yerin ev mi iş yeri mi olduğudur. Eksik adres, süreyi kısaltmaz; görüşmeyi uzatır. Site bu bilgileri form diye toplamaz. Kişi kendisi yazar veya arar.",
        ],
      },
      {
        heading: "Süre neden sitede yok",
        paragraphs: [
          "Teslimat süresi stok, adres ve o anki servis sırasına bağlıdır. Bunlar gün içinde değişir. Tek bir sayı bütün Tokat için doğru olmaz. Bu yüzden hizmet metinleri, doğrulanmamış süre veya ücretsiz servis vaadi paylaşmamayı açıkça yazar. Blog da aynı çizgidedir. Hızlı teslimat araması, vaatsiz bir servis açıklamasına düşer.",
          "Kapanış 22:00 bilgisi, günün hangi diliminde aramanın anlamlı olduğunu gösterir. Açılış yazılmadığı için sabahın erken saatinde kapının açık olduğu varsayılmaz. Çalışma günü de varsayılmaz. İkisi de 0356 228 52 54 hattından öğrenilir. Kesintisiz 24 saat hizmet bu işletme için yazılmış bir cümle değildir.",
        ],
      },
      {
        heading: "Eve servis ile iş yeri servisi",
        paragraphs: [
          "Aynı servis cümlesi hem evi hem iş yerini kapsar. Ev tipi tüp çoğunlukla mutfak adresine gider. 24 kg sanayi tüpü ve ticari kullanım tüpü iş yeri, restoran veya ticari mutfak içindir. İkisinin teslim konuşması aynı hat üzerinden yürür. Ürün adı mesajda doğruysa servis de doğru kapasiteyi konuşur. Ev tüpü siparişine sanayi tüpü eklemek için ikinci ürünün adını da yazmak gerekir.",
          "İşletmelere tüp tedarikinde de süre vaadi yoktur. Uygunluk sipariş sırasında konuşulur. Birden fazla tüp, tekrarlayan iş yeri ihtiyacı veya tek seferlik ev ihtiyacı aynı sayfada fiyatlandırılmaz. Adet ve çeşit WhatsApp'ta yazılır. Site adet indirimi uydurmaz.",
        ],
      },
      {
        heading: "Teslimattan sonra kayıt",
        paragraphs: [
          "Sitede teşekkür sayfası vardır. O sayfa, siparişin internette bittiğini söylemez. Stok, fiyat ve Tokat Merkez servisi WhatsApp veya telefonda kalır. Teslimat gerçekleşmeden ekranda tamamlandı ibaresi aranmaz. Gizlilik metni de aynı kapıyı tarif eder: kişisel veri, kişi aradığında veya yazdığında oluşan görüşmeyle sınırlıdır.",
          "Tokat'ta tüp teslimatı arayan kişi için kısa yol şudur. Ürünü seçin, WhatsApp veya 0356 228 52 54 ile Tokat Merkez adresinizi söyleyin, süreyi o görüşmeden alın. Kapanış 22:00'dır. İlçe ve il dışı için bu siteden söz beklemeyin. Güncel fiyat da aynı görüşmededir.",
        ],
      },
      {
        heading: "Hızlı teslimat cümlesi neden dakika taşımaz",
        paragraphs: [
          "Arama sonuçlarında hızlı teslimat, çoğu zaman tek bir saat vaadi gibi okunur. Turanlar Ticaret bu vaadi koymaz. Tokat Merkez'de eve ve iş yerine servis vardır. Servisin o adrese hangi sırayla gideceği, tüpün stokta olup olmadığı ve günün saatine göre değişir. Kapanış 22:00 bu pencerenin sonunu gösterir. Açılış ve haftanın günleri yazılmadığı için sabahın ilk saati ya da pazar günü açık kabul edilmez. İkisi de sabit telefondan sorulur.",
          "Hızı artıran şey sitede yazılmış bir dakika değil, eksiksiz taleptir. Tüpün adı, mahalle ve yerin ev ya da iş yeri olduğu belliysa konuşma kısa sürer. Ürün sayfasından açılan WhatsApp metni adı hazır getirir. Kişi adresini ekler. Karşı taraf stok ve servis durumunu söyler. Bu sıra, hızlı teslimat aramasının dürüst karşılığıdır. Ücretsiz taşıma, ilçe servisi ve gece boyu açık olma bu karşılığın içinde değildir.",
          "Teslimat sözü verilmeden önce adresin Tokat Merkez olduğu teyit edilir. Bahçelievler'deki satış noktası da bu ilçenin içindedir: Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. Mağazadan almak ile adrese bırakmak aynı anda vaat edilmez. Hangisi mümkünse görüşmede söylenir. Kapanış 22:00 geçildiyse yeni bir tur başlatıldığı yazılmaz. Ertesi dilimin açılışı 0356 228 52 54 hattından öğrenilir. Ürün 2 kg, 12 kg, piknik, 24 kg sanayi veya ticari kullanımdan biri olabilir. Ad, ürün sayfasındaki başlıkla aynı söylenirse servis konuşması da doğru tüpten yürür.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-sanayi-tipi-tup",
    title: "Tokat Sanayi Tipi Tüp",
    description:
      "Tokat sanayi tipi tüp: Turanlar Ticaret Tokat Merkez'de 24 kg Hürgaz sanayi tüpü satar. İş yeri servisi telefon veya WhatsApp ile konuşulur, fiyat sitede yazılmaz.",
    links: [
      { href: "/urunler/sanayi-tipi-tup", label: "24 kg sanayi tüpü" },
      { href: "/urunler/ticari-kullanim-tupu", label: "Ticari kullanım tüpü" },
      { href: "/hizmetlerimiz", label: "İşletmelere tedarik" },
      { href: "/sss", label: "Sanayi tüpü sorusu" },
    ],
    sections: [
      {
        heading: "Sanayi tipi tüp kime yöneliktir",
        paragraphs: [
          "Tokat sanayi tipi tüp araması, ev mutfağından daha yüksek hacim arayan iş yerlerini anlatır. Turanlar Ticaret'te bu başlığın kapasitesi yazılmış ürünü 24 kg sanayi tüpüdür. Kullanım alanı iş yeri ve sanayidir. Fotoğraf, işletmenin verdiği gümüş Hürgaz tüptür. Ev tipi 2 kg ve 12 kg tüplerle aynı kartta durmaz. Karışmaması için ayrı sayfası vardır.",
          "Tokat Merkez'de sanayi tüpü ve ticari kullanım için tüp arayan işletmeler Turanlar Ticaret ile iletişime geçer. İş yerinin ihtiyacına uygun Hürgaz çeşidi, stok ve servis seçenekleri telefon veya WhatsApp ile sorulur. 1977'den bugüne Tokat Merkez'de hizmet veren işletme, sanayi siparişinde de aynı sınırı kullanır: ilçe ve il dışı için düzenli servis yazılmaz.",
        ],
      },
      {
        heading: "24 kg neyin adıdır",
        paragraphs: [
          "24 kg, sitede sanayi tipi tüp için yazılan kapasitedir. Başka bir sanayi kilogramı eklenmemiştir. Katalogda görülmeyen 45 kg veya farklı bir sanayi ölçüsü bu yazıda da yoktur. Stokta başka bir boy çıkarsa o, diğer tüp çeşitleri başlığında ve sipariş konuşmasında ele alınır; blog ona kilogram yakıştırmaz.",
          "Fotoğraf ürün sayfasındadır. Görselin ölçüsü, her sevkiyattaki tüpün birebir kopyası diye sunulmaz. Etiket ve gövde işletmenin gösterdiği Hürgaz sanayi tüpüne aittir. Fiyat fotoğrafın yanında durmaz. Güncel bedel, kapasiteye ve satış koşuluna göre WhatsApp'ta öğrenilir. Üçüncü taraf sanayi fiyat listeleri kaynak sayılmaz.",
        ],
      },
      {
        heading: "Ticari kullanım tüpünden farkı",
        paragraphs: [
          "Restoran, kafe ve ticari mutfaklar için ayrı bir ticari kullanım tüpü sayfası vardır. Onun kilogramı siparişte netleşir. 24 kg sanayi tüpü ile ticari kullanım tüpü aynı kart değildir. Restoran her zaman 24 kg alır diye bir kural da yoktur. İş yeri ihtiyacını anlatırken ocağın türü ve istenen çeşidin adı birlikte yazılır. Uygun başlık görüşmede seçilir.",
          "Ticari sayfada henüz ürün fotoğrafı yoktur. Sayfa bunu çizimle gösterir ve fotoğraf varmış gibi davranmaz. Sanayi sayfasında fotoğraf vardır. Sipariş mesajı, tıklanan sayfanın adını taşır. Yanlış karttan yazılırsa karşı taraf yanlış ürün adını okur. Emin olunmuyorsa her iki ad da mesaja eklenir.",
        ],
      },
      {
        heading: "İş yerine servis nasıl konuşulur",
        paragraphs: [
          "İşletmelere tüp tedariki Tokat Merkez'deki iş yeri, restoran ve ticari mutfaklar içindir. Teslimat süresi veya ücretsiz servis vaadi paylaşılmaz. Uygunluk sipariş sırasında konuşulur. Evlere servis verilmesi, iş yeri siparişinin de aynı cümleyle kapsandığını gösterir: servis hem ev hem iş yeri içindir ve bilgi telefon veya WhatsApp'tan alınır.",
          "Servis hattı 0356 228 52 54'tür. WhatsApp +90 555 860 63 69'dur. Mesajda iş yerinin mahallesi, tüpün adı ve adet istenir. Adet için sitede bir form yoktur. Birden fazla tüp, tekrarlayan ihtiyaç veya tek seferlik geliş, fiyatı sitede kademelendirmez. Kapanış 22:00'dır. Açılış ve çalışma günü telefonda öğrenilir. Gece üretimi için kesintisiz hizmet iddiası yazılmaz.",
        ],
      },
      {
        heading: "Sanayi tüpünde sitede durmayan iddialar",
        paragraphs: [
          "Yetkili bayi unvanı, müşteri sayısı, vergi numarası ve MERSİS bu sitede yoktur. Sanayi tüpü yazısı da bunları tamamlamaz. Marka Hürgaz'dır. Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C, Merkez / Tokat, 60000'dir. Harita Google'daki işletme kaydını açar. Kayıttaki görünen ad ile sitedeki Turanlar Ticaret adı ayrı durur; sipariş bu sitedeki ad ve numaralarla verilir.",
          "Montaj, endüstriyel tesisat veya periyodik kontrol bu yazının sattığı hizmet değildir. Tüpün iş yerinde nasıl bağlanacağı, işletmenin kendi tesisatçısı ve ilgili mevzuat konusudur. Turanlar Ticaret'ten tüp ve Tokat Merkez servis durumu sorulur. Bağlantı taahhüdü uydurulmaz.",
        ],
      },
      {
        heading: "Sipariş hangi sayfadan gider",
        paragraphs: [
          "24 kg için doğru kapı sanayi tipi tüp ürün sayfasıdır. WhatsApp oradan açıldığında mesaj 24 kg sanayi tüpünü söyler ve Tokat Merkez servis durumunu sorar. Ticari mutfak ayrı düşünülüyorsa ticari kullanım sayfası kullanılır. İkisi birden gerekiyorsa iki mesaj veya tek mesajda iki ad yazılır. Blogdaki düğme siparişi tamamlamaz.",
          "Kısa soru cevapları sıkça sorulan sorular sayfasındadır. Sanayi ve iş yeri tüpünün nereden sipariş edildiği orada da Turanlar Ticaret olarak cevaplanır. Bu yazı o cevabın ayrıntısıdır: kapasite 24 kg, bölge Tokat Merkez, fiyat yazışmada, kapanış 22:00, süre vaadi yok.",
        ],
      },
      {
        heading: "İş yeri siparişinde netleşen başlıklar",
        paragraphs: [
          "Sanayi tüpü konuşmasında dört başlık yeter. Birincisi çeşit: 24 kg sanayi tüpü mü, kilogramı siparişte sorulan ticari kullanım tüpü mü. İkincisi adet. Üçüncüsü iş yerinin Tokat Merkez içindeki mahallesi. Dördüncüsü servisin mi yoksa satış noktasından teslimin mi istendiği. Bu dördü WhatsApp veya 0356 228 52 54 hattında sorulur. Sitede adet kutusu, teslimat saati seçici ve fiyat tablosu yoktur.",
          "24 kg fotoğrafı ürün sayfasındadır. Ticari kullanım tüpünün fotoğrafı yoktur. Olmayan görsele kapasite eklenmez. İş yerinin daha büyük veya daha küçük bir tüpe ihtiyacı varsa bu, diğer tüp çeşitleri başlığında ve görüşmede ele alınır. Blog o ihtiyaca yeni bir kilogram yazmaz. Kapanış 22:00'dır. Mesai bitimine yakın bırakılan talep, kapanıştan sonra da servisin sürdüğü anlamına gelmez. Açılış saati ayrıca öğrenilir.",
          "Sanayi tipi tüp ile ev tipi tüp aynı sipariş cümlesine sıkıştırılmaz. Mutfak için 2 kg veya 12 kg, iş yeri için 24 kg ayrı kartlardır. İkisi birden gerekiyorsa mesajda iki ad birden yazılır. Restoran ve kafe, kilogramı boş olan ticari kullanım sayfasına da bakabilir. O sayfada fotoğraf yoktur. Ölçü ve fiyat WhatsApp'ta kalır. Servis bölgesi yine yalnızca Tokat Merkez'dir. Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C adresindedir. İş yeri bu adresten tüpü kendisi de alabilir. Hangisinin mümkün olduğu, stokla birlikte 0356 228 52 54 hattında belli olur.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-piknik-tupu",
    title: "Tokat Piknik Tüpü",
    description:
      "Tokat piknik tüpü Turanlar Ticaret'te taşınabilir kullanım içindir. Kilogram siparişte sorulur. 2 kg mutfak tüpünden ayrıdır. Tokat Merkez, kapanış 22:00.",
    links: [
      { href: "/urunler/piknik-tupu", label: "Piknik tüpü" },
      { href: "/urunler/ev-tipi-tup", label: "2 kg ev tipi tüp" },
      { href: "/sss", label: "Ev ve piknik sorusu" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Piknik tüpü ev tüpünden ayrıdır",
        paragraphs: [
          "Tokat piknik tüpü, kamp, piknik ve taşınabilir kullanım için listelenen tüptür. Turanlar Ticaret'te evlerde kullanılan mutfak tüplerinin yanında piknik tüpü de satılır. Bu, sıkça sorulan sorulardaki cevabın aynısıdır. Piknik tüpü 2 kg ev tipi tüpün ikinci adı değildir. 2 kg tüp mutfak ve günlük kullanım içindir ve kapasitesi 2 kg diye yazılır. Piknik tüpünün kilogramı işletme tarafından ayrıca belirtilmediği için ürün kartında boştur.",
          "Karışıklık fotoğraftan da çıkabilir. Piknik sayfasındaki görsel, işletmenin verdiği mavi tüptür. 2 kg sayfasındaki görsel gümüş Hürgaz ev tüpüdür. 12 kg galerisinde de mavi bir Hürgaz tüp vardır; o kare 12 kg ev tüpüne aittir, piknik kartına değil. Sipariş, doğru sayfanın bağlantısından açılmalıdır.",
        ],
      },
      {
        heading: "Kilogram neden yazılmıyor",
        paragraphs: [
          "Kapasite yalnızca net bilgi varsa doldurulur. Piknik tüpünde bu netlik yoktur. Site, mavi tüpe 2 kg veya başka bir sayı yakıştırmaz. Stoktaki piknik tüpünün ölçüsü WhatsApp veya telefonda sorulur. Tahminle yazılmış bir kilogram, hem yanlış ürün hem yanlış fiyat konuşması üretir. Fiyat zaten sitede yoktur ve ölçü netleşmeden anlamlı bir bedel de konuşulmaz.",
          "Aynı dürüstlük ticari ve diğer çeşitler için de geçerlidir. Onların kilogramı da boştur. Piknik tüpünün farkı, fotoğrafının bulunmasıdır. Fotoğraf kapasite etiketi yerine geçmez. Görseli inceleyip ölçüyü mesajda sormak gerekir. Üçüncü taraf piknik fiyatları bu sayfanın kaynağı değildir.",
        ],
      },
      {
        heading: "Kimler piknik tüpüne bakar",
        paragraphs: [
          "Kamp, piknik ve kısa süreli taşınabilir ocak kullananlar bu karta bakar. Evdeki sürekli mutfak ihtiyacı için önce 2 kg ve 12 kg sayfalarına bakılır. İkisi birden gerekiyorsa iki ayrı ürün adı yazılır. Site, piknik tüpünün bir evin bütün kışlık mutfak tüpü olduğunu söylemez. Kullanım yeri kişiye ve stoğa göre seçilir.",
          "Taşınabilir demek, her çantaya sığdığı veya uçakta taşındığı anlamına gelmez. Site böyle bir taşıma vaadi vermez. Tüpün nerede kullanılabileceği ve nasıl tutulacağı genel güvenlik bilgisiyle sınırlıdır: dik duruş, havalanan yer, kaçak şüphesinde vana ve ateşten uzak durmak. Bu cümleler bir kiralama veya kamp ekipmanı hizmeti değildir.",
        ],
      },
      {
        heading: "Tokat Merkez'de nasıl sipariş edilir",
        paragraphs: [
          "Piknik tüpü sayfasındaki WhatsApp bağlantısı, mesaja piknik tüpünün adını yazar ve Tokat Merkez servis durumunu sorar. Hat +90 555 860 63 69'dur. Servis talebi 0356 228 52 54 sabit telefonundadır. Hazır mesaj siparişi bitirmez. Stok, ölçü ve fiyat o yazışmada konuşulur. Sitede sepet ve online ödeme yoktur.",
          "Turanlar Ticaret Tokat Merkez'de evlere ve iş yerlerine servis yapar. Piknik tüpü için de teslimat bilgisi bu kanallardan alınır. Süre için dakika yazılmaz. Ücretsiz servis yazılmaz. Adres Merkez dışındaysa düzenli hizmet vaadi yoktur. Kapanış 22:00'dır. Açılış saati ve çalışma günleri telefonda öğrenilir.",
        ],
      },
      {
        heading: "Satış noktası",
        paragraphs: [
          "Tüpü konuşmak için satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C, Merkez / Tokat, 60000 adresindedir. Harita Google kaydını açar. Instagram hesabı instagram.com/turanlar8852'dür. Instagram bir sipariş kasası değildir. Sipariş cümlesi WhatsApp ve telefondadır.",
          "İşletme 1977'den bugüne Tokat Merkez'dedir. Güvenli, samimi ve dürüst alışveriş tarifi piknik tüpünde de aynıdır: olmayan kilogram yazılmaz, olmayan fiyat yazılmaz, olmayan teslimat dakikası yazılmaz. Marka Hürgaz çeşitleri içindedir. Yetkili bayi unvanı eklenmez.",
        ],
      },
      {
        heading: "Doğru sayfayı seçmek",
        paragraphs: [
          "Mutfak için küçük tüp arayan kişi piknik kartında kalmamalıdır. 2 kg ev tipi tüp ayrı sayfadadır ve kapasitesi yazılır. 12 kg daha büyük mutfak tüpüdür. Piknik kartı taşınabilir kullanım içindir ve ölçü siparişte sorulur. Üç sayfayı karıştırmamak, hazır WhatsApp mesajının doğru adı taşımasını sağlar.",
          "Kısa cevap, sıkça sorulan sorularda durur: Tokat'ta ev tüpü ve piknik tüpü satışı yapılır. Bu yazı piknik tarafını ayırır. Sipariş için ürün sayfasına geçilir. Servis bölgesi ve kapanış saati değişmez: Tokat Merkez, 22:00. Açılış ayrıca sorulur.",
        ],
      },
      {
        heading: "Piknik tüpü siparişinde karışan üç kart",
        paragraphs: [
          "Tokat'ta küçük tüp arayan kişi üç karta birden bakabilir. Birincisi 2 kg ev tipi tüptür. Kapasitesi yazılır, kullanımı mutfak ve günlük iştir, fotoğrafı gümüş Hürgaz tüptür. İkincisi 12 kg ev tüpüdür. O da mutfak içindir ve galerisinde mavi bir Hürgaz karesi vardır. Üçüncüsü piknik tüpüdür. Kullanımı kamp ve taşınabilir iştir, fotoğrafı işletmenin verdiği mavi tüptür, kilogramı boştur. Mavi renk tek başına piknik demek değildir. 12 kg galerisindeki mavi kare ev tüpüne aittir.",
          "Doğru karttan açılan WhatsApp mesajı ürün adını hazır taşır. Piknik sayfasından yazılırsa karşı taraf piknik tüpü okur ve ölçüyü stoktan söyler. 2 kg sayfasından yazılırsa konuşma mutfak tüpü üzerinden yürür. İkisi birden isteniyorsa iki ad da yazılır. Adres Tokat Merkez içinde söylenir. Servis bilgisi 0356 228 52 54 veya WhatsApp ile alınır. Süre için dakika, ücret için sitede rakam, kilogram için tahmin yoktur. Kapanış 22:00'dır.",
        ],
      },
      {
        heading: "Piknik tüpünde satışın sınırı",
        paragraphs: [
          "Satış ve servis Tokat Merkez ile sınırlıdır. İlçe ve Tokat dışı için düzenli bir piknik tüpü sevkiyatı yazılmaz. Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C adresindedir. Haritadan yol tarifi almak, tüpün o anda elde olduğu anlamına gelmez. Stok WhatsApp'ta sorulur. 1977'den bugüne süren işletme, olmayan ölçüyü doldurmak yerine boş bırakmayı seçer.",
          "Piknik tüpü bir kamp paketi, ocak seti veya kiralık ekipman diye sunulmaz. Sayfa yalnızca tüpün kendisini tanıtır. Bağlantı, kaçak kontrolü ve montaj ayrıca satılan işler değildir. Genel bilgi olarak tüp dik durur ve havalanan yerde tutulur. Sipariş bu yazının sonunda bitmez. Ürün sayfasına geçilir, hazır mesaj açılır, ölçü ve Tokat Merkez servisi orada konuşulur.",
          "Ölçüsü yazılmayan tüp için fiyat da yazılmaz. Güncel koşul, stoktaki piknik tüpünün ölçüsü belli olduktan sonra WhatsApp'ta konuşulur. 2 kg ev tüpünün fiyatı bu kartın yerine geçmez. İki ürün ayrıdır. Kapanış 22:00, bölge Tokat Merkez, hatlar 0356 228 52 54 ve WhatsApp'tır.",
        ],
      },
    ],
  },
];
