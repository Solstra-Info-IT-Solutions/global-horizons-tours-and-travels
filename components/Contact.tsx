"use client";

import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState("+91");

  const countries = ["+91", "+44", "+1", "+61"];

  return (
    <section
      id="contact"
      className="bg-[#faf9f5] px-6 py-16 md:px-10 lg:px-20 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ================= TITLE ================= */}
        <h2 className="mb-10 text-center font-serif text-5xl font-bold text-black md:text-[56px]">
          Contact Us
        </h2>

        {/* ================= MAIN CARD ================= */}
        <div className="rounded-[24px] border border-gray-300 bg-white p-6 md:p-8 lg:p-9">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">

            {/* ================= LEFT FORM ================= */}
            <div className="border-b border-gray-200 pb-8 lg:border-b-0 lg:border-r lg:pr-10">

              <form className="space-y-4">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-[16px] text-black"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-[16px] outline-none transition placeholder:text-gray-400 focus:border-[#14596a]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-[16px] text-black"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-[16px] outline-none transition placeholder:text-gray-400 focus:border-[#14596a]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-[16px] text-black"
                  >
                    Phone number
                  </label>

                  <div className="relative flex h-12 w-full rounded-lg border border-gray-300">

                    {/* Country Code */}
                    <button
                      type="button"
                      onClick={() => setCountryOpen(!countryOpen)}
                      className="flex w-[100px] items-center justify-between border-r border-gray-300 px-4 text-[16px]"
                    >
                      <span>{country}</span>

                      <ChevronDown
                        size={16}
                        className={`transition ${
                          countryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {countryOpen && (
                      <div className="absolute left-0 top-12 z-30 w-[100px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                        {countries.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setCountry(item);
                              setCountryOpen(false);
                            }}
                            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}

                    <input
                      id="phone"
                      type="tel"
                      placeholder="012-345-6789"
                      className="min-w-0 flex-1 rounded-r-lg px-4 text-[16px] outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-[16px] text-black"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter message..."
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[16px] outline-none transition placeholder:text-gray-400 focus:border-[#14596a]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 h-[55px] bg-[#dc6945] px-8 text-[14px] font-medium text-white transition hover:bg-[#c75332]"
                >
                  SEND YOUR QUERY
                </button>

              </form>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="pt-8 lg:pl-10 lg:pt-0">

              {/* MAP */}
              <div className="relative h-100 overflow-hidden rounded-[16px]">

                <iframe
                  title="Global Tours Location"
                  src="https://www.google.com/maps?q=Chhatrapati%20Sambhajinagar%2C%20Maharashtra%2C%20India&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />

                {/* Operational Base Card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border-l-4 border-[#14596a] bg-white/95 p-5 shadow-lg backdrop-blur-sm">

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e7eef0]">
                      <MapPin
                        size={21}
                        className="text-[#14596a]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[16px] font-medium text-gray-800">
                        Operational Base
                      </h3>

                      <p className="mt-1 text-[15px] leading-5 text-gray-600">
                        Our headquarters in the historic heart of Maharashtra.
                      </p>

                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Chhatrapati+Sambhajinagar+Maharashtra+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-[15px] font-medium text-[#14596a] hover:underline"
                      >
                        GET DIRECTIONS
                        <ExternalLink size={14} />
                      </a>
                    </div>

                  </div>
                </div>

              </div>

              {/* ================= INFO BOX ================= */}
              <div className="mt-4 grid grid-cols-1 gap-5 rounded-[16px] bg-[#eeece7] px-8 py-5 sm:grid-cols-2">

                {/* Working Hours */}
                <div>
                  <h3 className="mb-3 text-[15px] font-medium text-gray-600">
                    WORKING HOURS
                  </h3>

                  <div className="space-y-2 text-[15px] text-gray-700">

                    <div className="flex justify-between gap-4">
                      <span>Mon-Fri:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>

                  </div>
                </div>

                {/* Local Specialists */}
                <div>
                  <h3 className="mb-3 text-[15px] font-medium text-gray-600">
                    LOCAL SPECIALISTS
                  </h3>

                  <p className="text-[16px] leading-6 text-gray-700">
                    Deeply rooted in
                    <br />
                    Aurangabad,
                    <br />
                    providing authentic
                    <br />
                    experiences
                    <br />
                    and seamless logistics
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}