export default function Languages({ languages = [] }) {
  return (
    <section className="glass skill-panel" aria-labelledby="languages-title">
      <h3 id="languages-title">Languages</h3>
      <ul className="language-skills">
        {languages.map((language) => (
          <li className="language-skill" key={language.name}>
            <span>{language.name}</span>
            <span className="language-level">{language.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
