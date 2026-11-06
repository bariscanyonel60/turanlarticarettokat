"use client";

import { logoutAction } from "@/app/admin/actions";
import { cn } from "@/lib/cn";
import { Images, LogOut, PackagePlus, PanelsTopLeft, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const links = [
  { href: "/admin", label: "Ürünler", icon: PanelsTopLeft },
  { href: "/admin/urunler/yeni", label: "Yeni ürün", icon: PackagePlus },
  { href: "/admin/galeri", label: "Galeri", icon: Images },
] as const;

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin/giris")) {
    return <div className="min-h-screen bg-paper">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-paper md:grid md:grid-cols-[17rem_minmax(0,1fr)]">
      <aside className="flex flex-col border-b border-white/10 bg-navy text-white md:sticky md:top-0 md:h-screen md:border-b-0 md:border-r">
        <div className="flex items-center justify-between gap-4 px-5 py-5 md:block">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/60">
              Turanlar Ticaret
            </p>
            <p className="mt-1 font-display text-2xl tracking-[-0.04em]">Yönetim</p>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-3 pb-4 md:grid md:content-start md:gap-1 md:px-3" aria-label="Yönetim menüsü">
          {links.map((link) => {
            const active =
              link.href === "/admin"
                ? pathname === "/admin" ||
                  (pathname.startsWith("/admin/urunler/") && pathname !== "/admin/urunler/yeni")
                : pathname.startsWith(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 w-full shrink-0 items-center gap-3 self-start rounded-xl px-3 text-sm font-bold",
                  active ? "bg-white text-navy" : "text-white/80 hover:bg-white/10",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto flex gap-2 px-3 pb-4 md:grid">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-bold text-white/80 hover:bg-white/10"
          >
            <Store className="size-4" aria-hidden />
            Siteyi aç
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-bold text-white/80 hover:bg-white/10"
            >
              <LogOut className="size-4" aria-hidden />
              Çıkış
            </button>
          </form>
        </div>
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
