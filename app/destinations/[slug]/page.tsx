import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DESTINATIONS } from "@/src/data/destinations";
import { MapPin, Compass, CheckCircle2, MessageSquare, ShieldCheck } from "lucide-react";
import { getDestinationWhatsAppUrl } from "@/src/lib/whatsapp";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";

interface DestinationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DestinationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);
  if (!destination) return { title: "Destination Not Found" };
  return {
    title: `${destination.name} | Travel Guide & Transportation`,
    description: destination.shortDescription,
  };
}

export default async function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const whatsappUrl = getDestinationWhatsAppUrl(destination.name);

  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="relative bg-[#060b18] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c2541] border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.name}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            {destination.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {destination.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
            {destination.distanceFromAurangabad && (
              <div className="flex items-center gap-1.5 bg-[#1c2541] px-3 py-1.5 rounded-lg border border-slate-700">
                <Compass className="w-4 h-4 text-[#d4af37]" />
                <span>Distance: {destination.distanceFromAurangabad}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 bg-[#1c2541] px-3 py-1.5 rounded-lg border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Chauffeur-Driven Private Vehicle Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-10">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src={destination.imageUrl}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#0b132b]">
                  About {destination.name}
                </h2>
                <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
                <p className="text-slate-700 text-sm leading-relaxed">
                  {destination.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#0b132b]">
                  Must-See Highlights & Key Spots
                </h2>
                <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
                <ul className="space-y-3">
                  {destination.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {destination.bestTimeToVisit && (
                <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm space-y-1">
                  <h3 className="font-serif font-bold text-amber-950">Best Time To Visit</h3>
                  <p>{destination.bestTimeToVisit}</p>
                </div>
              )}
            </div>

            {/* Right Sidebar: Inquiry Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0b132b] text-white rounded-2xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl sticky top-28 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Private Transportation Quote
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    Book Taxi to {destination.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Get an instant customized quote for private sedan, SUV, or group transport to {destination.name}.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1c2541]">
                  <EnquiryForm compact={true} defaultDestination={destination.name} defaultTripType="Sightseeing" />
                </div>

                <div className="pt-4 border-t border-[#1c2541]">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire Destination on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
