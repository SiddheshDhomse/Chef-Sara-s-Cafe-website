import { motion } from 'framer-motion';

const Menu = () => {
  const favoriteDishes = [
    { name: "Fluffy Pancakes", desc: "Served with fresh berries, powdered sugar & maple syrup.", image: "https://images.unsplash.com/photo-1528669826296-bdc71fa23b2c?auto=format&fit=crop&q=80&w=800" },
    { name: "Artisan Avocado Toast", desc: "Topped with a perfect poached egg and microgreens.", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800" },
    { name: "Gourmet Turkey Club", desc: "Fresh lettuce, turkey, local cheese on toasted sourdough.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800" },
    { name: "Signature Cappuccino", desc: "Rich espresso with steamed milk and beautiful latte art.", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="menu" className="py-24 bg-[#E6D5C3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#E6D5C3] text-[#5C4033] font-medium text-sm tracking-wider uppercase mb-4"
          >
            Our Menu
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#2A1B12] mb-6"
          >
            Favorite Dishes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#5C4033] text-lg"
          >
            Explore our comforting dishes made from fresh, local ingredients. A taste of home in every bite.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {favoriteDishes.map((item, idx) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col h-full group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-sm hover-glow h-56">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-[#2A1B12] group-hover:text-[#748A76] transition-colors">
                  {item.name}
                </h4>
              </div>
              <p className="text-[#5C4033]/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="#menu" 
            className="inline-flex items-center justify-center px-8 py-3 border border-[#5C4033] text-[#5C4033] rounded-full font-medium hover:bg-[#5C4033] hover:text-white transition-colors duration-300"
          >
            View Full Menu
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Menu;
