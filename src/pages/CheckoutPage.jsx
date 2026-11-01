import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import ShoppingCart from "../components/features/ShoppingCart";
import KHQRPaymentModal from "../components/features/KHQRPaymentModal";

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalUSD = cart.reduce(
    (sum, item) => sum + item.priceUSD * item.quantity,
    0,
  );
  const totalKHR = totalUSD * 4100;

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">
          Checkout
        </h2>
        <div className="text-neutral-400 mt-2">Your cart is empty</div>
        <a
          href="/products"
          className="text-sm text-mulberry-600 underline mt-2 block"
        >
          Browse products →
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100 mb-6">
        Checkout
      </h2>

      <ShoppingCart onCheckout={() => setIsModalOpen(true)} />

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-mulberry-500 hover:bg-mulberry-600 text-dark-gray font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
      >
        💳 Pay with KHQR
      </button>

      <KHQRPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalUSD={totalUSD}
        totalKHR={totalKHR}
        onPaymentSuccess={() => {
          clearCart();
          setShowSuccess(true);
          setIsModalOpen(false);
          setTimeout(() => {
            setShowSuccess(false);
            window.location.href = "/cart";
          }, 2000);
        }}
      />

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-ink-800 rounded-2xl p-8 text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-xl font-bold text-ink-900 dark:text-ink-100">
              Payment Successful!
            </h3>
            <p className="text-sm text-neutral-500">
              Your order has been paid. Thank you for your business.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
