"use client";

import { deleteProductAction } from "@/app/admin/actions";

export function DeleteProductButton({ id, name }: { id: number; name: string }) {
  return (
    <form action={deleteProductAction}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-sm font-semibold text-red-700"
        onClick={(event) => {
          if (!window.confirm(`${name} silinsin mi?`)) {
            event.preventDefault();
          }
        }}
      >
        Sil
      </button>
    </form>
  );
}
