import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import KHQRPaymentModal from '../components/features/KHQRPaymentModal';

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const totalKHR = totalUSD * 4100;

  if (cart.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">Checkout</h2>
        <div className="text-center py-12 text-neutral-400">
          <p className="text-4xl mb-2">🛒</p>
          <p>Your cart is empty</p>
          <a href="/products" className="text-sm text-mulberry-600 underline mt-2 block">
            Browse products →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">Checkout</h2>
        <span className="text-sm text-neutral-500">{cart.length} items</span>
      </div>

      {/* Order Summary */}
      <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-6">
        <h3 className="text-lg font-bold mb-4 text-ink-900 dark:text-ink-100">
          Order Summary
        </h3>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm text-ink-900 dark:text-ink-100">{item.name}</p>
                <p className="text-xs text-neutral-500">
                  <span className="mono">${item.priceUSD.toFixed(2)}</span> × {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-ink-900 dark:text-ink-100">
                  <span className="mono">${(item.priceUSD * item.quantity).toFixed(2)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700 space-y-2">
          <div className="flex justify-between font-bold">
            <span>Subtotal (USD)</span>
            <span className="text-ink-900 dark:text-ink-100"><span className="mono">${totalUSD.toFixed(2)}</span></span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total (KHR)</span>
            <span className="text-khr-600"><span className="mono">{totalKHR.toLocaleString()} ៛</span></span>
          </div>
          <p className="text-xs text-neutral-500">1 USD = 4,100 KHR</p>
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-mulberry-500 hover:bg-mulberry-600 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
      >
        💳 Pay with KHQR
      </button>

      {/* KHQR Payment Modal */}
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
            window.location.href = '/cart';
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
