import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SalesOverviewChart({ data, title }) {
  return (
    <div className="bg-white dark:bg-ink-800 rounded-xl shadow border border-neutral-200 dark:border-neutral-700 p-6">
      <h3 className="text-lg font-bold mb-4 text-ink-900 dark:text-ink-100">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#7E14FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
