"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Menu, X, Compass, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours & Packages", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Transportation", href: "/transportation" },
  { label: "Airport Transfers", href: "/airport-transfers" },
  { label: "Customized Trips", href: "/customized-trips" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 94222 00000";

  return (
    <>
      {/* Top Banner - Trust & Contact Bar */}
      <div className="bg-[#060b18] text-[#e2e8f0] text-xs py-2 px-4 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[#d4af37]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-medium text-slate-200">
              20+ Years of Industry Experience | Chhatrapati Sambhajinagar (Aurangabad), Maharashtra
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{phoneNumber}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
            ? "bg-[#0b132b]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#1c2541]"
            : "bg-[#0b132b] py-4 border-b border-[#1c2541]/50"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center text-[#060b18] shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                GLOBAL HORIZONS
              </span>
              <span className="text-[10px] tracking-widest text-[#d4af37] font-semibold uppercase">
                TOURS & TRAVELS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${isActive
                      ? "text-[#d4af37] font-semibold"
                      : "text-slate-200 hover:text-[#d4af37]"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          {/* <div className="hidden xl:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs font-bold shadow-md transition-all hover:scale-105"
            >
              <span>Enquire Now</span>
            </Link>
          </div> */}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#1c2541] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#060b18] border-b border-[#1c2541] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                        ? "bg-[#1c2541] text-[#d4af37] font-semibold"
                        : "text-slate-200 hover:bg-[#1c2541]/50 hover:text-[#d4af37]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#1c2541] flex flex-col gap-2">
              <Link
                href="/enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#060b18] text-sm font-bold shadow-md"
              >
                Enquire Now
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
