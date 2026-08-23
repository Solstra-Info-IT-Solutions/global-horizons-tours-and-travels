import { ServiceItem } from "@/src/types";

export const SERVICES: ServiceItem[] = [
  {
    id: "private-transportation",
    title: "Private Transportation",
    shortDescription: "Clean, comfortable private chauffeur-driven vehicles for local, intercity, and outstation trips.",
    fullDescription: "Whether you need a dedicated vehicle for city sightseeing, outstation travel across Maharashtra, or point-to-point intercity transit, we provide punctual, experienced local drivers and well-maintained private cars tailored to your schedule.",
    iconName: "Car",
    badge: "Core Service",
    features: [
      "Point-to-point local & outstation transit",
      "Punctual, professional, and courteous chauffeurs",
      "Flexible schedule tailored to your pace",
      "All-inclusive transparent transparent pricing guidance"
    ]
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    shortDescription: "Hassle-free pickup and drop service connecting airports, railway stations, and hotels.",
    fullDescription: "Never worry about arriving late or negotiating local taxis. Our airport transfer service provides reliable flight tracking, door-to-door luggage assistance, and punctual pickups from Aurangabad Airport (IXU) and nearby transit hubs.",
    iconName: "PlaneTakeoff",
    badge: "Reliable Pickup",
    features: [
      "24/7 airport & railway station transfers",
      "Flight arrival monitoring for delayed flights",
      "Door-to-door luggage assistance",
      "Dedicated meeting point at terminal exits"
    ]
  },
  {
    id: "sightseeing-tours",
    title: "Sightseeing Tours",
    shortDescription: "Curated heritage tours to Ajanta, Ellora, Daulatabad Fort, Bibi Ka Maqbara, and Shirdi.",
    fullDescription: "Explore Maharashtra's grand heritage with routes optimized by local experts who have navigated these destinations for over 20 years. Enjoy relaxed itineraries with optimum timing for monument visits and meal stops.",
    iconName: "Compass",
    badge: "Heritage Special",
    features: [
      "Ajanta & Ellora full-day and multi-day tours",
      "City sightseeing itineraries with local recommendations",
      "Driver knowledge on monument opening times & parking",
      "Flexible family-friendly stopping points"
    ]
  },
  {
    id: "customized-travel-packages",
    title: "Customized Travel Packages",
    shortDescription: "Tailored itineraries crafted around your specific travel dates, group size, interests, and budget.",
    fullDescription: "Every traveler is unique. Tell us where you want to visit, how many days you have, and your travel style. We craft a personalized travel plan and vehicle arrangement that matches your exact preferences.",
    iconName: "SlidersHorizontal",
    badge: "Tailored Plans",
    features: [
      "Custom day-by-day itinerary design",
      "Adaptable travel dates and duration",
      "Accommodates family, couple, and solo travelers",
      "No rigid group schedules or unwanted detours"
    ]
  },
  {
    id: "local-travel-assistance",
    title: "Local Travel Assistance",
    shortDescription: "On-ground support, route guidance, dining suggestions, and regional travel advice.",
    fullDescription: "Leverage our 20+ years of local ground experience. From navigating regional heritage circuits to finding authentic local food and craft centers, we provide comprehensive assistance throughout your journey.",
    iconName: "MapPin",
    badge: "20+ Years Expertise",
    features: [
      "On-call assistance during your travel",
      "Local dining and artisan shopping guidance",
      "Real-time route & weather updates",
      "Friendly guidance for first-time visitors"
    ]
  },
  {
    id: "foreign-tourist-assistance",
    title: "Foreign Tourist Assistance",
    shortDescription: "Specialized assistance for international visitors, including driver support & foreign exchange guidance.",
    fullDescription: "Traveling to India from abroad? We welcome global travelers with clear communication, dependable driver support, hotel coordination assistance, and foreign-exchange guidance to ensure a comfortable stay.",
    iconName: "Globe",
    badge: "International Friendly",
    features: [
      "English-speaking driver assistance",
      "Foreign currency exchange guidance",
      "Airport welcome & luggage support",
      "Safe, respectful, and transparent service"
    ]
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    shortDescription: "Executive transportation for companies, management teams, business travelers, and events.",
    fullDescription: "Professional transportation solutions for executives, corporate guests, business conferences, and officer visits across Chhatrapati Sambhajinagar and industrial zones. GST invoicing and priority billing support available.",
    iconName: "Briefcase",
    badge: "Executive Service",
    features: [
      "Executive airport transfers & client pickups",
      "Intercity business travel between Pune, Mumbai & Aurangabad",
      "Punctual corporate event transportation",
      "Professional invoicing & corporate booking coordination"
    ]
  }
];
