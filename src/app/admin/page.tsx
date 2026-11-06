import { DeleteProductButton } from "@/components/admin/DeleteProductButton";
import { SetupCatalogButton } from "@/components/admin/SetupCatalogButton";
import { getCategory } from "@/data/products";
import { formatPrice } from "@/lib/price";
import { isAdmin } from "@/lib/admin-auth";
import { readProductRecords } from "@/lib/catalog";
import { databaseErrorMessage } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export const instant = false;

export default async function AdminPage() {
  if (!(await isAdmin())) {
    redirect("/admin/giris");
  }

  let error = "";
  let records: Awaited<ReturnType<typeof readProductRecords>> = [];
  try {
    records = await readProductRecords();
  } catch (caught) {
    error = databaseErrorMessage(caught);
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl tracking-[-0.04em] text-navy">Ürünler</h1>
          <p className="mt-1 text-sm text-ink-soft">{records.length} kayıt</p>
        </div>
        <Link
          href="/admin/urunler/yeni"
          className="inline-flex min-h-11 items-center rounded-xl bg-navy px-4 text-sm font-bold text-white"
        >
          Yeni ürün
        </Link>
      </div>
      {error ? (
        <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
          {error} cPanel&apos;de MySQL kullanıcısını bu veritabanına ekleyin ve şifrenin kayıtlı
          şifreyle aynı olduğundan emin olun.
        </p>
      ) : null}
      {records.length === 0 ? <SetupCatalogButton /> : null}
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 2xl:grid-cols-4">
        {records.map((product) => (
          <li key={product.id} className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
            <Link href={`/admin/urunler/${product.id}`} className="block">
              {product.image.kind === "photo" ? (
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                  className="aspect-square w-full bg-paper object-contain p-3"
                />
              ) : (
                <span className="grid aspect-square place-items-center bg-paper text-sm font-semibold text-ink-soft">
                  Çizim
                </span>
              )}
              <span className="block px-4 pt-3 font-display text-lg leading-tight tracking-[-0.03em] text-navy">
                {product.name}
              </span>
              <span className="block px-4 pt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                {getCategory(product.categoryId).name}
              </span>
              <span className="block px-4 pt-2 font-display text-xl tracking-[-0.03em] text-navy">
                {product.priceKurus == null ? "Fiyat yok" : formatPrice(product.priceKurus)}
              </span>
            </Link>
            <div className="flex items-center justify-between px-4 py-3">
              <Link href={`/admin/urunler/${product.id}`} className="text-sm font-bold text-navy">
                Düzenle
              </Link>
              <DeleteProductButton id={product.id} name={product.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
