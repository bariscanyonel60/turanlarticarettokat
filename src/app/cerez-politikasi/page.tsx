import { LegalBody } from "@/components/shared/LegalBody";
import { PageHeader } from "@/components/shared/PageHeader";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Çerez Politikası",
  description:
    "Turanlar Ticaret çerez politikası. Sitede reklam veya analiz çerezi yoktur. İletişim sayfasındaki harita Google içeriği yükleyebilir.",
  path: "/cerez-politikasi",
});

export default function CookiePage() {
  const sections = [
    {
      title: "Bu sitede çerez",
      paragraphs: [
        `${business.name} sitesi reklam, analiz veya pazarlama çerezi yerleştirmez. Zorunlu olmayan bir çerez için onay bandı gösterilmez, çünkü böyle bir çerez kullanılmaz.`,
        "Sayfaları gezmek için hesap açılmaz ve tercih çerezi yazılmaz.",
      ],
    },
    {
      title: "Harita içeriği",
      paragraphs: [
        "İletişim sayfasında işletme adresini gösteren bir Google haritası vardır. Harita yüklendiğinde Google, kendi hizmetinin gerektirdiği çerezleri tarayıcınıza yazabilir. Bu çerezler Turanlar Ticaret tarafından yönetilmez.",
        "Haritayı açmadan adresi, telefonu ve WhatsApp hattını kullanabilirsiniz. Haritanın altında işletmenin Google Haritalar kaydının açıldığı bağlantı da bulunur.",
      ],
    },
    {
      title: "Teknik kayıtlar",
      paragraphs: [
        "Barındırma altyapısı, saldırıları sınırlamak için kısa süreli bağlantı kaydı tutabilir. Bu kayıt bir tarayıcı çerezi değildir ve reklam hedeflemesi için kullanılmaz.",
      ],
    },
  ] as const;

  return (
    <>
      <PageHeader
        eyebrow="Çerezler"
        title="Çerez politikası"
        lede="Site, gezinmenizi izleyen bir çerez kullanmaz. Harita yalnızca iletişim sayfasında üçüncü taraf içeriği olarak durur."
        crumbs={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Kurumsal", path: "/kurumsal" },
          { name: "Çerez Politikası", path: "/cerez-politikasi" },
        ]}
      />
      <LegalBody sections={sections} />
    </>
  );
}
