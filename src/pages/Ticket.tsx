import { useSearchParams, Link } from "react-router-dom";
import { Plane, CheckCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockFlights } from "@/lib/mockData";

const Ticket = () => {
  const [searchParams] = useSearchParams();
  const flightId = searchParams.get("flightId");
  const passenger = searchParams.get("passenger") || "Passenger";
  const email = searchParams.get("email") || "";
  const flight = mockFlights.find((f) => f.id === flightId) || mockFlights[0];
  const bookingRef = `FH${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const seat = `${Math.floor(Math.random() * 30) + 1}${["A", "B", "C", "D", "E", "F"][Math.floor(Math.random() * 6)]}`;
  const gate = `${String.fromCharCode(65 + Math.floor(Math.random() * 8))}${Math.floor(Math.random() * 20) + 1}`;

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Success */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h1 className="text-3xl font-display font-bold text-foreground">Booking Confirmed!</h1>
          <p className="text-muted-foreground mt-2">Your e-ticket has been generated</p>
        </div>

        {/* Ticket Card */}
        <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border" id="ticket">
          {/* Header */}
          <div className="bg-primary p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Plane className="h-6 w-6 text-accent" />
              <span className="text-xl font-display font-bold text-primary-foreground">Fly High</span>
            </div>
            <p className="text-primary-foreground/60 text-sm">Boarding Pass / E-Ticket</p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            {/* Route */}
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-foreground">{flight.fromCode}</p>
                <p className="text-sm text-muted-foreground">{flight.from}</p>
              </div>
              <div className="flex-1 flex flex-col items-center px-4">
                <Plane className="h-5 w-5 text-secondary mb-1" />
                <div className="w-full h-px bg-border" />
                <p className="text-xs text-muted-foreground mt-1">{flight.duration}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-foreground">{flight.toCode}</p>
                <p className="text-sm text-muted-foreground">{flight.to}</p>
              </div>
            </div>

            {/* Dashed separator */}
            <div className="border-t-2 border-dashed border-border" />

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Passenger</p>
                <p className="font-semibold text-foreground">{passenger}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Booking Ref</p>
                <p className="font-semibold text-foreground">{bookingRef}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Flight</p>
                <p className="font-semibold text-foreground">{flight.flightNumber}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-semibold text-foreground">{flight.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Departure</p>
                <p className="font-semibold text-foreground">{flight.departureTime}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Arrival</p>
                <p className="font-semibold text-foreground">{flight.arrivalTime}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Seat</p>
                <p className="font-semibold text-foreground">{seat}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Gate</p>
                <p className="font-semibold text-foreground">{gate}</p>
              </div>
            </div>

            {/* Barcode placeholder */}
            <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
              <div className="flex gap-[2px]">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-foreground"
                    style={{
                      width: Math.random() > 0.5 ? 2 : 1,
                      height: 40,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <Button onClick={handlePrint} className="flex-1 h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
            <Download className="mr-2 h-4 w-4" /> Download Ticket
          </Button>
          <Link to="/" className="flex-1">
            <Button variant="outline" className="w-full h-12 font-semibold border-border text-foreground hover:bg-muted">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
