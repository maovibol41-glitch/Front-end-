import * as React from 'react';

export function Badge({ variant = 'default', className, children }) {
  const variants = {
    default: 'bg-khmer-100 text-khmer-700 dark:bg-khmer-900/30 dark:text-khmer-300',
    gold: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
    success: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    danger: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    muted: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className || ''}`}
    >
      {children}
    </span>
  );
}
