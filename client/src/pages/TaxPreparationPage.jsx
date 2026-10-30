import { User, Briefcase, Lightbulb, Receipt } from 'lucide-react'
import ServicePage from '../components/ServicePage'

const data = {
  path: '/services/tax-preparation',
  seoTitle: 'Tax Preparation Services for Individuals & Businesses',
  seoDescription:
    'Personal and business tax returns filed accurately and on time, plus proactive tax planning and sales tax filing. 100% remote. Starting at $200.',
  crumb: 'Tax Preparation',
  title: 'Tax Preparation',
  sub:
    'Personal and business tax returns filed accurately and on time, with every deduction and credit you are entitled to. Handled 100% online.',
  price: 'Starting at $200',
  badges: ['Personal & business returns', 'H&R Block certified', 'Proactive tax strategy'],

  introLabel: 'Keep More of What You Earn',
  introTitle: 'More Than Filling in Boxes on a Form',
  intro: [
    "The tax code is long, confusing and constantly changing. Most people overpay not because they're careless, but because no one ever showed them the credits, deductions and provisions they qualify for.",
    "We dig into the details, uncover every legal opportunity and apply the rules in your favor, thoroughly and ethically. Then we walk you through what we found and why it matters, so you're never left in the dark.",
  ],

  offeringsTitle: 'Tax Services for Every Situation',
  offerings: [
    {
      icon: <User size={22} />,
      title: 'Individual Tax Returns',
      price: 'From $200',
      desc: 'Federal and state personal returns prepared accurately and filed on time.',
      points: [
        'W-2 employees and families',
        'Self-employed and gig income',
        'Deductions and credits maximized',
        'Clear explanation of your return',
      ],
    },
    {
      icon: <Briefcase size={22} />,
      title: 'Business Tax Returns',
      desc: 'Returns for small businesses, from single-owner companies to owners juggling multiple entities.',
      points: [
        'Small business and entity returns',
        'Prepared from clean, reconciled books',
        'Personal and business filed together',
        'Fast turnaround when deadlines are close',
      ],
    },
    {
      icon: <Lightbulb size={22} />,
      title: 'Tax Planning & Strategy',
      desc: 'Proactive strategy throughout the year, not just at filing time, to legally lower what you owe.',
      points: [
        'Review of credits and deductions',
        'Strategy for the year ahead',
        'Guidance on business decisions',
        'Fewer surprises at tax time',
      ],
    },
    {
      id: 'sales-tax',
      icon: <Receipt size={22} />,
      title: 'Sales Tax Setup & Filing',
      price: 'From $50',
      desc: 'Stay on top of your state sales tax obligations from start to finish.',
      points: [
        'State account registration',
        'Sales tax tracking',
        'Return preparation & filing',
        'Help with notices and discrepancies',
      ],
    },
  ],

  audienceTitle: 'Tax Help, Whatever Your Situation',
  audience: [
    { title: 'Individuals & families', desc: 'from a single W-2 to more complex households.' },
    { title: 'Self-employed & freelancers', desc: 'who want every business deduction they are owed.' },
    { title: 'Small business owners', desc: 'filing business and personal returns together.' },
    { title: 'Anyone behind on filing', desc: 'or up against a deadline and needing it done right, fast.' },
  ],

  reviews: [
    {
      text: 'Taxoff was EXCELLENT. I was way behind on getting my taxes filed and he was able to immediately get both my individual and business taxes filed in 2 days. The process was seamless.',
      author: 'Jonelle F.',
      date: 'October 2025 · Business Tax Preparation',
    },
    {
      text: 'I had a new home under contract and needed my business and personal return prepped and filed in 24 hours. George was confident, motivated, and very responsive. High quality work!',
      author: 'Adrian B.',
      date: 'April 2025 · Tax Preparation',
    },
  ],

  faqs: [
    {
      q: 'How much does tax preparation cost?',
      a: 'Tax preparation starts at $200, and sales tax filing starts at $50. The final price depends on the complexity of your return; we confirm it with you during the free consultation before any work begins.',
    },
    {
      q: 'What documents do I need?',
      a: "Usually your W-2s and 1099s, last year's return, and records of deductible expenses. Business owners should also have their books or income and expense records. We'll send you a checklist tailored to your situation.",
    },
    {
      q: 'Can you file both my personal and business returns?',
      a: 'Yes. Many of our clients have us prepare both, which makes sure your business and personal tax strategy work together.',
    },
    {
      q: 'Do I need to come into an office?',
      a: 'No. Everything is handled 100% remotely through our secure cloud portal, email and phone.',
    },
    {
      q: 'How can I pay?',
      a: 'We accept cash, card, PayPal, Venmo, Zelle and CashApp.',
    },
  ],

  ctaTitle: 'Get ahead of tax season.',
}

function TaxPreparationPage() {
  return <ServicePage data={data} />
}

export default TaxPreparationPage
