import { useState } from 'react';
import { useCartStore } from '../store/cartStore';

export default function ProductsPage() {
  const { addToCart } = useCartStore();
  const [search, setSearch] = useState('');

  const products = [
    { id: 1, name: 'Iced Latte (កាហ្វេទឹកដោះគោទឹកកក)', priceUSD: 2.50, category: 'Beverages' },
    { id: 2, name: 'Angkor Beer (កំប៉ុង)', priceUSD: 1.20, category: 'Beverages' },
    { id: 3, name: 'Khmer Lok Lak (ឡុកឡាក់សាច់គោ)', priceUSD: 4.50, category: 'Food' },
  ];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">
          Product Catalog
        </h2>
        <span className="text-sm text-neutral-500">
          ({filtered.length} items)
        </span>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-ink-900 text-sm text-ink-900 dark:text-ink-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-mulberry-500 focus:border-transparent"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((product) => (
          <div key={product.id} className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-4 card-hover">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2 py-1 bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300 rounded-md">
                {product.category}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="bg-mulberry-500 hover:bg-mulberry-600 text-white px-3.5 py-2 rounded-xl text-sm font-medium transition-colors"
              >
                + Add to Cart
              </button>
            </div>
            <h3 className="font-bold text-base mt-2 text-ink-900 dark:text-ink-100">
              {product.name}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              <span className="mono">${product.priceUSD.toFixed(2)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
