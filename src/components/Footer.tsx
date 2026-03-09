import { Plane, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="bg-gold/20 p-2 rounded-xl">
              <Plane className="h-5 w-5 text-gold" />
            </div>
            <span className="text-lg font-display font-bold">Fly High</span>
          </div>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">
            Your trusted partner for domestic and international flights at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">Quick Links</h4>
          <div className="space-y-2.5">
            <Link to="/" className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors">Home</Link>
            <Link to="/flights" className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors">Flights</Link>
            <Link to="/signin" className="block text-sm text-primary-foreground/50 hover:text-gold transition-colors">Sign In</Link>
          </div>
        </div>

        {/* Popular Routes */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">Popular Routes</h4>
          <div className="space-y-2.5 text-sm text-primary-foreground/50">
            <p>Delhi → Mumbai</p>
            <p>Delhi → Goa</p>
            <p>Delhi → Dubai</p>
            <p>Delhi → London</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/70">Contact</h4>
          <div className="space-y-2.5 text-sm text-primary-foreground/50">
            <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> support@flyhigh.in</p>
            <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" /> New Delhi, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
        <p className="text-primary-foreground/40 text-xs">
          © 2026 Fly High. All rights reserved. Made with ❤️ in India.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
