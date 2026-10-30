import './App.css'
import './pages/pages.css'
import { Routes, Route } from 'react-router-dom'
import TopBar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BookkeepingPage from './pages/BookkeepingPage'
import TaxPreparationPage from './pages/TaxPreparationPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/bookkeeping-accounting" element={<BookkeepingPage />} />
          <Route path="/services/tax-preparation" element={<TaxPreparationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
