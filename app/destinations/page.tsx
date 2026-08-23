import { Metadata } from "next";
import Link from "next/link";
import { DESTINATIONS } from "@/src/data/destinations";
import { DestinationCard } from "@/src/components/destinations/DestinationCard";
import { MapPin, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Destinations | Ajanta Caves, Ellora Caves, Shirdi & Maharashtra Heritage",
  description:
    "Explore central Maharashtra's top destinations including UNESCO Ajanta & Ellora Caves, Daulatabad Fort, Bibi Ka Maqbara, and Shirdi Sai Baba Temple.",
};

export default function DestinationsPage() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I am inquiring about custom destinations in Maharashtra.");

  return (
    <div className="bg-[#faf8f5]">
      {/* Header Banner */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <MapPin className="w-4 h-4" />
            <span>Heritage Gateway</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Popular Destinations
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover Maharashtra&apos;s extraordinary rock-cut caves, impregnable fortresses, and sacred pilgrimage centers with private transportation and local route expertise.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          {/* Custom Destination Prompt */}
          <div className="bg-[#060b18] text-white rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Custom Destinations
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                Can&apos;t find your destination? Ask us about a customized trip.
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                We arrange outstation travel across Nashik, Pune, Mumbai, Mahabaleshwar, Konkan coast, and custom points across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/enquiry?tripType=Customized%20Trip"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs font-bold text-center transition-transform hover:scale-105"
              >
                Ask About My Destination
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
