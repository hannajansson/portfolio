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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8L7 0Z" />
            </svg>
          </span>
        </button>
        <p className="toggle-label">
          {energyMode
            ? 'Hi! Thnx for browsing the energy efficient mode <3'
            : 'Hi! Browse the portfolio in energy efficient mode <3'}
        </p>
      </div>

      <nav className="header-nav">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  )
}
