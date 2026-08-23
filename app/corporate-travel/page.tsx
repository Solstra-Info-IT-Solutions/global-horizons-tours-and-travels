import { Metadata } from "next";
import { CorporateTravelSection } from "@/src/components/home/CorporateTravelSection";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Travel & Executive Mobility | Chhatrapati Sambhajinagar",
  description:
    "Professional corporate transportation, executive airport transfers, industrial visits, intercity corporate cars, and priority billing for corporate clients.",
};

export default function CorporateTravelPage() {
  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Briefcase className="w-4 h-4" />
            <span>Corporate & Executive Travel</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Professional Corporate Transportation
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Punctual, discreet executive transportation for companies, management officers, corporate guests, business conferences, and industrial plant visits.
          </p>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <CorporateTravelSection />

      {/* Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 shadow-2xl space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Corporate Desk
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Corporate Travel Enquiry
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2">
                Submit your executive transport schedule or corporate requirements for priority account handling and quotation.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1c2541]">
              <EnquiryForm defaultTripType="Corporate Travel" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
