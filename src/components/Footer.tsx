import { useEffect } from 'react'
import '../styles/Footer.css'

export function Footer() {
  useEffect(() => {
    // Only inject once — guard against React StrictMode double-run
    if (document.querySelector('script[data-wcb]')) return
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js'
    script.async = true  // async works for dynamic scripts; defer is ignored
    script.setAttribute('data-wcb', '1')
    document.body.appendChild(script)
  }, [])

  return (
    <footer className="footer">
      <p className="footer-copy body-small">2025 © Hanna Jansson</p>
      {/* wcb-d = dark background variant */}
      <div id="wcb" className="carbonbadge wcb-d footer-badge" />
    </footer>
  )
}
