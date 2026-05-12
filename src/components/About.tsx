import { useState } from 'react'
import profileImg from '../assets/profile.jpeg'
import '../styles/About.css'

const EXPERIENCE = [
  'Product Designer',
  'Product Manager',
  'UX/UI Designer',
  'Vibe Coder',
  'User Researcher',
  'Sustainable Designer',
  'Brand & Visual Designer',
]

const CLIENTS = [
  'UNHCR, WFP',
  'Scania',
  'Polestar',
  'Senseworks',
  'Property Finder',
  'Ovulai',
  'Omegapoint',
  'Coompanion',
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
          <h3 className="about-heading" data-animate>A journey of curiosity <br></br>led me here:</h3>
          <p className="about-bio" data-animate style={{ transitionDelay: '0.1s' }}>
            I'm Hanna Jansson, a Product Designer and Manager in Stockholm working at the intersection of AI,
            innovation, and human-centered design. I help organizations turn complex challenges
            into intuitive, scalable products. My mission? To merge user needs with business goals,
            creating solutions that are as smart as they are delightful. Fueled by creativity,
            design strategy, and a belief that fun is serious business.
          </p>

          <div className="about-lists" data-animate style={{ transitionDelay: '0.2s' }}>
            <div className="about-list">
              <p className="body-small about-list-label">Experience</p>
              <ul>
                {EXPERIENCE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-list">
              <p className="body-small about-list-label">Clients</p>
              <ul>
                {CLIENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-buttons" data-animate style={{ transitionDelay: '0.3s' }}>
            <a
              href="https://www.linkedin.com/in/hannaajansson/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn"
            >
              LinkedIn
            </a>
            <button
              onClick={copyEmail}
              className="about-btn"
            >
              {copied ? 'Copied!' : 'Copy my email'}
            </button>
          </div>
        </div>

        <div className="about-right" data-animate style={{ transitionDelay: '0.15s' }}>
          <img
            src={profileImg}
            alt="Hanna Jansson"
            className="about-photo"
          />
        </div>
      </div>
    </section>
  )
}
