import { useState } from 'react'
import profileImg from '../../assets/profile.webp'
import { Button } from '../../components/Button/Button'
import { GlintText } from '../../components/GlintText/GlintText'
import './About.css'

const STATS = [
  { value: '5+', label: 'Years in product' },
  { value: '10+', label: 'Products shipped' },
  { value: '30+', label: 'Workshops facilitated' },
]

export function About() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('hannanov00@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-left">
          <GlintText
            as="h3"
            className="about-heading"
            text={'A journey of curiosity\nled me here'}
            trigger="view"
            data-animate
          />
          <p className="about-bio" data-animate style={{ transitionDelay: '0.1s' }}>
            I'm Hanna Jansson, a Designer working at the intersection of AI,
            innovation, and human-centered design. I help organizations turn complex challenges
            into intuitive, scalable products. My mission? To merge user needs with business goals,
            creating solutions that are as smart as they are delightful. Fueled by creativity,
            design strategy, and a belief that fun is serious business.
          </p>

          <div className="about-stats" data-animate style={{ transitionDelay: '0.2s' }}>
            {STATS.map((stat) => (
              <div key={stat.label} className="about-stat">
                <p className="body-small about-stat-label">{stat.label}</p>
                <p className="about-stat-value">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="about-buttons" data-animate style={{ transitionDelay: '0.3s' }}>
            <Button
              href="https://www.linkedin.com/in/hannaajansson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button onClick={copyEmail}>
              <span style={{ display: 'grid' }}>
                <span style={{ gridArea: '1/1', opacity: copied ? 0 : 1, transition: 'opacity 0.15s' }}>Copy my email</span>
                <span style={{ gridArea: '1/1', opacity: copied ? 1 : 0, transition: 'opacity 0.15s' }} aria-hidden={!copied}>Copied!</span>
              </span>
            </Button>
          </div>
        </div>

        <div className="about-right" data-animate style={{ transitionDelay: '0.15s' }}>
          <img src={profileImg} alt="Hanna Jansson" loading="lazy" className="about-photo" />
        </div>
      </div>
    </section>
  )
}
