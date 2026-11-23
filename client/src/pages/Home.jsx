import Seo from '../components/Seo'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import About from '../components/About'
import Certifications from '../components/Certifications'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Certifications />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
