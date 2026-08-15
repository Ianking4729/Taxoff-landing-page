import { useEffect, useRef } from 'react'
import './Services.css'
import { BookOpen, FileText, Users, Settings } from 'lucide-react'

const services = [
  {
    icon: <BookOpen size={22} />,
    title: 'Accounting',
    desc:
      "We take messy or neglected books and set them right, correcting transactions, reconciling accounts, and ironing out discrepancies until your financial records accurately tell the story of your business. If you're starting fresh, we build your accounting system the right way from the start: chart of accounts, workflows, opening balances, and essential records to support day-to-day operations. Our accounting services include Virtual Accounting, Outsourced Accounting, Monthly Bookkeeping, and Strategy & Advising to help you grow.",
    price: 'Prices start $200/mo',
  },
  {
    icon: <Users size={22} />,
    title: 'Full Cycle Bookkeeping',
    desc:
      "From reconciliations and AP/AR to reporting and cash flow, we handle all your bookkeeping needs to keep your finances current and organized—freeing you up to concentrate on growing your company. If you're behind, we'll clean up months or years of backlog and deliver accurate, up-to-date financials. Virtual and remote bookkeeping, trusted local expertise, QuickBooks and Xero certified pros, and strategic advising to drive growth.",
    price: 'Starting at $200/mo',
  },
  {
    icon: <FileText size={22} />,
    title: 'Tax Preparation',
    desc: 'Personal and business tax returns filed accurately and on time, maximizing every deduction.',
    price: 'Starting at $200',
  },
  {
    icon: <Settings size={22} />,
    title: 'Sales Tax Setup & Filing',
    desc: 'Stay on top of your state sales tax obligations from start to finish. We manage account registration, tracking, return preparation, filing, and assist with notices or reporting discrepancies.',
    price: 'Contact for pricing',
  },
]

function Services() {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div>
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">
            Services Built Around<br />Your Needs
          </h2>
        </div>
        <p className="section-sub" style={{ maxWidth: '340px' }}>
          From bookkeeping to tax filing, we handle your finances remotely —
          securely and efficiently.
        </p>
      </div>

      <div className="services-grid reveal" ref={gridRef}>
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-price">{s.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
