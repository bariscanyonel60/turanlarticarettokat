import type { Post } from "@/data/posts";

const published = { date: "2026-11-05", dateLabel: "5 Kasım 2026" } as const;

export const outdoorPosts: readonly Post[] = [
  {
    ...published,
    slug: "tokat-tup-guvenligi",
    title: "Tokat'ta Tüp Güvenliği",
    description:
      "Tokat Merkez'de tüp güvenliği: tüp dik durur, hortum ve regülatör ayrı sorulur. Turanlar Ticaret montaj adımı yayınlamaz. Kapanış 22:00.",
    links: [
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/urunler/ev-tipi-tup", label: "2 kg ev tipi tüp" },
      { href: "/urunler/12kg-ev-tupu", label: "12 kg ev tüpü" },
      { href: "/iletisim", label: "Telefon" },
    ],
    sections: [
      {
        heading: "Güvenlik notu neyin yerine geçmez",
        paragraphs: [
          "Tokat'ta tüp kullanan ev ve iş yeri için ilk cümle şudur: bu yazı genel bir hatırlatmadır. Turanlar Ticaret kaçak kontrolü, tesisat veya montaj paketi satmaz. Bağlantının nasıl sıkılacağı, hangi torkla yapılacağı ve cihazın iç ayarı burada adım adım yazılmaz. O iş, cihazın kendi talimatına ve bu işi bilen kişiye bırakılır. Bizden sorulan şey tüp, hortum, regülatör ve bağlantı parçasının stokta olup olmadığıdır.",
          "Satış Tokat Merkez ile sınırlıdır. Sipariş WhatsApp hattından, servis talebi 0356 228 52 54 numarasından alınır. Kapanış 22:00'dır. Açılış saati ve çalışma günleri telefonda öğrenilir. Gece boyu açık bir acil ekip iddiası yoktur. Gaz kokusu alındığında yapılacak ilk şey alev yakmamak, vanayı kapatmak, pencereyi açmak ve binayı terk edip itfaiye ile gaz dağıtım hattını aramaktır. Bu cümle bir servis sözü değildir.",
        ],
      },
      {
        heading: "Tüpün durduğu yer",
        paragraphs: [
          "Tüp dik durur. Yatık bırakılmaz, devrilmeyecek bir zemine konur ve havalanan bir yerde tutulur. Kapalı yatak odası, havasız kiler ve doğrudan güneşin altında uzun süre bekletilen bir köşe uygun anlatım değildir. 2 kg ev tipi tüp ile 12 kg ev tüpü aynı kurala girer; ikisi ayrı üründür. Piknik tüpü taşınabilir kullanım içindir ve mutfak tüpünün yerine yazılmaz.",
          "İş yerindeki 24 kg sanayi tüpü de aynı genel kuralı paylaşır. Daha büyük gövde, daha dar bir rafa sıkıştırılmaz. Tüpün yanında ocak, mangal veya ısıtıcı varsa her cihazın kendi açıklığına bakılır. Site bu cihazların montaj şemasını çizmez.",
        ],
      },
      {
        heading: "Hortum ve regülatör ayrı parçadır",
        paragraphs: [
          "Tüp tek başına yetmez. Hortum şişmiş, çatlamış veya sertleşmişse değiştirilmesi konuşulur. Regülatör de ayrı bir parçadır. Turanlar Ticaret bu parçaları tüp ekipmanı başlığında tutar. Stoktaki marka, ölçü ve fiyat sitede yazılmaz. WhatsApp mesajında ev tipi mi, piknik mi, sanayi mi, mangal mı yoksa ısıtıcı mı olduğu söylenirse doğru parça sorulmuş olur.",
          "Örnek fotoğraf ürün grubunu tanıtır. Dükkândaki parçanın birebir kopyası değildir. Üçüncü taraf kataloglar ve başka markaların kampanya metinleri bu sayfanın kaynağı sayılmaz. Parça adı, Tokat Merkez adresi ve kullanım yeri aynı mesajda yazılır.",
        ],
      },
      {
        heading: "Verim vaadi yok",
        paragraphs: [
          "Tüpün kaç gün yeteceği ocak sıklığına, cihazın ayarına ve kabın büyüklüğüne göre değişir. Site buna gün sayısı biçmez. Küçük alev, kapağı kapalı tencere ve sağlam bağlantı genel tasarruf bilgisidir. Bu bilgi, belirli bir markanın performans iddiası değildir. Hürgaz adı tüp çeşitleri içindir. Ekipman kartına Hürgaz etiketi yapıştırılmaz.",
          "Kontrolün sıklığı da evden eve değişir. Hortuma bakmak, vananın rahat dönüp dönmediğini görmek ve gaz kokusunda yukarıdaki genel adımı uygulamak yeterlidir. Turanlar Ticaret bu kontrolü evde yapan bir ekip diye tanıtılmaz. Parça gerektiğinde 0356 228 52 54 veya WhatsApp hattı açılır. Kapanış 22:00'dır.",
        ],
      },
      {
        heading: "Hangi tüp için hangi soru",
        paragraphs: [
          "Evde 2 kg ev tipi tüp ile 12 kg ev tüpü ayrı kartlardır. İkisi de Hürgaz tüpüdür ve ikisi de Tokat Merkez'den sorulur. 2 kg daha küçük gövdedir. 12 kg ev tüpünün mavi gövdeli fotoğrafı da aynı ürüne aittir. Piknik tüpü bu ikisinin küçüğü diye yazılmaz. Piknik tüpünün kilogramı sitede boştur. Güvenlik cümlesi değişmez: dik durur, havalanan yerde tutulur, yatık bırakılmaz.",
          "İş yerindeki ihtiyaç 24 kg sanayi tüpüdür. Ticari tüp ayrı bir karttır ve kilogramı da boştur. 45 kg diye bir ürün yayınlanmaz. Sanayi siparişinde adresin iş yeri olduğu ve Tokat Merkez içinde olduğu yazılır. Ev tüpü ile sanayi tüpü aynı hortum cümlesine bağlanmaz.",
          "Sipariş sitede tamamlanmaz. WhatsApp hazır mesajı yalnızca konuşmayı açar. Mesajın içinde ürün adı ve Tokat Merkez servis sorusu vardır. Fiyat, stok ve o günkü teslimat o yazışmada kalır. Dakika, aynı gün veya ücretsiz servis vaadi bu güvenlik yazısına da eklenmez. Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C, Merkez / Tokat adresindedir. Kapanış 22:00'dır.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-tup-ekipmani",
    title: "Tokat'ta Tüp Ekipmanı",
    description:
      "Tokat Merkez'de tüp ekipmanı: regülatör, hortum ve bağlantı. Turanlar Ticaret model ve fiyatı WhatsApp'ta söyler. Montaj adımı yayınlamaz.",
    links: [
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/blog/tokat-tup-guvenligi", label: "Tüp güvenliği" },
      { href: "/urunler/piknik-tupu", label: "Piknik tüpü" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Ekipman tüpten ayrı sorulur",
        paragraphs: [
          "Tokat'ta tüp alan kişinin ikinci ihtiyacı çoğu zaman hortum, regülatör veya bağlantı parçasıdır. Turanlar Ticaret bunları tüp ekipmanı olarak satar. Kart, belirli bir markanın incelemesi değildir. Hangi parçanın rafta olduğu, hangi tüpe uyduğu ve fiyatı WhatsApp yazışmasında veya 0356 228 52 54 hattında belli olur. Sitede sepet ve fiyat tablosu yoktur.",
          "2 kg ev tüpü, 12 kg ev tüpü, piknik tüpü ve 24 kg sanayi tüpü aynı ekipman cümlesine sıkıştırılmaz. Mesajda tüpün adı yazılır. Piknik tüpünün kilogramı sitede boştur; ekipman da o ölçü netleşmeden tahmin edilmez. Sanayi tüpü için ev ocağı hortumu istenmiş gibi yazılmaz.",
        ],
      },
      {
        heading: "Ne zaman parça değişir",
        paragraphs: [
          "Hortumun dışındaki çatlak, şişme ve sertleşme değişim konuşmasının gerekçesidir. Regülatörün zor dönmesi veya bağlantıdaki gevşeklik de aynı kapıya çıkar. Bu belirtiler bir arıza teşhisi değildir. Kişi parçayı anlatır, işletme stoktaki karşılığını söyler. Sökme ve takma adımları bu yazıda yoktur. Cihazın kitapçığı ve işi bilen kişi o işi yapar.",
          "Vitrindeki bağlantı parçaları, dükkândaki ürünün fotoğrafıdır. Ölçü ve uyum fotoğraftan tahmin edilmez, WhatsApp'ta sorulur.",
        ],
      },
      {
        heading: "Siparişin sınırı",
        paragraphs: [
          "Hizmet bölgesi Tokat Merkez'dir. İlçe ve il dışı için düzenli ekipman servisi yazılmaz. Satış noktası Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C adresindedir. Parçayı kendisi almak ile adrese bırakmak ayrı konuşulur. Teslimat süresi için dakika yoktur. Kapanış 22:00'dır. Açılış telefonda öğrenilir.",
          "Ekipman siparişi tüp siparişiyle aynı hatta gider. WhatsApp +90 555 860 63 69 numarasıdır. Hazır mesaj, ürün sayfasından açılırsa ürün adını taşır. Başka bir markanın kampanya metni veya deniz tipi marin tesisat bu sayfaya eklenmez. Vitrinde tüp, soba, semaver, kuzine, ocak ve bağlantı parçaları vardır. Vitrinde olmayan bir parça ayrıca sorulur.",
        ],
      },
      {
        heading: "Mesajda yazılması gerekenler",
        paragraphs: [
          "Kısa ve net bir mesaj parçayı hızlandırır. İlk satırda tüpün adı olur: 2 kg ev tipi, 12 kg ev tüpü, piknik veya 24 kg sanayi. İkinci satırda parça adı olur: hortum, regülatör veya bağlantı. Üçüncü satırda yer olur: ev, iş yeri, soba ya da kamp ocağı. Adres Tokat Merkez içindeyse mahalle de yazılır. Bu dört bilgi fiyatın ve stokun konuşulması için yeterlidir.",
          "Vitrindeki fotoğraf, satılan parçanın kendi görselidir. Kişi elindeki eski parçanın boyunu biliyorsa mesaja ekler. Bilmiyorsa bilmiyorum demek yanlış parça göndermekten iyidir. Turanlar Ticaret uyumu tahminle ilan etmez.",
          "Montaj yine yazılmaz. Parça satışı, parçanın evde takılacağı anlamına gelmez. Cihazın kitapçığı ve işi bilen kişi takma işini görür. Gaz kokusu varsa parça siparişi beklenmez. Vana kapatılır, pencere açılır, alev yakılmaz ve itfaiye ile gaz dağıtım hattı aranır. Bu cümle acil servis sözü değildir. İşletmenin kapanışı 22:00'dır. Açılış saati ve günler 0356 228 52 54 hattından öğrenilir.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-dis-mekan-isitici",
    title: "Tokat'ta Dış Mekân Isıtıcı",
    description:
      "Tokat Merkez'de ısıtıcı ve soba. Gazlı model stokta sorulur. Turanlar Ticaret elektrikli ısıtıcı kataloğu yayınlamaz. Fiyat WhatsApp'tadır.",
    links: [
      { href: "/urunler/soba", label: "Gönen Soba" },
      { href: "/urunler/soba", label: "Gönen Soba" },
      { href: "/urunler/semaver", label: "Özenler Semaver" },
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
    ],
    sections: [
      {
        heading: "Gazlı ısıtıcı ile elektrikli karar aynı liste değildir",
        paragraphs: [
          "Balkon ve bahçe için ısıtıcı arayan kişi gazlı ile elektrikli seçenek arasında kalır. Turanlar Ticaret'in yayınladığı kart ısıtıcıdır. Elektrikli modellerin bir kataloğu, watt değeri veya elektrik faturası hesabı bu sitede yoktur. Gazlı bir model stokta varsa tüple çalışır ve tüp ile ekipman ayrıca sorulur. Elektrikli karar, evin kendi tesisatına kalır.",
          "Açık alan tipi ile iç mekân tipi de aynı kartın içinde eritilmez. Ürün özeti, tipin siparişte ayrıldığını söyler. Balkon, bahçe veya oda olduğu mesajda yazılır. Site, her balkona ısıtıcı konur demez. Cihazın kendi güvenlik açıklığı ve dairenin kuralları kişiye aittir.",
        ],
      },
      {
        heading: "Soba ayrı başlıktır",
        paragraphs: [
          "Soba, dış mekân ısıtıcısının kısa adı değildir. Turanlar Ticaret sobayı ayrı ürün olarak tutar. Soba sayfasındaki görsel, işletmenin paylaştığı Gönen emaye sobadır. Semaver de ayrı bir üründür. Isıtıcı görseli gazlı bir dış mekân örneğidir. İki sayfa karıştırılırsa WhatsApp yanlış ürün adı taşır.",
          "İkisi için de fiyat yazılmaz. Güncel bedel, model belli olduktan sonra WhatsApp veya telefonda konuşulur. Başka markanın ürün incelemesi, puanı ve seri adı bu yazıya taşınmaz.",
        ],
      },
      {
        heading: "Tokat Merkez'de nasıl sorulur",
        paragraphs: [
          "Mesajda üç şey yeter: yer balkon mu bahçe mi oda mı, tüplü mü düşünülüyor, soba mı ısıtıcı mı. Adres Tokat Merkez içindeyse servis veya mağazadan alma ayrıca konuşulur. İlçe vaadi yoktur. Kapanış 22:00'dır. Açılış saati 0356 228 52 54 hattından öğrenilir.",
          "Tüp ve hortum ısıtıcıyla birlikte gerekiyorsa ekipman sayfası da açılır. İki ad tek mesajda yazılabilir. Hazır mesaj siparişi bitirmez. Stok, model ve fiyat o görüşmede kalır.",
        ],
      },
      {
        heading: "Gazlı ısıtıcıda tüp ayrı sorulur",
        paragraphs: [
          "Gazlı bir ısıtıcı düşünülüyorsa tüp ikinci bir üründür. 2 kg ev tipi tüp, 12 kg ev tüpü ve piknik tüpü birbirinin yerine yazılmaz. Hangi gövdenin o ısıtıcıya uyduğu sitede tahmin edilmez. Mesajda ısıtıcı ve tüp ayrı adlarla durur. Hortum ve regülatör de gerekiyorsa tüp ekipmanı üçüncü satır olur. Hürgaz adı tüp kartlarına aittir. Isıtıcı kartına Hürgaz etiketi konmaz.",
          "Isıtıcı görseli bir dış mekân örneğidir. Kaynak kartın altındadır. Soba görseli ise Gönen emaye sobadır ve ısıtıcının yerine geçmez. Semaver de ayrı karttadır. Sipariş ayrı adlarla verilir.",
          "Balkon ve bahçe için genel hatırlatma şudur: cihaz devrilmeyecek bir zeminde, kendi açıklığına göre ve havalanan bir yerde durur. Kapalı odaya dış mekân tipi sıkıştırılmaz. Bu cümle montaj kılavuzu değildir. Dairenin ve cihazın kendi kuralı geçerlidir. Turanlar Ticaret kaçak kontrolü veya kurulum ekibi ilan etmez. Satış ve soru Tokat Merkez ile sınırlıdır. Kapanış 22:00'dır. Fiyat model netleşince WhatsApp +90 555 860 63 69 veya 0356 228 52 54 hattında konuşulur.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-kamp-ocagi",
    title: "Tokat'ta Kamp Ocağı",
    description:
      "Tokat Merkez'de kamp ocağı ve kamp ürünü. Piknik tüpünden ayrıdır. Turanlar Ticaret model karşılaştırması ve fiyat listesi yayınlamaz.",
    links: [
      { href: "/urunler/orgaz-kamp-ocagi", label: "Orgaz Kamp Ocağı" },
      { href: "/urunler/piknik-tupu", label: "Piknik tüpü" },
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Kamp ocağı piknik tüpü değildir",
        paragraphs: [
          "Kamp ocağı, piknik tüpünün ikinci adı değildir. Piknik tüpü taşınabilir tüptür ve kilogramı sitede boştur. Kamp ürünleri kartı ocak ve kamp malzemesini anlatır. Örnek görsel taşınabilir bir ocağı gösterir. Turanlar Ticaret bu görseli stoktaki modelin kopyası diye sunmaz. Hangi ocağın rafta olduğu WhatsApp'ta sorulur.",
          "Model sıralaması, en iyi listesi ve fiyat performans puanı bu sitede yoktur. Başka bir markanın kamp ocağı karşılaştırması kopyalanmaz. Kişiye düşen soru şudur: ocak tüple mi kartuşla mı çalışacak, kaç kişi için düşünülüyor, yalnızca çay için mi yoksa tencere için mi. Cevap stokla birlikte gelir.",
        ],
      },
      {
        heading: "Seçerken sorulanlar",
        paragraphs: [
          "Taşıma, rüzgâr ve zemin kampın kendi konusudur. Site çadır, sandalye ve masa kataloğu açmaz. Bunlar söylenmedikçe satılıyor diye yazılmaz. Satılan başlık kamp ürünü, piknik tüpü ve tüp ekipmanıdır. Ocak bir tüpe bağlanacaksa ekipman uyumu da sorulur. Uyum tahmini yazılmaz.",
          "Kapalı çadır içinde ocak yakmak bu yazının öğüdü değildir. Kamp ocağı havalanan yerde, cihazın kendi kuralına göre kullanılır. Devrilme ve sıcak yüzey genel bir hatırlatmadır. Montaj şeması yayınlanmaz.",
        ],
      },
      {
        heading: "Tokat Merkez siparişi",
        paragraphs: [
          "Kamp ürünü Tokat Merkez'den sorulur. Adres Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C'dir. İlçe ve il dışı sevkiyat vaadi yoktur. Kapanış 22:00'dır. Fiyat, model belli olmadan yazılmaz. WhatsApp hattı +90 555 860 63 69, servis telefonu 0356 228 52 54'tür.",
          "Piknik tüpüyle birlikte düşünülüyorsa iki ürün adı birden yazılır. Tek karttan açılan hazır mesaj yalnızca o kartın adını taşır. İkisi isteniyorsa mesaja ikinci ad eklenir.",
        ],
      },
      {
        heading: "Kartuş, tüp ve ekipman",
        paragraphs: [
          "Bazı kamp ocakları küçük bir kartuşla, bazıları tüple çalışır. Turanlar Ticaret kartuşun cinsini, gramını ve marka sıralamasını bu yazıda ilan etmez. Rafta kartuş varsa WhatsApp'ta söylenir. Yoksa yok denir. Tüple çalışan bir ocak için piknik tüpü ayrı karttır. Kilogramı boştur. 2 kg ev tipi tüp ile piknik tüpü aynı ürün değildir. Evdeki 12 kg tüp de kamp ocağının varsayılan yakıtı diye yazılmaz.",
          "Ocak bir tüpe bağlanacaksa hortum ve regülatör uyumu ekipman sayfasından sorulur. Uyum tahmini yayınlanmaz. Örnek ocak görseli taşınabilir bir modeli tanıtır. Kaynak kartın altındadır. Stoktaki ocağın markası o kareden okunmaz. Çadır, sandalye, masa ve uyku tulumu bu işletmenin yayınladığı liste değildir. Söylenmeyen ürün satılıyor sayılmaz.",
          "Kullanım yeri açıktır ve havalanır. Kapalı çadırda ocak yakmak bu sayfanın öğüdü değildir. Sıcak yüzey ve devrilme genel bir hatırlatmadır. Adım adım kurulum yoktur. Tokat Merkez dışına kamp malzemesi servisi vaat edilmez. Mağaza Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C adresindedir. Kapanış 22:00'dır. Fiyat, model belli olduktan sonra konuşulur.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-mangal-secimi",
    title: "Tokat'ta Mangal Seçimi",
    description:
      "Tokat Merkez'de mangal. Kömürlü ve gazlı ayrımı stokta sorulur. Turanlar Ticaret belirli bir barbekü serisi incelemesi yayınlamaz. Fiyat WhatsApp'tadır.",
    links: [
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Kömürlü ile gazlı aynı kart değildir",
        paragraphs: [
          "Mangal arayan kişi kömürlü ile gazlı arasında kalır. Kömürlü mangal köz ve dumanla pişirir. Gazlı barbekü, tüple çalışan ve ısısı daha çabuk ayarlanan bir düzendir. Vitrindeki kart büyük boy lav taşlı tüplü mangaldır. Başka bir mangal sorulacaksa WhatsApp'tan yazılır. Belirli bir seri adı, otomatik ateşleme iddiası veya dumansız vaat bu sayfada yoktur.",
          "Bahçe, balkon veya geniş teras ayrımı mesajda yazılır. Apartman kuralı ve komşu mesafesi kişinin kendi sorumluluğundadır. Site, her balkonda mangal yakılır demez.",
        ],
      },
      {
        heading: "Aksesuar mangalın kendisi değildir",
        paragraphs: [
          "Maşa, tel, şiş ve kömür gereci vitrinde ayrı kart değildir. İstenirse WhatsApp mesajına yazılır. Setin içinde kaç parça olduğu stokta netleşir. Başka markanın on parçalık aksesuar listesi buraya taşınmaz.",
          "Gazlı bir mangal düşünülüyorsa tüp ve ekipman üçüncü bir satır olur. Ev tüpü ile mangal tüpü karıştırılmaz. Hangi tüpün uyduğu tahmin edilmez, sorulur. Piknik tüpü her mangala uyar diye bir cümle yazılmaz.",
        ],
      },
      {
        heading: "Temizlik ve pişirme tarifi yok",
        paragraphs: [
          "Izgara temizliği cihazın kendi yüzeyine göre yapılır. Site deterjan ölçüsü ve et pişirme süresi vermez. Yemek tarifi de yayınlamaz. Turanlar Ticaret'in işi mangalı, aksesuarı ve gerekiyorsa tüpü Tokat Merkez'de bulundurmaktır. Lezzet notu başka bir sayfanın konusudur ve bu işletmenin metni değildir.",
          "Sipariş WhatsApp veya 0356 228 52 54 ile verilir. Kapanış 22:00'dır. Fiyat model belli olunca konuşulur. Hizmet bölgesi Tokat Merkez'dir. Satış noktası Bahçelievler'dedir.",
        ],
      },
      {
        heading: "Bahçe, balkon ve iş yeri",
        paragraphs: [
          "Mangalın duracağı yer siparişin parçasıdır. Bahçe ile dar balkon aynı gövdeyi istemeyebilir. Kişi yerin kabaca ölçüsünü yazarsa işletme stoktaki modele bakabilir. Ölçü uydurulmaz. Apartman yönetimi ve komşu mesafesi bu sitenin kararı değildir. Turanlar Ticaret her balkonda mangal yakılır demez.",
          "Gazlı bir düzen düşünülüyorsa tüp üçüncü bir üründür. 2 kg, 12 kg, piknik ve 24 kg sanayi aynı cümlede eritilmez. Hangi tüpün o mangala uyduğu sorulur. Kömürlü mangalda tüp satırı boş kalabilir. İki düzen aynı gün stokta olmayabilir. Olmayan model varmış gibi yazılmaz.",
          "Aksesuar ayrıca istenir. Maşa, tel, şiş ve kömür gereci vitrinde ayrı kart değildir. Mangal gövdesinin fiyatı aksesuarın fiyatı değildir. WhatsApp +90 555 860 63 69 hattı ve 0356 228 52 54 telefonu siparişi açar. Hazır mesaj siparişi bitirmez. Adres Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C'dir. İlçe ve il dışı için düzenli mangal servisi yoktur. Kapanış 22:00'dır.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-barbeku-aksesuari",
    title: "Tokat'ta Barbekü Aksesuarı",
    description:
      "Tokat Merkez'de barbekü aksesuarı. Şiş, ızgara ve kömür gerecinin içeriği stokta sorulur. Turanlar Ticaret fiyatı WhatsApp'ta söyler.",
    links: [
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/blog/tokat-mangal-secimi", label: "Mangal seçimi" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Aksesuar listesi stoktan okunur",
        paragraphs: [
          "Barbekü aksesuarı denince akla şiş, ızgara teli, maşa ve kömürle ilgili gereçler gelir. Turanlar Ticaret bu başlığı ayrı tutar. Setin içinde hangi parçanın olduğu sitede sabit bir liste değildir. Örnek görsel mangal kömürü için metal bir başlatma kovasıdır. Bu, setin tamamı demek değildir. Kişi ne aradığını yazar, işletme raftakini söyler.",
          "Beş parçalık veya on parçalık hazır bir hediye seti iddiası yoktur. Başka markanın aksesuar rehberi kopyalanmaz. Fiyat da set belli olmadan yazılmaz. Güncel bedel WhatsApp'tadır.",
        ],
      },
      {
        heading: "Mangal ile birlikte düşünmek",
        paragraphs: [
          "Aksesuar, mangal gövdesi olmadan da sorulabilir. Gövde de gerekiyorsa mangal kartının adı mesaja eklenir. Telin ölçüsü mangalın ölçüsüne bağlıdır. Ölçü bilinmiyorsa mangalın kabaca eni sorulur. Uymayan teli tahminle göndermek bu sitenin vaadi değildir.",
          "Gazlı bir düzende kömür kovası gerekmeyebilir. Kömürlü mangalda tüp ekipmanı da gerekmeyebilir. İki düzen karıştırılmaz. Hangisinin stokta olduğu tek sorudur. Kamp ocağı bu kartın içinde değildir.",
        ],
      },
      {
        heading: "Tokat Merkez",
        paragraphs: [
          "Satış ve servis Tokat Merkez ile sınırlıdır. Adres Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C'dir. Kapanış 22:00'dır. Açılış saati telefonda öğrenilir. WhatsApp +90 555 860 63 69, telefon 0356 228 52 54'tür. Hazır mesaj siparişi tamamlamaz.",
          "Temizlik fırçası, sos kabı veya belirli bir hediye paketi rafta varsa ayrıca söylenir. Rafta yoksa yok denir. Site olmayan parçayı varmış gibi listelemez.",
        ],
      },
      {
        heading: "Ne istenip ne istenmediği",
        paragraphs: [
          "Net bir istek yanlış seti engeller. Şiş, ızgara teli, maşa veya kömür kovası ayrı ayrı yazılabilir. Hepsini birden isteyen kişi hepsini yazar. Ölçü biliniyorsa mangalın eni de eklenir. Bilinmiyorsa tahmin istenmez. Turanlar Ticaret uymayan teli ölçü uydurarak göndermez. Örnek görsel yalnızca kömür için metal bir başlatma kovasıdır. Setin tamamı o kova değildir. Kaynak kartın altındadır.",
          "Yemek tarifi, sos ölçüsü ve pişirme süresi bu sayfada yoktur. Temizlik de cihazın kendi yüzeyine bırakılır. Deterjan tarifi yayınlanmaz. Aksesuar satışı, mangalın evde kurulacağı anlamına gelmez. Gazlı bir mangalla birlikte tüp ve ekipman isteniyorsa o adlar da yazılır. Kömürlü mangalda tüp satırı gerekmeyebilir.",
          "Satış Tokat Merkez'dedir. İlçe vaadi yoktur. Mağaza Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C adresindedir. Kapanış 22:00'dır. Açılış ve çalışma günleri 0356 228 52 54 hattından öğrenilir. WhatsApp numarası +90 555 860 63 69'dur. Fiyat, setin içi belli olduktan sonra konuşulur. Hazır mesaj yalnızca konuşmayı açar.",
        ],
      },
    ],
  },
];
