import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

const methods = [
  {
    icon: <Phone size={22} />,
    title: 'Call',
    value: '(704) 280-6683',
    href: 'tel:+17042806683',
  },
  {
    icon: <Mail size={22} />,
    title: 'Email',
    value: 'tax-off@outlook.com',
    href: 'mailto:tax-off@outlook.com',
  },
  {
    icon: <Clock size={22} />,
    title: 'Office Hours',
    value: 'Mon–Fri, 7:00 AM – 5:00 PM EST',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Where We Work',
    value: 'Charlotte, NC · Serving clients nationwide',
  },
]

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Request a free consultation with Taxoff for bookkeeping, accounting or tax preparation. Call (704) 280-6683 or email tax-off@outlook.com."
        path="/contact"
      />

      <PageHeader
        label="Contact"
        title="Let's talk about your finances"
        sub="Request a free, no-commitment consultation. Tell us a little about your situation and we'll get back to you within business hours."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="contact-methods">
        <div className="page-container method-grid">
          {methods.map((m) => {
            const inner = (
              <>
                <div className="method-icon">{m.icon}</div>
                <div>
                  <span className="method-title">{m.title}</span>
                  <span className="method-value">{m.value}</span>
                </div>
              </>
            )
            return m.href
              ? <a className="method-card" href={m.href} key={m.title}>{inner}</a>
              : <div className="method-card" key={m.title}>{inner}</div>
          })}
        </div>
      </section>

      <Contact />
    </>
  )
}

export default ContactPage
