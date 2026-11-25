import { Settings2, ArrowRightLeft, Wrench, GraduationCap } from 'lucide-react'
import ServicePage from '../components/ServicePage'
import qbBadge from '../assets/quickbooks-online-certification-level-2.png'
import xeroBadge from '../assets/Xero.png'

const data = {
  path: '/services/quickbooks-xero-proadvisor',
  crumb: 'QuickBooks & Xero',
  title: 'QuickBooks Certified ProAdvisor & Xero Advisor Services',
  sub:
    'Set up, migrate, clean up and get the most from QuickBooks or Xero, with a certified ProAdvisor and Xero advisor guiding every step, 100% online.',
  badges: ['QuickBooks Certified ProAdvisor', 'Xero Certified Advisor', '100% remote'],

  introLabel: 'Certified Expertise',
  introTitle: 'The Right Software, Set Up the Right Way',
  intro: [
    'QuickBooks and Xero are only as useful as the way they are set up. A wrong chart of accounts, broken bank feeds or a messy migration quietly turns every report into guesswork.',
    'As a QuickBooks Certified ProAdvisor and Xero Certified Advisor, Taxoff sets up your file correctly from day one, moves your data safely between versions and platforms, and shows you how to use it with confidence.',
  ],
  logos: [
    { src: qbBadge, alt: 'Intuit Certified QuickBooks ProAdvisor badge' },
    { src: xeroBadge, alt: 'Xero Certified Advisor' },
  ],

  offeringsTitle: 'QuickBooks & Xero Services',
  offerings: [
    {
      icon: <Settings2 size={22} />,
      title: 'QuickBooks Online & Xero Setup',
      desc: 'A new company file built around how your business actually works.',
      points: [
        'Chart of accounts tailored to your business',
        'Bank and credit card feeds connected',
        'Opening balances entered and checked',
        'Invoicing, bills and sales tax configured',
      ],
    },
    {
      icon: <ArrowRightLeft size={22} />,
      title: 'QuickBooks Desktop to Online Migration',
      desc: 'Move from QuickBooks Desktop to QuickBooks Online, or from QuickBooks to Xero, without losing your history.',
      points: [
        'Pre-migration review of your current file',
        'Customers, vendors, items and history moved',
        'Reports compared before and after the move',
        'Clean-up of anything that didn’t convert',
      ],
    },
    {
      icon: <Wrench size={22} />,
      title: 'QuickBooks & Xero Cleanup',
      desc: 'Fix a file that has drifted out of shape so its reports can be trusted again.',
      points: [
        'Miscategorized transactions corrected',
        'Accounts reconciled to bank statements',
        'Duplicates and old open items cleared',
        'Rules set up to keep it clean',
      ],
    },
    {
      icon: <GraduationCap size={22} />,
      title: 'Training & ProAdvisor Support',
      desc: 'Learn the parts of QuickBooks or Xero you actually use, and have an expert to ask.',
      points: [
        'One-to-one training for owners and staff',
        'Workflows for invoicing, bills and payroll',
        'Help choosing between QuickBooks and Xero',
        'Ongoing support when questions come up',
      ],
    },
  ],

  audienceTitle: 'Who We Help',
  audience: [
    { title: 'Businesses still on QuickBooks Desktop', desc: 'ready to move to QuickBooks Online.' },
    { title: 'New businesses', desc: 'choosing between QuickBooks and Xero and wanting it set up right.' },
    { title: 'Owners with a messy file', desc: 'who no longer trust their reports.' },
    { title: 'Teams that need training', desc: 'to use the software they already pay for.' },
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
      q: 'Are you a certified QuickBooks ProAdvisor?',
      a: 'Yes. Taxoff is a QuickBooks Certified ProAdvisor and a Xero Certified Advisor, and also a Sage Intacct partner.',
    },
    {
      q: 'Should I use QuickBooks or Xero?',
      a: 'Both are strong choices. The right one depends on your industry, the apps you use and who else works in your books. We walk you through the differences in your free consultation.',
    },
    {
      q: 'Will I lose data when moving from QuickBooks Desktop to Online?',
      a: 'Your customers, vendors, items and transaction history move across. We compare key reports before and after the migration and fix anything that didn’t convert cleanly.',
    },
    {
      q: 'How much does setup or migration cost?',
      a: 'It depends on the size and condition of your file. We quote a fixed price after reviewing it during your free consultation.',
    },
    {
      q: 'Do I need to meet in person?',
      a: 'No. Everything is done remotely through secure access to your file, screen sharing, email and phone.',
    },
  ],

  ctaTitle: 'Get your QuickBooks or Xero file working for you.',
}

function QuickBooksXeroPage() {
  return <ServicePage data={data} />
}

export default QuickBooksXeroPage
