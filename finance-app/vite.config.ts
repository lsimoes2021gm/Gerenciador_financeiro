// vite.config.ts - configuração de desenvolvimento
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      // Configurações para melhor compatibilidade
      babel: {
        plugins: [
          ['babel-plugin-styled-components', { displayName: true, fileName: false }]
          
        ]
      }
    }),
    tailwindcss()
  ],
  server: {
    host: true, // Permite acesso por IP
    port: 5173,
    strictPort: true,
    headers: {
      'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    },
    watch: {
      usePolling: true // Melhor para alguns sistemas de arquivos
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
    force: true // Força pré-empacotamento
  },
  build: {
    sourcemap: true, // Para melhor debug
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['chart.js', 'react-chartjs-2'],
          ui: ['lucide-react']
        }
      }
    }
  }
})