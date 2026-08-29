"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Navbar */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center border border-gray-200">
              <img
                src="/logo.png"
                alt="Global Tours & Travels"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="font-serif text-[17px] font-bold text-[#123f55]">
              Global Tours & Travels
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-[#123f55] transition hover:text-[#123f55]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-700 transition hover:text-[#123f55]"
            >
              About Us
            </Link>

            <Link
              href="/destinations"
              className="text-gray-700 transition hover:text-[#123f55]"
            >
              Destinations
            </Link>

            <Link
              href="/transport"
              className="text-gray-700 transition hover:text-[#123f55]"
            >
              Transport
            </Link>

            <Link
              href="/tours"
              className="text-gray-700 transition hover:text-[#123f55]"
            >
              Tours
            </Link>

            <Link
              href="/#contact"
              className="text-gray-700 transition hover:text-[#123f55]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#123f55] md:hidden"
            aria-label="Open menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col">

              <Link
                href="/home"
                onClick={() => setIsOpen(false)}
                className="border-b border-red-100 py-3 text-[#123f55]"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 py-3 text-gray-700 hover:text-[#123f55]"
              >
                About Us
              </Link>

              <Link
                href="/destinations"
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 py-3 text-gray-700 hover:text-[#123f55]"
              >
                Destinations
              </Link>

              <Link
                href="/transport"
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 py-3 text-gray-700 hover:text-[#123f55]"
              >
                Transport
              </Link>

              <Link
                href="/tours"
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 py-3 text-gray-700 hover:text-[#123f55]"
              >
                Tours
              </Link>

              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="py-3 text-gray-700 hover:text-[#123f55]"
              >
                Contact Us
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}