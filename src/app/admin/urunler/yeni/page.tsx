import { ProductForm } from "@/components/admin/ProductForm";
import { categories } from "@/data/products";
import { isAdmin } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export const instant = false;

export default async function NewProductPage() {
  if (!(await isAdmin())) {
    redirect("/admin/giris");
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <h1 className="mb-6 font-display text-3xl tracking-[-0.04em] text-navy">Yeni ürün</h1>
      <ProductForm categories={categories} />
    </div>
  );
}
