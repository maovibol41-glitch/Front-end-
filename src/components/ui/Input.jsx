import * as React from 'react';

export function Input({ className, ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-khmer-600 focus:border-transparent transition-shadow`}
      {...props}
    />
  );
}

export function Label({ className, children }) {
  return (
    <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 ${className || ''}`}>
      {children}
    </label>
  );
}
