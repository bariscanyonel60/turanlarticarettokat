import { LoginForm } from "@/components/admin/LoginForm";
import { isAdmin } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export const instant = false;

export default async function AdminLoginPage() {
  if (await isAdmin()) {
    redirect("/admin");
  }

  return (
    <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">Turanlar Ticaret</p>
      <h1 className="mt-3 font-display text-4xl tracking-[-0.04em] text-navy">Yönetim girişi</h1>
      <div className="mt-8 rounded-2xl border border-navy/10 bg-white p-6">
        <LoginForm />
      </div>
    </section>
  );
}
