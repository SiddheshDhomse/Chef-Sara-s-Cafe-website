import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Awwards-style 3D letter shatter stagger
  const title = "Where Comfort Food Meets Community".split(" ");
  const customEase = [0.16, 1, 0.3, 1];

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 }
    }
  };

  const letterItem = {
    hidden: { opacity: 0, y: 150, rotateX: -90, rotateY: 30, scale: 0.5, z: -500 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      rotateY: 0, 
      scale: 1, 
      z: 0, 
      transition: { duration: 1.2, ease: customEase } 
    }
  };

  return (
    <section ref={container} id="home" className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#2A1B12] perspective-[1000px]">
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-x-0 -inset-y-1/4 w-full h-[150%] bg-cover bg-center bg-no-repeat bg-fixed object-cover pointer-events-none"
      >
        <div 
           className="w-full h-full bg-cover bg-center"
           style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000')` }}
        />
      </motion.div>
      
      {/* Overlay Noise & Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#2A1B12]/90 z-0 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Content */}
      <motion.div 
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16"
      >
        <motion.div 
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="mb-6 flex flex-wrap justify-center gap-x-[1rem] md:gap-x-[1.5rem]"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          {title.map((word, wIdx) => (
            <div key={wIdx} className="flex" style={{ perspective: "1000px" }}>
              {word.split("").map((char, cIdx) => (
                <motion.span
                  key={cIdx}
                  variants={letterItem}
                  className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white font-bold leading-tight drop-shadow-2xl inline-block"
                  style={{ transformOrigin: "bottom center" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 1, ease: customEase }}
          className="mt-6 text-xl md:text-3xl text-[#E6D5C3] font-light max-w-3xl mx-auto drop-shadow-md tracking-wide"
        >
          Fresh, homemade meals served with warmth in the heart of Chicago.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: customEase }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <MagneticButton 
            href="#menu" 
            className="px-10 py-5 bg-[#748A76] text-white rounded-full font-medium text-lg hover:bg-[#5e7060] transition-colors border border-transparent hover:border-white/20"
          >
            View Menu
          </MagneticButton>

          <MagneticButton 
            href="#contact" 
            className="px-10 py-5 bg-transparent border-2 border-white/80 text-white rounded-full font-medium text-lg hover:bg-white hover:text-[#2A1B12] transition-colors backdrop-blur-sm"
          >
            Visit Us
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-white/70 text-xs font-medium tracking-[0.3em] uppercase mb-3">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-80"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
