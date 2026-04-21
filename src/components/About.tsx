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
            Hello there I'm<br />Hanna Jansson
          </h3>
          <p className="about-bio">
            I'm a Product Designer and Manager in Stockholm working at the intersection of AI,
            innovation, and human-centered design. I help organizations turn complex challenges
            into intuitive, scalable products. My mission? To merge user needs with business goals, creating solutions that are as
            smart as they are delightful. Fueled by creativity, design strategy, and a belief
            that fun is serious business.
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
