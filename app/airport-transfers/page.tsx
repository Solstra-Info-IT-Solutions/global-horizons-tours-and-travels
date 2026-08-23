import { Metadata } from "next";
import { PlaneTakeoff, ShieldCheck, Clock, MapPin, CheckCircle2, MessageSquare } from "lucide-react";
import { getAirportTransferWhatsAppUrl } from "@/src/lib/whatsapp";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";
import { FAQAccordion } from "@/src/components/common/FAQAccordion";
import { FAQS } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Airport Transfers | Chhatrapati Sambhajinagar (Aurangabad) Airport Taxi",
  description:
    "Reliable 24/7 airport pickup and drop services for Chhatrapati Sambhajinagar Airport (IXU). Door-to-door private transfers, flight tracking, and courteous drivers.",
};

const AIRPORT_FAQS = FAQS.filter((f) => f.category === "transport" || f.id === "faq-3");

export default function AirportTransfersPage() {
  const whatsappUrl = getAirportTransferWhatsAppUrl();

  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <PlaneTakeoff className="w-4 h-4" />
            <span>24/7 Airport Mobility</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Chhatrapati Sambhajinagar Airport Transfers
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hassle-free private airport pickup and drop assistance connecting Aurangabad Airport (IXU) to your hotel, heritage cave sites, or outstation destinations.
          </p>
        </div>
      </section>

      {/* Why Choose Airport Transfers */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#d4af37] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg font-bold text-[#0b132b]">Flight Arrival Tracking</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We monitor your flight status in real time so your chauffeur is ready at the terminal exit even if your flight is delayed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#d4af37] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg font-bold text-[#0b132b]">Door-to-Door Convenience</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Direct private vehicle transfer with luggage assistance from airport arrival gates straight to your hotel or monument schedule.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-[#d4af37] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-lg font-bold text-[#0b132b]">Transparent Fixed Quotes</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Clear, upfront pricing with all fuel, parking, and airport toll charges included. No surprise surge charges.
              </p>
            </div>
          </div>

          {/* Form & WhatsApp Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 bg-[#0b132b] text-white rounded-3xl p-8 sm:p-10 border border-[#d4af37]/30 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  Airport Transfer Booking
                </span>
                <h2 className="font-serif text-2xl font-bold text-white mt-1">
                  Request Airport Pickup or Drop Quote
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Fill in your flight details, pickup time, and destination for a quick quotation.
                </p>
              </div>

              <EnquiryForm defaultTripType="Airport Transfer" defaultDestination="Chhatrapati Sambhajinagar Airport (IXU)" />
            </div>

            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0b132b]">
                Need Immediate Airport Pickup?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For urgent airport pickups or last-minute flight schedule changes, message our travel desk directly on WhatsApp.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Airport Desk</span>
              </a>

              <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Serving Aurangabad IXU Airport</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Connecting Shirdi, Pune, Nashik & Ajanta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sedan, SUV & Group Tempo Travelers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Airport FAQs */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-[#0b132b]">
                Airport Transfer FAQs
              </h2>
            </div>
            <FAQAccordion items={AIRPORT_FAQS} />
          </div>
        </div>
      </section>
    </div>
  );
}
