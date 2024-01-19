import Header from './components/Header'
import Footer from './components/Footer';
import Alert from './components/Alert';

import Home from './screens/Home'
import About from './screens/About';
import Contact from './screens/Contact';
import Services from './screens/Services';
import Works from './screens/Works';
import Blogs from './screens/Blogs';
import NotFound from './screens/NotFound';
import InquiryResponse from './screens/InquiryResponse';
import SinglePost from './screens/SinglePost';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const appName = "I-Techstudio";
  const apiKey = import.meta.env.VITE_API_KEY || "AIzaSyAD8e-ItqTkjfYwVKW3CxApv8p43np353U";
  const results = 10;
  return (
    <>
      <BrowserRouter>
        <Header appName={appName} />
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs apiKey={apiKey} results={results} />} />
          <Route path="/blogPost/:postId" element={<SinglePost apiKey={apiKey} />} />
          <Route path="/contact" element={<Contact />} />
          {
            localStorage.getItem("credentials") &&
            <Route path="/inquiry-response" element={<InquiryResponse appName={appName} />} />
          }
          {/* Not Found Route  */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer appName={appName} />
      </BrowserRouter>
    </>
  )
}

export default App
