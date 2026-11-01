import { useCartStore } from "../store/cartStore";
import ShoppingCart from "../components/features/ShoppingCart";

export default function CartPage() {
  const { cart, clearCart } = useCartStore();

  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const totalKHR = totalUSD * 4100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
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

      <ShoppingCart onCheckout={() => (window.location.href = "/checkout")} />
    </div>
  );
}
