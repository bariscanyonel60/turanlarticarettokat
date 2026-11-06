import { logoutAction } from "@/app/admin/actions";
import Link from "next/link";

export function AdminBar({ title }: { title: string }) {
  return (
    <header className="border-b border-navy/10 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Yönetim</p>
          <h1 className="font-display text-3xl tracking-[-0.04em] text-navy">{title}</h1>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold">
          <Link href="/admin" className="text-navy">
            Ürünler
          </Link>
          <Link href="/admin/urunler/yeni" className="text-navy">
            Yeni ürün
          </Link>
          <Link href="/" className="text-ink-soft">
            Siteyi aç
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="text-ink-soft">
              Çıkış
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
