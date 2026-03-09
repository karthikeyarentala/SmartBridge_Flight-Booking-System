import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? "bg-primary/80 backdrop-blur-md" : "bg-primary shadow-lg"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="bg-gold/20 p-2 rounded-xl">
            <Plane className="h-6 w-6 text-gold" />
          </div>
          <span className="text-xl font-display font-bold text-primary-foreground tracking-tight">
            Fly High
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {[
            { to: "/", label: "Home" },
            { to: "/flights", label: "Flights" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-primary-foreground/15 text-primary-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin">
            <Button variant="ghost" className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gold text-navy-deep hover:bg-gold-light font-semibold">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4 space-y-2">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-2 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium">Home</Link>
          <Link to="/flights" onClick={() => setMobileOpen(false)} className="block py-2 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium">Flights</Link>
          <div className="flex gap-3 pt-2">
            <Link to="/signin" onClick={() => setMobileOpen(false)}><Button variant="ghost" size="sm" className="text-primary-foreground/90">Sign In</Button></Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)}><Button size="sm" className="bg-gold text-navy-deep hover:bg-gold-light font-semibold">Sign Up</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
