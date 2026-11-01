import { useState } from 'react';
import productsData from '../data/products.json';
import { useCartStore } from '../store/cartStore';

export default function InventoryPage() {
  const { addToCart } = useCartStore();

  // ── State ──────────────────────────────────────────────────────
  const [products] = useState(productsData);
  const [stock, setStock] = useState(() => {
    // Default stock for every product; the merchant can adjust up or down.
    const initial = {};
    productsData.forEach((p) => {
      initial[p.id] = 10;
    });
    return initial;
  });
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [priceUSD, setPriceUSD] = useState('');
  const [image, setImage] = useState('');

  // ── Derived data ───────────────────────────────────────────────
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: products.length,
    inStock: products.reduce((s, p) => s + (stock[p.id] > 0 ? 1 : 0), 0),
    lowStock: products.reduce(
      (s, p) => s + (stock[p.id] > 0 && stock[p.id] <= 5 ? 1 : 0),
      0
    ),
    outOfStock: products.reduce((s, p) => s + (stock[p.id] === 0 ? 1 : 0), 0),
  };

  // ── Actions ────────────────────────────────────────────────────
  const setQty = (id, delta) => {
    setStock((prev) => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }));
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (!name.trim() || !category.trim() || !priceUSD) return;
    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      category: category.trim(),
      priceUSD: Number(priceUSD),
      image:
        image.trim() ||
        'https://images.unsplash.com/photo-1505740472259-4ff01e002759?w=500&q=80',
    };
    setProducts((prev) => [...prev, newProduct]);
    setStock((prev) => ({ ...prev, [newProduct.id]: 10 }));
    // Reset form
    setName('');
    setCategory('');
    setPriceUSD('');
    setImage('');
    setShowAdd(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink-900">
            Inventory
          </h2>
          <p className="mt-1 text-sm text-neutral-500">
            {stats.total} product{stats.total !== 1 ? 's' : ''} in stock
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-mulberry-500 hover:bg-mulberry-600 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          + Add product
        </button>
      </div>

      {/* KPI strip */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Kpi label="Products" value={stats.total} />
        <Kpi label="In stock" value={stats.inStock} color="text-green-600" />
        <Kpi label="Low stock" value={stats.lowStock} color="text-[#F5C542]" />
        <Kpi label="Out of stock" value={stats.outOfStock} color="text-[#B3261E]" />
      </div>

      {/* List */}
      <div className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-ink-600 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-mulberry-500 focus:border-transparent"
        />
        <div className="space-y-3">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4"
            >
              {/* Product image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-14 w-14 rounded-lg object-cover"
                loading="lazy"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-ink-900">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {product.category}
                    </p>
                  </div>
                  <p className="mono text-sm font-bold tabular-nums text-ink-600">
                    ${product.priceUSD.toFixed(2)}
                  </p>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  {/* Status badge — always has a text label, never color alone */}
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      stock[product.id] === 0
                        ? 'bg-[#B3261E] text-[#1B1B1F]'
                        : stock[product.id] <= 5
                        ? 'bg-[#F5C542] text-[#1B1B1F]'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {stock[product.id] === 0
                      ? 'Out of stock'
                      : stock[product.id] <= 5
                      ? 'Low stock'
                      : 'In stock'}
                  </span>
                  <span className="mono text-sm font-semibold text-ink-600">
                    qty {stock[product.id]}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setQty(product.id, -1)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-300 bg-white text-sm font-bold text-ink-600 hover:bg-neutral-100 transition-colors"
                    aria-label="Decrease stock"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold text-ink-900">
                    {stock[product.id]}
                  </span>
                  <button
                    onClick={() => setQty(product.id, 1)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-300 bg-white text-sm font-bold text-ink-600 hover:bg-neutral-100 transition-colors"
                    aria-label="Increase stock"
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-sm text-neutral-500 underline hover:text-neutral-800"
                  onClick={() => {}}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-neutral-400">
              <p>No products match your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Add product modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-ink-900">
                Add product
              </h3>
              <button
                onClick={() => setShowAdd(false)}
                className="text-neutral-400 hover:text-neutral-600"
              >
                ✕
              </button>
            </div>
            <form onSubmit={addProduct} className="space-y-3">
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Input
                label="Price (USD)"
                type="number"
                step="0.01"
                value={priceUSD}
                onChange={(e) => setPriceUSD(e.target.value)}
              />
              <Input
                label="Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAdd(false)}
                  className="flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-ink-600 hover:bg-neutral-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-mulberry-500 px-4 py-2 text-sm font-semibold text-white hover:bg-mulberry-600 transition-colors"
                >
                  Add product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Presentational components ────────────────────────────────────
function Kpi({ label, value, color }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </p>
      <p
        className={`mt-1 text-2xl font-bold mono ${
          color || 'text-ink-900'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Input({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm text-ink-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-mulberry-500 focus:border-transparent"
      />
    </div>
  );
}
