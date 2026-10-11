import { ICONS } from '../iconMap'
import { Icon } from '@iconify-icon/react';

// One column of the dev stack: a small title + overlapped round icons.
export default function IconStack({ title, items = [] }) {
  return (
    <div className="stack-col">
      <h4>{title}</h4>
      <ul className="icon-stack">
        {items.map((key) => {
          const icon = ICONS[key] // undefined when the key is not in iconMap.js
          return (
            <li key={key} className="icon-chip" >
              {Icon ? <Icon icon={icon} /> : <span className="icon-fallback">{key.slice(0, 2)}</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
