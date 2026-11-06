"use client";

import { ProductGrid } from "@/components/products/ProductGrid";
import { categories } from "@/data/products";
import { cn } from "@/lib/cn";
import type { Product, ProductCategoryId } from "@/types/product";
import { useMemo, useState } from "react";

type FilterId = ProductCategoryId | "hepsi";

export function ProductBrowser({ products }: { products: Product[] }) {
  const [active, setActive] = useState<FilterId>("hepsi");
  const present = useMemo(
    () => categories.filter((category) => products.some((product) => product.categoryId === category.id)),
    [products],
  );
  const visible =
    active === "hepsi"
      ? products
      : products.filter((product) => product.categoryId === active);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div
          className="flex flex-wrap gap-2"
          role="toolbar"
          aria-label="Ürün kategorileri"
        >
          <FilterButton pressed={active === "hepsi"} onClick={() => setActive("hepsi")}>
            Tümü
          </FilterButton>
          {present.map((category) => (
            <FilterButton
              key={category.id}
              pressed={active === category.id}
              onClick={() => setActive(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </div>
        <p className="text-sm font-semibold tracking-[-0.02em] text-navy">
          {visible.length} ürün
        </p>
      </div>
      <div className="mt-6">
        <ProductGrid products={visible} />
      </div>
    </div>
  );
}

function FilterButton({
  children,
  pressed,
  onClick,
}: {
  children: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-full border px-4 text-sm font-bold transition-colors",
        pressed
          ? "border-navy bg-navy text-cream"
          : "border-navy/15 bg-white text-ink hover:border-navy/40",
      )}
    >
      {children}
    </button>
  );
}
