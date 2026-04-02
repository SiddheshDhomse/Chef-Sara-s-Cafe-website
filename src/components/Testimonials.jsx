import { Star } from 'lucide-react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';
import { useRef } from 'react';

const Testimonials = () => {
  const container = useRef(null);
  
  const { scrollY, scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const customEase = [0.16, 1, 0.3, 1];
  const reviewsY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  // Velocity skewing
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 40, stiffness: 300 });
  const velocitySkewY = useTransform(smoothVelocity, [-1000, 0, 1000], [5, 0, -5]);

  const reviews = [
    {
      name: "Michael T.",
      date: "2 weeks ago",
      text: "Amazing food and great service! Feels like home. Their breakfast sandwiches are the best in the South Shore area.",
    },
    {
      name: "Sarah Jenkins",
      date: "1 month ago",
      text: "A true hidden gem in Chicago. Highly recommend! The warm aesthetic and friendly staff make every visit special.",
    },
    {
      name: "David R.",
      date: "3 months ago",
      text: "The breakfast here is absolutely delicious. You can taste the love in the homemade recipes. Try the pancakes!",
    }
  ];

  return (
    <section id="testimonials" ref={container} className="py-40 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24 relative z-10">
          <div className="overflow-hidden">
            <motion.h2 
               initial={{ opacity: 0, y: "100%" }}
               whileInView={{ opacity: 1, y: "0%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: customEase }}
               className="text-6xl md:text-7xl lg:text-[5rem] font-serif text-[#2A1B12] mb-6 tracking-tight leading-none"
            >
              Loved by the Community
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: customEase }}
            className="inline-flex justify-center items-center gap-3 text-xl text-[#5C4033] bg-[#E6D5C3]/30 px-8 py-4 rounded-full border border-[#E6D5C3]"
          >
            <span className="font-medium">Rated 4.8</span>
            <div className="flex text-[#D4AF37]">
              {[1,2,3,4,5].map(i => <Star key={i} size={22} fill="currentColor" />)}
            </div>
            <span className="font-light">on Google</span>
          </motion.div>
        </div>

        <motion.div 
          style={{ y: reviewsY, skewY: velocitySkewY }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
        >
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 150, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 1.4, ease: customEase }}
              className="group bg-white p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E6D5C3]/40 relative transform transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgb(92,64,51,0.12)] cursor-none"
            >
              <div className="absolute top-0 right-10 transform -translate-y-1/2 opacity-5 font-serif text-[10rem] leading-none text-[#5C4033] group-hover:text-[#748A76] transition-colors duration-500 pointer-events-none">
                "
              </div>
              <div className="flex text-[#D4AF37] mb-8">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-[#2A1B12] text-2xl mb-12 leading-relaxed font-serif italic relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-16 h-16 bg-[#E6D5C3] rounded-full flex items-center justify-center text-[#5C4033] font-bold text-3xl shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#2A1B12] text-xl tracking-wide">{review.name}</h4>
                  <span className="text-sm text-[#5C4033]/60 uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
