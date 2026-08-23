import Link from "next/link";
import Image from "next/image";
import { TourPackage } from "@/src/types";
import { MapPin, Clock, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { getTourWhatsAppUrl } from "@/src/lib/whatsapp";

interface TourCardProps {
  tour: TourPackage;
}

export function TourCard({ tour }: TourCardProps) {
  const whatsappUrl = getTourWhatsAppUrl(tour.title);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
      {/* Image Header */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <Image
          src={tour.imageUrl}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/80 via-transparent to-transparent" />

        {tour.badge && (
          <div className="absolute top-3 left-3 bg-[#0b132b]/90 border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
            {tour.badge}
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 bg-[#060b18]/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            {tour.destination}
          </span>
          <span className="flex items-center gap-1 bg-[#060b18]/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            {tour.duration}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#0b132b] mb-2 group-hover:text-[#b8860b] transition-colors leading-snug">
            {tour.title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {tour.tagline}
          </p>

          <div className="space-y-1.5 mb-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>Chauffeur-Driven Private Vehicle Included</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              <span>100% Flexible & Customizable Itinerary</span>
            </div>
          </div>
        </div>

        {/* Pricing notice & CTAs */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="text-xs text-slate-500 italic">
            Pricing based on group size, dates & vehicle model
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/tours/${tour.slug}`}
              className="py-2.5 px-3 rounded-lg bg-[#0b132b] hover:bg-[#1c2541] text-white text-xs font-semibold text-center flex items-center justify-center gap-1 transition-colors"
            >
              <span>View Tour</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <Link
              href={`/enquiry?tour=${encodeURIComponent(tour.title)}`}
              className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs font-bold text-center flex items-center justify-center transition-transform hover:scale-[1.02]"
            >
              <span>Get Quote</span>
            </Link>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors border border-emerald-200"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ask Tour Itinerary on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
