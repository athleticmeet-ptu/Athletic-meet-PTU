import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_URL': JSON.stringify('https://athletic-backend.vercel.app/')
  },
  server: {
    historyApiFallback: true, // Ensure fallback to index.html
    proxy: {
      '/api': {
        target: 'https://athletic-backend.vercel.app/',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
