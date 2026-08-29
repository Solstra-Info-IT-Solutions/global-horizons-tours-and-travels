"use client";

import Link from "next/link";
import { Users, Briefcase, CheckCircle2 } from "lucide-react";

const vehicles = [
  {
    image: "/luxury.jpg",
    title: "Luxury SUV/XUV",
    capacity: "6-7 Pax",
    bags: "4 Bags",
    badge: "POPULAR",
    features: [
      "Spacious legroom & premium upholstery",
      "Climate control & ambient lighting",
      "Ideal for family trips & corporate groups",
    ],
  },
  {
    image: "/sedan.jpg",
    title: "Premium Sedan",
    capacity: "4 Pax",
    bags: "3 Bags",
    features: [
      "Smooth ride for city or highway",
      "Excellent boot space for luggage",
      "Perfect for couples or solo travelers",
    ],
  },
  {
    image: "/tempo.jpg",
    title: "Tempo Traveller/ Buses",
    capacity: "12-17 Pax",
    bags: "Large Capacity",
    features: [
      "Push-back seats & ample headroom",
      "High quality entertainment system",
      "Ideal for large groups & extended tours",
    ],
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="bg-[#f5f3ef] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#b94721]">
            OUR FLEET
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#073f4e] md:text-5xl">
            Choose the Right Ride for Your Journey.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="overflow-hidden rounded-xl bg-white shadow-[0_5px_20px_rgba(0,0,0,0.08)]"
            >

              {/* Image */}
              <div className="relative h-[190px] overflow-hidden">

                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                {vehicle.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-[#dff2f7] px-3 py-1 font-serif text-[10px] font-bold text-[#075064]">
                    {vehicle.badge}
                  </span>
                )}

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="font-serif text-2xl font-bold text-[#073f4e]">
                  {vehicle.title}
                </h3>

                {/* Details */}
                <div className="mt-3 flex items-center gap-5 text-sm text-[#444]">

                  <div className="flex items-center gap-1.5">
                    <Users size={16} />
                    <span>{vehicle.capacity}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Briefcase size={16} />
                    <span>{vehicle.bags}</span>
                  </div>

                </div>

                {/* Features */}
                <div className="mt-5 space-y-3">

                  {vehicle.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#c94f2b]"
                      />

                      <span className="font-serif text-sm font-semibold leading-5 text-[#444]">
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Button */}
                <Link
                  href="/#contact"
                  className="mt-7 flex h-12 items-center justify-center border border-[#155568] font-serif text-xs font-bold text-[#155568] transition hover:bg-[#155568] hover:text-white"
                >
                  REQUEST QUOTE
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}