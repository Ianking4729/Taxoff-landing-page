import './Footer.css'
import logoRect from '../assets/taxoff-logo-new2.png'

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#">
            <img src={logoRect} alt="Taxoff" />
          </a>
          <p>
            National cloud-based accounting and tax services. Professional,
            ethical, and private financial management for individuals and
            businesses.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Bookkeeping</a>
          <a href="#services">Tax Preparation</a>
          <a href="#services">Payroll</a>
          <a href="#services">Software Setup</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#about">About George</a>
          <a href="#certifications">Credentials</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Taxoff. All rights reserved.</span>
        <span>Top Pro 2021 · 2022 · 2023 · 2024 · 2025</span>
      </div>
    </footer>
  )
}

export default Footer
