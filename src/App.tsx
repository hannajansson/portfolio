import { useState } from 'react'
import './App.css'
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
      <CustomCursor />
      <MusicPlayer energyMode={energyMode} />
      <Header energyMode={energyMode} onToggle={() => setEnergyMode(v => !v)} />

      {projectId ? (
        <ProjectPage id={projectId} navigate={navigate} />
      ) : (
        <>
          <main>
            <Hero />
            <LogoBanner energyMode={energyMode} />
            <SelectedWork navigate={navigate} />
            <About />
            <Connect />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
