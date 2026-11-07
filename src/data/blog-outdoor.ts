import type { Post } from "@/data/posts";

const published = { date: "2026-11-05", dateLabel: "5 Kasım 2026" } as const;

export const outdoorPosts: readonly Post[] = [
  {
    ...published,
    slug: "tokat-tup-guvenligi",
    title: "Tokat'ta Tüp Güvenliği",
    description:
      "Tüp dik dursun, hortum sağlam olsun. Bağlantıyı adım adım tarif etmiyoruz. Emin değilseniz arayın.",
    links: [
      { href: "/urunler", label: "Ürün vitrini" },
      { href: "/urunler/ev-tipi-tup", label: "2 kg ev tipi tüp" },
      { href: "/urunler/12kg-ev-tupu", label: "12 kg ev tüpü" },
      { href: "/iletisim", label: "Telefon" },
    ],
    sections: [
      {
        heading: "Bu yazı montaj tarifi değil",
        paragraphs: [
          "Tüpü nasıl sıkacağınızı, hangi ayarla bağlayacağınızı burada anlatmıyoruz. O iş cihazın kendi kitabında ve bu işi bilen kişide. Bizden sorulan şey tüpün, hortumun ve regülatörün stokta olup olmadığı.",
        ],
      },
      {
        heading: "Tüp nerede durur",
        paragraphs: [
          "Tüp dik durur. Yatık bırakmayın, devrilmeyecek bir zemine koyun, hava alan bir yerde tutun. Yatak odası, havasız kiler ve gün boyu güneşin altı uygun değil.",
          "2 kg ile 12 kg aynı kurala girer ama ayrı üründür. Piknik tüpü de mutfak tüpünün yerine geçmez.",
        ],
      },
      {
        heading: "Hortum ve regülatör",
        paragraphs: [
          "Hortum şişmiş, çatlamış ya da sertse değiştirin. Regülatör ayrı bir parçadır. Hangi ölçü stokta, WhatsApp'tan sorun. Ev tipi mi, piknik mi, sanayi mi, mesajda yazın.",
          "Gaz kokusu varsa sipariş beklemeyin. Vanayı kapatın, pencereyi açın, ateş yakmayın. Sonra 0356 228 52 54'ü arayın. Dükkân 22:00'da kapanır.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-tup-ekipmani",
    title: "Tokat'ta Tüp Ekipmanı",
    description:
      "Hortum, regülatör ve dedantör ayrı sorulur. Ölçüyü mesajda yazın. Turanlar Ticaret, Tokat Merkez.",
    links: [
      { href: "/urunler", label: "Bağlantı parçaları" },
      { href: "/iletisim", label: "WhatsApp" },
    ],
    sections: [
      {
        heading: "Parça, tüpten ayrı",
        paragraphs: [
          "Hortum, regülatör ve dedantör tüpün kendisi değil. 2 kg, 12 kg, piknik ve 24 kg sanayi aynı parçaya uymaz. Mesajda tüpün adını yazın, ona göre bakalım.",
          "Piknik tüpünün kilogramı fotoğrafta yok. Ölçü netleşmeden parça tahmini yapmayız.",
        ],
      },
      {
        heading: "Nereden alınır",
        paragraphs: [
          "Tokat Merkez, Bahçelievler Mahallesi, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. Parçayı kendiniz almak ile adrese bırakmak ayrı. Saati konuşuruz.",
          "Parçayı satmamız, evde bizim takacağımız anlamına gelmez. Emin değilseniz arayın.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-dis-mekan-isitici",
    title: "Tokat'ta Dış Mekân Isıtıcı",
    description:
      "Dış mekân ısıtıcı ve soba ayrı ürün. Gazlıysa tüp ayrıca sorulur. Turanlar Ticaret'e yazın.",
    links: [
      { href: "/urunler", label: "Soba ve ısıtma" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Soba ile ısıtıcı aynı kart değil",
        paragraphs: [
          "Vitrindeki soba, kuzine ve kamp sobası ayrı ürünler. Dış mekân ısıtıcı arıyorsanız modeli WhatsApp'tan sorun. Stokta yoksa yok deriz.",
          "Fiyat, model belli olunca söylenir. Başka markanın incelemesini buraya taşımıyoruz.",
        ],
      },
      {
        heading: "Gazlıysa tüp ayrı",
        paragraphs: [
          "Gazlı bir ısıtıcı düşünüyorsanız tüp ikinci üründür. 2 kg, 12 kg ve piknik tüpü birbirinin yerine yazılmaz. Hangisi o cihaza uyar, tahmin etmeyiz; sorarız.",
          "Hürgaz adı tüp kartlarına ait. Isıtıcıya Hürgaz etiketi koymayız.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-kamp-ocagi",
    title: "Tokat'ta Kamp Ocağı",
    description:
      "Kamp ocağı piknik tüpünden ayrı bir ürün. Kartuşlu ve tüplü olanlar karışmasın. Sipariş WhatsApp'tan.",
    links: [
      { href: "/urunler", label: "Kamp ürünleri" },
      { href: "/urunler/piknik-tupu", label: "Piknik tüpü" },
    ],
    sections: [
      {
        heading: "Ocak ile tüp ayrı",
        paragraphs: [
          "Kamp ocağı bir cihaz, piknik tüpü yakıt. Bazı ocaklar kartuşla, bazıları tüple çalışır. Hangisi stokta, ürün kartına bakın. Kartuşun gramı kartta yazıyorsa o rakamı kullanın.",
          "2 kg ev tüpü ile piknik tüpü aynı ürün değil. Evdeki 12 kg tüp de kamp ocağının varsayılan yakıtı değil.",
        ],
      },
      {
        heading: "Nasıl sorulur",
        paragraphs: [
          "Tokat Merkez'den sorun. Adres Bahçelievler, Yazıcıoğlu Caddesi, 3. Geçit No: 47/C. İlçe ve şehir dışına düzenli sevkiyat yok. Fiyat model belli olunca WhatsApp'ta.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-mangal-secimi",
    title: "Tokat'ta Mangal Seçimi",
    description:
      "Kömürlü mangal ile tüplü mangal ayrı. Ölçüyü yazın. Dükkân Bahçelievler'de.",
    links: [
      { href: "/urunler", label: "Mangal ve kamp" },
      { href: "/iletisim", label: "İletişim" },
    ],
    sections: [
      {
        heading: "Kömürlü ile gazlı aynı şey değil",
        paragraphs: [
          "Vitrinde lav taşlı tüplü mangal var. Kömürlü bir model soruyorsanız stokta mı, WhatsApp'tan bakın. Olmayan modeli varmış gibi yazmayız.",
          "Gazlı bir mangal düşünüyorsanız tüp ayrı satır. Hangi tüpün uyduğunu sorarız. Piknik tüpü her mangala uyar diye bir cümle yok.",
        ],
      },
      {
        heading: "Yer önemli",
        paragraphs: [
          "Bahçe ile dar balkon aynı mangalı istemeyebilir. Elinizde kaba ölçü varsa yazın. Yoksa tahmin istemeyiz.",
          "Her balkonda mangal yakılır demiyoruz. O karar apartmanın ve sizin.",
        ],
      },
    ],
  },
  {
    ...published,
    slug: "tokat-barbeku-aksesuari",
    title: "Tokat'ta Barbekü Aksesuarı",
    description:
      "Maşa, ızgara ve kömür kovası stoktan sorulur. Hazır hediye seti ilan etmiyoruz. Turanlar Ticaret, Tokat Merkez.",
    links: [
      { href: "/urunler", label: "Kamp ürünleri" },
      { href: "/iletisim", label: "WhatsApp" },
    ],
    sections: [
      {
        heading: "Ne lazımsa onu yazın",
        paragraphs: [
          "Şiş, ızgara teli, maşa ya da kömür kovası ayrı ayrı istenebilir. Hepsini istiyorsanız hepsini yazın. Mangalın enini biliyorsanız ekleyin.",
          "Beş parçalık hazır bir hediye seti diye bir ilanımız yok. Fiyat, ne istediğiniz belli olunca WhatsApp'ta.",
        ],
      },
      {
        heading: "Nereden",
        paragraphs: [
          "Dükkân Bahçelievler'de. Aksesuar da aynı yerden sorulur. Stokta yoksa yok deriz.",
        ],
      },
    ],
  },
];
