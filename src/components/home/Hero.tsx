import Link from "next/link";
import { MessageSquare, ShieldCheck, ArrowRight, Compass, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I would like to enquire about a travel package.");

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#060b18] overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&q=80&w=1920')`,
        }}
      />
      {/* Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b132b]/80 border border-[#d4af37]/40 text-[#d4af37] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg animate-in fade-in slide-in-from-bottom-3">
          <ShieldCheck className="w-4 h-4" />
          <span>20+ Years of Travel Experience</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight mb-4 drop-shadow-md">
          Explore Maharashtra With Confidence
        </h1>

        {/* Sub-headline */}
        <p className="font-serif text-lg sm:text-xl lg:text-2xl text-[#d4af37] font-medium max-w-3xl mb-4">
          Reliable Transportation. Personalized Journeys. Local Expertise.
        </p>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
          Discover Ajanta, Ellora, Shirdi, Daulatabad and beyond with experienced local travel assistance and customized transportation based in Chhatrapati Sambhajinagar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-sm font-bold shadow-xl transition-all hover:scale-105"
          >
            <span>Plan Your Trip</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-xl transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/tours"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1c2541]/80 hover:bg-[#1c2541] border border-slate-600 text-white text-sm font-medium backdrop-blur-sm transition-all hover:scale-105"
          >
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Tours</span>
          </Link>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300 border-t border-slate-700/50 pt-8 w-full max-w-4xl">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>Ajanta & Ellora Experts</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Chauffeur-Driven Cars</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>Customized Itineraries</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Instant Quote Assistance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
