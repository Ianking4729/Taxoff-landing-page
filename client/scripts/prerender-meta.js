// Runs after `vite build`. For every page in src/seo.js it writes a copy of dist/index.html
// with that page's <title>, meta description, canonical and Open Graph tags already in <head>.
// Search engines and social previews then see the right tags without running JavaScript.
// It also writes sitemap.xml listing every page.
//
//   /                                 -> dist/index.html
//   /about                            -> dist/about.html
//   /services/tax-preparation         -> dist/services/tax-preparation.html
//
// Cloudflare serves /about from about.html automatically.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL, pageSeo } from '../src/seo.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

for (const [path, { title, description }] of Object.entries(pageSeo)) {
  const url = `${SITE_URL}${path}`
  const tags = [
    `<title data-prerender>${esc(title)}</title>`,
    `<meta data-prerender name="description" content="${esc(description)}" />`,
    `<link data-prerender rel="canonical" href="${url}" />`,
    `<meta data-prerender property="og:title" content="${esc(title)}" />`,
    `<meta data-prerender property="og:description" content="${esc(description)}" />`,
    `<meta data-prerender property="og:url" content="${url}" />`,
    `<meta data-prerender property="og:type" content="website" />`,
  ].join('\n    ')

  const html = template.replace(/<title>[\s\S]*?<\/title>/, tags)
  if (html === template) throw new Error('Could not find <title> in dist/index.html')

  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
  const out = join(dist, file)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  console.log(`meta: ${path} -> dist/${file}`)
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pageSeo)
  .map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
console.log('sitemap: dist/sitemap.xml')
