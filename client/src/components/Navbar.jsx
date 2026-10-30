import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import './Navbar.css'
import logoRect from '../assets/taxoff-logo-new.png'

const TOPBAR_HEIGHT = 38

const serviceLinks = [
  { to: '/services/bookkeeping-accounting', label: 'Bookkeeping & Accounting' },
  { to: '/services/tax-preparation', label: 'Tax Preparation' },
]

const links = [
  { to: '/about', label: 'About' },
  { to: '/#testimonials', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [topbarVisible, setTopbarVisible] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY >= window.innerHeight
      setScrolled(window.scrollY > 20)
      setTopbarVisible(!pastHero)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navTop = topbarVisible ? TOPBAR_HEIGHT : 0
  const onServicesPage = pathname.startsWith('/services')

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{ top: `${navTop}px` }}
      >
        <div className="nav-logo">
          <Link to="/">
            <img src={logoRect} alt="Taxoff Logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li className="nav-dropdown">
            <button
              type="button"
              className={`nav-dropdown-toggle ${onServicesPage ? 'active' : ''}`}
              aria-haspopup="true"
            >
              Services <ChevronDown size={14} />
            </button>
            <ul className="nav-dropdown-menu">
              {serviceLinks.map((l) => (
                <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
              ))}
            </ul>
          </li>
          {links.map((l) => (
            <li key={l.to}>
              {l.to.includes('#')
                ? <Link to={l.to}>{l.label}</Link>
                : <NavLink to={l.to} end>{l.label}</NavLink>}
            </li>
          ))}
          <li><Link to="/contact" className="nav-cta">Get Started</Link></li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer — sits just below the navbar */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        style={{ top: `${navTop + 80}px` }}
      >
        <ul>
          <li className="mobile-group-label">Services</li>
          {serviceLinks.map((l) => (
            <li key={l.to} className="mobile-sub">
              <Link to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
            </li>
          ))}
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
              Get Started
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </>
  )
}

export default Navbar
