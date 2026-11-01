import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingCart, DollarSign, BarChart3, Settings, X } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Products', icon: Package, path: '/products' },
  { name: 'Orders', icon: ShoppingCart, path: '/cart' },
  { name: 'Checkout', icon: DollarSign, path: '/checkout' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile overlay — click to close sidebar on phone */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />}

      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        bg-white dark:bg-ink-800 border-r border-neutral-200 dark:border-neutral-700
        min-h-screen
      `}>
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 w-full">
            {/* Hamburger button — shown on phone when menu is closed */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition flex items-center justify-center w-full"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            {/* Close button — shown on phone when menu is open */}
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition flex items-center justify-center w-full"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="mt-4 px-3 space-y-1">
          {navigation.map((item) => {
            const active = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active
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
    </>
  );
}
