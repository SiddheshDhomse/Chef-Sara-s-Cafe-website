import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#E6D5C3] rounded-[2rem] transform translate-x-6 translate-y-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000" 
                alt="Chef in the kitchen" 
                className="relative rounded-[2rem] z-10 w-full object-cover shadow-xl aspect-[4/5]"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 z-20 w-24 h-24 bg-[#748A76] rounded-full flex items-center justify-center p-4 text-white text-center shadow-lg font-serif">
                Since 2018
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#E6D5C3]/50 text-[#5C4033] font-medium text-sm tracking-wider uppercase">
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2A1B12] leading-tight">
              A Passion-Driven Neighborhood Spot
            </h2>
            <p className="text-[#5C4033] text-lg leading-relaxed pt-2">
              Chef Sara's Cafe is more than just a place to eat; it's a community-focused neighborhood spot born out of a genuine love for bringing people together over a good meal. 
            </p>
            <p className="text-[#5C4033] text-lg leading-relaxed">
              Every dish that comes out of our kitchen is crafted with passion. We believe in the magic of homemade meals, using only fresh, quality ingredients that warm the heart and nourish the soul.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-serif text-[#2A1B12] border-l-4 border-[#748A76] pl-4 italic">
                "We don't just serve food, we serve warmth and a feeling of home."
              </h3>
            </div>
            
            <div className="pt-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_Sarah_Palin.png" alt="Chef Sara Signature" className="h-12 opacity-80" style={{ filter: 'brightness(0) sepia(1) hue-rotate(-50deg) saturate(3) opacity(0.6)' }}/>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
