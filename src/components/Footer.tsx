import { useEffect } from 'react'
import '../styles/Footer.css'

export function Footer() {
  useEffect(() => {
    if (document.querySelector('script[data-wcb]')) return
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js'
    script.async = true
    script.setAttribute('data-wcb', '1')
    document.body.appendChild(script)
  }, [])

  return (
    <footer className="footer" id="contact">
      <div id="wcb" className="carbonbadge wcb-d footer-badge" />
      <p className="footer-copy body-small">2025 © Hanna Jansson</p>
    </footer>
  )
}
