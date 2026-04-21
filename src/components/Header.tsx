import '../styles/Header.css'

interface HeaderProps {
  energyMode: boolean
  onToggle: () => void
}

export function Header({ energyMode, onToggle }: HeaderProps) {
  return (
    <header className="header">
      <a href="#top" className="header-logo">HANNA JANSSON</a>

      <div className="header-toggle">
        <button
          className={`toggle-pill ${energyMode ? 'toggle-pill--on' : ''}`}
          onClick={onToggle}
          aria-label="Toggle energy efficient mode"
          aria-pressed={energyMode}
        >
          <span className="toggle-knob">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
              <line x1="7" y1="0.5" x2="7" y2="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="7" y1="11.5" x2="7" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0.5" y1="7" x2="2.5" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="11.5" y1="7" x2="13.5" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </button>
        {energyMode && <p className="toggle-label">Hi! Thnx for browsing the energy efficient mode &lt;3</p>}
      </div>

      <nav className="header-nav">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  )
}
