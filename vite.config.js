import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// PostCSS plugins: Tailwind CSS + vendor prefixing
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tailwind needs PostCSS to process the @tailwind directives.
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@hooks': path.resolve(import.meta.dirname, './src/hooks'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
      '@utils': path.resolve(import.meta.dirname, './src/utils'),
      '@services': path.resolve(import.meta.dirname, './src/services'),
      '@styles': path.resolve(import.meta.dirname, './src/styles'),
      '@data': path.resolve(import.meta.dirname, './src/data'),
    },
  },
  server: {
    port: 5173,
    open: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/react-router-dom/')) {
            return 'vendor'
          }
          if (id.includes('/recharts/') || id.includes('/lucide-react/')) {
            return 'ui'
          }
          return undefined
        },
      },
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
  },
})
