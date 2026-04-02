import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Dramatic image parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <section id="about" ref={container} className="py-32 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side with Mask Reveal */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            {/* Background offset square */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: customEase }}
              className="absolute inset-0 bg-[#E6D5C3] rounded-[2rem] transform translate-x-6 translate-y-6"
            />
            
            {/* Main image container (mask clip) */}
            <motion.div 
              initial={{ clipPath: "inset(100% 0 0 0 round 2rem)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0 round 2rem)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease: customEase, delay: 0.2 }}
              className="relative w-full h-full overflow-hidden shadow-2xl rounded-[2rem] z-10"
            >
              <motion.img 
                style={{ y: imageY }}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.8, ease: customEase }}
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef in the kitchen" 
                className="absolute inset-x-0 -inset-y-[10%] w-full h-[120%] object-cover object-center"
              />
            </motion.div>

            {/* Decorative element */}
            <motion.div 
               initial={{ opacity: 0, y: 50, rotate: -15 }}
               whileInView={{ opacity: 1, y: 0, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.8, ease: customEase }}
               className="absolute -bottom-6 -left-6 z-20 w-28 h-28 bg-[#748A76] rounded-full flex items-center justify-center p-4 text-white text-center shadow-xl font-serif text-lg tracking-widest leading-tight"
            >
              Since<br/>2018
            </motion.div>
          </div>

          {/* Text Side - Line by line staggers */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: customEase }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#E6D5C3]/70 text-[#5C4033] font-medium text-sm tracking-wider uppercase backdrop-blur-sm"
            >
              Our Story
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: customEase, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2A1B12] leading-tight"
              >
                A Passion-Driven Neighborhood Spot
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: customEase }}
              className="space-y-6"
            >
              <p className="text-[#5C4033] text-lg leading-relaxed pt-2">
                Chef Sara's Cafe is more than just a place to eat; it's a community-focused neighborhood spot born out of a genuine love for bringing people together over a good meal. 
              </p>
              <p className="text-[#5C4033] text-lg leading-relaxed">
                Every dish that comes out of our kitchen is crafted with passion. We believe in the magic of homemade meals, using only fresh, quality ingredients that warm the heart and nourish the soul.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: customEase }}
              className="pt-6"
            >
              <h3 className="text-2xl font-serif text-[#2A1B12] border-l-4 border-[#748A76] pl-6 italic bg-gradient-to-r from-[#748A76]/5 to-transparent py-4 my-2">
                "We don't just serve food, we serve warmth and a feeling of home."
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, rotate: -5, x: 20 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8, ease: customEase }}
              className="pt-4"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_Sarah_Palin.png" alt="Chef Signature" className="h-14 opacity-80" style={{ filter: 'brightness(0) sepia(1) hue-rotate(-50deg) saturate(3) opacity(0.5)' }}/>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
