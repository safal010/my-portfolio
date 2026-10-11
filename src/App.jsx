
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import "./App.css";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import Reveal from "./components/reveal.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;
