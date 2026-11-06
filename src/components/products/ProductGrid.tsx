import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <li key={product.slug} className="min-w-0">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
