import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import AnalyticsDashboard from "../components/features/AnalyticsDashboard";
import RevenueChart from "../components/features/RevenueChart";
import TopProductsChart from "../components/features/TopProductsChart";

const sampleData = [
  { month: "Jan", revenue: 4200, sales: 24 },
  { month: "Feb", revenue: 3890, sales: 13 },
  { month: "Mar", revenue: 5200, sales: 34 },
  { month: "Apr", revenue: 4800, sales: 28 },
  { month: "May", revenue: 6100, sales: 41 },
  { month: "Jun", revenue: 5700, sales: 37 },
];

const topProducts = [
  { name: "Khmer Lok Lak", sales: 38 },
  { name: "Iced Latte", sales: 31 },
  { name: "Angkor Beer", sales: 27 },
  { name: "Rice Plate", sales: 22 },
  { name: "Banana Shake", sales: 19 },
];

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-100">Analytics</h2>
      </div>

      <AnalyticsDashboard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RevenueChart data={sampleData} title="Revenue Over Time" />
        <TopProductsChart data={topProducts} title="Top Products by Sales" />
      </div>

      <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-6">
        <h3 className="text-lg font-bold mb-4 text-ink-900 dark:text-ink-100">Sales Overview</h3>
        <div className="h-64">
          <ResponsiveContainer>
            <BarChart data={sampleData}>
              <XAxis dataKey="month" />
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
