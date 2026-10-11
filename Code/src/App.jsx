import Background from './components/Background'
import Hero from './components/Hero'
import ProjectsCarousel from './components/ProjectsCarousel'
import config from './portfolio.config'

// App is the ONLY file that imports the config.
// It slices the data and passes each slice down as props.
export default function App() {
  return (
    <>
      <Background />
      <main>
        <Hero owner={config.owner} />
        <ProjectsCarousel projects={config.projects} />
      </main>
    </>
  )
}
