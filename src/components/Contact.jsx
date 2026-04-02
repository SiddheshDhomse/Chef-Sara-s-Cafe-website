import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#E6D5C3]/50 text-[#5C4033] font-medium text-sm tracking-wider uppercase mb-6">
              Visit Us
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2A1B12] leading-tight mb-8">
              We'd Love To See You
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#E6D5C3] flex items-center justify-center text-[#748A76] mt-1 group-hover:bg-[#748A76] group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-[#2A1B12] mb-2">Location</h4>
                  <p className="text-[#5C4033] leading-relaxed">
                    7201 S Exchange Ave<br/>
                    Chicago, IL 60649, USA
                  </p>
                  <a 
                    href="https://goo.gl/maps/YOUR_MAP_ID" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center mt-3 text-[#748A76] font-medium hover:text-[#5C4033] transition-colors"
                  >
                    Get Directions <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#E6D5C3] flex items-center justify-center text-[#748A76] mt-1 group-hover:bg-[#748A76] group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-[#2A1B12] mb-2">Phone</h4>
                  <a 
                    href="tel:+17733594637" 
                    className="text-[#5C4033] hover:text-[#748A76] transition-colors text-lg"
                  >
                    +1 773-359-4637
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#E6D5C3] flex items-center justify-center text-[#748A76] mt-1 group-hover:bg-[#748A76] group-hover:text-white transition-colors duration-300">
                  <Clock size={24} />
                </div>
                <div className="ml-6 w-full">
                  <h4 className="text-xl font-bold text-[#2A1B12] mb-2">Hours</h4>
                  <table className="w-full max-w-xs text-[#5C4033]">
                    <tbody>
                      <tr className="border-b border-[#E6D5C3]/50">
                        <td className="py-2">Wed - Fri</td>
                        <td className="py-2 text-right font-medium">10:00 AM - 4:00 PM</td>
                      </tr>
                      <tr className="border-b border-[#E6D5C3]/50">
                        <td className="py-2">Saturday</td>
                        <td className="py-2 text-right font-medium">10:00 AM - 3:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-[#748A76]">Sun - Tue</td>
                        <td className="py-2 text-right font-medium text-[#748A76]">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.240409477618!2d-87.56314818456254!3d41.76359927923145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e28151ed5e7df%3A0x6bba8d24b61bfe8!2s7201%20S%20Exchange%20Ave%2C%20Chicago%2C%20IL%2060649%2C%20USA!5e0!3m2!1sen!2sus!4v1683050123456!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps targeting 7201 S Exchange Ave"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
