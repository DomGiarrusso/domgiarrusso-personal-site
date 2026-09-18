import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  define: {
    'import.meta.env.VITE_TURNSTILE_SITE_KEY': JSON.stringify(''),
  },
  plugins: [viteReact()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    tsconfigPaths: true,
  },
  test: {
    environment: 'jsdom',
  },
})
