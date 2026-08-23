import { Metadata } from "next";
import Link from "next/link";
import { FEATURED_TOURS } from "@/src/data/tours";
import { TourCard } from "@/src/components/tours/TourCard";
import { Compass, ShieldCheck, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tours & Packages | Ajanta, Ellora, Shirdi & Maharashtra Heritage",
  description:
    "Explore customized travel packages and private tours to Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, Daulatabad Fort, and Shirdi with Global Horizons Tours & Travels.",
};

export default function ToursPage() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I would like to inquire about your tour packages and customized itineraries.");

  return (
    <div className="bg-[#faf8f5]">
      {/* Header Banner */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Compass className="w-4 h-4" />
            <span>Curated Heritage Experiences</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Tours & Travel Packages
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover Maharashtra&apos;s celebrated monuments, sacred pilgrimage sites, and cultural heritage with private chauffeur-driven vehicles and flexible itineraries.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quote-based notice */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                <strong>Quote-Based Pricing:</strong> Package pricing is calculated transparently based on your specific travel dates, group size, vehicle choice, and itinerary requirements.
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask Price Quote</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_TOURS.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Custom Tour Banner */}
          <div className="bg-[#060b18] text-white rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="font-serif text-2xl font-bold text-[#d4af37]">
                Don&apos;t see your exact tour requirement?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                We craft personalized itineraries from scratch based on your starting location, travel dates, and preferred destinations across India.
              </p>
            </div>

            <Link
              href="/customized-trips"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs font-bold shrink-0 transition-transform hover:scale-105"
            >
              Design Custom Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
