import { Link } from 'react-router-dom'
import { Check, Quote, Star } from 'lucide-react'
import Seo from './Seo'
import PageHeader from './PageHeader'
import ProcessSteps from './ProcessSteps'
import CtaBand from './CtaBand'

// Shared layout for every service page. Each page passes its own content in `data`.
function ServicePage({ data }) {
  return (
    <>
      <Seo title={data.seoTitle} description={data.seoDescription} path={data.path} />

      <PageHeader
        label="Our Services"
        title={data.title}
        sub={data.sub}
        crumbs={[{ label: 'Services' }, { label: data.crumb }]}
      >
        <div className="page-header-meta">
          <span className="price-chip">{data.price}</span>
          {data.badges.map((b) => (
            <span className="meta-item" key={b}><Check size={15} /> {b}</span>
          ))}
        </div>
        <div className="page-header-actions">
          <Link to="/contact" className="btn-light">Book a Free Consultation</Link>
          <a href="tel:+17042806683" className="btn-outline-light">Call (704) 280-6683</a>
        </div>
      </PageHeader>

      <section className="page-section">
        <div className="page-container intro-split">
          <div>
            <div className="section-label">{data.introLabel}</div>
            <h2 className="section-title">{data.introTitle}</h2>
          </div>
          <div className="intro-text">
            {data.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="page-section alt">
        <div className="page-container">
          <div className="section-label">What's Included</div>
          <h2 className="section-title">{data.offeringsTitle}</h2>
          <div className="offering-grid">
            {data.offerings.map((o) => (
              <article className="offering-card" id={o.id} key={o.title}>
                <div className="offering-top">
                  <div className="offering-icon">{o.icon}</div>
                  {o.price && <span className="offering-price">{o.price}</span>}
                </div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <ul className="check-list">
                  {o.points.map((pt) => (
                    <li key={pt}><Check size={16} /> {pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container two-col">
          <div>
            <div className="section-label">Who We Help</div>
            <h2 className="section-title small">{data.audienceTitle}</h2>
            <ul className="audience-list">
              {data.audience.map((a) => (
                <li key={a.title}>
                  <strong>{a.title}</strong>
                  <span>{a.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="side-stack">
            {data.reviews.map((r) => (
              <figure className="quote-card" key={r.author}>
                <Quote size={26} className="quote-mark" />
                <div className="quote-stars" aria-label="5 stars">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <blockquote>{r.text}</blockquote>
                <figcaption>
                  <strong>{r.author}</strong> · {r.date}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="page-section">
        <div className="page-container faq-wrap">
          <div>
            <div className="section-label">FAQ</div>
            <h2 className="section-title small">Common Questions</h2>
            <p className="section-sub">
              Don't see your question? <Link to="/contact">Send us a message</Link> and
              we'll get back to you.
            </p>
          </div>
          <div className="faq-list">
            {data.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={data.ctaTitle} />
    </>
  )
}

export default ServicePage
