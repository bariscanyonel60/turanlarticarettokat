import { LegalBody } from "@/components/shared/LegalBody";
import { PageHeader } from "@/components/shared/PageHeader";
import { business, fullAddress } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "Turanlar Ticaret KVKK aydınlatma metni. Kişisel veriler sipariş ve servis iletişimi için, Tokat Merkez'deki işletme tarafından işlenir.",
  path: "/kvkk",
});

export default function KvkkPage() {
  const sections = [
    {
      title: "Veri sorumlusu",
      paragraphs: [
        `${business.name}, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusudur.`,
        `Adres: ${fullAddress()}. Telefon: ${business.phoneDisplay}. WhatsApp: ${business.whatsappDisplay}.`,
      ],
    },
    {
      title: "İşlenen veriler ve amaç",
      paragraphs: [
        "Sitede üyelik, sepet, online ödeme ve iletişim formu yoktur. Bu nedenle site üzerinden ad, soyad veya kart bilgisi toplanmaz.",
        "Telefonu aradığınızda veya WhatsApp hattına yazdığınızda paylaştığınız ad, telefon numarası, mesaj içeriği ve teslim için verdiğiniz adres; siparişi ve Tokat Merkez servis talebini görüşmek için işlenir.",
        "Siteyi ziyaret ettiğinizde barındırma altyapısı, güvenliğin sağlanması için bağlantı kaydı (IP adresi, tarih ve tarayıcı bilgisi) tutabilir. Bu kayıtlar pazarlama için kullanılmaz.",
      ],
    },
    {
      title: "Hukuki sebep",
      paragraphs: [
        "Sipariş ve servis görüşmesi, bir sözleşmenin kurulması veya ifasıyla doğrudan ilgilidir. İletişimi siz başlatırsınız.",
        "Bağlantı kayıtları, bilgi güvenliği için meşru menfaat kapsamında ve ölçülü biçimde tutulabilir.",
      ],
    },
    {
      title: "Aktarım",
      paragraphs: [
        "WhatsApp yazışması, WhatsApp hizmetini işleten sağlayıcının altyapısında gerçekleşir. Aramalar telefon işletmecisi üzerinden iletilir.",
        "İletişim sayfasındaki harita, Google harita içeriğini yükler. Haritayı açtığınızda Google kendi koşullarına göre teknik veri işleyebilir.",
        "Veriler satılmaz. Yasal bir zorunluluk olmadıkça, sipariş görüşmesi dışında üçüncü kişilere aktarılmaz.",
      ],
    },
    {
      title: "Saklama",
      paragraphs: [
        "Sipariş ve servis yazışmaları, talebin sonuçlanması ve olası bir uyuşmazlık için gerekli süre boyunca tutulur. Süre dolunca silinir veya anonim hale getirilir.",
      ],
    },
    {
      title: "Haklarınız",
      paragraphs: [
        "KVKK'nın 11. maddesindeki haklarınız saklıdır. Verinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini isteme, aktarıldığı kişileri bilme ve zararın giderilmesini talep etme bu haklar arasındadır.",
        `Başvurunuzu ${fullAddress()} adresine yazılı olarak veya ${business.phoneDisplay} hattından iletebilirsiniz. Başvurular, Kanundaki süre içinde sonuçlandırılır.`,
      ],
    },
  ] as const;

  return (
    <>
      <PageHeader
        eyebrow="KVKK"
        title="Kişisel verilerin korunması"
        lede="Bu metin, Turanlar Ticaret sitesinin ve sipariş hatlarının bugünkü işleyişini anlatır."
        crumbs={[
          { name: "Tokat Tüp", path: "/" },
          { name: "Kurumsal", path: "/kurumsal" },
          { name: "KVKK", path: "/kvkk" },
        ]}
      />
      <LegalBody sections={sections} />
    </>
  );
}
