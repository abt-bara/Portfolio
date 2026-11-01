import { Icon } from '@iconify-icon/react'
import { getIcon } from '../iconMap'

export default function TechnicalSkills({ skills = [] }) {
  return (
    <section className="glass skill-panel" aria-labelledby="technical-skills-title">
      <h3 id="technical-skills-title">Technical Skills</h3>
      <div className="technical-skills">
        {skills.map((skill) => (
          <article className="technical-skill" key={skill.name}>
            <h4>{skill.name}</h4>
            <ul className="skill-tools">
              {skill.tools.map((tool) => (
                <li className="skill-tool" key={`${tool.icon}-${tool.name}`}>
                  <Icon icon={getIcon(tool.icon)} aria-hidden="true" />
                  <span>{tool.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
