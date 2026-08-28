export default function WhatWeDo() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-20">

      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mb-8">

          <p className="text-[9px] uppercase tracking-[1.5px] text-[#e1b33c]">
            Comprehensive Expertise
          </p>

          <h2 className="mt-2 font-serif text-2xl font-bold text-[#14596a]">
            What We Do
          </h2>

          <p className="mt-3 max-w-[560px] text-[11px] leading-[17px] text-gray-600">
            From initial conception to the final return flight, we manage every
            facet of your journey with precision and care.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

          {/* Private Transportation */}
          <div className="relative min-h-[180px] overflow-hidden rounded-[4px] md:col-span-2">

            <img
              src="/whatwedo1.png"
              alt="Private transportation"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#064b5b]/75" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">

              <span className="mb-2 w-fit bg-white/10 px-2 py-1 text-[7px] uppercase">
                Logistics
              </span>

              <h3 className="font-serif text-lg font-bold">
                Private Transportation
              </h3>

              <p className="mt-2 max-w-[500px] text-[10px] leading-[15px] text-white/80">
                Executive transportation, chauffeur-driven cultural tours,
                and seamless point-to-point logistics tailored to your
                schedule.
              </p>

            </div>

          </div>

          {/* Business Travel */}
          <div className="min-h-[180px] rounded-[4px] bg-[#14596a] p-6 text-white">

            <div className="mb-10 flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
              ◎
            </div>

            <h3 className="font-serif text-lg font-bold">
              Business Travel
            </h3>

            <p className="mt-2 text-[10px] leading-[15px] text-white/70">
              Exclusive access to heritage sites, private museum viewings,
              and expert-led architectural walking tours.
            </p>

          </div>

          {/* Corporate Travel */}
          <div className="min-h-[170px] rounded-[4px] bg-[#efede8] p-6">

            <div className="mb-8 flex h-7 w-7 items-center justify-center rounded-md bg-white text-gray-600">
              ▣
            </div>

            <h3 className="font-serif text-lg font-bold text-[#14596a]">
              Corporate Travel
            </h3>

            <p className="mt-2 text-[10px] leading-[15px] text-gray-600">
              Streamlined travel management for executives, incentive trips,
              and large-scale corporate retreats with dedicated account
              management.
            </p>

          </div>

          {/* Meeting & Events */}
          <div className="relative min-h-[170px] overflow-hidden rounded-[4px] md:col-span-2">

            <img
              src="/whatwedo.png"
              alt="Meeting and events"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#064b5b]/70" />

            <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">

              <span className="mb-2 w-fit bg-white/10 px-2 py-1 text-[7px] uppercase">
                Hospitality
              </span>

              <h3 className="font-serif text-lg font-bold">
                Meeting & Events
              </h3>

              <p className="mt-2 max-w-[500px] text-[10px] leading-[15px] text-white/80">
                Hand-selected portfolio of heritage hotels, boutique stays,
                and fine-star reservations ensuring your rest is as remarkable
                as your exploration.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}