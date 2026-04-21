import '../styles/Hero.css'

const base = import.meta.env.BASE_URL

function TangleSVG() {
  return (
    <span className="hero-svg hero-svg--tangle" aria-hidden="true">
      <img src={`${base}images/tangle-darkmode.svg`} alt="" className="hero-img hero-img--dark" />
      <img src={`${base}images/tangle-lightmode.svg`} alt="" className="hero-img hero-img--light" />
    </span>
  )
}

function RainbowSVG() {
  return (
    <span className="hero-svg hero-svg--rainbow" aria-hidden="true">
      <img src={`${base}images/rainbow-darkmode.svg`} alt="" className="hero-img hero-img--dark" />
      <img src={`${base}images/rainbow-lightmode.svg`} alt="" className="hero-img hero-img--light" />
    </span>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div className="hero-line">TRANSFORMING</div>
        <div className="hero-line">
          <TangleSVG />
          <span>COMPLEXITY</span>
        </div>
        <div className="hero-line">
          <span>INTO</span>
          <RainbowSVG />
          <span>CLARITY</span>
        </div>
      </div>
      <p className="hero-subtitle">
        Based in Stockholm, I turn thoughts into impactful products<br />
        by uniting innovation, design, and strategic management.
      </p>
    </section>
  )
}
