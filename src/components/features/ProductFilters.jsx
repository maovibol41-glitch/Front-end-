import { useMemo } from 'react';
import { useProductStore } from '../../store/productStore';

export default function ProductFilters({ search, onSearch }) {
  const { products } = useProductStore();

  // Get unique categories so the dropdown has no duplicates
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return [...set].sort();
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-ink-900 text-sm text-ink-900 dark:text-ink-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-mulberry-500 focus:border-transparent"
        />
      </div>
      <div className="sm:w-56">
        <select
          value=""
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-ink-900 text-sm text-ink-900 dark:text-ink-100 focus:outline-none focus:ring-2 focus:ring-mulberry-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
