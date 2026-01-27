import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FieldEaze from './pages/FieldEaze';
import Ecommerce from './pages/Ecommerce';
import WebsiteDesign from './pages/WebsiteDesign';
import MobileAppDev from './pages/MobileAppDev';
import CustomSoftware from './pages/CustomSoftware';
import DigitalMarketing from './pages/DigitalMarketing';
import DesignServices from './pages/DesignServices';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import './App.css';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import AIRevolutionizeBlog from './pages/AIRevolutionizeBlog';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/fieldeaze" element={<FieldEaze />} />
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
    </>
  );
}

export default App;
