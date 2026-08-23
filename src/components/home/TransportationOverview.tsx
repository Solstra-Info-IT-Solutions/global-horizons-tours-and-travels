import Link from "next/link";
import { Car, PlaneTakeoff, MapPin, Navigation, ShieldCheck, ArrowRight, Building2, SlidersHorizontal } from "lucide-react";

const TRANSPORT_TYPES = [
  {
    title: "Airport Transfers",
    description: "24/7 punctual pickup and drop assistance for arriving and departing flights at Aurangabad Airport & transit hubs.",
    icon: PlaneTakeoff,
    link: "/airport-transfers",
  },
  {
    title: "Local City Travel",
    description: "Chauffeur-driven cars for daily local errands, business meetings, monument visits, and shopping trips.",
    icon: Car,
    link: "/transportation",
  },
  {
    title: "Sightseeing Transportation",
    description: "Dedicated full-day private vehicles for Ajanta, Ellora, Daulatabad Fort, and Bibi Ka Maqbara excursions.",
    icon: MapPin,
    link: "/transportation",
  },
  {
    title: "Outstation Trips",
    description: "Multi-day outstation car rentals across Maharashtra covering Shirdi, Nashik, Pune, Mumbai, and beyond.",
    icon: Navigation,
    link: "/transportation",
  },
  {
    title: "Intercity Travel",
    description: "Direct point-to-point intercity travel with experienced drivers who know highway routes thoroughly.",
    icon: ShieldCheck,
    link: "/transportation",
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

export function TransportationOverview() {
  return (
    <section className="py-16 sm:py-24 bg-[#0b132b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase">
              Core Business Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              Private Transportation Across Maharashtra & Beyond
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] rounded-full mt-3 mb-4" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Transportation is at the heart of our service. With 20+ years of road experience, we ensure safe, clean, chauffeur-driven cars tailored to your schedule.
            </p>
          </div>

          <Link
            href="/transportation"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#060b18] text-xs font-bold shrink-0 transition-transform hover:scale-105"
          >
            <span>Explore All Transport Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TRANSPORT_TYPES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#060b18] border border-[#1c2541] hover:border-[#d4af37]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#1c2541] text-[#d4af37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1c2541]">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#d4af37] hover:text-white transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
