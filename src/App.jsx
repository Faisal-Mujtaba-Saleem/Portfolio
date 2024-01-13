import Header from './components/Header'
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home'
import Services from './screens/Services';

import Works from './screens/Works';
import Footer from './components/Footer';
import NotFound from './screens/NotFound';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Not Found Route  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
