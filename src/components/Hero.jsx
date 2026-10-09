import useTypewriter from '../hooks/useTypewriter'

export default function Hero({ owner }) {
  const { typed, done } = useTypewriter(owner.name)

  return (
    <section className="hero">
      <div className="glass hero-card">
        {/* aria-label gives screen readers the full name instead of half-typed letters */}
        <h1 aria-label={owner.name}>
          <span aria-hidden="true">{typed}</span>
          <span className={`caret ${done ? 'blink' : ''}`} aria-hidden="true" />
        </h1>

        {/* hidden until the name has finished typing, then fades up */}
        <p className={`description reveal ${done ? 'show' : ''}`}>{owner.description}</p>

        <div className={`reveal ${done ? 'show' : ''}`}>
          <a href="#projects" className="btn ">
            {owner.buttonLabel ?? 'View projects'} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
