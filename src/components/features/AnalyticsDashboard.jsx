import { useCartStore } from '../../store/cartStore';

export default function AnalyticsDashboard({ data }) {
  const { cart } = useCartStore();

  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const totalKHR = totalUSD * 4100;
  const sales = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Revenue (USD)</h3>
        <p className="text-2xl font-bold text-ink-900 dark:text-ink-100">
          <span className="mono">${totalUSD.toFixed(2)}</span>
        </p>
      </div>
      <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Revenue (KHR)</h3>
        <p className="text-2xl font-bold text-khr-600">
          <span className="mono">{totalKHR.toLocaleString()} ៛</span>
        </p>
      </div>
      <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Sales</h3>
        <p className="text-2xl font-bold text-ink-900 dark:text-ink-100">{sales} items</p>
      </div>
    </div>
  );
}
