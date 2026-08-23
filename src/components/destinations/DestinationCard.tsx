import Link from "next/link";
import Image from "next/image";
import { Destination } from "@/src/types";
import { MapPin, ArrowRight, Compass } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      {/* Visual Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent opacity-85" />

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="flex items-center gap-1 font-serif font-bold text-base text-[#d4af37]">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            {destination.name}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#0b132b] mb-1.5 group-hover:text-[#b8860b] transition-colors">
            {destination.title}
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
            {destination.shortDescription}
          </p>

          {destination.distanceFromAurangabad && (
            <div className="text-[11px] text-slate-500 font-medium mb-4 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#b8860b]" />
              <span>{destination.distanceFromAurangabad}</span>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/destinations/${destination.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b132b] hover:text-[#b8860b] transition-colors"
          >
            <span>Explore Destination</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/enquiry?destination=${encodeURIComponent(destination.name)}`}
            className="text-[11px] font-semibold text-[#b8860b] hover:underline"
          >
            Ask Taxi Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
