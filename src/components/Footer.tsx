import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/dvlogo.svg';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Vilas Photo Studio"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Capturing life's precious moments with artistry and excellence for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-burgundy-light transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-primary-foreground/70 hover:text-burgundy-light transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-burgundy-light transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-burgundy-light transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/70 text-sm">Wedding Photography</li>
              <li className="text-primary-foreground/70 text-sm">Corporate Events</li>
              <li className="text-primary-foreground/70 text-sm">Fashion Photography</li>
              <li className="text-primary-foreground/70 text-sm">Industrial Photography</li>
              <li className="text-primary-foreground/70 text-sm">Photo Products</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-burgundy-light" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">9664220584</p>
                  <p className="text-primary-foreground/70">9820962053</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-burgundy-light" />
                <p className="text-primary-foreground/70 text-sm">
                  Shop 7, Flower Queen Building,<br />
                  Veera Desai Rd, Azad Nagar,<br />
                  Andheri West, Mumbai 400058
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-burgundy-light" />
                <p className="text-primary-foreground/70 text-sm">
                  Mon - Sun: 10:00 AM - 9:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Vilas Photo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;