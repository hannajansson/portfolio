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
      // JPEG: 82% quality — sharp enough, noticeably smaller
      jpg: {
        quality: 82,
      },
      jpeg: {
        quality: 82,
      },
      // PNG: compress without quality loss where possible
      png: {
        quality: 85,
      },
      // WebP: high quality for modern browsers
      webp: {
        quality: 82,
      },
    }),
  ],
  base: '/portfolio/',
})
