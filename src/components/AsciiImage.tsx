import { useEffect, useRef } from 'react'

// 8×8 Bayer ordered dither matrix — gives the classic halftone dot pattern
const BAYER8 = [
  [ 0, 32,  8, 40,  2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44,  4, 36, 14, 46,  6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [ 3, 35, 11, 43,  1, 33,  9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47,  7, 39, 13, 45,  5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
]

const CELL = 1

interface Props {
  src: string
  alt: string
  className?: string
}

export function AsciiImage({ src, alt, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const draw = () => {
      const { width: w, height: h } = canvas.getBoundingClientRect()
      if (!w || !h) return

      canvas.width = Math.round(w)
      canvas.height = Math.round(h)

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const img = new Image()
      img.onload = () => {
        const dw = Math.ceil(w / CELL)
        const dh = Math.ceil(h / CELL)

        // Sample image at dither resolution with cover crop
        const sample = document.createElement('canvas')
        sample.width = dw
        sample.height = dh
        const sCtx = sample.getContext('2d', { willReadFrequently: true })!

        const ia = img.naturalWidth / img.naturalHeight
        const ca = dw / dh
        let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight
        if (ia > ca) { sw = sh * ca; sx = (img.naturalWidth - sw) / 2 }
        else { sh = sw / ca; sy = (img.naturalHeight - sh) / 2 }
        sCtx.drawImage(img, sx, sy, sw, sh, 0, 0, dw, dh)

        const { data } = sCtx.getImageData(0, 0, dw, dh)
        const total = dw * dh

        // Pre-compute greyscale for all pixels in one pass and find tonal range
        const grey = new Float32Array(total)
        let minB = 1, maxB = 0
        for (let j = 0; j < total; j++) {
          const i = j * 4
          const b = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255
          grey[j] = b
          if (b < minB) minB = b
          if (b > maxB) maxB = b
        }
        const range = Math.max(maxB - minB, 0.01)

        // Build dithered 1-bit image at dw×dh, then scale up to display size
        const dot = document.createElement('canvas')
        dot.width = dw
        dot.height = dh
        const dCtx = dot.getContext('2d')!
        const out = dCtx.createImageData(dw, dh)

        for (let y = 0; y < dh; y++) {
          for (let x = 0; x < dw; x++) {
            const j = y * dw + x
            // Histogram stretch → full tonal range, then S-curve for punchy contrast
            const stretched = (grey[j] - minB) / range
            const b = stretched < 0.5
              ? 2 * stretched * stretched
              : 1 - 2 * (1 - stretched) * (1 - stretched)
            const threshold = (BAYER8[y % 8][x % 8] + 0.5) / 64
            const light = b > threshold
            const i = j * 4
            // Cream paper for light areas, dark ink for dark areas
            out.data[i]     = light ? 232 : 22
            out.data[i + 1] = light ? 228 : 20
            out.data[i + 2] = light ? 218 : 18
            out.data[i + 3] = 255
          }
        }

        dCtx.putImageData(out, 0, 0)

        // Scale up with nearest-neighbor so each dither cell stays a crisp block
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(dot, 0, 0, dw, dh, 0, 0, Math.round(w), Math.round(h))
      }
      img.src = src
    }

    const ro = new ResizeObserver(draw)
    ro.observe(canvas)
    return () => ro.disconnect()
  }, [src])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-label={alt}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}
