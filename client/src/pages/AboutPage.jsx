import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import Certifications from '../components/Certifications'
import Testimonials from '../components/Testimonials'
import CtaBand from '../components/CtaBand'
import headshot from '../assets/Headshot1.png'

const stats = [
  { num: '12+', label: 'Years in business' },
  { num: '200+', label: 'Clients served' },
  { num: '4.9★', label: 'Average rating' },
  { num: '5×', label: 'Thumbtack Top Pro' },
]

const credentials = [
  'QuickBooks Advanced ProAdvisor',
  'Xero Certified Advisor',
  'Sage Intacct Partner',
  'H&R Block Certified, with continuing tax education',
  'Background verified & BBB accredited',
]

function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Taxoff helps families and small businesses pay less in taxes with organized books and proactive tax strategy. 12+ years in business, 200+ clients, 100% remote."
        path="/about"
      />

      <PageHeader
        label="About Us"
        title="Tax and accounting help that's on your side"
        sub="For more than 12 years, Taxoff has helped families and small businesses across the country keep their books in order and keep more of what they earn."
        crumbs={[{ label: 'About' }]}
      >
        <dl className="header-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.num}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <About />

      <section className="page-section">
        <div className="page-container founder">
          <div className="founder-photo">
            <img src={headshot} alt="George, Taxoff tax and accounting professional" />
          </div>
          <div>
            <div className="section-label">Meet Your Advisor</div>
            <h2 className="section-title small">Personal Service From Someone Who Knows Your File</h2>
            <p className="founder-text">
              When you work with Taxoff, you work directly with George, not a call
              center or a rotating team. He takes the time to understand your
              situation, does the work himself, and explains what he found in plain
              language. Clients regularly mention his responsiveness, from returns
              filed within days to books rebuilt from scratch.
            </p>
            <ul className="check-list two-col-list">
              {credentials.map((c) => (
                <li key={c}><Check size={16} /> {c}</li>
              ))}
            </ul>
            <div className="founder-actions">
              <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link to="/services/tax-preparation" className="btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <Testimonials />
      <CtaBand />
    </>
  )
}

export default AboutPage
