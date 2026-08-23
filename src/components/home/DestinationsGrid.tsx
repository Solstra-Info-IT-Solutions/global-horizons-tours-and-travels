import Link from "next/link";
import { DESTINATIONS } from "@/src/data/destinations";
import { DestinationCard } from "@/src/components/destinations/DestinationCard";
import { ArrowRight, MapPin } from "lucide-react";

export function DestinationsGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#b8860b] uppercase">
              Explore Central Maharashtra
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b] mt-2">
              Popular Destinations
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] rounded-full mt-3" />
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0b132b] hover:text-[#b8860b] transition-colors group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}

          {/* Custom Destinations Card */}
          <div className="bg-[#0b132b] text-white rounded-2xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-xl flex flex-col justify-between hover-lift">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1c2541] text-[#d4af37] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Custom & Outstation Destinations
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Planning to visit Nashik, Pune, Mumbai, Mahabaleshwar, or offbeat spots in Maharashtra? We arrange customized private transportation anywhere you wish to explore.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1c2541]">
              <Link
                href="/enquiry?tripType=Customized%20Trip"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs font-bold text-center block transition-transform hover:scale-105"
              >
                Inquire About Custom Destination
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
