import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/merkl-api': {
        target: 'https://api.merkl.xyz',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/merkl-api/, ''),
      },
    },
  },
})
