import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {/* Page title will be set here */}
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-khmer-600 dark:text-khmer-400">
                  {0}
                </span>{' '}
                products in cart
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
