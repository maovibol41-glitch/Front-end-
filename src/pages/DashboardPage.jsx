import { useCartStore } from '../store/cartStore';

export default function DashboardPage() {
  const { cart } = useCartStore();

  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const totalKHR = totalUSD * 4100;

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">
          Welcome back, ready to sell?
        </h2>
        <p className="text-neutral-500">
          Manage products, take payments, and track your business.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Total items in cart
          </h3>
          <p className="text-2xl font-bold text-ink-900 dark:text-ink-100">
            {cart.reduce((s, i) => s + i.quantity, 0)}
          </p>
        </div>
        <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Total (USD)
          </h3>
          <p className="text-2xl font-bold text-ink-900 dark:text-ink-100">
            <span className="mono">${totalUSD.toFixed(2)}</span>
          </p>
        </div>
        <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Total (KHR)
          </h3>
          <p className="text-2xl font-bold text-khr-600">
            <span className="mono">{totalKHR.toLocaleString()} ៛</span>
          </p>
        </div>
      </div>
    </div>
  );
}
