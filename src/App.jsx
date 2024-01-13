import Header from './components/Header'
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home'
import Services from './screens/Services';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Works from './screens/Works';
import GettingStarted from './screens/GettingStarted';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
