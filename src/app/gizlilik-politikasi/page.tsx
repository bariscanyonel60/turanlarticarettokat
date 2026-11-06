import { LegalBody } from "@/components/shared/LegalBody";
import { PageHeader } from "@/components/shared/PageHeader";
import { SiteLinks } from "@/components/shared/SiteLinks";
import { Container } from "@/components/ui/Container";
import { business, fullAddress } from "@/data/business";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description:
    "Turanlar Ticaret gizlilik politikası. Sitede üyelik ve ödeme yoktur; kişisel veri telefon ve WhatsApp sipariş görüşmesinde işlenir.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPage() {
  const sections = [
    {
      title: "Sitenin kapsamı",
      paragraphs: [
        `${business.name} sitesi, ${business.area} için tüp çeşitlerini tanıtır. Sepet, üyelik, online ödeme ve yorum sistemi yoktur.`,
        "Fiyat ürün kartında yazar. Sepet yoktur. Sipariş WhatsApp ile, servis talebi sabit telefonla alınır.",
      ],
    },
    {
      title: "Hangi bilgi sizden gelir",
      paragraphs: [
        "Siteyi gezmek için hesap açmanız gerekmez. Bir ürüne tıkladığınızda tarayıcınız WhatsApp'ı veya telefon uygulamasını açar.",
        "WhatsApp mesajında veya aramada paylaştığınız ad, numara, adres ve talep, yalnızca o siparişi veya servis görüşmesini yürütmek için kullanılır.",
      ],
    },
    {
      title: "Üçüncü taraflar",
      paragraphs: [
        "WhatsApp ve Instagram, Meta altyapısında çalışan ayrı hizmetlerdir. Bağlantıya bastığınızda o hizmetin koşulları geçerli olur.",
        "İletişim sayfasındaki harita Google içeriği yükler. Harita açıldığında Google teknik veri işleyebilir.",
        `${business.name} kişisel veriyi satmaz ve reklam profili oluşturmaz.`,
      ],
    },
    {
      title: "Güvenlik ve başvuru",
      paragraphs: [
        "Yazışma ve arama kayıtları, talebin sonuçlanması için gerekli süreyle sınırlı tutulur.",
        "Siteyi ziyaret ettiğinizde barındırma altyapısı, güvenliğin sağlanması için bağlantı kaydı tutabilir. Bu kayıtlar pazarlama için kullanılmaz.",
        `Gizlilikle ilgili sorular için ${business.phoneDisplay} numarasını arayabilir veya ${fullAddress()} adresine yazabilirsiniz. Ayrıntılı haklar KVKK aydınlatma metnindedir.`,
      ],
    },
  ] as const;

  return (
    <>
      <PageHeader
        eyebrow="Gizlilik"
        title="Gizlilik politikası"
        lede="Site bir vitrindir. Kişisel veri, sipariş veya servis için bize ulaştığınızda oluşur."
        crumbs={[
          { name: "Tokat Tüp", path: "/" },
          { name: "Kurumsal", path: "/kurumsal" },
          { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" },
        ]}
      />
      <LegalBody sections={sections} />
      <Container className="max-w-3xl pb-16">
        <p className="text-base leading-7 text-ink-soft">
          <Link href="/kvkk" className="font-semibold text-navy underline">
            KVKK aydınlatma metni
          </Link>{" "}
          ve{" "}
          <Link href="/cerez-politikasi" className="font-semibold text-navy underline">
            çerez politikası
          </Link>{" "}
          bu metnin devamıdır.
        </p>
        <SiteLinks />
      </Container>
    </>
  );
}
