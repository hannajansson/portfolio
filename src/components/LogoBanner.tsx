import '../styles/LogoBanner.css'

const LOGOS = [
  'Property Finder',
  'Ovulai',
  'Omega Point',
  'Coompanion',
  'Senseworks',
  'Polestar',
  'Scania',
]

export function LogoBanner() {
  return (
    <div className="banner">
      {/* Duplicate track for seamless loop */}
      <div className="banner-track" aria-hidden="true">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <span key={i} className="banner-item">{logo}</span>
        ))}
      </div>
    </div>
  )
}
