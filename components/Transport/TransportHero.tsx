"use client";

import Link from "next/link";

export default function TransportHero() {
  return (
    <section
      className="relative flex min-h-[440px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/my-collage.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <h1 className="font-serif text-4xl leading-tight text-[#111] md:text-5xl lg:text-[58px]">
          Travel Comfortably.
          <br />
          <span className="italic text-[#b94b25]">
            Travel Confidently.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-4xl font-serif text-base text-[#173f4d] md:text-lg">
          Premium transportation solutions tailored for your journey
          across Maharashtra and beyond.
        </p>

        <Link
          href="#fleet"
          className="mt-8 inline-flex bg-[#b94721] px-8 py-4 font-serif text-sm font-bold text-white transition hover:bg-[#96391b]"
        >
          BOOK YOUR RIDE
        </Link>

      </div>
    </section>
  );
}