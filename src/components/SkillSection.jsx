import TechnicalSkills from './TechnicalSkills'
import Languages from './Languages'

export default function SkillSection({ skills }) {
  const { technical = [], languages = [] } = skills ?? {}

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <header className="skills-header">
        <p className="skills-eyebrow">What I work with</p>
        <h2 id="skills-title">Skills</h2>
      </header>

      <div className="skills-grid">
        <TechnicalSkills skills={technical} />
        <Languages languages={languages} />
      </div>
    </section>
  )
}