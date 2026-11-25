import { useCallback, useState } from 'react'
import { useRouter } from './hooks/useRouter'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useDeferredClarity } from './hooks/useDeferredClarity'
import { Header } from './sections/Header/Header'
import { Hero } from './sections/Hero/Hero'
import { LogoBanner } from './sections/LogoBanner/LogoBanner'
import { SelectedWork } from './sections/SelectedWork/SelectedWork'
import { About } from './sections/About/About'
import { Footer } from './sections/Footer/Footer'
import { ProjectPage } from './pages/ProjectPage'
import { CustomCursor } from './components/CustomCursor/CustomCursor'
import { MusicPlayer } from './components/MusicPlayer/MusicPlayer'

function App() {
  const { path, navigate } = useRouter()
  useScrollReveal(path)
  useDeferredClarity()
  const [fading, setFading] = useState(false)

  const projectMatch = path.match(/^\/projects\/(.+)$/)
  const projectId = projectMatch?.[1]

  // Header and music player stay hidden on the first home-page load until the
  // hero headline is readable. Project pages have no hero, so they show at once.
  const [chromeVisible, setChromeVisible] = useState(Boolean(projectId))
  const revealChrome = useCallback(() => setChromeVisible(true), [])

  function goHome() {
    if (!projectId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setFading(true)
    setTimeout(() => {
      navigate('/')
      window.scrollTo(0, 0)
      setFading(false)
    }, 250)
  }

  return (
    <div>
      <CustomCursor />
      <div className={`chrome${chromeVisible ? ' chrome--visible' : ''}`}>
        <MusicPlayer />
        <Header
          onLogoClick={goHome}
          onNavClick={(section) => {
            if (projectId) {
              navigate('/')
              setTimeout(() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
              }, 50)
            } else {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        />
      </div>

      <div className={`page-transition${fading ? ' page-transition--fading' : ''}`}>
        {projectId ? (
          // key remounts the page per project, so Prev/Next starts with fresh
          // hidden elements instead of reusing nodes already marked in-view
          <ProjectPage key={projectId} id={projectId} navigate={navigate} />
        ) : (
          <main>
            <Hero onReady={revealChrome} />
            <LogoBanner />
            <SelectedWork navigate={navigate} />
            <About />
          </main>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default App
