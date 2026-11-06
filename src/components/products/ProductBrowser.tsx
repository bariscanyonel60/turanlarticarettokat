"use client";

import { ProductGrid } from "@/components/products/ProductGrid";
import { showcaseGroupId, showcaseGroups, type ShowcaseGroupId } from "@/data/showcase";
import { cn } from "@/lib/cn";
import type { Product } from "@/types/product";
import { useMemo, useState } from "react";

type FilterId = ShowcaseGroupId | "hepsi";

export function ProductBrowser({ products }: { products: Product[] }) {
  const [active, setActive] = useState<FilterId>("hepsi");
  const present = useMemo(
    () => showcaseGroups.filter((group) => products.some((product) => showcaseGroupId(product) === group.id)),
    [products],
  );
  const visible =
    active === "hepsi" ? present : present.filter((group) => group.id === active);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Ürün kategorileri">
          <FilterButton pressed={active === "hepsi"} onClick={() => setActive("hepsi")}>
            Tümü
          </FilterButton>
          {present.map((group) => (
            <FilterButton
              key={group.id}
              pressed={active === group.id}
              onClick={() => setActive(group.id)}
            >
              {group.name}
            </FilterButton>
          ))}
        </div>
        <p className="text-sm font-semibold tracking-[-0.02em] text-navy">
          {active === "hepsi"
            ? products.length
            : products.filter((product) => showcaseGroupId(product) === active).length}{" "}
          ürün
        </p>
      </div>
      <div className="mt-8 space-y-12">
        {visible.map((group) => {
          const items = products.filter((product) => showcaseGroupId(product) === group.id);
          return (
            <section key={group.id} aria-labelledby={`grup-${group.id}`}>
              <h2
                id={`grup-${group.id}`}
                className="font-display text-2xl tracking-[-0.04em] text-navy sm:text-3xl"
              >
                {group.name}
              </h2>
              <div className="mt-5">
                <ProductGrid products={items} priorityFirst={group.id === visible[0]?.id} />
              </div>
            </section>
          );
        })}
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
