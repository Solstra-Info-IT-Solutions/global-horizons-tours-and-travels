import Link from "next/link";
import { SERVICES } from "@/src/data/services";
import { Car, PlaneTakeoff, Compass, SlidersHorizontal, MapPin, Globe, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  PlaneTakeoff,
  Compass,
  SlidersHorizontal,
  MapPin,
  Globe,
  Briefcase,
};

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0b132b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase">
            Comprehensive Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Travel Services Designed Around You
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-4" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From seamless airport pickups to custom multi-day heritage circuits, explore services engineered for comfort and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Car;
            return (
              <div
                key={service.id}
                className="bg-[#060b18] border border-[#1c2541] hover:border-[#d4af37]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1c2541] text-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#1c2541] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1c2541] flex items-center justify-between gap-3">
                  <Link
                    href={`/enquiry?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] hover:text-white transition-colors"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello Global Horizons Tours & Travels, I am interested in your ${service.title} service. Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
