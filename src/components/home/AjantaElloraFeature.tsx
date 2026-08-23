import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

const AJANTA_ELLORA_SPOTS = [
  "Ajanta Caves (UNESCO World Heritage Buddhist murals)",
  "Ellora Caves (Kailasa Temple - Monolithic rock marvel)",
  "Daulatabad Fort (Medieval impregnable hill fortress)",
  "Bibi Ka Maqbara (17th-century Mughal heritage)",
  "Chhatrapati Sambhajinagar (Gateway & historic city)",
];

export function AjantaElloraFeature() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I am interested in an Ajanta & Ellora tour. Please share the itinerary and quotation.");

  return (
    <section className="py-16 sm:py-24 bg-[#060b18] text-white relative overflow-hidden border-y border-[#1c2541]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage / Split-Image */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&q=80&w=800"
                    alt="Ajanta Caves Rock Carvings"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs">
                    <span className="font-serif font-bold text-[#d4af37] block">Ajanta Caves</span>
                    <span className="text-slate-300 text-[10px]">30 Rock-Cut Cave Monasteries</span>
                  </div>
                </div>

                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
                    alt="Bibi Ka Maqbara"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 text-xs">
                    <span className="font-serif font-bold text-[#d4af37] block">Bibi Ka Maqbara</span>
                    <span className="text-slate-300 text-[10px]">Taj of the Deccan</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1609837691657-3f305fcf56fa?auto=format&fit=crop&q=80&w=800"
                    alt="Daulatabad Fort"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 text-xs">
                    <span className="font-serif font-bold text-[#d4af37] block">Daulatabad Fort</span>
                    <span className="text-slate-300 text-[10px]">Medieval Hill Fortress</span>
                  </div>
                </div>

                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800"
                    alt="Ellora Caves Kailasa Temple"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs">
                    <span className="font-serif font-bold text-[#d4af37] block">Ellora Caves</span>
                    <span className="text-slate-300 text-[10px]">Kailasa Temple Monolith</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Experience Tag */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b132b]/95 border border-[#d4af37] p-3.5 rounded-2xl shadow-2xl backdrop-blur-md text-center max-w-[200px] hidden sm:block">
              <ShieldCheck className="w-6 h-6 text-[#d4af37] mx-auto mb-1" />
              <span className="text-[11px] font-bold text-white block">20+ Years Ground Expertise</span>
              <span className="text-[9px] text-slate-300">Local Driver & Route Guidance</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2541] border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>UNESCO Heritage Spotlight</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Discover Ajanta & Ellora
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience two of Maharashtra&apos;s most remarkable heritage destinations with private transportation and a flexible itinerary designed around your travel plans.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Key Circuit Destinations Included:
              </h3>
              <ul className="space-y-2.5">
                {AJANTA_ELLORA_SPOTS.map((spot, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{spot}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#1c2541] flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/enquiry?tour=Ajanta%20%26%20Ellora%20Heritage%20Experience"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs sm:text-sm font-bold text-center shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Plan My Ajanta & Ellora Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get a Customized Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
