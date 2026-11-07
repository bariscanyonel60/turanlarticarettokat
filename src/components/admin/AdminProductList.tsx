"use client";

import { DeleteProductButton } from "@/components/admin/DeleteProductButton";
import { formatPrice, missingPriceLabel } from "@/lib/price";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type AdminListProduct = {
  id: number;
  name: string;
  categoryName: string;
  priceKurus: number | null;
  image:
    | { kind: "photo"; src: string; alt: string; width: number; height: number }
    | { kind: "other" };
};

export function AdminProductList({ products }: { products: AdminListProduct[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase("tr");
    if (!needle) {
      return products;
    }
    return products.filter((product) => {
      const haystack = `${product.name} ${product.categoryName}`.toLocaleLowerCase("tr");
      return haystack.includes(needle);
    });
  }, [products, query]);

  return (
    <div>
      <label className="mb-4 grid max-w-md gap-2 text-sm font-semibold text-navy">
        Ürün ara
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ad veya kategori"
          className="min-h-11 rounded-xl border border-navy/15 bg-white px-4 font-medium"
        />
      </label>
      {filtered.length === 0 ? (
        <p className="rounded-xl border border-navy/10 bg-white px-4 py-6 text-sm text-ink-soft">
          Aramanızla eşleşen ürün yok.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 2xl:grid-cols-4">
          {filtered.map((product) => (
            <li key={product.id} className="overflow-hidden rounded-2xl border border-navy/10 bg-white">
              <Link href={`/admin/urunler/${product.id}`} className="block">
                {product.image.kind === "photo" ? (
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    width={product.image.width}
                    height={product.image.height}
                    className="aspect-square w-full bg-paper object-contain p-3"
                  />
                ) : (
                  <span className="grid aspect-square place-items-center bg-paper text-sm font-semibold text-ink-soft">
                    Fotoğraf yok
                  </span>
                )}
                <span className="block px-4 pt-3 font-display text-lg leading-tight tracking-[-0.03em] text-navy">
                  {product.name}
                </span>
                <span className="block px-4 pt-1 text-xs font-semibold tracking-[0.14em] text-ink-soft uppercase">
                  {product.categoryName}
                </span>
                <span className="block px-4 pt-2 font-display text-xl tracking-[-0.03em] text-navy">
                  {product.priceKurus == null ? missingPriceLabel() : formatPrice(product.priceKurus)}
                </span>
              </Link>
              <div className="flex items-center justify-between px-4 py-3">
                <Link href={`/admin/urunler/${product.id}`} className="text-sm font-bold text-navy">
                  Düzenle
                </Link>
                <DeleteProductButton id={product.id} name={product.name} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
