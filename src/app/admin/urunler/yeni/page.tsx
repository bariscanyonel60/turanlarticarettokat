import { ProductForm } from "@/components/admin/ProductForm";
import { categories } from "@/data/products";
import { isAdmin } from "@/lib/admin-auth";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const instant = false;

export default async function NewProductPage() {
  if (!(await isAdmin())) {
    redirect("/admin/giris");
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <Link
        href="/admin"
        className="mb-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-navy"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Ürünlere dön
      </Link>
      <h1 className="mb-6 font-display text-3xl tracking-[-0.04em] text-navy">Yeni ürün</h1>
      <ProductForm categories={categories} />
    </div>
  );
}
