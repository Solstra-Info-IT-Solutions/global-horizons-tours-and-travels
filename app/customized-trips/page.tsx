import { Metadata } from "next";
import { SlidersHorizontal } from "lucide-react";
import { CustomizedTripsSection } from "@/src/components/home/CustomizedTripsSection";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";

export const metadata: Metadata = {
  title: "Customized Trips & Tailored Itineraries | Maharashtra Travel",
  description:
    "Plan a personalized Maharashtra travel itinerary tailored to your schedule, budget, group size, and destination preferences with Global Horizons Tours & Travels.",
};

export default function CustomizedTripsPage() {

  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Tailored Travel Planning</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Customized Trips & Itineraries
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Create your dream trip to Ajanta, Ellora, Shirdi, and beyond. We design personalized private itineraries crafted specifically for your group and schedule.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <CustomizedTripsSection />

      {/* Custom Trip Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 shadow-2xl space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Start Custom Planning
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Tell Us Your Custom Travel Plans
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2">
                Provide your travel dates, preferred destinations, and group details. Our travel experts will create a custom itinerary & quote.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1c2541]">
              <EnquiryForm defaultTripType="Customized Trip" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
