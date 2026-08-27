import {
  ArrowRight,
  MessageSquare,
  BadgeCheck,
  Car,
  Map,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[735px] overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Container.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[735px] items-center justify-center px-6">
          <div className="mx-auto w-full max-w-5xl text-center text-white">

            {/* Experience Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/20 px-5 py-3 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#f3bd4e]" />

              <span className="font-serif text-sm font-bold tracking-[2px]">
                20+ YEARS OF TRAVEL EXPERIENCE
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-2xl font-bold leading-tight md:text-3xl">
              Exceptional Journeys,
              <br />

              <span className="italic text-[#e5b64d]">
                Endless Horizons.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-6 text-gray-100 md:text-base">
              Discover India with comfort, confident and convenience. At
              <br className="hidden md:block" />

              Global Horizons Tours & Travels, we create memorable journeys
              through carefully planned tours,
              <br className="hidden lg:block" />

              comfortable transportations and personalised travel services.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              {/* Plan Your Trip */}
              <a
                href="#contact"
                className="group flex h-[58px] min-w-[214px] items-center justify-center gap-2 bg-[#b9471e] px-7 font-serif text-sm font-bold tracking-[1px] text-white transition hover:bg-[#963714]"
              >
                PLAN YOUR TRIP

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[58px] min-w-[200px] items-center justify-center gap-2 border border-white/60 bg-white/10 px-7 font-serif text-sm font-bold tracking-[1px] text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
              >
                <MessageSquare size={17} />

                WHATSAPP US
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE BAR ================= */}
      <section className="bg-[#145a6b]">
        <div className="mx-auto max-w-[1170px] px-6">

          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* Feature 1 */}
            <div className="flex items-center gap-6 border-b border-white/20 py-8 md:border-b-0 md:border-r md:pr-8">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#286b79]">
                <BadgeCheck
                  size={31}
                  strokeWidth={1.8}
                  className="text-[#f1bd4e]"
                />
              </div>

              <div>
                <p className="font-serif text-[15px] font-bold text-[#e8b84c]">
                  20+ Years
                </p>

                <p className="mt-2 text-[14px] tracking-[0.5px] text-gray-200">
                  HERITAGE EXPERIENCE
                </p>
              </div>

            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-6 border-b border-white/20 py-8 md:border-b-0 md:border-r md:px-8">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#286b79]">
                <Car
                  size={30}
                  strokeWidth={1.8}
                  className="text-[#f1bd4e]"
                />
              </div>

              <div>
                <p className="font-serif text-[15px] font-bold text-[#e8b84c]">
                  Private Transport
                </p>

                <p className="mt-2 text-[14px] tracking-[0.5px] text-gray-200">
                  LUXURY FLEET
                </p>
              </div>

            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-6 py-8 md:pl-8">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#286b79]">
                <Map
                  size={31}
                  strokeWidth={1.8}
                  className="text-[#f1bd4e]"
                />
              </div>

              <div>
                <p className="font-serif text-[15px] font-bold text-[#e8b84c]">
                  Custom Journeys
                </p>

                <p className="mt-2 text-[14px] tracking-[0.5px] text-gray-200">
                  TAILORED ITINERARIES
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}