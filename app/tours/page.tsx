"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tours = [
  {
    title: "Family Holidays",
    category: "CATEGORY",
    description:
      "Experience the joy of discovery with meticulously crafted journeys designed to celebrate family time. From multi-generational heritage explorations to engaging activities for all ages, we ensure every detail is handled so you can focus on creating memories that last a lifetime.",
    button: "View Tours",
    image: "/tours/family.jpg",
    reverse: false,
  },
  {
    title: "Weekend Getaways",
    category: "CATEGORY",
    description:
      "Rejuvenating short escapes designed for those seeking a meaningful pause from the everyday. Our curated weekend itineraries blend relaxation with light exploration, ensuring you return refreshed and inspired.",
    button: "Explore Getaways",
    image: "/tours/weekend.jpg",
    reverse: true,
  },
  {
    title: "Group Tours",
    category: "CATEGORY",
    description:
      "Experience the synergy of collective discovery with our expertly coordinated group travel solutions. Whether you’re traveling with extended family, social clubs, or community organizations, we handle every logistical nuance to ensure a seamless, enriching journey for travelers of all group sizes.",
    button: "Join a Group",
    image: "/tours/group.jpg",
    reverse: false,
  },
  {
    title: "Pilgrimage Tours",
    category: "CATEGORY",
    description:
      "Embark on a soulful journey with our meticulously planned pilgrimage tours. We provide comfortable, respectful transportation and seamless logistics for spiritual and religious travels, ensuring you can focus entirely on your devotion and inner peace while we handle every detail of your sacred itinerary.",
    button: "View Itineraries",
    image: "/tours/pilgrimage.jpg",
    reverse: true,
  },
  {
    title: "Custom Holidays",
    category: "BESPOKE",
    description:
      "Your destination. Your schedule. Your singular experience. Whether you’re seeking a hidden cultural gem or a seamless luxury escape, our expert concierges are dedicated to crafting a bespoke itinerary tailored entirely to your personal travel style and desires. Let us handle the intricate logistics while you focus on the moments that matter.",
    button: "Start Planning",
    image: "/tours/custom.jpg",
    reverse: false,
  },
];

export default function ToursPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#faf9f6]">

        {/* Page Header */}
        <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#F5F3EE]">

          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/tours/tours-hero.jpg')",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 font-serif text-sm font-semibold text-[#0e4557]">
              Experience Worth Remembering
            </p>

            <p className="text-sm leading-6 text-gray-600">
              Our tour packages can be customised according to your preferred
              dates, group size, duration, accommodation, transportation and
              activities.
            </p>
          </div>
        </section>

        {/* Tours */}
        <section className="px-6 py-14 md:px-10 lg:px-14 lg:py-20">
          <div className="mx-auto max-w-6xl">

            <div className="space-y-20 md:space-y-24">

              {tours.map((tour) => (
                <article
                  key={tour.title}
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                    tour.reverse
                      ? "md:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* Image */}
                  <div className="overflow-hidden rounded-md shadow-md">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      width={800}
                      height={520}
                      priority={tour.title === "Family Holidays"}
                      className="h-[270px] w-full object-cover transition duration-500 hover:scale-105 md:h-[330px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="max-w-xl">

                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-7 bg-[#c85a38]" />

                      <span className="text-[11px] font-medium tracking-[0.15em] text-[#c85a38]">
                        {tour.category}
                      </span>
                    </div>

                    <h2 className="mb-4 font-serif text-xl font-bold text-[#0e4557] md:text-2xl">
                      {tour.title}
                    </h2>

                    <p className="mb-6 text-sm leading-6 text-gray-600">
                      {tour.description}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex bg-[#b94725] px-6 py-3 text-xs font-medium text-white transition hover:bg-[#96381d]"
                    >
                      {tour.button}
                    </Link>

                  </div>
                </article>
              ))}

            </div>


          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}