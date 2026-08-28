"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-[#faf9f6]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

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
            href="/#destinations"
            className="text-gray-700 transition hover:text-[#123f55]"
          >
            Destinations
          </Link>

          <Link
            href="/#transport"
            className="text-gray-700 transition hover:text-[#123f55]"
          >
            Transport
          </Link>

          <Link
            href="/#tours"
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
          className="text-2xl text-[#123f55] md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </nav>
  );
}