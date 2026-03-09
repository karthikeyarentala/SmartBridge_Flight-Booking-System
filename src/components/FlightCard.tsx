import { Plane, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Flight, formatINR, travelClassLabels } from "@/lib/mockData";

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

const FlightCard = ({ flight, onSelect }: FlightCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary/40">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Airline */}
        <div className="md:w-44">
          <p className="font-display font-semibold text-foreground">{flight.airline}</p>
          <p className="text-sm text-muted-foreground">{flight.flightNumber}</p>
          <span className={`inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
            flight.travelClass === "first"
              ? "bg-accent/20 text-accent"
              : flight.travelClass === "business"
              ? "bg-secondary/15 text-secondary"
              : "bg-muted text-muted-foreground"
          }`}>
            {travelClassLabels[flight.travelClass]}
          </span>
        </div>

        {/* Route */}
        <div className="flex items-center gap-4 flex-1">
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">{flight.departureTime}</p>
            <p className="text-sm text-muted-foreground font-medium">{flight.fromCode}</p>
          </div>

          <div className="flex-1 flex flex-col items-center gap-1">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {flight.duration}
            </p>
            <div className="w-full flex items-center gap-1">
              <div className="h-px flex-1 bg-border" />
              <Plane className="h-4 w-4 text-secondary rotate-0" />
              <div className="h-px flex-1 bg-border" />
            </div>
            <p className="text-xs text-muted-foreground">
              {flight.stops === 0 ? "Non-stop" : `${flight.stops} stop`}
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">{flight.arrivalTime}</p>
            <p className="text-sm text-muted-foreground font-medium">{flight.toCode}</p>
          </div>
        </div>

        {/* Price & Book */}
        <div className="flex items-center gap-4 md:flex-col md:items-end">
          <p className="text-2xl font-display font-bold text-secondary">{formatINR(flight.price)}</p>
          <Button
            onClick={() => onSelect(flight)}
            className="bg-accent text-accent-foreground hover:bg-gold-light font-semibold"
          >
            Book Now <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
