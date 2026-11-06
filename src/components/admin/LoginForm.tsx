"use client";

import { loginAction, type AdminFormState } from "@/app/admin/actions";
import { useActionState } from "react";

const initialState: AdminFormState = { error: "" };

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);
  return (
    <form action={action} className="grid gap-4">
      {state.error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.error}
        </p>
      ) : null}
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Kullanıcı adı
        <input
          name="username"
          autoComplete="username"
          required
          className="min-h-12 rounded-xl border border-navy/15 px-4 font-medium"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Şifre
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="min-h-12 rounded-xl border border-navy/15 px-4 font-medium"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="min-h-12 rounded-xl bg-navy px-5 text-base font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Giriş yapılıyor" : "Giriş yap"}
      </button>
    </form>
  );
}
