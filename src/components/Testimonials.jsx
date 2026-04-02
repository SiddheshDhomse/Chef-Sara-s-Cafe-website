import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
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
    <section id="testimonials" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#2A1B12] mb-4"
          >
            Loved by the Community
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-2 text-lg text-[#5C4033]"
          >
            <span>Rated 4.8</span>
            <div className="flex text-[#D4AF37]">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span>on Google</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-[#E6D5C3]/30 hover-glow"
            >
              <div className="flex text-[#D4AF37] mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-[#2A1B12] text-lg mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-[#E6D5C3] rounded-full flex items-center justify-center text-[#5C4033] font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#2A1B12]">{review.name}</h4>
                  <span className="text-xs text-[#5C4033]/60">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
