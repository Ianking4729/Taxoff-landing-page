import { useEffect, useRef, useState } from 'react'
import './Contact.css'
import { Cloud, CreditCard, Lock, MessageSquare } from 'lucide-react'

const contactDetails = [
  {
    icon: <MessageSquare size={22} />,
    title: 'Free Consultation',
    desc: 'Chat over email or phone — no commitment required',
  },
  {
    icon: <Lock size={22} />,
    title: 'Confidentiality Agreement',
    desc: 'All clients sign a privacy & service agreement',
  },
  {
    icon: <Cloud size={22} />,
    title: '100% Remote Process',
    desc: 'Secure cloud-sharing, email, and phone',
  },
  {
    icon: <CreditCard size={22} />,
    title: 'Flexible Payments',
    desc: 'Cash, Card, PayPal, Venmo, Zelle, CashApp',
  },
]

function Contact() {
  const formRef = useRef(null)
  const [result, setResult] = useState("")
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  })

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
    if (formRef.current) observer.observe(formRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()
    form.append("access_key", "e5aa5ad2-2c0f-4e7a-ae33-aeeb7e1b1259")
    form.append("subject", `New Client Inquiry — ${formData.service || 'General'}`)
    form.append("from_name", "Taxoff Website")
    form.append("replyto", formData.email)
    form.append("firstName", formData.firstName)
    form.append("lastName", formData.lastName)
    form.append("email", formData.email)
    form.append("service", formData.service)
    form.append("message", formData.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      })
      const data = await response.json()

      if (data.success) {
        setResult("Success! We'll be in touch soon.")
        setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' })
        setTimeout(() => setResult(""), 3000)
      } else {
        setResult("Error sending message. Please try again.")
      }
    } catch (error) {
      setResult("Error. Please check your connection and try again.")
      console.error("Form submission error:", error)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">
          Start Your<br />Financial Journey
        </h2>
        <p className="section-sub">
          We'll listen first, understand your situation, then agree on a plan.
          The entire process is handled securely online.
        </p>
        <div className="contact-details">
          {contactDetails.map((item) => (
            <div className="contact-item" key={item.title}>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-item-text">
                <strong>{item.title}</strong>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-form reveal" ref={formRef}>
        <h3>Request a Free Consultation</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Service Needed</label>
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">Select a service...</option>
              <option>Bookkeeping</option>
              <option>Personal Tax Preparation</option>
              <option>Business Tax Preparation</option>
              <option>Payroll Services</option>
              <option>QuickBooks / Software Setup</option>
              <option>Financial Analysis & Reporting</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us a bit about your situation..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {result && <div className="form-result">{result}</div>}
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
