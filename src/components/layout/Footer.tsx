import Link from "next/link";
import { Compass, Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 94222 00000";
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL || "info@globalhorizonstours.com";

  return (
    <footer className="bg-[#060b18] text-slate-300 border-t border-[#1c2541]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center text-[#060b18]">
                <Compass className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white leading-tight">
                  GLOBAL HORIZONS
                </span>
                <span className="text-[10px] tracking-widest text-[#d4af37] font-semibold uppercase">
                  TOURS & TRAVELS
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              With over 20 years of experience, Global Horizons Tours & Travels provides reliable private transportation, airport transfers, customized Maharashtra itineraries, and dedicated heritage tours to Ajanta & Ellora Caves.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#d4af37] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>20+ Years Trusted Industry Experience</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-b border-[#1c2541] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-[#d4af37] transition-colors">
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-[#d4af37] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/transportation" className="hover:text-[#d4af37] transition-colors">
                  Private Transportation
                </Link>
              </li>
              <li>
                <Link href="/airport-transfers" className="hover:text-[#d4af37] transition-colors">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="/customized-trips" className="hover:text-[#d4af37] transition-colors">
                  Customized Trips
                </Link>
              </li>
              <li>
                <Link href="/foreign-travelers" className="hover:text-[#d4af37] transition-colors">
                  Foreign Tourists Guide
                </Link>
              </li>
              <li>
                <Link href="/corporate-travel" className="hover:text-[#d4af37] transition-colors">
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Destinations */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-b border-[#1c2541] pb-2">
              Popular Destinations
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/destinations/ajanta-caves" className="hover:text-[#d4af37] transition-colors">
                  Ajanta Caves Tour
                </Link>
              </li>
              <li>
                <Link href="/destinations/ellora-caves" className="hover:text-[#d4af37] transition-colors">
                  Ellora Caves & Kailasa Temple
                </Link>
              </li>
              <li>
                <Link href="/destinations/bibi-ka-maqbara" className="hover:text-[#d4af37] transition-colors">
                  Bibi Ka Maqbara Sightseeing
                </Link>
              </li>
              <li>
                <Link href="/destinations/daulatabad-fort" className="hover:text-[#d4af37] transition-colors">
                  Daulatabad Fort Tour
                </Link>
              </li>
              <li>
                <Link href="/destinations/shirdi" className="hover:text-[#d4af37] transition-colors">
                  Shirdi Sai Baba Pilgrimage
                </Link>
              </li>
              <li>
                <Link href="/destinations/chhatrapati-sambhajinagar" className="hover:text-[#d4af37] transition-colors">
                  Chhatrapati Sambhajinagar City
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-b border-[#1c2541] pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="hover:text-[#d4af37] transition-colors">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${emailAddress}`} className="hover:text-[#d4af37] transition-colors">
                  {emailAddress}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="mt-12 pt-6 border-t border-[#1c2541] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Global Horizons Tours & Travels. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/cancellation-policy" className="hover:text-slate-300 transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
