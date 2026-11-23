// One place for every page's SEO tags.
// Used by the <Seo> component in the browser AND by scripts/prerender-meta.js at build time,
// which writes these tags into each page's HTML so search engines see them without running JavaScript.
// Keep titles under 60 characters and descriptions under 160.

export const SITE_URL = 'https://mytaxoff.com'

export const pageSeo = {
  '/': {
    title: 'Small Business Accounting Services | Taxoff',
    description:
      'Small business accounting services, bookkeeping and tax services from a virtual accountant for small businesses. Charlotte NC and nationwide.',
  },
  '/services/bookkeeping-accounting': {
    title: 'Virtual Bookkeeping Services for Small Business | Taxoff',
    description:
      'Monthly virtual bookkeeping services for small business, startups, ecommerce and self-employed owners. QuickBooks & Xero certified. From $200/mo.',
  },
  '/services/tax-preparation': {
    title: 'Tax Preparation Services in Charlotte NC | Taxoff',
    description:
      'Tax preparation services in Charlotte NC and online. Work with a tax accountant for small business on personal and business returns. From $200.',
  },
  '/about': {
    title: 'About Taxoff | QuickBooks Certified Bookkeeper, Charlotte NC',
    description:
      'Meet Taxoff, a QuickBooks certified bookkeeper and consultant in Charlotte NC helping small businesses with bookkeeping and tax for 12+ years.',
  },
  '/contact': {
    title: 'Contact a Business Accountant | Taxoff Charlotte NC',
    description:
      'Need a business accountant near me? Taxoff serves Charlotte NC and clients nationwide. Call (704) 280-6683 or book a free consultation.',
  },
}
