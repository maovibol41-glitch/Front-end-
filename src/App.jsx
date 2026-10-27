import React, { useState } from "react";
import productsData from "./data/products.json";
import { useCartStore } from "./store/cartStore";
import KHQRPaymentModal from "./components/features/KHQRPaymentModal";

export default function App() {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();

  // State សម្រាប់គ្រប់គ្រងការ បើក/បិទ KHQR Modal (ជំហានទី ៣)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // គណនាតម្លៃសរុប
  const totalUSD = cart.reduce(
    (sum, item) => sum + item.priceUSD * item.quantity,
    0,
  );
  const totalKHR = totalUSD * 4100;

  return (
    <div className="min-h-screen bg-khmer-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      {/* Header Bar */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-khmer-600">
          🇰🇭 Khmer Merchant Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-khmer-100 text-khmer-700 rounded-lg font-medium text-sm">
            🛒 កន្ត្រកទំនិញ:{" "}
            <strong>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </strong>{" "}
            មុខ
          </span>
        </div>
      </header>

      {/* Main Layout Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
        {/* Left Side: Product Catalog */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
            បញ្ជីទំនិញក្នុងហាង (Product Catalog)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold px-2 py-1 bg-gold-400/20 text-gold-500 rounded-md">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-base mt-2 mb-1">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 pt-0 flex justify-between items-center">
                  <div>
                    <p className="text-khmer-600 font-bold text-lg">
                      ${product.priceUSD.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500">
                      ≈ {(product.priceUSD * 4100).toLocaleString()} ៛
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-khmer-600 hover:bg-khmer-700 text-white px-3.5 py-2 rounded-xl text-sm font-medium transition-colors"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: POS Shopping Cart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md h-fit border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-bold">📋 កុម្ម៉ង់បច្ចុប្បន្ន</h2>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-red-500 hover:underline"
              >
                សម្អាតទាំងអស់
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-4xl mb-2">🛒</p>
              <p className="text-sm">កន្ត្រកទំនិញទទេរ</p>
            </div>
          ) : (
            <div>
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1 mb-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-xl"
                  >
                    <div>
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        ${item.priceUSD.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-khmer-600">
                        ${(item.priceUSD * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xs font-bold px-1.5 py-1 bg-red-50 rounded-lg"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Summary */}
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 space-y-2 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>សរុប (Total):</span>
                  <div className="text-right">
                    <p className="text-khmer-600">${totalUSD.toFixed(2)}</p>
                    <p className="text-xs text-amber-500">
                      {totalKHR.toLocaleString()} ៛
                    </p>
                  </div>
                </div>
              </div>

              {/* Checkout Button - ចុចដើម្បីបើក Modal (ជំហានទី ៥) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                💳 ទូទាត់ប្រាក់ (KHQR / Pay)
              </button>
            </div>
          )}
        </div>
      </main>

      {/* KHQR Payment Modal Placement (ដាក់នៅទីនេះ មុន Tag </div> ចុងក្រោយ) */}
      <KHQRPaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalUSD={totalUSD}
        totalKHR={totalKHR}
        onPaymentSuccess={() => {
          clearCart();
          alert("ការបង់ប្រាក់បានសម្រេច! កន្ត្រកត្រូវបានសម្អាត។");
        }}
      />
    </div>
  );
}
