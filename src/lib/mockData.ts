export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  stops: number;
  date: string;
  travelClass: "economy" | "business" | "first";
}

export type DestinationCategory = "india" | "international";

export interface Destination {
  city: string;
  country: string;
  code: string;
  price: number;
  image: string;
  category: DestinationCategory;
}

export const popularDestinations: Destination[] = [
  // Indian Destinations
  { city: "Mumbai", country: "India", code: "BOM", price: 4500, image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=450&fit=crop", category: "india" },
  { city: "Goa", country: "India", code: "GOI", price: 3800, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=450&fit=crop", category: "india" },
  { city: "Jaipur", country: "India", code: "JAI", price: 3200, image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=450&fit=crop", category: "india" },
  { city: "Kolkata", country: "India", code: "CCU", price: 4200, image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&h=450&fit=crop", category: "india" },
  { city: "Bengaluru", country: "India", code: "BLR", price: 4800, image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&h=450&fit=crop", category: "india" },
  { city: "Chennai", country: "India", code: "MAA", price: 4100, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=450&fit=crop", category: "india" },
  // International Destinations
  { city: "Dubai", country: "UAE", code: "DXB", price: 37500, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=450&fit=crop", category: "international" },
  { city: "Tokyo", country: "Japan", code: "NRT", price: 56800, image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=450&fit=crop", category: "international" },
  { city: "Paris", country: "France", code: "CDG", price: 43500, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=450&fit=crop", category: "international" },
  { city: "New York", country: "USA", code: "JFK", price: 62500, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=450&fit=crop", category: "international" },
  { city: "Singapore", country: "Singapore", code: "SIN", price: 28500, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=450&fit=crop", category: "international" },
  { city: "London", country: "UK", code: "LHR", price: 48000, image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=450&fit=crop", category: "international" },
  { city: "Bangkok", country: "Thailand", code: "BKK", price: 18500, image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=450&fit=crop", category: "international" },
  { city: "Sydney", country: "Australia", code: "SYD", price: 72000, image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&h=450&fit=crop", category: "international" },
];

export const mockFlights: Flight[] = [
  { id: "1", airline: "Fly High Airways", flightNumber: "FH-201", from: "New Delhi", fromCode: "DEL", to: "London", toCode: "LHR", departureTime: "08:00", arrivalTime: "14:30", duration: "9h 30m", price: 40500, stops: 0, date: "2026-03-15", travelClass: "economy" },
  { id: "2", airline: "Sky Connect", flightNumber: "SC-442", from: "New Delhi", fromCode: "DEL", to: "London", toCode: "LHR", departureTime: "11:45", arrivalTime: "18:15", duration: "9h 30m", price: 34400, stops: 0, date: "2026-03-15", travelClass: "economy" },
  { id: "3", airline: "Fly High Airways", flightNumber: "FH-305", from: "New Delhi", fromCode: "DEL", to: "London", toCode: "LHR", departureTime: "15:20", arrivalTime: "22:00", duration: "9h 40m", price: 88500, stops: 0, date: "2026-03-15", travelClass: "business" },
  { id: "4", airline: "Global Wings", flightNumber: "GW-118", from: "New Delhi", fromCode: "DEL", to: "London", toCode: "LHR", departureTime: "19:00", arrivalTime: "04:45", duration: "12h 45m", price: 28800, stops: 1, date: "2026-03-15", travelClass: "economy" },
  { id: "5", airline: "Fly High Airways", flightNumber: "FH-789", from: "New Delhi", fromCode: "DEL", to: "London", toCode: "LHR", departureTime: "22:30", arrivalTime: "05:00", duration: "9h 30m", price: 145000, stops: 0, date: "2026-03-15", travelClass: "first" },
  { id: "6", airline: "Sky Connect", flightNumber: "SC-810", from: "New Delhi", fromCode: "DEL", to: "London", toCode: "LHR", departureTime: "06:30", arrivalTime: "13:00", duration: "9h 30m", price: 72000, stops: 0, date: "2026-03-15", travelClass: "business" },
  { id: "7", airline: "Global Wings", flightNumber: "GW-225", from: "New Delhi", fromCode: "DEL", to: "London", toCode: "LHR", departureTime: "14:00", arrivalTime: "23:30", duration: "12h 30m", price: 25600, stops: 1, date: "2026-03-15", travelClass: "economy" },
];

export const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

export const travelClassLabels: Record<string, string> = {
  economy: "Economy",
  business: "Business",
  first: "First Class",
};
