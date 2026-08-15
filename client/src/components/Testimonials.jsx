import { useEffect, useRef } from 'react'
import './Testimonials.css'

const reviews = [
  {
    text: 'Taxoff was EXCELLENT. I was way behind on getting my taxes filed and he was able to immediately get both my individual and business taxes filed in 2 days. The process was seamless.',
    author: 'Jonelle F.',
    date: 'October 2025 · Business Tax Preparation',
  },
  {
    text: 'I had a new home under contract and needed my business and personal return prepped and filed in 24 hours. George was confident, motivated, and very responsive. High quality work!',
    author: 'Adrian B.',
    date: 'April 2025 · Tax Preparation',
  },
  {
    text: 'George handles my Amazon business finances perfectly. He fixed my books, found deductions others missed, and set up my QuickBooks better than before. Highly recommend.',
    author: 'Bethenny T.',
    date: 'May 2025 · Bookkeeping',
  },
]

function Testimonials() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <div className="section-label">Client Reviews</div>
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-sub">
          Rated Excellent with a 4.9 out of 5 across 56 verified Thumbtack reviews.
        </p>
      </div>
      <div className="testimonials-grid">
        {reviews.map((r, i) => (
          <div
            className="testi-card reveal"
            key={r.author}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"{r.text}"</p>
            <div className="testi-author">{r.author}</div>
            <div className="testi-date">{r.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
