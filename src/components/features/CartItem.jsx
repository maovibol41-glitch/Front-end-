import { useCartStore } from '../../store/cartStore';

export default function CartItem({ item, onRemove }) {
  const { removeFromCart, adjustQuantity } = useCartStore();

  return (
    <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-4 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
        <div className="min-w-0">
          <p className="font-semibold text-sm text-ink-900 dark:text-ink-100 truncate">{item.name}</p>
          <p className="text-xs text-neutral-500 mono">
            ${item.priceUSD.toFixed(2)} × {item.quantity}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={() => adjustQuantity(item.id, -1)}
          className="w-7 h-7 rounded-lg border border-neutral-300 dark:border-neutral-600 text-sm font-medium text-neutral-600 dark:text-neutral-300"
        >
          −
        </button>
        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => adjustQuantity(item.id, 1)}
          className="w-7 h-7 rounded-lg border border-neutral-300 dark:border-neutral-600 text-sm font-medium text-neutral-600 dark:text-neutral-300"
        >
          +
        </button>
        <button
          onClick={onRemove}
          className="text-sm text-red-500 hover:text-red-700 ml-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
