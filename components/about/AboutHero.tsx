export default function AboutHero() {
  return (
    <section className="relative h-[300px] overflow-hidden md:h-[360px]">

      <img
        src="abouthero.jpg"
        alt="Travel experience"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#063f4d]/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-[10px] font-medium uppercase tracking-[2px] text-[#e8b640]">
          THE GLOBAL TOURS LEGACY
        </p>

        <h1 className="max-w-[700px] font-serif text-4xl font-bold leading-tight text-white md:text-[48px]">
          Your Journey, Supported by
          <br />
          Experience
        </h1>

      </div>
    </section>
  );
}