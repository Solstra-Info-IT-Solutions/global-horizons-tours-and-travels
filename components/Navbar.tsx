"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Destinations", href: "/destinations" },
    { label: "Transport", href: "/#transport" },
    { label: "Tours", href: "/#tours" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-[#faf9f5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden border border-gray-300 bg-white p-1 rounded-sm shadow-xs transition-transform group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Global Tours & Travels"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="font-serif text-[17px] font-bold text-[#123f55] tracking-tight">
            Global Tours & Travels
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[15px] font-medium transition-colors duration-200 ${
                  active
                    ? "font-semibold text-[#123f55]"
                    : "text-slate-600 hover:text-[#123f55]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#123f55]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-2xl text-[#123f55] md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-[#faf9f5] px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-[16px] py-2 transition-colors ${
                    active
                      ? "font-bold text-[#123f55]"
                      : "text-slate-600 hover:text-[#123f55]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}