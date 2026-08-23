import { Metadata } from "next";
import Link from "next/link";
import { Car, PlaneTakeoff, MapPin, Navigation, ShieldCheck, ArrowRight, Building2, SlidersHorizontal } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";
import { QuickEnquiryCard } from "@/src/components/home/QuickEnquiryCard";

export const metadata: Metadata = {
  title: "Private Transportation & Taxi Services | Chhatrapati Sambhajinagar",
  description:
    "Reliable chauffeur-driven private transportation, local city travel, outstation taxi service, airport pickup, and intercity travel across Maharashtra.",
};

const TRANSPORT_SERVICES = [
  {
    title: "Airport Transfers",
    description: "24/7 punctual pickup and drop assistance connecting Aurangabad Airport (IXU) & regional hubs to hotels or monuments.",
    icon: PlaneTakeoff,
    link: "/airport-transfers",
  },
  {
    title: "Local City Travel",
    description: "Dedicated private cars for city errands, business meetings, shopping tours, and local monument sightseeing.",
    icon: Car,
    link: "/enquiry?tripType=Private%20Transportation",
  },
  {
    title: "Sightseeing Transportation",
    description: "Comfortable chauffeur-driven vehicles for full-day Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, and Daulatabad Fort tours.",
    icon: MapPin,
    link: "/tours",
  },
  {
    title: "Outstation Trips",
    description: "Multi-day outstation car rentals across Maharashtra covering Shirdi, Nashik, Pune, Mumbai, and coastal destinations.",
    icon: Navigation,
    link: "/enquiry?tripType=Private%20Transportation",
  },
  {
    title: "Intercity Travel",
    description: "Direct point-to-point intercity transportation driven by seasoned chauffeurs with thorough highway route experience.",
    icon: ShieldCheck,
    link: "/enquiry?tripType=Private%20Transportation",
  },
  {
    title: "Corporate Transportation",
    description: "Executive travel solutions for companies, management officers, corporate events, and visiting dignitaries.",
    icon: Building2,
    link: "/corporate-travel",
  },
  {
    title: "Customized Transportation",
    description: "Tailored vehicle arrangements for large families, wedding guests, or long-term multi-city tours.",
    icon: SlidersHorizontal,
    link: "/customized-trips",
  },
];

export default function TransportationPage() {

  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Car className="w-4 h-4" />
            <span>20+ Years Ground Mobility</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Private Transportation Across Maharashtra & Beyond
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Punctual, clean, chauffeur-driven private vehicles tailored around your schedule for local sightseeing, airport pickups, and outstation journeys.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRANSPORT_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0b132b] text-[#d4af37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0b132b] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b132b] hover:text-[#b8860b] transition-colors"
                    >
                      <span>Inquire Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={getWhatsAppUrl(`Hello Global Horizons Tours & Travels, I need ${item.title} service. Please provide a quote.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transportation Enquiry Section */}
          <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 shadow-2xl space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Quick Taxi Quote
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Book Your Private Vehicle
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2">
                Specify your travel dates, pickup location, and destination for a transparent quotation.
              </p>
            </div>

            <QuickEnquiryCard />
          </div>
        </div>
      </section>
    </div>
  );
}
