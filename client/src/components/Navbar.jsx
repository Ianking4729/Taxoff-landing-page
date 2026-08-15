import { useEffect, useState } from 'react'
import './Navbar.css'
import logoRect from '../assets/taxoff-logo-new.png'

const TOPBAR_HEIGHT = 38

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#testimonials', label: 'Reviews' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [topbarVisible, setTopbarVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY >= window.innerHeight
      setScrolled(window.scrollY > 20)
      setTopbarVisible(!pastHero)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  const navTop = topbarVisible ? TOPBAR_HEIGHT : 0

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{ top: `${navTop}px` }}
      >
        <div className="nav-logo">
          <a href="#">
            <img src={logoRect} alt="Taxoff Logo" />
          </a>
        </div>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
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
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={handleLinkClick}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-cta" onClick={handleLinkClick}>
              Get Started
            </a>
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