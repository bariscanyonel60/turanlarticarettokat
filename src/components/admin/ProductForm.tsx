"use client";

import { saveProductAction, type AdminFormState } from "@/app/admin/actions";
import { priceInputValue } from "@/lib/price";
import { slugify } from "@/lib/slug";
import type { Product, ProductCategory } from "@/types/product";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useActionState, useState } from "react";

type EditableProduct = Product & { id: number; sortOrder: number };

const initialState: AdminFormState = { error: "" };
const tubeOptions = [
  { id: "ev-tipi", label: "Ev tipi" },
  { id: "piknik", label: "Piknik" },
  { id: "sanayi", label: "Sanayi" },
  { id: "ticari", label: "Ticari" },
  { id: "diger", label: "Diğer" },
] as const;

const fieldClass = "min-h-12 rounded-xl border border-navy/15 bg-white px-4 font-medium";

export function ProductForm({
  categories,
  product,
}: {
  categories: ProductCategory[];
  product?: EditableProduct;
}) {
  const [state, action, pending] = useActionState(saveProductAction, initialState);
  const [slugTouched, setSlugTouched] = useState(Boolean(product));
  const [slug, setSlug] = useState(product?.slug ?? "");
  const [imageKind, setImageKind] = useState(product?.image.kind ?? "photo");
  const [mainPreview, setMainPreview] = useState<string | null>(null);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const photo = product?.image.kind === "photo" ? product.image : null;
  const gallery = product?.gallery ?? [];

  return (
    <form action={action} className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
      {product ? <input type="hidden" name="id" value={product.id} /> : null}
      <div className="grid gap-5 rounded-[1.4rem] border border-navy/10 bg-white p-5 sm:p-6">
        {state.error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {state.error}
          </p>
        ) : null}
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Ürün adı
          <input
            name="name"
            required
            defaultValue={product?.name}
            onChange={(event) => {
              if (!slugTouched) setSlug(slugify(event.target.value));
            }}
            className={fieldClass}
          />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Adres
            <input
              name="slug"
              required
              value={slug}
              onChange={(event) => {
                setSlugTouched(true);
                setSlug(slugify(event.target.value));
              }}
              className={fieldClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Kategori
            <select
              name="categoryId"
              defaultValue={product?.categoryId ?? categories[0]?.id}
              className={fieldClass}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Açıklama
          <textarea
            name="summary"
            required
            rows={4}
            defaultValue={product?.summary}
            className="rounded-xl border border-navy/15 px-4 py-3 font-medium"
          />
        </label>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <label className="grid gap-2 text-sm font-semibold text-navy lg:col-span-2">
            Kullanım alanı
            <input name="usage" required defaultValue={product?.usage} className={fieldClass} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Fiyat (TL)
            <input
              name="price"
              inputMode="decimal"
              defaultValue={priceInputValue(product?.priceKurus)}
              placeholder="850 veya 850,50"
              className={fieldClass}
            />
            <span className="text-xs font-medium text-ink-soft">
              Boş bırakılırsa sitede rakam görünmez. Binlik ayırıcı kullanmayın.
            </span>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Kapasite
            <input
              name="capacity"
              defaultValue={product?.capacity ?? ""}
              placeholder="Boş kalabilir"
              className={fieldClass}
            />
          </label>
        </div>
        <label className="grid max-w-40 gap-2 text-sm font-semibold text-navy">
          Sıra
          <input
            name="sortOrder"
            type="number"
            defaultValue={product?.sortOrder ?? 0}
            className={fieldClass}
          />
        </label>
      </div>
      <div className="grid content-start gap-5">
        <fieldset className="grid gap-3 rounded-[1.4rem] border border-navy/10 bg-white p-5">
          <legend className="px-1 text-sm font-semibold text-navy">Görsel türü</legend>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="imageKind"
              value="photo"
              checked={imageKind === "photo"}
              onChange={() => setImageKind("photo")}
            />
            Fotoğraf
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            <input
              type="radio"
              name="imageKind"
              value="illustration"
              checked={imageKind === "illustration"}
              onChange={() => setImageKind("illustration")}
            />
            Çizim
          </label>
        </fieldset>
        {imageKind === "photo" ? (
          <div className="grid gap-4 rounded-[1.4rem] border border-navy/10 bg-white p-5">
            <p className="text-sm font-semibold text-navy">Ürün görseli</p>
            <DropZone
              name="image"
              preview={mainPreview ?? photo?.src}
              previewAlt={photo?.alt ?? "Seçilen ürün görseli"}
              label={photo ? "Görseli değiştir" : "Görsel seçin"}
              onFiles={(files) => {
                const file = files[0] ?? null;
                setMainPreview((current) => {
                  if (current) URL.revokeObjectURL(current);
                  return file ? URL.createObjectURL(file) : null;
                });
              }}
            />
            {gallery.length > 0 ? (
              <ul className="grid grid-cols-3 gap-2">
                {gallery.map((item) => (
                  <li key={item.id ?? item.src} className="relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="aspect-square w-full rounded-xl bg-paper object-contain"
                    />
                    {item.id ? (
                      <label className="mt-1 flex items-center gap-1 text-[0.7rem] font-semibold text-red-700">
                        <input type="checkbox" name="removeGallery" value={item.id} />
                        Kaldır
                      </label>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="text-sm font-semibold text-navy">Ek görseller</p>
            <DropZone
              name="gallery"
              multiple
              label="Galeriye görsel ekle"
              onFiles={(files) => {
                setGalleryPreviews((current) => {
                  for (const url of current) URL.revokeObjectURL(url);
                  return files.map((file) => URL.createObjectURL(file));
                });
              }}
            />
            {galleryPreviews.length > 0 ? (
              <ul className="grid grid-cols-3 gap-2">
                {galleryPreviews.map((src) => (
                  <li key={src}>
                    {/* Yerel önizleme, next/image uzaktan adres ister. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="aspect-square w-full rounded-xl object-contain" />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : (
          <label className="grid gap-2 rounded-[1.4rem] border border-navy/10 bg-white p-5 text-sm font-semibold text-navy">
            Çizim türü
            <select
              name="variant"
              defaultValue={product?.image.kind === "illustration" ? product.image.variant : "ticari"}
              className={fieldClass}
            >
              {tubeOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        )}
        <button
          type="submit"
          disabled={pending}
          className="min-h-12 rounded-xl bg-navy px-5 text-base font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Kaydediliyor" : "Kaydet"}
        </button>
      </div>
    </form>
  );
}

function DropZone({
  name,
  label,
  preview,
  previewAlt,
  multiple = false,
  onFiles,
}: {
  name: string;
  label: string;
  preview?: string;
  previewAlt?: string;
  multiple?: boolean;
  onFiles: (files: File[]) => void;
}) {
  return (
    <label
      className="grid cursor-pointer gap-3 rounded-2xl border-2 border-dashed border-navy/20 bg-paper px-4 py-5 text-center"
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        const files = [...event.dataTransfer.files];
        const input = event.currentTarget.querySelector("input");
        if (input) {
          const data = new DataTransfer();
          for (const file of multiple ? files : files.slice(0, 1)) {
            data.items.add(file);
          }
          input.files = data.files;
        }
        onFiles(multiple ? files : files.slice(0, 1));
      }}
    >
      {preview ? (
        preview.startsWith("blob:") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt={previewAlt ?? ""} className="mx-auto h-40 w-full object-contain" />
        ) : (
          <Image
            src={preview}
            alt={previewAlt ?? ""}
            width={640}
            height={480}
            className="mx-auto h-40 w-full object-contain"
          />
        )
      ) : (
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-white text-navy">
          <ImagePlus className="size-5" aria-hidden />
        </span>
      )}
      <span className="text-sm font-bold text-navy">{label}</span>
      <span className="text-xs text-ink-soft">JPG, PNG veya WebP. Sürükleyip bırakabilirsiniz.</span>
      <input
        name={name}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple={multiple}
        className="sr-only"
        onChange={(event) => onFiles([...(event.target.files ?? [])])}
      />
    </label>
  );
}
