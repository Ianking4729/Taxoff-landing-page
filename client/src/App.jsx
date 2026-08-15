import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import About from './components/About'
import Certifications from './components/Certifications'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TopBar from './components/Topbar'

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
