import Footer from './components/Footer';
import Header from './components/Header'

import Home from './screens/Home'
import About from './screens/About';
import Contact from './screens/Contact';
import Services from './screens/Services';
import Works from './screens/Works';
import NotFound from './screens/NotFound';
import InquiryResponse from './screens/InquiryResponse';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const appName = "I-TechStudio";
  return (
    <>
      <BrowserRouter>
        <Header appName={appName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {
            localStorage.getItem("credentials") &&
            <Route path="/inquiry-response" element={<InquiryResponse appName={appName} />} />
          }
          {/* Not Found Route  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
