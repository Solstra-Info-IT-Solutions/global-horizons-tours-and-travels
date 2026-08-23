import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, UserCheck, Car, Award, Compass, MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us | 20+ Years Experience in Maharashtra Travel & Transportation",
  description:
    "Learn about Global Horizons Tours & Travels, based in Chhatrapati Sambhajinagar (Aurangabad). 20+ years of providing reliable private transportation, Ajanta & Ellora tours, and customized travel services.",
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I would like to learn more about your services.");

  return (
    <div className="bg-[#faf8f5]">
      {/* Header Banner */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <ShieldCheck className="w-4 h-4" />
            <span>20+ Years Industry Legacy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            About Global Horizons Tours & Travels
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Your trusted local partner for private transportation, heritage cave tours, airport transfers, and customized travel experiences across Maharashtra.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Story & Positioning */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-[#b8860b] uppercase">
                Our Story & Commitment
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b]">
                Two Decades of Excellence in Travel & Transportation
              </h2>
              <div className="w-16 h-1 bg-[#d4af37] rounded-full" />

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Founded over 20 years ago in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, <strong>GLOBAL HORIZONS TOURS & TRAVELS</strong> has built an enduring reputation based on punctuality, transparent guidance, and deep local destination expertise.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We understand that every trip—whether a solemn pilgrimage to Shirdi, a historic excursion to the UNESCO World Heritage Ajanta & Ellora Caves, or an executive corporate transfer—demands complete reliability. That is why we focus on personalized service, clear communication, clean private vehicles, and chauffeurs who know every highway and landmark.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0b132b] text-[#d4af37]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#0b132b]">Safety & Comfort</h3>
                    <p className="text-xs text-slate-500">Maintained vehicles & courteous drivers</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0b132b] text-[#d4af37]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#0b132b]">100% Customized</h3>
                    <p className="text-xs text-slate-500">Flexible itineraries built around you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0b132b] text-white rounded-3xl p-8 border border-[#d4af37]/30 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 border-b border-[#1c2541] pb-4">
                <Award className="w-8 h-8 text-[#d4af37]" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Brand Positioning</h3>
                  <p className="text-xs text-[#d4af37]">Reliable + Experienced + Personal</p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Reliable transportation + personalized travel experiences + local expertise + customized itineraries.&rdquo;
              </blockquote>

              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  <span>Headquartered in Chhatrapati Sambhajinagar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#d4af37]" />
                  <span>Local, Outstation & Intercity Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Domestic & Foreign Tourist Assistance</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1c2541]">
                <Link
                  href="/enquiry"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#060b18] text-xs font-bold text-center block shadow-lg transition-transform hover:scale-105"
                >
                  Contact Our Travel Experts
                </Link>
              </div>
            </div>
          </div>

          {/* Customer Concerns Addressed */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b132b]">
                What Matters Most To Our Travelers
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                We address your core travel priorities with transparency and dedicated support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-[#faf8f5] border border-slate-200 space-y-2">
                <h3 className="font-serif text-base font-bold text-[#0b132b]">Transparent Pricing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No hidden surcharges. All quotes are itemized based on your specific route, vehicle, tolls, and duration.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf8f5] border border-slate-200 space-y-2">
                <h3 className="font-serif text-base font-bold text-[#0b132b]">Verified Drivers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Courteous, experienced chauffeurs who possess thorough knowledge of regional highways and local sightseeing routes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf8f5] border border-slate-200 space-y-2">
                <h3 className="font-serif text-base font-bold text-[#0b132b]">Itinerary Control</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You decide the start time, photo stops, meal preferences, and duration at each monument without rushing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf8f5] border border-slate-200 space-y-2">
                <h3 className="font-serif text-base font-bold text-[#0b132b]">Full Travel Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continuous on-call assistance throughout your trip for hotel advice, route updates, or schedule adjustments.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#060b18] text-white rounded-3xl p-8 text-center space-y-6 border border-[#1c2541]">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ready to Explore Maharashtra With Confidence?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Get in touch with Global Horizons Tours & Travels today to discuss your itinerary and receive a customized quotation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/enquiry"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#060b18] text-xs font-bold shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
