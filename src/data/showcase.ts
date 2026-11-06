import type { Product } from "@/types/product";

export const showcaseGroups = [
  { id: "tupler", name: "Tüpler" },
  { id: "ocak-pisirme", name: "Ocak ve Pişirme" },
  { id: "soba-isinma", name: "Soba ve Isınma" },
  { id: "kamp-piknik", name: "Kamp ve Piknik" },
  { id: "baglanti", name: "Bağlantı Parçaları" },
] as const;

export type ShowcaseGroupId = (typeof showcaseGroups)[number]["id"];

const groupsBySlug: Record<string, ShowcaseGroupId> = {
  "ev-tipi-tup": "tupler",
  "12kg-ev-tupu": "tupler",
  "piknik-tupu": "tupler",
  "sanayi-tipi-tup": "tupler",
  soba: "soba-isinma",
  semaver: "ocak-pisirme",
  "kouns-kuzine": "ocak-pisirme",
  "mupa-elektrikli-ocak": "ocak-pisirme",
  "femas-dortlu-ocak": "ocak-pisirme",
  "femas-ikili-ocak": "ocak-pisirme",
  "tuplu-sac-tava-45": "ocak-pisirme",
  "samdan-1003-doner-yuvarlak-firin": "ocak-pisirme",
  "gurme-mk101-elektrikli-katmer-saci": "ocak-pisirme",
  "demaver-celik-cay-makinesi": "ocak-pisirme",
  "lt-44-tost-makinesi": "ocak-pisirme",
  "tuplu-sac-ekmek-katmer-60-cm": "ocak-pisirme",
  "beyaz-surgulu-aspirator": "ocak-pisirme",
  "aorcamp-pr50": "kamp-piknik",
  "orgaz-kamp-ocagi": "kamp-piknik",
  "buyuk-boy-lav-tasli-tuplu-mangal": "kamp-piknik",
  "orgaz-lantern-l-627": "kamp-piknik",
  "orgaz-dedantorlu-kamp-sobasi": "kamp-piknik",
  "aorcamp-cakmakli-kartus-purmuz-set": "kamp-piknik",
  "nazar-reso-yakiti-jel-1-litre": "kamp-piknik",
  "aorcamp-227-gram-gaz-kartusu": "kamp-piknik",
  "gaz-salome-seti": "baglanti",
  "orgaz-regulator-300-11": "baglanti",
  "orgaz-dedantor-mt-300-20": "baglanti",
  "orgaz-dedantor-yb-150": "baglanti",
};

export function showcaseGroupId(product: Product): ShowcaseGroupId {
  const known = groupsBySlug[product.slug];
  if (known) {
    return known;
  }
  switch (product.categoryId) {
    case "ev-tipi":
    case "piknik":
    case "sanayi":
    case "ticari":
    case "diger":
      return "tupler";
    case "kamp-ekipman":
      return "kamp-piknik";
    default: {
      const exhaustive: never = product.categoryId;
      return exhaustive;
    }
  }
}

export function compareShowcase(left: Product, right: Product) {
  const order = showcaseGroups.map((group) => group.id);
  return order.indexOf(showcaseGroupId(left)) - order.indexOf(showcaseGroupId(right));
}
