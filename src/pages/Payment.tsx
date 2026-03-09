import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Plane, Clock, User, Mail, Smartphone, Wallet } from "lucide-react";
import { mockFlights, formatINR } from "@/lib/mockData";
import { toast } from "sonner";

type PaymentMethod = "card" | "phonepe" | "paytm" | "upi";

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const flightId = searchParams.get("flightId");
  const flight = mockFlights.find((f) => f.id === flightId) || mockFlights[0];

  const [passengerName, setPassengerName] = useState("");
  const [passengerEmail, setPassengerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName || !passengerEmail) {
      toast.error("Please fill in passenger details");
      return;
    }
    if (paymentMethod === "card" && (!cardNumber || !expiry || !cvv)) {
      toast.error("Please fill in card details");
      return;
    }
    if ((paymentMethod === "upi" || paymentMethod === "phonepe" || paymentMethod === "paytm") && !upiId) {
      toast.error("Please enter your UPI ID");
      return;
    }
    toast.success("Payment successful!");
    navigate(`/ticket?flightId=${flight.id}&passenger=${encodeURIComponent(passengerName)}&email=${encodeURIComponent(passengerEmail)}`);
  };

  const tax = Math.round(flight.price * 0.12);
  const total = flight.price + tax;

  const paymentMethods: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
    { id: "upi", label: "UPI", icon: <Smartphone className="h-5 w-5" /> },
    { id: "phonepe", label: "PhonePe", icon: <Wallet className="h-5 w-5" /> },
    { id: "paytm", label: "Paytm", icon: <Wallet className="h-5 w-5" /> },
    { id: "card", label: "Card", icon: <CreditCard className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8">Complete Your Booking</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Passenger Info */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-display font-semibold text-foreground mb-4">Passenger Details</h2>
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Full name" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} className="pl-10 h-12 bg-muted/50" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="email" placeholder="Email" value={passengerEmail} onChange={(e) => setPassengerEmail(e.target.value)} className="pl-10 h-12 bg-muted/50" />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-display font-semibold text-foreground mb-4">Payment Method</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                        paymentMethod === method.id
                          ? "border-secondary bg-secondary/10 text-secondary"
                          : "border-border bg-muted/30 text-muted-foreground hover:border-secondary/40"
                      }`}
                    >
                      {method.icon}
                      <span className="text-sm font-semibold">{method.label}</span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                  {/* UPI / PhonePe / Paytm */}
                  {(paymentMethod === "upi" || paymentMethod === "phonepe" || paymentMethod === "paytm") && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {paymentMethod === "phonepe" && "Pay securely using your PhonePe UPI ID"}
                        {paymentMethod === "paytm" && "Pay securely using your Paytm UPI ID"}
                        {paymentMethod === "upi" && "Enter your UPI ID to pay directly"}
                      </p>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="yourname@upi"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="pl-10 h-12 bg-muted/50"
                        />
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  {paymentMethod === "card" && (
                    <>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Card number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="pl-10 h-12 bg-muted/50" maxLength={19} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} className="h-12 bg-muted/50" maxLength={5} />
                        <Input placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} className="h-12 bg-muted/50" maxLength={4} type="password" />
                      </div>
                    </>
                  )}

                  <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground hover:bg-gold-light font-semibold text-base">
                    Pay {formatINR(total)}
                  </Button>
                </form>
              </div>
            </div>

            {/* Flight Summary Sidebar */}
            <div className="bg-card rounded-xl border border-border p-6 h-fit">
              <h2 className="text-lg font-display font-semibold text-foreground mb-4">Flight Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Plane className="h-4 w-4 text-secondary" />
                  <span className="text-foreground font-medium">{flight.airline} — {flight.flightNumber}</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Route</span>
                    <span className="font-medium text-foreground">{flight.fromCode} → {flight.toCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Departure</span>
                    <span className="font-medium text-foreground">{flight.departureTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Arrival</span>
                    <span className="font-medium text-foreground">{flight.arrivalTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground"><Clock className="inline h-3 w-3 mr-1" />Duration</span>
                    <span className="font-medium text-foreground">{flight.duration}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base fare</span>
                    <span className="text-foreground">{formatINR(flight.price)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes & fees</span>
                    <span className="text-foreground">{formatINR(tax)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="text-secondary">{formatINR(total)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
