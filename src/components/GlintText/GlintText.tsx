import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from 'react'
import './GlintText.css'

const LOAD_DELAY_MS = 900

interface GlintTextProps extends HTMLAttributes<HTMLElement> {
  /** The heading text. Use \n for a line break. */
  text: string
  as?: 'h1' | 'h2' | 'h3'
  /**
   * 'load' runs one glint pass shortly after mount (above the fold).
   * 'view' runs one pass the first time the text scrolls into view.
   * Hovering always runs another pass.
   */
  trigger?: 'load' | 'view'
}

/** Gives each word its letter offset, counted across the whole text so the glint runs left to right. */
function layout(text: string) {
  let offset = 0
  return text.split('\n').map(line =>
    line.split(' ').map(word => {
      const item = { word, offset }
      offset += word.length + 1
      return item
    }),
  )
}

export function GlintText({ text, as: Tag = 'h1', trigger = 'load', ...rest }: GlintTextProps) {
  // Each new `pass` remounts the letters, which replays the glint once
  const [pass, setPass] = useState(0)
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (trigger === 'load') {
      const t = setTimeout(() => setPass(p => p + 1), LOAD_DELAY_MS)
      return () => clearTimeout(t)
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPass(p => p + 1)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [trigger])

  const lines = layout(text)

  return (
    <Tag
      ref={ref}
      aria-label={text.replace('\n', ' ')}
      onMouseEnter={() => setPass(p => p + 1)}
      {...rest}
    >
      {lines.map((words, l) => (
        <span key={l}>
          {words.map(({ word, offset }, w) => (
            <span key={`${pass}-${w}`}>
              <span className="glint-word">
                {word.split('').map((char, i) => (
                  <span
                    key={i}
                    className={`glint-char${pass > 0 ? ' glint-char--run' : ''}`}
                    aria-hidden="true"
                    style={{ '--i': offset + i } as CSSProperties}
                  >
                    {char}
                  </span>
                ))}
              </span>
              {w < words.length - 1 ? ' ' : null}
            </span>
          ))}
          {l < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Tag>
  )
}
