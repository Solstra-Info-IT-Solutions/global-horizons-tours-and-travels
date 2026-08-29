export default function OurStory() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-20 lg:py-20">

      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[1px] w-7 bg-[#e7b33d]" />

            <span className="text-[10px] uppercase tracking-[1.5px] text-[#dcae3c]">
              Our Story
            </span>
          </div>

          <h2 className="max-w-[350px] font-serif text-2xl font-bold leading-tight text-[#14596a] md:text-[27px]">
            Crafting Heritage Experiences
            <br />
            Since 2004
          </h2>

          <div className="mt-6 max-w-[510px] space-y-4 text-[12px] leading-[18px] text-[#626a6d]">

            <p>
              Global Horizons Tours & Travels is a professionally managed
              travel company based in Aurangabad/Sambhajinagar, Maharashtra,
              offering reliable travel solutions for individuals, families,
              groups, businesses, and organizations.
            </p>

            <p>
              Based in Aurangabad, we understand the needs of travelers from
              our region and the importance of reliable transportation when
              exploring destinations across Maharashtra and India.
            </p>

            <p>
              What began with a passion for travel and service is built around
              a larger ambition — to create a travel brand known for quality,
              transparency, comfort, and customer satisfaction.
            </p>

            <p>
              Today, we continue to grow with every journey, every destination,
              and every customer we serve.
            </p>

            <p>
              Our journey is growing — and we invite you to be part of it.
            </p>

          </div>

          {/* STATS */}
          <div className="mt-8 flex gap-12">

            <div>
              <p className="font-serif text-2xl text-[#e4b23c]">
                20+
              </p>

              <p className="text-[8px] uppercase tracking-wide text-gray-500">
                Years of Excellence
              </p>
            </div>

            <div>
              <p className="font-serif text-2xl text-[#e4b23c]">
                50k+
              </p>

              <p className="text-[8px] uppercase tracking-wide text-gray-500">
                Journeys Crafted
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-[400px]">

          <div className="rounded-[5px] bg-[#f1eee7] p-3">

            <img
              src="/image.png"
              alt="Travel experience"
              className="h-[430px] w-full rounded-[4px] object-cover"
            />

          </div>

          {/* Award */}
          <div className="absolute -bottom-5 -left-5 w-[100px] rounded-md bg-[#14596a] p-4 text-white shadow-lg">

            <div className="mb-2 text-[#e8b43e]">✥</div>

            <p className="text-[8px] text-white/70">
              Award Winning
            </p>

            <p className="mt-1 text-[9px]">
              Heritage Travel Guide
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}