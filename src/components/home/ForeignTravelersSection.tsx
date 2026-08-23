import Link from "next/link";
import { Globe, PlaneTakeoff, ShieldCheck, UserCheck, MessageSquare, ArrowRight, DollarSign } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

const FOREIGN_SERVICES = [
  { icon: PlaneTakeoff, text: "24/7 Airport pickup & flight tracking" },
  { icon: ShieldCheck, text: "Clean, safe, private chauffeur-driven vehicles" },
  { icon: Globe, text: "English-speaking driver assistance & route guidance" },
  { icon: UserCheck, text: "Customized heritage sightseeing itineraries" },
  { icon: DollarSign, text: "Foreign exchange guidance & local travel support" },
];

export function ForeignTravelersSection() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I am an international traveler planning to visit India/Maharashtra. Please help me plan my trip.");

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>International Tourist Support</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Traveling to India? Let Us Help You Explore Maharashtra.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                From airport transfers to heritage sightseeing and customized journeys, we provide personalized travel assistance for international visitors exploring Maharashtra and other destinations in India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {FOREIGN_SERVICES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="p-1.5 rounded-lg bg-[#1c2541] text-[#d4af37] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/enquiry?tripType=International%20Tourist"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs sm:text-sm font-bold text-center shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Plan My India Trip</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Travel Coordinator</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center p-6 bg-[#060b18] rounded-2xl border border-[#1c2541] text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1c2541] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Globe className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Global Customer Service
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                20+ years of hosting travelers from Europe, Americas, Asia, and Oceania with care and authentic local guidance.
              </p>
              <div className="text-[11px] text-[#d4af37] font-semibold">
                Fluent Driver Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
