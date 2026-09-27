import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Engagement from "./components/Engagement";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="portfolio-main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Engagement />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;