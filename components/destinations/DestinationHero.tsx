"use client";

import Link from "next/link";

export default function DestinationHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] pt-12 pb-24 lg:pt-16 lg:pb-36">
      {/* Background Image Container with Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/destinations/hero-bg-4fa69b.png"
          alt="Maharashtra Heritage Caves"
          className="h-full w-full object-cover object-center opacity-85"
        />
        {/* Gradients for smooth fading into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f5] via-[#faf9f5]/80 to-transparent max-md:from-[#faf9f5]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f5]/40 via-transparent to-[#faf9f5]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Eyebrow Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1.5px] w-8 bg-[#123f55]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123f55]">
              DESTINATION GUIDE
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            Discover Maharashtra
          </h1>

          {/* Paragraph Description */}
          <p className="mt-6 text-base text-slate-700 leading-relaxed sm:text-lg sm:leading-relaxed max-w-xl font-normal">
            Explore ancient wonders, sacred sites, and cultural landmarks with local
            experts who bring history to life.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#tours"
              className="inline-flex items-center justify-center rounded-xs bg-[#b04328] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all duration-200 hover:bg-[#94361e] hover:shadow-md active:scale-[0.98]"
            >
              VIEW ALL TOURS
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xs border border-slate-700/80 bg-white/90 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#123f55] backdrop-blur-xs transition-all duration-200 hover:bg-white hover:border-[#123f55] active:scale-[0.98]"
            >
              CUSTOM ITINERARY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
