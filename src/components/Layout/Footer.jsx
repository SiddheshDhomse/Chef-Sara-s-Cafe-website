import { MapPin, Phone, Clock } from 'lucide-react';

const FacebookIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#2A1B12] text-[#E6D5C3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 border-b border-[#5C4033] pb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-white">Chef Sara's</h3>
            <p className="text-[#E6D5C3]/80 max-w-xs">
              Where comfort food meets community. Authentic, local, and cozy vibe.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#5C4033] flex items-center justify-center hover:bg-[#748A76] transition-colors">
                <FacebookIcon size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#5C4033] flex items-center justify-center hover:bg-[#748A76] transition-colors">
                <InstagramIcon size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[#E6D5C3]/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-serif text-white">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-[#748A76] shrink-0 mt-0.5" />
                <span className="text-[#E6D5C3]/80">7201 S Exchange Ave<br/>Chicago, IL 60649, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-[#748A76] shrink-0" />
                <a href="tel:+17733594637" className="text-[#E6D5C3]/80 hover:text-white transition-colors">
                  +1 773-359-4637
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 text-[#748A76] shrink-0 mt-0.5" />
                <span className="text-[#E6D5C3]/80">
                  Wed - Fri: 10:00 AM - 4:00 PM<br/>
                  Sat: 10:00 AM - 3:00 PM<br/>
                  Sun - Tue: Closed
                </span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#E6D5C3]/60">
          <p>&copy; {new Date().getFullYear()} Chef Sara's Cafe. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with modern web standards</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
