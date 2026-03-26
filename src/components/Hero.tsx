import '../styles/Hero.css'

function TangleSVG() {
  return (
    <svg
      className="hero-svg hero-svg--tangle"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M80,20 C110,8 145,30 140,65 C135,100 105,125 72,118 C39,111 18,82 28,52 C38,22 72,10 100,28 C128,46 132,85 108,105 C84,125 48,120 32,96 C16,72 26,38 52,28 C78,18 108,32 118,58 C128,84 112,112 86,118 C60,124 34,106 30,80 C26,54 46,30 72,30"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M80,40 C100,32 124,48 120,72 C116,96 94,112 70,104 C46,96 36,70 48,50 C60,30 90,26 108,44 C126,62 122,94 100,106 C78,118 50,106 42,84 C34,62 50,38 72,38"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M60,55 C72,42 92,46 98,62 C104,78 92,96 76,96 C60,96 50,80 56,66 C62,52 80,50 88,62 C96,74 86,90 72,88"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

function RainbowSVG() {
  return (
    <svg
      className="hero-svg hero-svg--rainbow"
      viewBox="0 0 130 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10,80 Q65,-15 120,80" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22,80 Q65,0 108,80" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34,80 Q65,12 96,80" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M46,80 Q65,24 84,80" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
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
