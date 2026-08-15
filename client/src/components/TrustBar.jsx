import './TrustBar.css'
import xeroLogo from '../assets/Xero.png'
import qbLogo from '../assets/quickbooks-online-certification-level-2.png'
import sageLogo from '../assets/sageintacct.png'
import bbbLogo from '../assets/bbb.png'
import toppro from '../assets/top-pro.png'

function TrustBar() {
  const logos = [
    { src: xeroLogo, alt: 'Xero Certified', url: 'https://www.xero.com/' },
    { src: qbLogo, alt: 'QuickBooks Advanced ProAdvisor', url: 'https://quickbooks.intuit.com/' },
    { src: sageLogo, alt: 'Sage Intacct', url: 'https://www.sageintacct.com/' },
    { src: bbbLogo, alt: 'BBB Accredited', url: 'https://www.bbb.org/us/nc/charlotte/profile/accounting/taxoff-llc-0473-92034603' },
    { src: toppro, alt: 'Top ProAdvisor', url: 'https://www.thumbtack.com/nc/charlotte/accounting/taxoff/service/382472038009315338' },
  ]

  return (
    <div className="trust-bar">
      <span className="trust-label">Endorsed by</span>
      <div className="trust-logos">
        {logos.map((logo) => (
          <a
            href={logo.url}
            target="_blank"
            rel="noreferrer"
            key={logo.alt}
            title={logo.alt}
          >
            <img src={logo.src} alt={logo.alt} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
