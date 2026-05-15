import { useState } from 'react'
import { PROJECTS } from '../data/index'
import { AsciiImage } from './AsciiImage'
import '../styles/SelectedWork.css'

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

const FILTER_TAGS = ['AI', 'UX/UI', 'Product', 'Energy Efficient Design']

interface SelectedWorkProps {
  navigate: (to: string) => void
  energyMode: boolean
}

export function SelectedWork({ navigate, energyMode }: SelectedWorkProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? PROJECTS.filter((p) => p.tags.includes(activeTag))
    : PROJECTS

  return (
    <section className="work" id="work">
      <div className="work-header" data-animate>
        <h3 className="work-title">Selected work</h3>
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

      <div className="work-grid" data-animate style={{ transitionDelay: '0.1s' }}>
        {filtered.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/projects/${project.id}`)}
            role="button"
            tabIndex={0}
            data-cursor="expand"
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/projects/${project.id}`)}
          >
            <div className="project-meta">
              <span className="body-small">{project.client}</span>
              <span className="body-small">{project.year}</span>
            </div>
            <div className="project-image">
              {project.coverImage
                ? energyMode
                  ? <>
                      <AsciiImage src={base + project.coverImage} alt={project.title} className="project-img" />
                      <img src={base + project.coverImage} alt="" aria-hidden="true" loading="lazy" className="project-img-hover" />
                    </>
                  : <img src={base + project.coverImage} alt={project.title} loading="lazy" className="project-img" />
                : <div className="project-image-placeholder" />}
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
