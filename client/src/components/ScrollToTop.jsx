import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On every route change: jump to the #section if the link has one,
// otherwise start the new page at the top.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick so the new page has rendered its sections
      const id = hash.slice(1)
      const t = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
