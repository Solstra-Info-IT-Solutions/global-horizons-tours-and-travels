import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";
import { Compass } from "lucide-react";

export function QuickEnquiryCard() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-[#0b132b] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-[#1c2541] text-[#d4af37]">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
              Planning a Trip to Maharashtra?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Tell us your travel requirements and we&apos;ll help you plan the right itinerary, transportation and services.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-[#1c2541] pt-6">
          <EnquiryForm compact={false} />
        </div>
      </div>
    </section>
  );
}
