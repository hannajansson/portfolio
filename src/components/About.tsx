import heroImg from '../assets/profile.jpg'
import '../styles/About.css'

const EXPERIENCE = [
  'UX/UI Design',
  'UX & Strategic Advisor',
  'User Researcher',
  'Product Owner',
  'Product Design Lead',
  'Service Designer',
  'Sustainable Designer',
  'Graphic Design',
  'Brand Strategy',
  'Frontend Developer',
]

const CLIENTS = [
  'Scania',
  'Polestar',
  'Senseworks',
  'Property Finder',
  'Ovulai',
  'Omegapoint',
  'Coompanion',
]

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        {/* Left column */}
        <div className="about-left">
          <h3 className="about-heading">
            Hello there<br />I'm Hanna Jansson
          </h3>
          <p className="about-bio">
            As a designer and product manager in Stockholm, I have shaped products across
            automotive, fintech, and IT industries, specializing in apps, web, and infotainment
            systems. My mission? To merge user needs with business goals, delivering solutions
            that are as smart as they are delightful — fueled by creativity and design strategy.
            Famous for my handwriting.
          </p>

          <div className="about-lists">
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
        </div>

        {/* Right column — profile photo */}
        <div className="about-right">
          <img
            src={heroImg}
            alt="Hanna Jansson"
            className="about-photo"
          />
        </div>
      </div>
    </section>
  )
}
