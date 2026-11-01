import * as React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all active:scale-[0.98]",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-khmer-600 hover:bg-khmer-700 text-white focus:ring-khmer-600",
        secondary:
          "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-400",
        ghost:
          "bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:ring-gray-400",
        success:
          "bg-green-600 hover:bg-green-700 text-white focus:ring-green-600",
        danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-600",
        gold: "bg-gold-500 hover:bg-gold-600 text-white focus:ring-gold-500",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
