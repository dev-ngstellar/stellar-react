import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

// Lazy load secondary pages (not Home)
const About = lazy(() => import('./pages/About'));
const FieldEaze = lazy(() => import('./pages/FieldEaze'));
const OneSolutionERP = lazy(() => import('./pages/OneSolutionERP'));
const Ecommerce = lazy(() => import('./pages/Ecommerce'));
const WebsiteDesign = lazy(() => import('./pages/WebsiteDesign'));
const MobileAppDev = lazy(() => import('./pages/MobileAppDev'));
const CustomSoftware = lazy(() => import('./pages/CustomSoftware'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const DesignServices = lazy(() => import('./pages/DesignServices'));
const Industries = lazy(() => import('./pages/Industries'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const AIRevolutionizeBlog = lazy(() => import('./pages/AIRevolutionizeBlog'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ContactUs = lazy(() => import('./components/ContactUs'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }}>
    <div style={{
      display: 'inline-block',
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#2BFFFF',
      animation: 'pulse 1.5s ease-in-out infinite'
    }} />
    <span style={{ color: '#666', fontSize: '14px' }}>Loading page...</span>
    <style>{`
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <FloatingWhatsApp />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/fieldeaze" element={<FieldEaze />} />
          <Route path="/products/onesolutionerp" element={<OneSolutionERP />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/website" element={<WebsiteDesign />} />
          <Route path="/services/mobile" element={<MobileAppDev />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/design" element={<DesignServices />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:id" element={<IndustryDetail />} />
          <Route path="/blog" element={<AIRevolutionizeBlog />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
