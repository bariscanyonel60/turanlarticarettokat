"use client";

import { purgeCacheAction, type AdminFormState } from "@/app/admin/actions";
import { RefreshCw } from "lucide-react";
import { useActionState } from "react";

const initialState: AdminFormState = { error: "" };

export function PurgeCacheButton({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(purgeCacheAction, initialState);

  return (
    <div className={compact ? "grid gap-2" : "grid gap-3"}>
      <form action={action}>
        <button
          type="submit"
          disabled={pending}
          className={
            compact
              ? "inline-flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-bold text-white/80 hover:bg-white/10 disabled:opacity-60"
              : "inline-flex min-h-11 items-center gap-2 rounded-xl border border-navy/15 bg-white px-4 text-sm font-bold text-navy disabled:opacity-60"
          }
        >
          <RefreshCw className={`size-4 ${pending ? "animate-spin" : ""}`} aria-hidden />
          {pending ? "Temizleniyor" : "Önbelleği temizle"}
        </button>
      </form>
      {state.error ? (
        <p
          className={
            compact
              ? "px-3 text-xs leading-5 text-red-200"
              : "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800"
          }
        >
          {state.error}
        </p>
      ) : null}
      {state.message ? (
        <p
          className={
            compact
              ? "px-3 text-xs leading-5 text-white/70"
              : "rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900"
          }
        >
          {state.message}
        </p>
      ) : null}
    </div>
  );
}
