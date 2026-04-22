import '../styles/Header.css'

interface HeaderProps {
  energyMode: boolean
  onToggle: () => void
  onLogoClick: () => void
}

export function Header({ energyMode, onToggle, onLogoClick }: HeaderProps) {
  return (
    <header className="header">
      <button className="header-logo" onClick={onLogoClick}>HANNA JANSSON</button>

      <div className="header-toggle">
        <button
          className={`toggle-pill ${energyMode ? 'toggle-pill--on' : ''}`}
          onClick={onToggle}
          aria-label="Toggle energy efficient mode"
          aria-pressed={energyMode}
        >
          <span className="toggle-knob">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7 3.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6zM7 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
              <rect x="5.6" y="0" width="2.8" height="2.2" rx="1.4"/>
              <rect x="5.6" y="11.8" width="2.8" height="2.2" rx="1.4"/>
              <rect x="0" y="5.6" width="2.2" height="2.8" rx="1.1"/>
              <rect x="11.8" y="5.6" width="2.2" height="2.8" rx="1.1"/>
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
