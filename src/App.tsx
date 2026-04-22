import { useState } from 'react'
import './App.css'
import './styles/Dither.css'
import { useRouter } from './hooks/useRouter'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoBanner } from './components/LogoBanner'
import { SelectedWork } from './components/SelectedWork'
import { About } from './components/About'
import { Connect } from './components/Connect'
import { Footer } from './components/Footer'
import { ProjectPage } from './pages/ProjectPage'
import { CustomCursor } from './components/CustomCursor'
import { MusicPlayer } from './components/MusicPlayer'

function App() {
  const [energyMode, setEnergyMode] = useState(false)
  const { path, navigate } = useRouter()

  // Match /projects/:id
  const projectMatch = path.match(/^\/projects\/(.+)$/)
  const projectId = projectMatch?.[1]

  // energyMode ON  → dark (no class, default CSS)
  // energyMode OFF → light (.light-mode class)
  return (
    <div className={energyMode ? '' : 'light-mode'}>
      {/* SVG dither filter — referenced by CSS in dark mode */}
      <svg style={{ display: 'none' }} aria-hidden="true">
        <defs>
          <filter id="dither" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feColorMatrix type="saturate" values="0" result="grey"/>
            <feComponentTransfer in="grey">
              <feFuncR type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"/>
              <feFuncG type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"/>
              <feFuncB type="discrete" tableValues="0 0.2 0.4 0.6 0.8 1"/>
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <CustomCursor />
      <MusicPlayer energyMode={energyMode} />
      <Header
        energyMode={energyMode}
        onToggle={() => setEnergyMode(v => !v)}
        onLogoClick={() => { navigate('/'); window.scrollTo(0, 0) }}
      />

      {projectId ? (
        <ProjectPage id={projectId} navigate={navigate} />
      ) : (
        <main>
          <Hero />
          <LogoBanner energyMode={energyMode} />
          <SelectedWork navigate={navigate} />
          <About />
          <Connect />
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App
