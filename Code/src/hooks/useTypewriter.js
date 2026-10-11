import { useEffect, useState } from 'react'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Returns the part of `text` typed so far, and whether typing has finished.
export default function useTypewriter(text, speed = 90) {
  // state = HOW MANY characters are visible
  const [count, setCount] = useState(prefersReducedMotion ? text.length : 0)

  useEffect(() => {
    if (count >= text.length) return // finished: schedule nothing

    const id = setTimeout(() => setCount(count + 1), speed) // one tick = one letter
    return () => clearTimeout(id) // cleanup: never leave a stray timer behind
  }, [count, text, speed])

  return { typed: text.slice(0, count), done: count >= text.length }
}
