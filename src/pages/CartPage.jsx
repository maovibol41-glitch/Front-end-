import { useCartStore } from '../store/cartStore';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const totalKHR = totalUSD * 4100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">Your Cart</h2>
        {cart.length > 0 && (
          <button
            onClick={() => clearCart()}
            className="text-sm text-red-500 hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12 text-neutral-400">
          <p className="text-4xl mb-2">🛒</p>
          <p>Your cart is empty</p>
          <a href="/products" className="text-sm text-mulberry-600 underline mt-2 block">
            Browse products →
          </a>
        </div>
      ) : (
        <div>
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-white dark:bg-ink-800 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                <div>
                  <h4 className="font-semibold text-base text-ink-900 dark:text-ink-100">{item.name}</h4>
                  <p className="text-sm text-neutral-500">
                    <span className="mono">${item.priceUSD.toFixed(2)}</span> × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg text-ink-900 dark:text-ink-100">
                    <span className="mono">${(item.priceUSD * item.quantity).toFixed(2)}</span>
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm font-bold px-2 py-1 bg-red-50 dark:bg-red-900/30 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 space-y-2">
            <div className="flex justify-between font-bold text-lg">
              <span>Total (USD)</span>
              <div className="text-right">
                <p className="text-ink-900 dark:text-ink-100"><span className="mono">${totalUSD.toFixed(2)}</span></p>
                <p className="text-xs text-khr-600"><span className="mono">{totalKHR.toLocaleString()} ៛</span></p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => window.location.href = '/products'}
                className="flex-1 bg-neutral-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 font-bold py-3 rounded-xl hover:bg-neutral-200 dark:hover:bg-ink-700 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => window.location.href = '/checkout'}
                className="flex-1 bg-mulberry-500 hover:bg-mulberry-600 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                💳 Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
