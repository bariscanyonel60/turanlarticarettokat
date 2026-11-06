import { AdminShell } from "@/components/admin/AdminShell";
import { buildMetadata } from "@/lib/seo";
import type { ReactNode } from "react";

export const instant = false;

export const metadata = buildMetadata({
  title: "Yönetim",
  description: "Turanlar Ticaret ürün yönetimi.",
  path: "/admin",
  noIndex: true,
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
