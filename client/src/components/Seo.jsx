import { useEffect } from 'react'
import { SITE_URL, pageSeo } from '../seo'

// React 19 hoists <title>, <meta> and <link> into <head> automatically.
// Titles and descriptions live in src/seo.js; pass `path` to pick the page's entry,
// or pass `title` / `description` directly (e.g. for the 404 page).
function Seo({ path = '/', title, description }) {
  const entry = pageSeo[path] || {}
  const fullTitle = title ? `${title} | Taxoff` : entry.title || 'Taxoff - Accounting & Tax Services'
  const desc = description || entry.description || ''
  const url = `${SITE_URL}${path}`

  // The build writes static copies of these tags into each page's HTML (marked data-prerender).
  // Once React's own tags are in place, remove the static ones so nothing is duplicated.
  useEffect(() => {
    document.querySelectorAll('[data-prerender]').forEach((el) => el.remove())
  }, [])

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </>
  )
}

export default Seo
