import { useState } from "react";
import { popularDestinations, formatINR, DestinationCategory } from "@/lib/mockData";
import { MapPin, Globe, IndianRupee } from "lucide-react";

const tabs: { value: DestinationCategory | "all"; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: <Globe className="h-4 w-4" /> },
  { value: "india", label: "India", icon: <IndianRupee className="h-4 w-4" /> },
  { value: "international", label: "International", icon: <Globe className="h-4 w-4" /> },
];

const DestinationsSection = () => {
  const [activeTab, setActiveTab] = useState<DestinationCategory | "all">("all");

  const filtered = activeTab === "all"
    ? popularDestinations
    : popularDestinations.filter((d) => d.category === activeTab);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
            Explore the world
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From vibrant Indian cities to iconic global landmarks
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.value
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((dest) => (
            <div
              key={dest.code}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-2"
            >
              <div className="aspect-[4/3]">
                <img
                  src={dest.image}
                  alt={`${dest.city}, ${dest.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${
                  dest.category === "india"
                    ? "bg-gold/20 text-gold-light border border-gold/30"
                    : "bg-sky-medium/20 text-sky-light border border-sky-medium/30"
                }`}>
                  {dest.category === "india" ? "🇮🇳 India" : "🌍 Intl"}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1 text-primary-foreground/60 text-xs mb-1">
                  <MapPin className="h-3 w-3" />
                  <span>{dest.country}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary-foreground">{dest.city}</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">
                  From <span className="text-gold font-bold text-base">{formatINR(dest.price)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
