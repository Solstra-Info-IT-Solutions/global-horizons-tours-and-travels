"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function LocalBaseSection() {
  return (
    <section className="bg-[#faf9f5] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* Left Column: Text Information */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#123f55]">
              OUR LOCAL BASE
            </span>

            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.2]">
              Chhatrapati Sambhaji Nagar
              <span className="block font-normal text-slate-600 text-2xl sm:text-3xl mt-1">
                (Aurangabad)
              </span>
            </h2>

            <p className="mt-6 text-base text-slate-600 leading-relaxed font-normal">
              As our operational heart, this historic city is the perfect gateway to
              Maharashtra's most awe-inspiring sights. From here, our expert guides lead you
              seamlessly to the UNESCO World Heritage sites of Ajanta and Ellora, and the
              formidable Daulatabad Fort. Experience the region with the comfort and deep
              knowledge only locals can provide.
            </p>

            <div className="mt-8">
              <Link
                href="#city-base"
                className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#123f55] transition-colors hover:text-[#0b2938]"
              >
                EXPLORE CITY BASE
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Image with Frame & Floating Central Hub Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[28px] bg-[#f2edd9]/70 p-3 sm:p-5 shadow-xs">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/destinations/bibi-photo.png"
                  alt="Bibi Ka Maqbara reflection pool"
                  className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[460px]"
                />
              </div>

              {/* Floating Central Hub Card */}
              <div className="relative sm:absolute -bottom-6 left-4 sm:bottom-6 sm:left-6 z-20 mt-4 sm:mt-0 w-[calc(100%-2rem)] sm:w-auto sm:max-w-xs rounded-xl border border-slate-100 bg-white/95 p-5 shadow-xl backdrop-blur-xs transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdf2f0] text-[#b04328]">
                    <img
                      src="/destinations/pin.svg"
                      alt="Location Pin"
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900">
                      Central Hub
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed font-normal">
                      Strategic starting point for all heritage and spiritual tours in the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
