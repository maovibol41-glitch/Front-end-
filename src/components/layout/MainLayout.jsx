import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      {/* Main content — md:pl-64 pushes content right by the sidebar width on desktop */}
      <div className="md:pl-64 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-ink-800 border-b border-neutral-200 dark:border-neutral-700 px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {/* Page title will be set here */}
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-500">
                <span className="font-semibold text-khmer-600 dark:text-khmer-400">
                  {0}
                </span>{' '}
                products in cart
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
