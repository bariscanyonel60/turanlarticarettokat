"use client";

import { ProductGrid } from "@/components/products/ProductGrid";
import { categories } from "@/data/products";
import { cn } from "@/lib/cn";
import type { Product, ProductCategoryId } from "@/types/product";
import { useState } from "react";

type FilterId = ProductCategoryId | "hepsi";

export function ProductBrowser({ products }: { products: Product[] }) {
  const [active, setActive] = useState<FilterId>("hepsi");
  const visible =
    active === "hepsi"
      ? products
      : products.filter((product) => product.categoryId === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="toolbar"
        aria-label="Ürün kategorileri"
      >
        <FilterButton
          pressed={active === "hepsi"}
          onClick={() => setActive("hepsi")}
        >
          Tümü
        </FilterButton>
        {categories.map((category) => (
          <FilterButton
            key={category.id}
            pressed={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.name}
          </FilterButton>
        ))}
      </div>
      <div className="mt-8">
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
        "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
        pressed
          ? "border-navy bg-navy text-cream"
          : "border-navy/15 bg-paper text-ink hover:border-navy/40",
      )}
    >
      {children}
    </button>
  );
}
