"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const features = [
  {
    title: "Comfortable Vehicles",
    description:
      "Travel in clean, comfortable and well-maintained vehicles designed to make every journey relaxing.",
  },
  {
    title: "Professional Drivers",
    description:
      "Our experienced and professional drivers provide safe, reliable and courteous transportation.",
  },
  {
    title: "Customised Travel",
    description:
      "We create personalised travel experiences based on your destination, schedule and preferences.",
  },
  {
    title: "Transparent Service",
    description:
      "Clear pricing and honest communication ensure there are no surprises during your journey.",
  },
  {
    title: "Local Expertise",
    description:
      "Our local knowledge helps you discover authentic places, hidden gems and memorable experiences.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="why-choose-us"
      className="bg-[#faf9f5] px-6 py-16 md:px-10 lg:px-20 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="border-b border-black pb-4">
          <h2 className="font-serif text-5xl font-bold leading-tight text-black md:text-[52px]">
            Why Choose Us
          </h2>

          <p className="mt-2 text-xl text-black">
            More Than a Ride. It&apos;s Your Journey
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[450px_1fr] lg:gap-6">

          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="/Frame 33.png"
              alt="Travel experience"
              className="h-[375px] w-full object-cover md:h-[400px] lg:h-[375px]"
            />
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-6">

            {features.map((feature, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={feature.title}
                  className="overflow-hidden rounded-xl border border-gray-300 bg-white"
                >
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-medium text-black">
                      {feature.title}
                    </span>

                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                      className={`shrink-0 text-black transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-gray-200 px-6 py-5 text-[15px] leading-6 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <p className="mt-10 px-1 text-[16px] leading-6 text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy
          text ever since 1966, when designers at Letraset and James Mosley,
          the librarian at St Bride Printing Library in London, took a 1914
        </p>

      </div>
    </section>
  );
}