const benefits = [
  "Multi-lingual expert guides",
  "Visa & documentation assistance",
  "24/7 dedicated helpline",
  "Currency & local customs briefing",
  "Secure, vetted transportation",
  "Dietary requirement management",
];

export default function LocalPartner() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-20">

      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-xl bg-white shadow-md">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <div className="h-[300px] md:h-auto">

            <img
              src="/image Side.png"
              alt="Local travel partner"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Content */}
          <div className="p-8 md:p-10">

            <p className="text-[9px] uppercase tracking-[1.5px] text-[#dfaf3a]">
              International Guests
            </p>

            <h2 className="mt-3 font-serif text-2xl font-bold text-[#14596a]">
              Your Trusted Local Partner
            </h2>

            <p className="mt-5 text-[11px] leading-[17px] text-gray-600">
              Navigating a new country requires more than a map; it requires a
              trusted guide. We specialize in providing a secure, culturally
              immersive, and frictionless experience for international
              visitors, ensuring you feel at home while exploring afar.
            </p>

            {/* Benefits */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2 text-[9px] text-gray-600"
                >
                  <span className="mt-[1px] text-[#e3b23d]">●</span>
                  <span>{benefit}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}