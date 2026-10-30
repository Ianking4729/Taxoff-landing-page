import { Link } from 'react-router-dom'
import './Footer.css'
import logoRect from '../assets/taxoff-logo-new2.png'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/">
            <img src={logoRect} alt="Taxoff" />
          </Link>
          <p>
            National cloud-based accounting and tax services. Professional,
            ethical, and private financial management for individuals and
            businesses.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services/bookkeeping-accounting">Bookkeeping &amp; Accounting</Link>
          <Link to="/services/bookkeeping-accounting#cleanup">Catch-Up Bookkeeping</Link>
          <Link to="/services/tax-preparation">Tax Preparation</Link>
          <Link to="/services/tax-preparation#sales-tax">Sales Tax Filing</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About Taxoff</Link>
          <Link to="/#certifications">Credentials</Link>
          <Link to="/#testimonials">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <a href="tel:+17042806683">(704) 280-6683</a>
          <a href="mailto:tax-off@outlook.com">tax-off@outlook.com</a>
          <span className="footer-note">Mon–Fri, 7:00 AM – 5:00 PM EST</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Taxoff. All rights reserved.</span>
        <span>Top Pro 2021 · 2022 · 2023 · 2024 · 2025</span>
      </div>
    </footer>
  )
}

export default Footer
