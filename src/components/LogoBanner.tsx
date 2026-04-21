import '../styles/LogoBanner.css'

const base = import.meta.env.BASE_URL

const LOGOS = [
  { name: 'Property Finder', file: 'logo-propertyfinder.svg', size: '' },
  { name: 'Ovulai',          file: 'logo-ovulai.svg',          size: 'xs' },
  { name: 'Polestar',        file: 'logo-polestar.svg',        size: 'lg' },
  { name: 'Omega Point',     file: 'logo-omegapoint.svg',      size: '' },
  { name: 'Scania',          file: 'logo-scania.svg',          size: 'xl' },
  { name: 'Coompanion',      file: 'logo-coompanion.svg',      size: 'sm' },
  { name: 'Senseworks',      file: 'logo-senseworks.svg',      size: 'xs' },
  { name: 'WFP',             file: 'logo-wfp.svg',             size: 'xl' },
]

export function LogoBanner() {
  return (
    <div className="banner">
      <div className="banner-track" aria-hidden="true">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <span key={i} className="banner-item">
            <img src={`${base}images/${logo.file}`} alt={logo.name} className={`banner-logo${logo.size ? ` banner-logo--${logo.size}` : ''}`} />
          </span>
        ))}
      </div>
    </div>
  )
}
