// React 19 hoists <title>, <meta> and <link> into <head> automatically,
// so each page can set its own SEO tags without an extra library.
const SITE_URL = 'https://mytaxoff.com'

function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | Taxoff` : 'Taxoff - Accounting & Tax Services'
  const url = `${SITE_URL}${path}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </>
  )
}

export default Seo
