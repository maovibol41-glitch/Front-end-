/** @type {import('tailwindcss').Config} */
export default {
  // Files Tailwind scans for class names.
  // Without this, Tailwind finds nothing to generate (empty CSS).
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
