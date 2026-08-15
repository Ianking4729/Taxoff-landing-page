import { useEffect, useRef } from 'react'
import './Certifications.css'
import xeroLogo from '../assets/Xero.png'
import qbLogo from '../assets/quickbooks-online-certification-level-2.png'
import sageLogo from '../assets/sageintacct.png'
import bbbLogo from '../assets/bbb.png'
import toppro from '../assets/top-pro.png'

const certs = [
  { src: qbLogo, alt: 'QuickBooks', label: 'QuickBooks Advanced ProAdvisor', url: 'https://quickbooks.intuit.com/' },
  { src: xeroLogo, alt: 'Xero', label: 'Xero Certified Advisor', url: 'https://www.xero.com/' },
  { src: sageLogo, alt: 'Sage', label: 'Sage Intacct Partner', url: 'https://www.sageintacct.com/' },
  { src: bbbLogo, alt: 'BBB', label: 'BBB Accredited Business', url: 'https://www.bbb.org/us/nc/charlotte/profile/accounting/taxoff-llc-0473-92034603' },
  { src: toppro, alt: 'Top Pro', label: 'Thumbtack Top Pro', url: 'https://www.thumbtack.com/nc/charlotte/accounting/taxoff/service/382472038009315338' },
]

function Certifications() {
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
    <section id="certifications" className="certifications-section">
      <div className="section-label">Credentials & Endorsements</div>
      <h2 className="section-title">Backed by the Best</h2>
      <p className="section-sub">
        Every certification represents a commitment to the highest standards
        in accounting and tax services.
      </p>
      <div className="cert-grid reveal" ref={gridRef}>
        {certs.map((c) => (
          <a
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="cert-item"
            key={c.label}
            title={c.label}
          >
            <img src={c.src} alt={c.alt} />
            <span>{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Certifications
