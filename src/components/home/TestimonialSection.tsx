import { MOCK_TESTIMONIALS } from "@/src/data/testimonials";
import { Star, AlertCircle, Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#b8860b] uppercase">
            Client Experience Structure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b] mt-2 mb-4">
            Customer Feedback Module
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-6" />

          {/* Honest Transparent Disclaimer Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-medium text-left">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Note:</strong> Customer reviews will be dynamically populated from your verified database or CMS. Below are preview template cards.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {MOCK_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col justify-between relative hover-lift"
            >
              <div>
                <Quote className="w-8 h-8 text-[#d4af37]/40 mb-3" />

                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#0b132b]">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-slate-500">{item.location}</p>
                </div>
                <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold">
                  {item.tripType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
