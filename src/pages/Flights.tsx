import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightCard from "@/components/FlightCard";
import { mockFlights, Flight, travelClassLabels } from "@/lib/mockData";
import { Plane, ArrowUpDown, Filter } from "lucide-react";

type SortOrder = "default" | "low-high" | "high-low";
type ClassFilter = "all" | "economy" | "business" | "first";

const Flights = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";

  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const [classFilter, setClassFilter] = useState<ClassFilter>("all");

  const handleSelect = (flight: Flight) => {
    navigate(`/payment?flightId=${flight.id}`);
  };

  const filteredFlights = useMemo(() => {
    let flights = [...mockFlights];

    if (classFilter !== "all") {
      flights = flights.filter((f) => f.travelClass === classFilter);
    }

    if (sortOrder === "low-high") {
      flights.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      flights.sort((a, b) => b.price - a.price);
    }

    return flights;
  }, [sortOrder, classFilter]);

  const classOptions: { value: ClassFilter; label: string }[] = [
    { value: "all", label: "All Classes" },
    { value: "economy", label: "Economy" },
    { value: "business", label: "Business" },
    { value: "first", label: "First Class" },
  ];

  const sortOptions: { value: SortOrder; label: string }[] = [
    { value: "default", label: "Default" },
    { value: "low-high", label: "Price: Low → High" },
    { value: "high-low", label: "Price: High → Low" },
  ];

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              Flight Schedules
            </h1>
            <p className="text-muted-foreground">
              {from && to
                ? `Showing flights from ${from} to ${to}`
                : "Showing all available flights — New Delhi to London"}
            </p>
          </div>

          {/* Filters Bar */}
          <div className="bg-card rounded-xl border border-border p-4 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Class Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="flex flex-wrap gap-2">
                {classOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setClassFilter(opt.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      classFilter === opt.value
                        ? "bg-secondary text-secondary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-border" />

            {/* Sort */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="relative">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                  className="appearance-none bg-muted text-foreground text-sm font-medium rounded-lg px-4 py-2 pr-8 border border-border focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ArrowUpDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Flight List */}
          <div className="space-y-4">
            {filteredFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} onSelect={handleSelect} />
            ))}
          </div>

          {filteredFlights.length === 0 && (
            <div className="text-center py-20">
              <Plane className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No flights found for this filter</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flights;
