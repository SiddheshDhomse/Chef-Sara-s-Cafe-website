import { Leaf, Heart, Utensils, Coffee } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const customEase = [0.16, 1, 0.3, 1];

  const features = [
    {
      icon: <Leaf size={36} strokeWidth={1.5} />,
      title: "Fresh Ingredients",
      desc: "Locally sourced, fresh produce ensuring the highest quality in every meal."
    },
    {
      icon: <Heart size={36} strokeWidth={1.5} />,
      title: "Community Driven",
      desc: "A warm welcoming space where neighbors gather and friends connect."
    },
    {
      icon: <Utensils size={36} strokeWidth={1.5} />,
      title: "Homemade Recipes",
      desc: "Soulful, secret recipes passed down and perfected over generations."
    },
    {
      icon: <Coffee size={36} strokeWidth={1.5} />,
      title: "Cozy Atmosphere",
      desc: "Relax in our comfortable seating with natural light and a gentle ambiance."
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2, ease: customEase } }
  };

  return (
    <section ref={container} className="py-32 bg-[#2A1B12] relative overflow-hidden">
      
      {/* Parallax graphic elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-64 h-64 border border-[#cfba9f] rounded-full mix-blend-overlay" />
        <div className="absolute bottom-10 right-20 w-96 h-96 border border-[#cfba9f] rounded-full mix-blend-overlay" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVars}
              className="text-center group relative p-8 rounded-3xl"
            >
              {/* Animated hover background */}
              <motion.div 
                className="absolute inset-0 bg-[#5C4033]/20 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: idx * 0.4
                }}
                className="w-24 h-24 mx-auto bg-[#3E2C22] rounded-3xl shrink-0 flex items-center justify-center text-[#E6D5C3] mb-8 relative border border-[#cfba9f]/10 shadow-xl"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#748A76] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                <span className="relative z-10 transition-transform duration-500 group-hover:scale-110">{feat.icon}</span>
              </motion.div>
              
              <h3 className="text-2xl font-serif text-white mb-4 tracking-wide relative z-10">
                {feat.title}
              </h3>
              <p className="text-[#E6D5C3]/70 text-base leading-relaxed max-w-xs mx-auto relative z-10 font-light">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
