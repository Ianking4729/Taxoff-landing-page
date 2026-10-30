const steps = [
  {
    title: 'Free Consultation',
    desc: 'Chat with us over email or phone, with no commitment. We listen first and learn about your situation.',
  },
  {
    title: 'Agree on a Plan',
    desc: 'We recommend the right services and pricing, and every client signs a privacy & service agreement.',
  },
  {
    title: 'Share Documents Securely',
    desc: 'Upload everything through our secure cloud portal. No office visits, everything is 100% remote.',
  },
  {
    title: 'We Do the Work',
    desc: 'We handle the details, then walk you through what we found and why it matters.',
  },
]

function ProcessSteps({ title = 'Simple, Secure & 100% Remote' }) {
  return (
    <section className="page-section dark">
      <div className="page-container">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">{title}</h2>
        <ol className="process-grid">
          {steps.map((s, i) => (
            <li className="process-step" key={s.title}>
              <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ProcessSteps
