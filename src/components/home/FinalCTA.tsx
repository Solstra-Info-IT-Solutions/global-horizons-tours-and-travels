import Link from "next/link";
import { MessageSquare, Phone, Send, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

export function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I am ready to plan my trip. Please connect me with a travel expert.");
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 94222 00000";

  return (
    <section className="py-16 sm:py-24 bg-[#060b18] text-white border-t border-[#1c2541] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
          <ShieldCheck className="w-4 h-4" />
          <span>20+ Years Local Travel Expertise</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Let&apos;s Plan Your Journey
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Tell us where you want to go, when you&apos;re traveling and what you need. We&apos;ll help you create a comfortable and personalized travel plan.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xl transition-transform hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/enquiry"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xl transition-transform hover:scale-105"
          >
            <Send className="w-4 h-4" />
            <span>Request a Quote</span>
          </Link>

          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1c2541] hover:bg-[#283559] text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Call Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
