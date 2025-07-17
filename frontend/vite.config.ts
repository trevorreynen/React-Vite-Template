// ./frontend/vite.config.ts

// Imports
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'

// Load from root .env file
dotenv.config({ path: '../.env' })

const port = parseInt(process.env.FRONTEND_PORT || '3000')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/mixins.scss' as *;`
      }
    }
  },
  server: {
    port: port,
    host: true, // Allows access via local IP
    strictPort: true, // Ensures port doesn't auto-switch
  }
})
