"use client";

import { setupCatalogAction, type AdminFormState } from "@/app/admin/actions";
import { useActionState } from "react";

const initialState: AdminFormState = { error: "" };

export function SetupCatalogButton() {
  const [state, action, pending] = useActionState(setupCatalogAction, initialState);
  return (
    <form action={action} className="grid gap-3">
      {state.error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="min-h-12 w-fit rounded-xl bg-navy px-5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Aktarılıyor" : "Mevcut ürünleri veritabanına aktar"}
      </button>
    </form>
  );
}