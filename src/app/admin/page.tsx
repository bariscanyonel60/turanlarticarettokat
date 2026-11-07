import { AdminProductList } from "@/components/admin/AdminProductList";
import { PurgeCacheButton } from "@/components/admin/PurgeCacheButton";
import { SetupCatalogButton } from "@/components/admin/SetupCatalogButton";
import { getCategory } from "@/data/products";
import { isAdmin } from "@/lib/admin-auth";
import { readProductRecords } from "@/lib/catalog";
import { databaseErrorMessage } from "@/lib/db";
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

  const products = records.map((product) => ({
    id: product.id,
    name: product.name,
    categoryName: getCategory(product.categoryId).name,
    priceKurus: product.priceKurus,
    image:
      product.image.kind === "photo"
        ? {
            kind: "photo" as const,
            src: product.image.src,
            alt: product.image.alt,
            width: product.image.width,
            height: product.image.height,
          }
        : { kind: "other" as const },
  }));

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-3xl tracking-[-0.04em] text-navy">Ürünler</h1>
          <p className="mt-1 text-sm text-ink-soft">{records.length} kayıt</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <PurgeCacheButton />
          <Link
            href="/admin/urunler/yeni"
            className="inline-flex min-h-11 items-center rounded-xl bg-navy px-4 text-sm font-bold text-white"
          >
            Yeni ürün
          </Link>
        </div>
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-6 text-ink-soft">
        Ürün veya galeri kaydettiğinizde site önbelleği otomatik yenilenir. Push sonrası da
        dağıtım tamamlanınca önbellek temizlenir. Gerekirse buradan elle de temizleyebilirsiniz.
      </p>
      {error ? (
        <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
          {error} cPanel&apos;de MySQL kullanıcısını bu veritabanına ekleyin ve şifrenin kayıtlı
          şifreyle aynı olduğundan emin olun.
        </p>
      ) : null}
      {records.length === 0 ? <SetupCatalogButton /> : null}
      {records.length > 0 ? <AdminProductList products={products} /> : null}
    </div>
  );
}
