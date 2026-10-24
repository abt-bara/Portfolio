import { ICONS } from '../iconMap'
import { Icon } from '@iconify-icon/react';

const iconLabels = {
  css: 'CSS',
  fastapi: 'FastAPI',
  github: 'GitHub',
  html: 'HTML',
  javascript: 'JavaScript',
  sql: 'SQL',
  typescript: 'TypeScript',
  vscode: 'VS Code',
}

// One column of the dev stack: a small title + overlapped round icons.
export default function IconStack({ title, items = [] }) {
  return (
    <div className="stack-col">
      <h4>{title}</h4>
      <ul className="icon-stack">
        {items.map((key) => {
          const icon = ICONS[key] // undefined when the key is not in iconMap.js
          const label = iconLabels[key] || key.replace(/([a-z])([A-Z])/g, '$1 $2')
          return (
            <li key={key} className="icon-chip" title={label} aria-label={label}>
              {Icon ? <Icon icon={icon} /> : <span className="icon-fallback">{key.slice(0, 2)}</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
