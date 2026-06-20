import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        photography: resolve(__dirname, 'src/photography.html'),
        paintings: resolve(__dirname, 'src/paintings.html'),
        sketches: resolve(__dirname, 'src/sketches.html'),
        architecture: resolve(__dirname, 'src/architecture.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        shop: resolve(__dirname, 'src/shop.html'),
        reference: resolve(__dirname, 'src/reference.html'),
      },
    },
  },
})
