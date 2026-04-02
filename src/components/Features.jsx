import { Leaf, Heart, Utensils, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Leaf size={32} />,
      title: "Fresh Ingredients",
      desc: "Locally sourced, fresh produce ensuring the highest quality in every meal."
    },
    {
      icon: <Heart size={32} />,
      title: "Community Driven",
      desc: "A warm welcoming space where neighbors gather and friends connect."
    },
    {
      icon: <Utensils size={32} />,
      title: "Homemade Recipes",
      desc: "Soulful, secret recipes passed down and perfected over generations."
    },
    {
      icon: <Coffee size={32} />,
      title: "Cozy Atmosphere",
      desc: "Relax in our comfortable seating with natural light and a gentle ambiance."
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-[#2A1B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVars}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-[#5C4033] rounded-2xl flex items-center justify-center text-[#E6D5C3] mb-6 transform transition-transform group-hover:-translate-y-2 group-hover:rotate-3 duration-300">
                {feat.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-3 tracking-wide">
                {feat.title}
              </h3>
              <p className="text-[#E6D5C3]/80 text-sm leading-relaxed max-w-xs mx-auto">
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
