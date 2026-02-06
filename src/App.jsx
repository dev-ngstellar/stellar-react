import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
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
const Footer = lazy(() => import('./components/Footer'));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div style={{height:200,display:'flex',alignItems:'center',justifyContent:'center'}}>Loading…</div>}>
        <FloatingWhatsApp />
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
