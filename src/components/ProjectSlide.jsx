import { SiGithub } from 'react-icons/si'
import { asset } from '../utils/asset'
import IconStack from './IconStack'


// Renders ONE project. It knows nothing about carousels: it just receives data.
export default function ProjectSlide({ project }) {
  const { name, github, description, preview, stack = {} } = project
  const { type = {}, src = {} } = preview || {}

  const renderPreview = () => {
    const placeholder = (
      <div className="placeholder" aria-hidden="true">
        <span>{'{ }'}</span>
      </div>
    )

    if (type === 'video') {
      return src ? <video src={asset(src)} controls controlslist="nodownload" autoPlay={true} className='slide-video' loading="lazy" loop={true} muted={true}
      /> : placeholder
    }

    if (type === 'image') {
      return src ? <img src={asset(src)} /> : placeholder
    }

    return placeholder
  }

  return (
    <article className="slide">
      {/* column 1 */}
      <div className="slide-info">
        <h3 className="project-title">
          <a className="gh-link" href={github} target="_blank" rel="noreferrer" aria-label={`${name} on GitHub`}>
            <SiGithub />
          </a>
          {name}
        </h3>

        {/* same "description" class as the hero = same style */}
        <p className="description">{description}</p>
        <h4 className="themes-title">Themes :</h4>
        {(project.Themes) ? (project.Themes.split(', ').map((theme) =>
          <p className="themes-description">{theme} &nbsp;</p>
        )) : (<p></p>)}

        {/* the dev stack cuts column 1 into 3 columns */}
        <div className="stack">
          <IconStack title="Tools & Platforms" items={stack.tools} />
          <IconStack title="Languages" items={stack.languages} />
          <IconStack title="Libraries & Frameworks" items={stack.frameworks} />
        </div>
      </div>

      {/* column 2 */}
      <div className="slide-preview">
        {renderPreview()}
      </div>
    </article>
  )
}
