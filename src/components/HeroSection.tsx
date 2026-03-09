import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plane, MapPin, Calendar, ArrowRight, Shield, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Shield, label: "Secure Booking", value: "100%" },
  { icon: Clock, label: "24/7 Support", value: "Always" },
  { icon: CreditCard, label: "Easy Payments", value: "UPI Ready" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    navigate(`/flights?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gold/15 backdrop-blur-sm border border-gold/25 rounded-full px-5 py-2.5 mb-8">
            <Plane className="h-4 w-4 text-gold" />
            <span className="text-sm text-primary-foreground/90 font-medium">India's favourite flight booking platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-5 leading-[1.1]">
            Fly High,<br />
            <span className="text-gold">Fly Smart</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-12">
            Book domestic & international flights at unbeatable fares. From Delhi to Dubai, Goa to London — we've got you covered.
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 animate-slide-up border border-border/50" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
              <Input
                placeholder="From (e.g. New Delhi)"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="pl-10 h-12 bg-muted/30 border-border rounded-xl"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
              <Input
                placeholder="To (e.g. Mumbai)"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="pl-10 h-12 bg-muted/30 border-border rounded-xl"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 h-12 bg-muted/30 border-border rounded-xl"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="h-12 bg-gold text-navy-deep hover:bg-gold-light font-semibold text-base rounded-xl group"
            >
              Search <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5">
              <stat.icon className="h-5 w-5 text-gold" />
              <span className="text-sm font-semibold text-primary-foreground">{stat.value}</span>
              <span className="text-xs text-primary-foreground/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
