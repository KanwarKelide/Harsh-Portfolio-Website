import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import PersonalEdge from './components/PersonalEdge';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Testimonials />
        <PersonalEdge />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
