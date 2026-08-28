const steps = [
  {
    number: "1",
    title: "Understand",
    text: "Deep consultation to grasp your travel desires and requirements.",
  },
  {
    number: "2",
    title: "Plan",
    text: "Crafting a meticulous itinerary balancing activity and leisure.",
  },
  {
    number: "3",
    title: "Customize",
    text: "Refining details, ensuring exclusive access and personalization.",
  },
  {
    number: "4",
    title: "Confirm",
    text: "Finalizing logistics and delivering your comprehensive travel dossier.",
  },
  {
    number: "5",
    title: "Support",
    text: "24/7 concierge assistance throughout the duration of your journey.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-[#14596a] px-6 py-16 text-white md:px-10 lg:px-20">

      <div className="mx-auto max-w-[1100px]">

        <div className="mb-12 text-center">

          <p className="text-[9px] uppercase tracking-[1.5px] text-[#e8b53e]">
            The Journey Method
          </p>

          <h2 className="mt-2 font-serif text-2xl font-bold">
            Our Approach
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative text-center"
            >

              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-md border border-[#e4b33d] text-[10px] text-[#e4b33d]">
                {step.number}
              </div>

              <h3 className="mt-4 font-serif text-[12px] font-bold">
                {step.title}
              </h3>

              <p className="mt-2 text-[8px] leading-[13px] text-white/55">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}