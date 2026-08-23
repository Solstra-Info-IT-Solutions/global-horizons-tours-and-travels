import Link from "next/link";
import { FEATURED_TOURS } from "@/src/data/tours";
import { TourCard } from "@/src/components/tours/TourCard";
import { ArrowRight, Compass } from "lucide-react";

export function PopularTours() {
  return (
    <section className="py-16 sm:py-24 bg-[#f4efea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#b8860b] uppercase">
              Handcrafted Itineraries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b] mt-2">
              Popular Experiences
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] rounded-full mt-3" />
          </div>

          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0b132b] hover:text-[#b8860b] transition-colors group"
          >
            <span>View All Tour Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_TOURS.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#0b132b] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#d4af37]/30 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-[#1c2541] text-[#d4af37] hidden sm:block">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#d4af37]">
                Looking for a unique itinerary?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                We design fully customized private travel plans based on your specific dates and preferences.
              </p>
            </div>
          </div>

          <Link
            href="/customized-trips"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs font-bold shrink-0 transition-transform hover:scale-105"
          >
            Create My Custom Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
