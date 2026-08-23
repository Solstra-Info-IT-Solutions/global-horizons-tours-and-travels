import { Metadata } from "next";
import { ShieldCheck, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";

export const metadata: Metadata = {
  title: "Enquire Now & Get Customized Travel Quote",
  description:
    "Request a customized travel quotation for Ajanta & Ellora tours, private taxi services, airport transfers, and Maharashtra travel packages.",
};

export default function DedicatedEnquiryPage() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I am on your enquiry page and would like to request a quotation.");

  return (
    <div className="bg-[#faf8f5] py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b132b] text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>20+ Years Trusted Industry Service</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0b132b] tracking-tight">
            Request Your Customized Quote
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tell us about your trip dates, group size, and destination preferences. Our local travel team will respond promptly with a personalized itinerary and clear quotation.
          </p>
        </div>

        <div className="bg-[#0b132b] text-white rounded-3xl p-6 sm:p-10 border border-[#d4af37]/30 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-[#1c2541] pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Trip Quotation Form
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Or WhatsApp Us Directly</span>
            </a>
          </div>

          <EnquiryForm compact={false} />
        </div>
      </div>
    </div>
  );
}
