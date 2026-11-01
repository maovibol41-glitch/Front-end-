import { useCartStore } from "../../store/cartStore";

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore();

  return (
    <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-4 card-hover">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold px-2 py-1 bg-mulberry-100 text-mulberry-700 dark:bg-mulberry-900/30 dark:text-mulberry-300 rounded-md">
          {product.category}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-mulberry-500 hover:bg-mulberry-600 text-dark-gray px-3.5 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          + Add to Cart
        </button>
      </div>
      <h3 className="font-bold text-base mt-2 text-ink-900 dark:text-ink-100">
        {product.name}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mono mt-1">
        ${product.priceUSD.toFixed(2)}
      </p>
    </div>
  );
}
