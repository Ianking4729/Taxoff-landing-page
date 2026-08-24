import { useState, useEffect, useRef } from 'react'
import './Hero.css'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'

const slides = [
  {
    bg: img1,
    type: 'image',
  },
  {
    bg: img2,
    type: 'image',
  },
  {
    bg: img3,
    type: 'image',
  },
]

const stats = [
  { target: 12, suffix: '+', label: 'Years in Business' },
  { target: 200, suffix: '+', label: 'Clients Served' },
  { target: 4.9, suffix: '★', label: 'Average Rating', decimal: true },
]

function useCountUp(target, duration = 1800, decimal = false, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
      const value = (target / 2) + eased * (target / 2)
      setCount(decimal ? parseFloat(value.toFixed(1)) : Math.floor(value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration, decimal])

  return count
}

function StatItem({ target, suffix, label, decimal, started }) {
  const count = useCountUp(target, 1800, decimal, started)
  return (
    <div className="hero-stat">
      <div className="stat-num">{decimal ? count.toFixed(1) : count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function Hero() {
  const [current, setCurrent] = useState(0)
  const [statsStarted, setStatsStarted] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Trigger count-up when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={
            slide.type === 'image'
              ? { backgroundImage: `url(${slide.bg})` }
              : { background: slide.gradient }
          }
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>
          Your Finances,<br />
          <em>Handled with</em><br />
          Precision.
        </h1>
        <p className="hero-sub">
          Cloud-based accounting and tax services for individuals and
          businesses nationwide. We minimize your tax liability — and handle
          the complexity so you don't have to.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Free Consultation</a>
          <a href="#services" className="btn-outline-light">View Services</a>
        </div>

        {/* Stats row */}
        <div className="hero-stats" ref={statsRef}>
          {stats.map((s, i) => (
            <div key={s.label} className="hero-stat-wrapper">
              <StatItem {...s} started={statsStarted} />
              {i < stats.length - 1 && <div className="stat-divider" />}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
