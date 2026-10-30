import { Link } from 'react-router-dom'

function CtaBand({
  title = 'Ready to take tax stress off your plate?',
  sub = 'Book a free consultation. We listen first, understand your situation, then agree on a plan, all handled securely online.',
}) {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{sub}</p>
        </div>
        <div className="cta-band-actions">
          <Link to="/contact" className="btn-light">Free Consultation</Link>
          <a href="tel:+17042806683" className="btn-outline-light">Call (704) 280-6683</a>
        </div>
      </div>
    </section>
  )
}

export default CtaBand
