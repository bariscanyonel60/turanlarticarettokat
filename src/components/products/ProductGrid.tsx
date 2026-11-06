import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

export function ProductGrid({
  products,
  priorityFirst = false,
}: {
  products: Product[];
  priorityFirst?: boolean;
}) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <li key={product.slug} className="min-w-0">
          <ProductCard product={product} priority={priorityFirst && index === 0} />
        </li>
      ))}
    </ul>
  );
}
