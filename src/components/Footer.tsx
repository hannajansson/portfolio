import { useEffect } from 'react'
import '../styles/Footer.css'

export function Footer() {
  useEffect(() => {
    // Inject the Website Carbon Badge script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js'
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <footer className="footer">
      <p className="footer-copy body-small">2025 © Hanna Jansson</p>
      <div id="wcb" className="carbonbadge footer-badge" />
    </footer>
  )
}
