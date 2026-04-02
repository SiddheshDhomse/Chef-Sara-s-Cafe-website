import { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring, useAnimationFrame } from 'framer-motion';

const Menu = () => {
  const container = useRef(null);
  
  // Base scroll tracking
  const { scrollY, scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const customEase = [0.16, 1, 0.3, 1];

  // Velocity calculations for Skew distortion
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocitySkewY = useTransform(smoothVelocity, [-1000, 0, 1000], [4, 0, -4]);

  // Infinite Marquee calculation
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const favoriteDishes = [
    { name: "Fluffy Pancakes", desc: "Served with fresh berries, powdered sugar & maple syrup.", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Artisan Avocado Toast", desc: "Topped with a perfect poached egg and microgreens.", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800" },
    { name: "Gourmet Turkey Club", desc: "Fresh lettuce, turkey, local cheese on toasted sourdough.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800" },
    { name: "Signature Cappuccino", desc: "Rich espresso with steamed milk and beautiful latte art.", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="menu" ref={container} className="py-32 bg-[#E6D5C3]/20 relative overflow-hidden">
      
      {/* Infinite Velocity Marquee */}
      <motion.div 
        style={{ x: marqueeX }}
        className="absolute -top-10 left-0 flex whitespace-nowrap opacity-[0.03] select-none pointer-events-none"
      >
        <h1 className="text-[18rem] md:text-[20rem] font-serif tracking-tight leading-none uppercase">
          FRESH PLATES — DAILY ROASTS — HOMEMADE SOUPS — WARM PASTRIES — 
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="inline-block px-5 py-2 rounded-full bg-[#E6D5C3] text-[#5C4033] font-medium text-xs tracking-[0.2em] uppercase mb-6 shadow-sm"
          >
            Curated Plates
          </motion.div>
          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial={{ y: "120%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: customEase }}
              className="text-5xl md:text-7xl font-serif text-[#2A1B12] leading-none tracking-tight"
            >
              Favorite Dishes
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: customEase }}
            className="text-[#5C4033] text-xl"
          >
            Explore our comforting dishes made from fresh, local ingredients. A taste of home in every bite.
          </motion.p>
        </div>

        {/* Dynamic Skew Container */}
        <motion.div 
          style={{ skewY: velocitySkewY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 origin-center"
        >
          {favoriteDishes.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ clipPath: "inset(100% 0 0 0 round 1rem)", opacity: 0, y: 50 }}
              whileInView={{ clipPath: "inset(0% 0 0 0 round 1rem)", opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 1.2, ease: customEase }}
              className="flex flex-col h-full group cursor-none"
            >
              <div className="relative overflow-hidden rounded-[2rem] mb-6 shadow-sm hover-glow h-80">
                <motion.img 
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 1, ease: customEase }}
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover origin-center"
                  style={{ transform: "translateZ(0)" }}
                />
              </div>
              <div className="flex justify-between items-start mb-2 px-2">
                <h4 className="text-2xl font-bold text-[#2A1B12] group-hover:text-[#748A76] transition-colors duration-300">
                  {item.name}
                </h4>
              </div>
              <p className="text-[#5C4033]/80 leading-relaxed px-2 text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: customEase }}
          className="mt-20 text-center"
        >
          <a 
            href="#menu" 
            className="group relative inline-flex items-center justify-center px-12 py-5 font-medium text-lg text-white bg-[#5C4033] rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
            <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-[#748A76] rounded-full group-hover:w-[400px] group-hover:h-[400px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            <span className="relative z-10 transition-colors duration-300">View Full Menu</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Menu;
