import { useState } from 'react'
import '../styles/SelectedWork.css'

const FILTER_TAGS = ['AI', 'UX', 'UI', 'Graphic Design', 'Energy Efficient Design']

interface Project {
  id: number
  title: string
  client: string
  year: string
  role: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Infotainment System Redesign',
    client: 'Polestar',
    year: '2024',
    role: 'Product Design Lead',
    tags: ['UX', 'UI'],
  },
  {
    id: 2,
    title: 'HMI Design System',
    client: 'Scania',
    year: '2023',
    role: 'UX/UI Designer',
    tags: ['UX', 'UI'],
  },
  {
    id: 3,
    title: 'AI Health Platform',
    client: 'Ovulai',
    year: '2023',
    role: 'Product Designer',
    tags: ['AI', 'UX', 'UI'],
  },
  {
    id: 4,
    title: 'Property Platform Redesign',
    client: 'Property Finder',
    year: '2022',
    role: 'UX & Strategic Advisor',
    tags: ['UX', 'UI', 'Graphic Design'],
  },
  {
    id: 5,
    title: 'Tech Platform',
    client: 'Senseworks',
    year: '2022',
    role: 'Product Designer',
    tags: ['AI', 'UX'],
  },
  {
    id: 6,
    title: 'Sustainable Brand Strategy',
    client: 'Coompanion',
    year: '2021',
    role: 'Service Designer',
    tags: ['Energy Efficient Design', 'Graphic Design'],
  },
]

export function SelectedWork() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? PROJECTS.filter((p) => p.tags.includes(activeTag))
    : PROJECTS

  return (
    <section className="work" id="work">
      <div className="work-header">
        <h3 className="work-title">Selected Work</h3>
        <div className="work-filters" role="group" aria-label="Filter projects">
          <button
            className={`filter-btn ${activeTag === null ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveTag(null)}
          >
            All
          </button>
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${activeTag === tag ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid">
        {filtered.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-meta">
              <span className="body-small">{project.client}</span>
              <span className="body-small">{project.year}</span>
            </div>
            <div className="project-image">
              <div className="project-image-placeholder" />
            </div>
            <div className="project-info">
              <h5 className="project-title">{project.title}</h5>
              <p className="project-role body-small">{project.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
