import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getCustomTripWhatsAppUrl } from "@/src/lib/whatsapp";

const CUSTOM_TRIP_STEPS = [
  {
    step: "01",
    title: "Tell Us Your Plans",
    description: "Share your travel dates, group size, desired locations, and travel preferences with our team.",
  },
  {
    step: "02",
    title: "We Understand Your Requirements",
    description: "We evaluate your pace, special requirements (senior citizens, luggage, flight times) and preferred style.",
  },
  {
    step: "03",
    title: "We Create Your Itinerary & Quote",
    description: "Receive a personalized day-by-day travel plan and transparent vehicle quotation with zero hidden fees.",
  },
  {
    step: "04",
    title: "You Confirm & We Arrange Your Journey",
    description: "Once satisfied with the route and price, confirm your trip and enjoy dedicated vehicle and driver support.",
  },
];

export function CustomizedTripsSection() {
  const whatsappUrl = getCustomTripWhatsAppUrl();

  return (
    <section className="py-16 sm:py-24 bg-[#0b132b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#d4af37] uppercase">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Your Journey, Your Way
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-6" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every traveler has different interests, schedules and budgets. Tell us where you want to go, when you&apos;re traveling and what kind of experience you&apos;re looking for. We&apos;ll help you create a personalized itinerary.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CUSTOM_TRIP_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#060b18] border border-[#1c2541] hover:border-[#d4af37]/50 p-6 rounded-2xl relative transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="font-serif text-4xl font-extrabold text-[#d4af37]/30 group-hover:text-[#d4af37] transition-colors mb-4">
                {item.step}
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/enquiry?tripType=Customized%20Trip"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs sm:text-sm font-bold text-center shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Create My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Custom Plan on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
