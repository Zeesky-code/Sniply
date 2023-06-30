import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth/signup': {
        target: 'https://sniply.onrender.com',
        changeOrigin: true,
      },
      '/auth/login': {
        target: 'https://sniply.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
