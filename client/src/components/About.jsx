import { useEffect, useRef } from 'react'
import './About.css'
import georgeImg from '../assets/Headshot1.png'

const highlights = [
  '12 years in business with 71+ satisfied clients',
  'Xero Certified & QuickBooks Advanced ProAdvisor',
  'H&R Block Certified with continuing tax education',
  'Background verified & BBB accredited',
  '100% remote — secure cloud-based process',
]

function About() {
  const imgRef = useRef(null)

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
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="about-image reveal" ref={imgRef}>
        <img src={georgeImg} alt="George Warugongo" />
      </div>

      <div className="about-content">
        <div className="section-label">About Taxoff</div>
        <h2 className="section-title">
          Trusted Expertise,<br />Remote Convenience
        </h2>
        <p className="section-sub">
          George Warugongo founded Taxoff to bring big-firm expertise to
          individuals and small businesses — without the big-firm fees. With a
          B.S. in Accounting from UNC Charlotte and 5+ years in CPA firms,
          George delivers professional, ethical, and confidential financial
          services entirely in the cloud.
        </p>
        <ul className="about-list">
          {highlights.map((item) => (
            <li key={item}>
              <span className="check">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary">Work With George</a>
      </div>
    </section >
  )
}

export default About
