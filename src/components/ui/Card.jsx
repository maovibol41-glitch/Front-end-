import * as React from 'react';

export function Card({ className, children }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-100 dark:border-gray-700 ${className || ''}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return (
    <div className={`p-4 border-b border-gray-100 dark:border-gray-700 ${className || ''}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={`text-base font-bold text-gray-800 dark:text-gray-100 ${className || ''}`}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={`p-4 ${className || ''}`}>
      {children}
    </div>
  );
}
