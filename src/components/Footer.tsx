import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Lovable<span className="text-primary"> Digital</span>
            </h3>
            <p className="text-slate-300 text-sm">
              Fast sites. More calls. Honest pricing for small businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/services" className="text-slate-300 hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link to="/pricing" className="text-slate-300 hover:text-primary transition-colors text-sm">
                Pricing
              </Link>
              <Link to="/portfolio" className="text-slate-300 hover:text-primary transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-primary transition-colors text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              <Link to="/services" className="text-slate-300 hover:text-primary transition-colors text-sm">
                Website Design
              </Link>
              <Link to="/services" className="text-slate-300 hover:text-primary transition-colors text-sm">
                Local SEO
              </Link>
              <Link to="/services" className="text-slate-300 hover:text-primary transition-colors text-sm">
                Logo & Branding
              </Link>
              <Link to="/services" className="text-slate-300 hover:text-primary transition-colors text-sm">
                GMB Optimization
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>US-Based Support</span>
              </div>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:hello@lovabledigital.com" className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@lovabledigital.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 Lovable Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
