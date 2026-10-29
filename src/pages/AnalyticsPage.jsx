import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useCartStore } from '../store/cartStore';

const sampleData = [
  { date: 'Jan', revenue: 4200, sales: 24 },
  { date: 'Feb', revenue: 3890, sales: 13 },
  { date: 'Mar', revenue: 5200, sales: 34 },
  { date: 'Apr', revenue: 4800, sales: 28 },
  { date: 'May', revenue: 6100, sales: 41 },
  { date: 'Jun', revenue: 5700, sales: 37 },
];

export default function AnalyticsPage() {
  const { cart } = useCartStore();

  const totalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.quantity, 0);
  const totalKHR = totalUSD * 4100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">Analytics</h2>
        <span className="text-sm text-neutral-500">{cart.length} items in cart</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Revenue (USD)</h3>
          <p className="text-2xl font-bold text-ink-900 dark:text-ink-100"><span className="mono">${totalUSD.toFixed(2)}</span></p>
        </div>
        <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Revenue (KHR)</h3>
          <p className="text-2xl font-bold text-khr-600"><span className="mono">{totalKHR.toLocaleString()} ៛</span></p>
        </div>
        <div className="bg-white dark:bg-ink-800 rounded-xl p-6 shadow border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">Sales</h3>
          <p className="text-2xl font-bold text-ink-900 dark:text-ink-100">{cart.reduce((s, i) => s + i.quantity, 0)} items</p>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-6">
        <h3 className="text-lg font-bold mb-4 text-ink-900 dark:text-ink-100">Revenue Over Time</h3>
        <div className="h-64">
          <ResponsiveContainer>
            <LineChart data={sampleData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#4857EB" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-6">
        <h3 className="text-lg font-bold mb-4 text-ink-900 dark:text-ink-100">Sales Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={sampleData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#7E14FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
