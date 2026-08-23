import { Hero } from "@/src/components/home/Hero";
import { QuickEnquiryCard } from "@/src/components/home/QuickEnquiryCard";
import { WhyChooseUs } from "@/src/components/home/WhyChooseUs";
import { ServicesSection } from "@/src/components/home/ServicesSection";
import { PopularTours } from "@/src/components/home/PopularTours";
import { AjantaElloraFeature } from "@/src/components/home/AjantaElloraFeature";
import { DestinationsGrid } from "@/src/components/home/DestinationsGrid";
import { CustomizedTripsSection } from "@/src/components/home/CustomizedTripsSection";
import { HowItWorks } from "@/src/components/home/HowItWorks";
import { TransportationOverview } from "@/src/components/home/TransportationOverview";
import { ForeignTravelersSection } from "@/src/components/home/ForeignTravelersSection";
import { CorporateTravelSection } from "@/src/components/home/CorporateTravelSection";
import { TestimonialSection } from "@/src/components/home/TestimonialSection";
import { FAQAccordion } from "@/src/components/common/FAQAccordion";
import { FinalCTA } from "@/src/components/home/FinalCTA";
import { FAQS } from "@/src/data/faqs";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO */}
      <Hero />

      {/* 2. QUICK ENQUIRY */}
      <QuickEnquiryCard />

      {/* 3. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 4. CORE SERVICES */}
      <ServicesSection />

      {/* 5. POPULAR TOURS */}
      <PopularTours />

      {/* 6. AJANTA & ELLORA FEATURE */}
      <AjantaElloraFeature />

      {/* 7. POPULAR DESTINATIONS */}
      <DestinationsGrid />

      {/* 8. CUSTOMIZED TRIPS */}
      <CustomizedTripsSection />

      {/* 9. HOW IT WORKS */}
      <HowItWorks />

      {/* 10. TRANSPORTATION OVERVIEW */}
      <TransportationOverview />

      {/* 11. FOREIGN TRAVELERS */}
      <ForeignTravelersSection />

      {/* 12. CORPORATE TRAVEL */}
      <CorporateTravelSection />

      {/* 13. TESTIMONIALS */}
      <TestimonialSection />

      {/* 14. FAQ SECTION */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#b8860b] uppercase">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b] mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Everything you need to know about our private transportation, tour itineraries, customized quotes, and booking process.
            </p>
          </div>

          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
