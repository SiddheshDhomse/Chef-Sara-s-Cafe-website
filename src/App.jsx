import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="font-sans antialiased text-[#2A1B12] bg-[#FDFBF7] selection:bg-[#748A76] selection:text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
