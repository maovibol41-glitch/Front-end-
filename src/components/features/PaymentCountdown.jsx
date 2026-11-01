import { useState, useEffect } from 'react';

export default function PaymentCountdown({ timeLeft }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 rounded-full text-xs font-semibold">
      <span>⏱️ {timeLeft}s</span>
    </div>
  );
}
