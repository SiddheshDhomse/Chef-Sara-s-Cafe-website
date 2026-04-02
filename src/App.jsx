import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-[#2A1B12] bg-[#FDFBF7] selection:bg-[#748A76] selection:text-white">
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
