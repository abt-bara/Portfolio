import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import ProjectSlide from './ProjectSlide'
// Three "poses" for the slide. `dir` is +1 (next) or -1 (back).
// clipPath is the wipe; x is the slide. All four inset values use % so they can interpolate.
const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    clipPath: dir > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)',
  }),
  center: {
    x: 0,
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }, // ease-out: settles softly
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    clipPath: dir > 0 ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)',
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }, // ease-in: accelerates away
  }),
}

export default function ProjectsCarousel({ projects }) {
  // one state holds BOTH values so they always change together in a single render
  const [[index, direction], setPage] = useState([0, 0])
  const total = projects.length
  if (total === 0) return null

  const paginate = (dir) => setPage([(index + dir + total) % total, dir]) // wraps around
  const goTo = (i) => setPage([i, i > index ? 1 : -1])
  const project = projects[index]

  return (
    <section id="projects" className="projects">
      <div className="carousel">
        <button className="brace prev" onClick={() => paginate(-1)} aria-label="Previous project">
          {'{'}
        </button>

        {/* .frame never animates: it owns the base line and the column "stick" */}
        <div className="frame">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={project.id} // new key = React treats it as a NEW element
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <ProjectSlide project={project} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="brace next" onClick={() => paginate(1)} aria-label="Next project">
          {'}'}
        </button>
      </div>

      <div className="dots">
        {projects.map((p, i) => (
          <button
            key={p.id}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Show ${p.name}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  )
}
