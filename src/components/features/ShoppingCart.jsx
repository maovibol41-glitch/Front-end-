import { useCartStore } from "../../store/cartStore";
import CartItem from "./CartItem";

export default function ShoppingCart({ onCheckout }) {
  const { cart, removeFromCart } = useCartStore();

  const totalUSD = cart.reduce(
    (sum, item) => sum + item.priceUSD * item.quantity,
    0,
  );
  const totalKHR = totalUSD * 4100;

  if (cart.length === 0) {
    return (
      <div className="text-center py-8 text-neutral-400">
        <div className="text-4xl mb-2">🛒</div>
        <p className="text-sm">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}
      <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-4">
        <div className="flex justify-between font-bold">
          <span>Subtotal (USD)</span>
          <span className="mono">${totalUSD.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total (KHR)</span>
          <span className="text-khr-600 mono">
            {totalKHR.toLocaleString()} ៛
          </span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full mt-3 bg-mulberry-500 hover:bg-mulberry-600 text-dark-gray font-semibold py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
