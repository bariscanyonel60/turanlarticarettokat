"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function SiteShell({
  header,
  footer,
  mobile,
  whatsapp,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  mobile: ReactNode;
  whatsapp: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return <main id="icerik">{children}</main>;
  }

  return (
    <>
      {header}
      <main id="icerik" className="pb-[calc(5.25rem+env(safe-area-inset-bottom))] md:pb-0">
        {children}
      </main>
      {footer}
      {mobile}
      {whatsapp}
    </>
  );
}
