import { useEffect, useRef, useState } from 'react'
import { Button } from '../../components/Button/Button'
import './Footer.css'

const HEADING_LINES = ["LET'S MAKE IT", 'CLEAR TOGETHER']
const HEADING_LETTER_COUNT = HEADING_LINES.join('').replace(/ /g, '').length

/** Random order of 0..n-1 (Fisher–Yates) */
function shuffle(n: number) {
  const order = Array.from({ length: n }, (_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return order
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [copied, setCopied] = useState(false)
  const [revealed, setRevealed] = useState(false)
  // Letters that have already switched from the Jacquarda face to the normal face
  const [normalLetters, setNormalLetters] = useState<Set<number>>(new Set())

  function copyEmail() {
    navigator.clipboard.writeText('hannanov00@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Start the heading's letter reveal the first time it scrolls into view
  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setRevealed(true)
      observer.disconnect()
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Switch letters one at a time, in random order
  useEffect(() => {
    if (!revealed) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timers = shuffle(HEADING_LETTER_COUNT).map((letter, step) =>
      window.setTimeout(() => {
        setNormalLetters(prev => new Set(prev).add(letter))
      }, reduceMotion ? 0 : 300 + step * 70 + Math.random() * 40)
    )
    return () => timers.forEach(t => clearTimeout(t))
  }, [revealed])

  let letterIndex = 0

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (document.querySelector('script[data-wcb]')) return
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js'
        script.async = true
        script.setAttribute('data-wcb', '1')
        document.body.appendChild(script)
      },
      { rootMargin: '200px' }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="footer" id="contact">
      <div className="footer-top">
        <Button
          href="https://www.linkedin.com/in/hannaajansson/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button onClick={copyEmail}>
          <span style={{ display: 'grid' }}>
            <span style={{ gridArea: '1/1', opacity: copied ? 0 : 1, transition: 'opacity 0.15s' }}>Copy my email</span>
            <span style={{ gridArea: '1/1', opacity: copied ? 1 : 0, transition: 'opacity 0.15s' }} aria-hidden={!copied}>Copied!</span>
          </span>
        </Button>
      </div>

      <h2 ref={headingRef} className="footer-heading" aria-label={HEADING_LINES.join(' ')}>
        {HEADING_LINES.map((line, l) => (
          <span key={l}>
            {line.split(' ').map((word, w, words) => (
              <span key={w} className="footer-word" aria-hidden="true">
                {word.split('').map((letter, i) => {
                  const idx = letterIndex++
                  const isSerif = !normalLetters.has(idx)
                  return (
                    <span
                      key={i}
                      className={`footer-letter${isSerif ? ' footer-letter--serif' : ''}`}
                      data-letter={letter}
                    >
                      {letter}
                    </span>
                  )
                })}
                {w < words.length - 1 ? ' ' : null}
              </span>
            ))}
            {l < HEADING_LINES.length - 1 ? <br /> : null}
          </span>
        ))}
      </h2>

      <div id="wcb" className="carbonbadge wcb-d footer-badge" />
      <p className="footer-copy body-small">2025 © Hanna Jansson</p>
    </footer>
  )
}
