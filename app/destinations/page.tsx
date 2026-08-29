"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const destinations = [
  {
    title: "Ajanta Caves",
    description:
      "Ancient Buddhist rock-cut monuments dating from the 2nd century BCE, featuring masterful paintings and sculptures.",
    image: "/destinations/ajanta1.png",
    tag: "UNESCO Site",
  },
  {
    title: "Ellora Caves",
    description:
      "A monumental complex of Buddhist, Hindu, and Jain cave temples, including the awe-inspiring Kailasa temple.",
    image: "/destinations/2.jpg",
    tag: "UNESCO Site",
  },
  {
    title: "Daulatabad Fort",
    description:
      "An invincible medieval hill fortress known for its ingenious defensive architecture and challenging approach.",
    image: "/destinations/3.jpg",
    tag: "",
  },
  {
    title: "Bibi Ka Maqbara",
    description:
      "A stunning 17th-century mausoleum featuring intricate Mughal architecture, often called the Deccan's Taj.",
    image: "/destinations/4.png",
    tag: "",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#faf9f6] text-[#123f55]">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[500px] overflow-hidden">

          {/* Background */}
          <Image
            src="/destinations/hero-full.png"
            alt="Maharashtra caves"
            fill
            priority
            className="object-cover"
          />

          {/* White fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6]/95 via-[#faf9f6]/75 to-[#faf9f6]/10" />

          <div className="relative z-10 mx-auto flex min-h-[500px] max-w-6xl items-center px-6 md:px-10">

            <div className="max-w-lg pt-10">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#145468]" />

                <span className="text-xs tracking-wide text-[#145468]">
                  DESTINATION GUIDE
                </span>
              </div>

              <h1 className="mb-5 font-serif text-3xl font-bold text-[#123f55] md:text-4xl">
                Discover Maharashtra
              </h1>

              <p className="mb-8 max-w-md text-sm leading-6 text-gray-600 md:text-base">
                Explore ancient wonders, sacred sites, and cultural landmarks
                with local experts who bring history to life.
              </p>

              <div className="flex flex-wrap gap-3">

                <Link
                  href="/tours"
                  className="bg-[#b94725] px-7 py-3 text-xs font-medium text-white transition hover:bg-[#96391e]"
                >
                  VIEW ALL TOURS
                </Link>

                <Link
                  href="/contact"
                  className="border border-[#123f55] bg-white px-7 py-3 text-xs font-medium text-[#123f55] transition hover:bg-[#123f55] hover:text-white"
                >
                  CUSTOM ITINERARY
                </Link>

              </div>
            </div>
          </div>
        </section>

        {/* ================= LOCAL BASE ================= */}
        <section className="px-6 py-20 md:px-10 lg:py-28">

          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

            {/* Text */}
            <div className="max-w-md">

              <p className="mb-4 text-xs font-medium tracking-wide text-[#145468]">
                OUR LOCAL BASE
              </p>

              <h2 className="mb-7 font-serif text-xl font-bold text-[#123f55]">
                Chhatrapati Sambhaji Nagar
                <br />
                (Aurangabad)
              </h2>

              <p className="mb-7 text-sm leading-6 text-gray-600">
                As our operational heart, this historic city is the perfect
                gateway to Maharashtra&apos;s most awe-inspiring sights. From
                here, we expertly guide you to awe-some UNESCO World Heritage
                sites of Ajanta and Ellora, and the formidable Daulatabad Fort.
                Experience the region with the comfort and deep knowledge only
                locals can provide.
              </p>

              <Link
                href="#heritage"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#145468] transition hover:text-[#b94725]"
              >
                EXPLORE CITY BASE
                <span className="text-lg">→</span>
              </Link>

            </div>

            {/* Image */}
            <div className="relative">

              <div className="rounded-md bg-[#f0ede3] p-6 shadow-sm">

                <div className="relative h-[300px] overflow-hidden md:h-[390px]">
                  <Image
                    src="/destinations/csna.jpg"
                    alt="Bibi Ka Maqbara"
                    fill
                    className="object-cover"
                  />
                </div>

              </div>

              {/* Floating card */}
              <div className="absolute -bottom-7 left-0 max-w-[260px] rounded-md bg-white p-5 shadow-xl md:-left-5">

                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xl text-[#c54e2c]">⌖</span>

                  <span className="text-sm font-medium text-gray-700">
                    Central Hub
                  </span>
                </div>

                <p className="text-xs leading-5 text-gray-500">
                  Strategic starting point for all heritage and spiritual
                  tours in the region.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* ================= HERITAGE WONDERS ================= */}
        <section
          id="heritage"
          className="bg-[#f3f2ed] px-6 py-20 md:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-6xl">

            {/* Heading */}
            <div className="mb-10 flex items-end justify-between gap-5">

              <div>
                <h2 className="mb-4 font-serif text-xl font-bold text-[#123f55]">
                  Heritage Wonders
                </h2>

                <p className="max-w-2xl text-sm leading-6 text-gray-600">
                  Step back in time through magnificent rock-cut caves,
                  imposing forts, and architectural marvels that define
                  India&apos;s rich history.
                </p>
              </div>

              {/* Arrows */}
              <div className="hidden gap-2 md:flex">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-400 text-lg text-gray-700 hover:bg-white">
                  ←
                </button>

                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-400 text-lg text-gray-700 hover:bg-white">
                  →
                </button>
              </div>

            </div>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {destinations.map((destination) => (
                <div
                  key={destination.title}
                  className="group overflow-hidden rounded-md bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Card Image */}
                  <div className="relative h-[270px] overflow-hidden">

                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {destination.tag && (
                      <span className="absolute left-4 top-4 rounded-full bg-[#145468] px-4 py-1.5 text-[10px] text-white">
                        {destination.tag}
                      </span>
                    )}

                  </div>

                  {/* Card Content */}
                  <div className="p-5">

                    <h3 className="mb-3 font-serif text-base font-bold text-[#123f55]">
                      {destination.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-xs leading-5 text-gray-600">
                      {destination.description}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#145468] hover:text-[#b94725]"
                    >
                      EXPLORE
                      <span>↗</span>
                    </Link>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}