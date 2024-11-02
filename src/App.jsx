import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Courses from './components/Courses'

export const App = () => {
  return (
    <div className="overflow-x-hidden min-h-screen text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <Technologies />
        <Experience />
        <Courses />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}


export default App
