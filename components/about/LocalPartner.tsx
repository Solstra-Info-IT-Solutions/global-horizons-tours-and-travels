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
    <section className="bg-[#faf9f6] px-4 py-12 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1230px] overflow-hidden rounded-xl bg-white shadow-[0_10px_35px_rgba(0,0,0,0.12)]">
        
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* IMAGE */}
          <div className="h-[330px] sm:h-[400px] md:h-[500px] lg:h-[575px]">
            <img
              src="/image Side.png"
              alt="International guests exploring"
              className="h-full w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center px-7 py-10 sm:px-10 md:px-12 lg:px-16">
            
            {/* Small Heading */}
            <p className="text-[11px] font-medium uppercase tracking-[1.8px] text-[#e2ad42]">
              International Guests
            </p>

            {/* Main Heading */}
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#14596a] sm:text-4xl">
              Your Trusted Local Partner
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-gray-600">
              Navigating a new country requires more than a map; it requires
              a trusted guide. We specialize in providing a secure, culturally
              immersive, and frictionless experience for international
              visitors, ensuring you feel at home while exploring afar.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-10">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 text-[14px] leading-6 text-gray-600"
                >
                  {/* Check icon */}
                  <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e5b34d] text-[12px] font-bold text-white">
                    ✓
                  </span>

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
