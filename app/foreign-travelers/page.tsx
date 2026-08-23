import { Metadata } from "next";
import { ForeignTravelersSection } from "@/src/components/home/ForeignTravelersSection";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";
import { Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Foreign Tourists Guide & Travel Assistance | Maharashtra Tours",
  description:
    "Specialized travel assistance, airport pickups, chauffeur-driven transportation, and Ajanta & Ellora cave tours for international visitors exploring India.",
};

export default function ForeignTravelersPage() {

  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Globe className="w-4 h-4" />
            <span>Welcome International Guests</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            International Tourist Assistance
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to India! Enjoy safe, respectful, and reliable private transportation, heritage cave tours, and dedicated on-ground coordination throughout Maharashtra.
          </p>
        </div>
      </section>

      {/* Main Highlights */}
      <ForeignTravelersSection />

      {/* Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 shadow-2xl space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                International Enquiry
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Plan My India Trip
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2">
                Let us know your arrival details, tour preferences, and flight schedule. We will prepare a complete quotation and itinerary.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1c2541]">
              <EnquiryForm defaultTripType="International Tourist" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
