import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <li key={product.slug} className="min-w-0">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
