import { useState } from 'react';

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative w-11 h-6 rounded-full transition-colors"
      style={{ backgroundColor: dark ? '#7E14FF' : '#D1D5DB' }}
      aria-label="Toggle dark mode"
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
        style={{
          transform: dark ? 'translateX(100%)' : 'translateX(0)',
        }}
      />
    </button>
  );
}
