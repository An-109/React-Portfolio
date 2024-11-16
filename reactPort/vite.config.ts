import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
    open: true
  },
  build: {
    
    assetsDir: 'assets', // Specifies the folder for assets in the output
    emptyOutDir: true // Cleans the output directory before building
  }
})
