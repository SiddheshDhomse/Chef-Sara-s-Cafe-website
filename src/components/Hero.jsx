import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#2A1B12]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight drop-shadow-lg"
        >
          Where Comfort Food <br className="hidden md:block"/> Meets Community
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-xl md:text-2xl text-[#E6D5C3] font-light max-w-2xl mx-auto drop-shadow-md"
        >
          Fresh, homemade meals served with warmth in the heart of Chicago.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#menu" 
            className="px-8 py-4 bg-[#748A76] text-white rounded-full font-medium text-lg hover:bg-[#5e7060] transition-colors hover-glow hover:-translate-y-0.5 duration-300"
          >
            View Menu
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-[#2A1B12] transition-colors hover-glow hover:-translate-y-0.5 duration-300"
          >
            Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/70 text-sm font-medium tracking-wider uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
