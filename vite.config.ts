import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' }), dts({ rollupTypes: true, include: ['lib'] })],
  build: {
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'lib/index.tsx'),
      formats: ['es'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'min.js'}`
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  }
})
