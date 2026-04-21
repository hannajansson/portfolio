import '../styles/LogoBanner.css'

const base = import.meta.env.BASE_URL

const LOGOS_ANIMATED = [
  { name: 'Property Finder', file: 'logo-propertyfinder.svg', size: '' },
  { name: 'Ovulai',          file: 'logo-ovulai.svg',          size: 'xs' },
  { name: 'Polestar',        file: 'logo-polestar.svg',        size: 'lg' },
  { name: 'Omega Point',     file: 'logo-omegapoint.svg',      size: '' },
  { name: 'Scania',          file: 'logo-scania.svg',          size: 'xl' },
  { name: 'Coompanion',      file: 'logo-coompanion.svg',      size: 'sm' },
  { name: 'Senseworks',      file: 'logo-senseworks.svg',      size: 'xs' },
  { name: 'WFP',             file: 'logo-wfp.svg',             size: 'xl' },
]

const LOGOS_STATIC = [
  { name: 'Ovulai',          file: 'logo-ovulai.svg',          size: 'xs' },
  { name: 'Polestar',        file: 'logo-polestar.svg',        size: 'lg' },
  { name: 'Omega Point',     file: 'logo-omegapoint.svg',      size: '' },
  { name: 'Scania',          file: 'logo-scania.svg',          size: 'xl' },
  { name: 'Coompanion',      file: 'logo-coompanion.svg',      size: 'sm' },
  { name: 'Senseworks',      file: 'logo-senseworks.svg',      size: 'xs' },
  { name: 'WFP',             file: 'logo-wfp.svg',             size: 'xl' },
  { name: 'Property Finder', file: 'logo-propertyfinder.svg', size: '' },
]

interface LogoBannerProps {
  energyMode: boolean
}

function LogoImg({ name, file, size }: { name: string; file: string; size: string }) {
  return (
    <span className="banner-item">
      <img
        src={`${base}images/${file}`}
        alt={name}
        className={`banner-logo${size ? ` banner-logo--${size}` : ''}`}
      />
    </span>
  )
}

export function LogoBanner({ energyMode }: LogoBannerProps) {
  if (energyMode) {
    return (
      <div className="banner">
        <div className="banner-track banner-track--static">
          {LOGOS_STATIC.map((logo) => (
            <LogoImg key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="banner">
      <div className="banner-track" aria-hidden="true">
        {[...LOGOS_ANIMATED, ...LOGOS_ANIMATED].map((logo, i) => (
          <LogoImg key={i} {...logo} />
        ))}
      </div>
    </div>
  )
}
