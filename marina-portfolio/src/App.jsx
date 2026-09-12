import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#120a10] text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <Skills />
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
