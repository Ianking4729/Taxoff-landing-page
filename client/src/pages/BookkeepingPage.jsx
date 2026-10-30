import { BookOpen, RotateCcw, Building2, TrendingUp } from 'lucide-react'
import ServicePage from '../components/ServicePage'

const data = {
  path: '/services/bookkeeping-accounting',
  seoTitle: 'Bookkeeping & Accounting Services',
  seoDescription:
    'Monthly bookkeeping, catch-up and cleanup bookkeeping, and virtual accounting for small businesses. QuickBooks and Xero certified. Starting at $200/mo.',
  crumb: 'Bookkeeping & Accounting',
  title: 'Bookkeeping & Accounting',
  sub:
    'Clean, current books every month, handled remotely by QuickBooks and Xero certified pros, so you can focus on running your business.',
  price: 'Starting at $200/mo',
  badges: ['QuickBooks & Xero certified', '100% remote', 'Catch-up available'],

  introLabel: 'Why It Matters',
  introTitle: 'Books That Tell the Real Story of Your Business',
  intro: [
    'Accurate books are the foundation of everything else: a correct tax return, a clear picture of cash flow, and confident decisions about where your business goes next.',
    "Whether your records are up to date, months behind, or you're starting from scratch, we take it from there. We reconcile, correct and organize your accounts until your financial records accurately reflect your business, then keep them that way every month.",
  ],

  offeringsTitle: 'Bookkeeping Built Around Your Business',
  offerings: [
    {
      icon: <BookOpen size={22} />,
      title: 'Monthly Bookkeeping',
      price: 'From $200/mo',
      desc: 'Full-cycle bookkeeping that keeps your finances current and organized every month.',
      points: [
        'Bank and credit card reconciliations',
        'Accounts payable & receivable (AP/AR)',
        'Monthly financial reports',
        'Cash flow tracking',
      ],
    },
    {
      id: 'cleanup',
      icon: <RotateCcw size={22} />,
      title: 'Catch-Up & Cleanup Bookkeeping',
      desc: "Behind on your books? We clean up months or years of backlog and deliver accurate, up-to-date financials.",
      points: [
        'Correcting miscategorized transactions',
        'Reconciling neglected accounts',
        'Fixing discrepancies and duplicates',
        'Getting you tax-ready, fast',
      ],
    },
    {
      icon: <Building2 size={22} />,
      title: 'New Business Setup',
      desc: 'Starting fresh? We build your accounting system the right way from day one.',
      points: [
        'Chart of accounts tailored to you',
        'QuickBooks or Xero setup',
        'Opening balances and workflows',
        'Essential records for daily operations',
      ],
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Virtual Accounting & Advising',
      desc: 'Outsourced accounting with strategic guidance to help you grow, without hiring in-house.',
      points: [
        'Outsourced, remote accounting',
        'Financial review and insights',
        'Strategy & advising for growth',
        'Books aligned with your tax strategy',
      ],
    },
  ],

  audienceTitle: 'Bookkeeping for Busy Owners',
  audience: [
    { title: 'Small business owners', desc: 'who would rather grow the business than reconcile accounts.' },
    { title: 'E-commerce & online sellers', desc: 'who need sales, fees and inventory recorded correctly.' },
    { title: 'Self-employed & freelancers', desc: 'who want clean records and every deduction at tax time.' },
    { title: 'Businesses that fell behind', desc: 'and need months or years of books caught up.' },
  ],

  reviews: [
    {
      text: 'George handles my Amazon business finances perfectly. He fixed my books, found deductions others missed, and set up my QuickBooks better than before. Highly recommend.',
      author: 'Bethenny T.',
      date: 'May 2025 · Bookkeeping',
    },
  ],

  faqs: [
    {
      q: 'How much does bookkeeping cost?',
      a: 'Monthly bookkeeping starts at $200/mo. Your price depends on transaction volume and the number of accounts. Catch-up work is quoted after we review your backlog during the free consultation.',
    },
    {
      q: 'Do you work with QuickBooks and Xero?',
      a: "Yes. We're QuickBooks Advanced ProAdvisor and Xero Certified, and also a Sage Intacct partner. We can work in your existing software or set it up for you.",
    },
    {
      q: "I'm months (or years) behind. Can you help?",
      a: 'Yes. Catch-up and cleanup bookkeeping is one of our specialties. We reconcile and correct your records until they are accurate and up to date.',
    },
    {
      q: 'Do I need to meet in person?',
      a: 'No. Our process is 100% remote, using secure cloud sharing, email and phone, so you can work with us from anywhere in the U.S.',
    },
    {
      q: 'How can I pay?',
      a: 'We accept cash, card, PayPal, Venmo, Zelle and CashApp.',
    },
  ],

  ctaTitle: 'Ready for books you can trust?',
}

function BookkeepingPage() {
  return <ServicePage data={data} />
}

export default BookkeepingPage
