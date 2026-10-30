import { Link } from 'react-router-dom'
import './About.css'
import { Cloud, FileSearch, Lightbulb } from 'lucide-react'

const highlights = [
  '12 years in business with 200+ satisfied clients',
  'Xero Certified & QuickBooks Advanced ProAdvisor',
  'H&R Block Certified with continuing tax education',
  'Background verified & BBB accredited',
  '100% remote — secure cloud-based process',
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="section-label">About Taxoff</div>
        <h2 className="section-title">
          Keep More of<br />What You Earn
        </h2>
        <p className="about-intro">
          At Taxoff, we help you keep more of what you earn. Our mission is
          simple: to help families and small businesses navigate the tax system
          with confidence and pay less in taxes. We do this by keeping your
          books in order and applying smart, proactive tax strategy, not just
          filling in boxes on a form.
        </p>

        <div className="about-details">
          <article className="about-card">
            <div className="about-card-topline">
              <div className="about-icon"><FileSearch size={22} /></div>
              <span className="about-number">01</span>
            </div>
            <h3>Understand the Code</h3>
            <p>
              The tax code is long, confusing, and constantly changing. Worse,
              it&apos;s rarely written with the everyday taxpayer in mind. Most
              people overpay not because they&apos;re negligent, but because no one
              ever showed them the credits, deductions, and provisions they
              were entitled to. That&apos;s where we step in.
            </p>
          </article>
          <article className="about-card">
            <div className="about-card-topline">
              <div className="about-icon"><Lightbulb size={22} /></div>
              <span className="about-number">02</span>
            </div>
            <h3>Strategy That Works</h3>
            <p>
              Our job is to master the code so you don&apos;t have to. We dig into
              the details, uncover every legal opportunity, and put the rules to
              work for you thoroughly, ethically, and with no shortcuts. And we
              don&apos;t just do the work and hand you a return. We walk you through
              what we found and why it matters, so you&apos;re never left in the dark.
            </p>
          </article>
          <article className="about-card">
            <div className="about-card-topline">
              <div className="about-icon"><Cloud size={22} /></div>
              <span className="about-number">03</span>
            </div>
            <h3>Care That Fits You</h3>
            <p>
              Whether you&apos;re a family with a single W-2 or a business juggling
              multiple entities, you get the same level of precision and care.
              Because the money we save you is real and it matters just as much
              to you, no matter how simple or complex your situation may be. And
              with our seamless cloud portal, you can manage everything from the
              comfort of your own home, anytime, anywhere.
            </p>
          </article>
        </div>

        <ul className="about-list">
          {highlights.map((item) => (
            <li key={item}>
              <span className="check">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-primary">Contact us</Link>
      </div>
    </section>
  )
}

export default About
