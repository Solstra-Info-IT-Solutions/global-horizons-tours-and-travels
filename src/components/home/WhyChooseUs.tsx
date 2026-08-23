import { ShieldCheck, UserCheck, Car, SlidersHorizontal, MapPin, Globe } from "lucide-react";

const WHY_US_ITEMS = [
  {
    icon: ShieldCheck,
    title: "20+ Years of Experience",
    description: "Two decades of experience in the travel and transportation industry operating from Chhatrapati Sambhajinagar.",
  },
  {
    icon: UserCheck,
    title: "Personalized Service",
    description: "We take time to understand your unique travel preferences and schedule before suggesting your itinerary.",
  },
  {
    icon: Car,
    title: "Reliable Transportation",
    description: "Clean, punctual, and safe private chauffeur-driven vehicles planned seamlessly around your destinations.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Trips",
    description: "Flexible day-by-day itineraries tailored to your travel dates, group size, personal interests, and budget.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep local destination knowledge to help domestic and global travelers explore Maharashtra comfortably.",
  },
  {
    icon: Globe,
    title: "International Traveler Support",
    description: "Specialized assistance for international visitors, including airport welcome, driver support, and foreign exchange guidance.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#b8860b] uppercase">
            Built On Trust & Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b] mt-2 mb-4">
            Why Travel With Global Horizons?
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Combining two decades of local road expertise with warm hospitality and dedicated travel assistance across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_US_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0b132b] text-[#d4af37] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0b132b] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-[#b8860b]">
                  <span>Global Horizons Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
