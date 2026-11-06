export type NavChild = {
  href: string;
  label: string;
  description: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

export const corporateLinks = [
  {
    href: "/hakkimizda",
    label: "Hakkımızda",
    description: "1977'den bugüne Tokat Merkez",
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Sipariş ve hizmet notları",
  },
  {
    href: "/sss",
    label: "Sıkça Sorulan Sorular",
    description: "Tokat tüp siparişi ve servis",
  },
  {
    href: "/kvkk",
    label: "KVKK",
    description: "Kişisel verilerin işlenmesi",
  },
  {
    href: "/gizlilik-politikasi",
    label: "Gizlilik Politikası",
    description: "Site ve iletişim kanalları",
  },
  {
    href: "/cerez-politikasi",
    label: "Çerez Politikası",
    description: "Çerez ve harita içeriği",
  },
] as const satisfies readonly NavChild[];

export const legalLinks = [
  { href: "/kvkk", label: "KVKK" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
] as const;

export const navItems = [
  { href: "/", label: "Ana Sayfa" },
  {
    href: "/kurumsal",
    label: "Kurumsal",
    children: corporateLinks,
  },
  { href: "/urunler", label: "Ürünlerimiz" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/iletisim", label: "İletişim" },
] as const satisfies readonly NavItem[];

export function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isItemActive(pathname: string, item: NavItem) {
  if (isNavActive(pathname, item.href)) {
    return true;
  }
  return item.children?.some((child) => isNavActive(pathname, child.href)) ?? false;
}
