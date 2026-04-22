import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // SVG: minify with SVGO (removes redundant markup, comments, etc.)
      svg: {
        multipass: true,
      },
      // JPEG: 92% quality — visually crisp, still much smaller than the originals
      jpg: {
        quality: 92,
      },
      jpeg: {
        quality: 92,
      },
      // PNG: compress without quality loss where possible
      png: {
        quality: 92,
      },
      // WebP: high quality for modern browsers
      webp: {
        quality: 92,
      },
    }),
  ],
  base: '/portfolio/',
})
