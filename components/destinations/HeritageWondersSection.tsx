"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeritageSite {
  id: string;
  title: string;
  badge?: string;
  description: string;
  image: string;
  link: string;
}

const heritageSites: HeritageSite[] = [
  {
    id: "ajanta",
    title: "Ajanta Caves",
    badge: "UNESCO Site",
    description:
      "Ancient Buddhist rock-cut monuments dating from the 2nd century BCE, featuring masterful...",
    image: "/destinations/ajanta-photo.png",
    link: "#ajanta",
  },
  {
    id: "ellora",
    title: "Ellora Caves",
    badge: "UNESCO Site",
    description:
      "A monumental complex of Buddhist, Hindu, and Jain cave temples, including the awe-...",
    image: "/destinations/ellora-photo.png",
    link: "#ellora",
  },
  {
    id: "daulatabad",
    title: "Daulatabad Fort",
    description:
      "An invincible medieval hill fortress known for its ingenious defensive architecture and challenging...",
    image: "/destinations/daulatabad-photo.png",
    link: "#daulatabad",
  },
  {
    id: "bibi",
    title: "Bibi Ka Maqbara",
    description:
      "A stunning 17th-century mausoleum featuring intricate Mughal architecture, often...",
    image: "/destinations/bibi-photo.png",
    link: "#bibi",
  },
];

export default function HeritageWondersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#faf9f5] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Heritage Wonders
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
              Step back in time through magnificent rock-cut caves, imposing forts, and
              architectural marvels that define India's rich history.
            </p>
          </div>

          {/* Navigation Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous heritage wonder"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-700 transition-all duration-200 hover:bg-[#123f55] hover:text-white hover:border-[#123f55] active:scale-95 shadow-xs"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next heritage wonder"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-700 transition-all duration-200 hover:bg-[#123f55] hover:text-white hover:border-[#123f55] active:scale-95 shadow-xs"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel / Grid Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {heritageSites.map((site) => (
            <article
              key={site.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative h-[320px] sm:h-[340px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* UNESCO Badge */}
                  {site.badge && (
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center rounded-md bg-[#0a2d38]/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-xs">
                        {site.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 transition-colors group-hover:text-[#123f55]">
                    {site.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal min-h-[48px]">
                    {site.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href={site.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#123f55] transition-colors hover:text-[#0a2d38]"
                >
                  EXPLORE
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
