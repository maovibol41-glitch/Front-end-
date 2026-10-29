import { NavLink } from 'react-router-dom';
import { Home, Package, ShoppingCart, DollarSign, BarChart3 } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Products', icon: Package, path: '/products' },
  { name: 'Orders', icon: ShoppingCart, path: '/cart' },
  { name: 'Checkout', icon: DollarSign, path: '/checkout' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
];

export default function Navigation() {
  return (
    <aside className="w-64 bg-white dark:bg-ink-800 border-r border-neutral-200 dark:border-neutral-700 min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-ink-900 dark:text-ink-100">
          <NavLink to="/">
            <span className="flex items-center gap-2">
              <span className="text-2xl">🇰🇭</span> Khmer Merchant
            </span>
          </NavLink>
        </h1>
      </div>
      <nav className="mt-4 px-3 space-y-1">
        {navigation.map((item) => {
          const active = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? 'bg-mulberry-100 text-mulberry-700 dark:bg-mulberry-900/30 dark:text-mulberry-300'
                  : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-100'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
