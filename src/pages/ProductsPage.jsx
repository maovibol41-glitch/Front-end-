import { useState } from "react";
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
import ProductFilters from "../components/features/ProductFilters";
import ProductCard from "../components/features/ProductCard";

export default function ProductsPage() {
  const { products } = useProductStore();
  const { addToCart } = useCartStore();

  const [search, setSearch] = useState("");

  // Filter by search text and category
  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !search || p.category === search;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4 max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">Product Catalog</h2>
        <span className="text-sm text-neutral-500">{filtered.length} items</span>
      </div>

      <ProductFilters search={search} onSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
