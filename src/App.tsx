import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LogoBanner } from './components/LogoBanner'
import { SelectedWork } from './components/SelectedWork'
import { About } from './components/About'
import { Connect } from './components/Connect'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBanner />
        <SelectedWork />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  )
}

export default App
