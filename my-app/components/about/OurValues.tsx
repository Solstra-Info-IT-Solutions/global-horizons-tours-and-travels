const values = [
  {
    icon: "♥",
    title: "Trust",
    text: "We believe every successful journey begins with trust. We maintain clear communication and transparent commitments.",
    yellow: false,
  },
  {
    icon: "≡",
    title: "Comfort",
    text: "Your journey should be as enjoyable as your destination. We focus on comfortable transportation and thoughtfully planned travel.",
    yellow: true,
  },
  {
    icon: "◉",
    title: "Safety",
    text: "Passenger safety is one of our highest priorities. We aim to provide dependable vehicles and responsible travel services.",
    yellow: false,
  },
  {
    icon: "♥",
    title: "Professionalism",
    text: "From the first enquiry to the end of your journey, we strive to provide courteous and professional service.",
    yellow: true,
  },
];

export default function OurValues() {
  return (
    <section className="px-6 pb-16 md:px-10 lg:px-20">

      <div className="mx-auto max-w-[1200px]">

        <div className="mb-8 text-center">

          <p className="text-[9px] uppercase tracking-[1.5px] text-[#e2b33e]">
            The Pillars of Our Service
          </p>

          <h2 className="mt-2 font-serif text-2xl font-bold text-[#14596a]">
            Our Core Values
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => (
            <div
              key={value.title}
              className="min-h-[145px] rounded-[4px] bg-white p-5 shadow-sm"
            >

              <div
                className={`mb-4 flex h-7 w-7 items-center justify-center rounded-md text-xs ${
                  value.yellow
                    ? "bg-[#eab943] text-[#14596a]"
                    : "bg-[#14596a] text-white"
                }`}
              >
                {value.icon}
              </div>

              <h3 className="font-serif text-[16px] font-bold text-[#14596a]">
                {value.title}
              </h3>

              <p className="mt-3 text-[10px] leading-[15px] text-gray-500">
                {value.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}