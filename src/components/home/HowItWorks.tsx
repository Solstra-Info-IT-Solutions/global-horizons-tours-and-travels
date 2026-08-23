import { Send, MessageCircle, FileText, CheckCircle2, Compass } from "lucide-react";

const TIMELINE_STEPS = [
  {
    num: "01",
    icon: Send,
    title: "Share Your Requirements",
    description: "Submit travel dates, number of travelers, preferred destinations and transportation needs via form, WhatsApp or phone.",
  },
  {
    num: "02",
    icon: MessageCircle,
    title: "Discuss Your Trip",
    description: "We review your specific preferences, vehicle choices, timing, and budget considerations in direct conversation.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Receive Your Customized Quote",
    description: "We craft and present a suitable itinerary and transparent, itemized quote based on your exact details.",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "Confirm Your Journey",
    description: "Once you approve the itinerary and price, your reservation is confirmed and vehicle/driver is assigned.",
  },
  {
    num: "05",
    icon: Compass,
    title: "Travel With Confidence",
    description: "Enjoy clean private transportation, courteous driver support, and continuous local assistance throughout your trip.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#b8860b] uppercase">
            Simple & Transparent Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b] mt-2 mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From your initial enquiry to your final journey drop-off, our process is designed for clarity, punctuality, and complete peace of mind.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {TIMELINE_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between hover-lift group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl font-black text-[#d4af37]">
                        {item.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0b132b] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-[#d4af37]" />
                      </div>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#0b132b] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
