import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdmissionsBanner from './components/AdmissionsBanner';
import SparkleCursor from './components/SparkleCursor';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Pages
import Home from './pages/Home';
import About from './pages/About';
import CoreValues from './pages/CoreValues';
import OwnerVision from './pages/OwnerVision';
import WhyShantiniketan from './pages/WhyShantiniketan';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SparkleCursor />
      <AdmissionsBanner />
      <div className="min-h-screen relative font-sans text-zinc-300 bg-brand-primary overflow-x-hidden flex flex-col">
        <Header />
        <div className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/owner-vision" element={<OwnerVision />} />
            <Route path="/why-us" element={<WhyShantiniketan />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
