"use client";

import { deleteGalleryAction, saveGalleryAction, type AdminFormState } from "@/app/admin/actions";
import type { GalleryImage } from "@/lib/gallery";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useActionState, useState } from "react";

const initialState: AdminFormState = { error: "" };

export function GalleryManager({ images }: { images: GalleryImage[] }) {
  const [state, action, pending] = useActionState(saveGalleryAction, initialState);
  const [previews, setPreviews] = useState<string[]>([]);

  function replaceFiles(next: File[]) {
    setPreviews((current) => {
      for (const url of current) URL.revokeObjectURL(url);
      return next.map((file) => URL.createObjectURL(file));
    });
  }

  return (
    <div className="grid gap-6">
      <form action={action} className="rounded-[1.4rem] border border-navy/10 bg-white p-5">
        {state.error ? (
          <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {state.error}
          </p>
        ) : null}
        <label
          className="grid cursor-pointer gap-3 rounded-2xl border-2 border-dashed border-navy/20 bg-paper px-4 py-8 text-center"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            const dropped = [...event.dataTransfer.files];
            const input = event.currentTarget.querySelector("input");
            if (input) {
              const data = new DataTransfer();
              for (const file of dropped) data.items.add(file);
              input.files = data.files;
            }
            replaceFiles(dropped);
          }}
        >
          <span className="mx-auto grid size-12 place-items-center rounded-full bg-white text-navy">
            <ImagePlus className="size-5" aria-hidden />
          </span>
          <span className="text-sm font-bold text-navy">Galeriye görsel ekle</span>
          <span className="text-xs text-ink-soft">Birden fazla görsel seçebilirsiniz.</span>
          <input
            name="images"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            className="sr-only"
            onChange={(event) => replaceFiles([...(event.target.files ?? [])])}
          />
        </label>
        {previews.length > 0 ? (
          <ul className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {previews.map((src) => (
              <li key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="aspect-square w-full rounded-xl object-cover" />
              </li>
            ))}
          </ul>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="mt-4 min-h-12 rounded-xl bg-navy px-5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Yükleniyor" : "Galeriye kaydet"}
        </button>
      </form>
      {images.length === 0 ? (
        <p className="text-sm text-ink-soft">Galeride henüz görsel yok.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {images.map((image) => (
            <li key={image.id} className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="aspect-square w-full object-cover"
              />
              <form action={deleteGalleryAction} className="p-3">
                <input type="hidden" name="id" value={image.id} />
                <button
                  type="submit"
                  className="text-sm font-semibold text-red-700"
                  onClick={(event) => {
                    if (!window.confirm("Bu görsel galeriden silinsin mi?")) {
                      event.preventDefault();
                    }
                  }}
                >
                  Sil
                </button>
              </form>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
