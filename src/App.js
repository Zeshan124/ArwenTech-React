import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Analytics from "./Components/Analytics";
import Partners from "./Components/Partners";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import ContactSection from "./Components/ContactSection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ServiceLines from "./Pages/ServiceLines";
import Solutions from "./Pages/Solutions";
import Sponsored from "./Pages/Sponsored";
import Clientele from "./Pages/Clientele";
import Projects from "./Pages/Projects";
import Careers from "./Pages/Careers";
import Resources from "./Pages/Resources";
import Newsroom from "./Pages/NewsRoom";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicelines" element={<ServiceLines />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/sponsored" element={<Sponsored />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/newsroom" element={<Newsroom />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}



const HomePage = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Partners />
      <Testimonials />
      <Newsletter />
      <Cards />
      <ContactSection />
    </div>
  );
};

export default App;
