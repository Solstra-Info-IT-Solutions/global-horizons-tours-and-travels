import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FEATURED_TOURS } from "@/src/data/tours";
import { Clock, ShieldCheck, CheckCircle2, XCircle, MessageSquare, Compass } from "lucide-react";
import { getTourWhatsAppUrl } from "@/src/lib/whatsapp";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";

interface TourDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = FEATURED_TOURS.find((t) => t.slug === slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: `${tour.title} | Private Tour Package`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tour = FEATURED_TOURS.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  const whatsappUrl = getTourWhatsAppUrl(tour.title);

  return (
    <div className="bg-[#faf8f5]">
      {/* Tour Banner */}
      <section className="relative bg-[#060b18] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c2541] border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>{tour.destination}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            {tour.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {tour.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
            <div className="flex items-center gap-1.5 bg-[#1c2541] px-3 py-1.5 rounded-lg border border-slate-700">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>Duration: {tour.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1c2541] px-3 py-1.5 rounded-lg border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Chauffeur-Driven Private Vehicle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10">
              {/* Feature Image */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src={tour.imageUrl}
                  alt={tour.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#0b132b]">
                  Tour Experience Overview
                </h2>
                <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
                <p className="text-slate-700 text-sm leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
                <h2 className="font-serif text-2xl font-bold text-[#0b132b]">
                  Tour Highlights & Key Stops
                </h2>
                <div className="w-12 h-1 bg-[#d4af37] rounded-full" />
                <ul className="space-y-3">
                  {tour.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
                  <h3 className="font-serif text-base font-bold text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Inclusions</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
                  <h3 className="font-serif text-base font-bold text-rose-800 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Exclusions</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>•</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Quick Quote Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0b132b] text-white rounded-2xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-2xl sticky top-28 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Customized Itinerary Quote
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    Request Quote for {tour.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Pricing is calculated transparently based on your travel dates, vehicle preference, and group size.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1c2541]">
                  <EnquiryForm compact={true} defaultDestination={tour.title} defaultTripType="Sightseeing" />
                </div>

                <div className="pt-4 border-t border-[#1c2541]">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire This Tour on WhatsApp</span>
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
