import {
  Globe2,
  Star,
  Share2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#145667] text-[#d3dfe2]">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">

          {/* About */}
          <div>
            {/* Logo */}
            <div className="mb-5 flex h-7 w-8 items-center justify-center border border-[#d3dfe2]">
              <span className="text-xs font-bold text-[#d3dfe2]">
                GW
              </span>
            </div>

            <p className="max-w-[245px] text-[15px] leading-[23px] tracking-[0.3px]">
              Crafting heritage travel
              <br />
              experiences since 2004. Your
              <br />
              portal to luxury, culture, and
              <br />
              discovery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[16px] font-medium text-[#e7ae3c]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-[15px] tracking-[0.3px]">
              <a
                href="#offers"
                className="transition hover:text-white"
              >
                Special Offers
              </a>

              <a
                href="#corporate"
                className="transition hover:text-white"
              >
                Corporate Travel
              </a>

              <a
                href="#insurance"
                className="transition hover:text-white"
              >
                Travel Insurance
              </a>

              <a
                href="#privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[16px] font-medium text-[#e7ae3c]">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-[15px]">
              <div className="flex items-center gap-2">
                <MapPin
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#e7ae3c]"
                />
                <span>123 Heritage Row, London</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#e7ae3c]"
                />
                <span>+44 (0) 20 7946 0000</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#e7ae3c]"
                />
                <span>concierge@globaltours.com</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-4 text-[16px] font-medium text-[#e7ae3c]">
              Follow Us
            </h3>

            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="Website"
                className="transition hover:text-white"
              >
                <Globe2 size={21} strokeWidth={1.8} />
              </a>

              <a
                href="#"
                aria-label="Reviews"
                className="transition hover:text-white"
              >
                <Star size={21} strokeWidth={1.8} />
              </a>

              <a
                href="#"
                aria-label="Share"
                className="transition hover:text-white"
              >
                <Share2 size={21} strokeWidth={1.8} />
              </a>
            </div>

            {/* Award */}
            <div className="mt-8 flex h-[55px] w-[250px] items-center justify-center rounded border border-[#438092] text-[14px]">
              "Best Luxury Operator 2023"
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 border-t border-[#286b7b]" />

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-4 pt-8 text-[14px] tracking-[0.3px] md:flex-row">
          <p>
            © 2024 Global Tours &amp; Travels. All rights reserved.
          </p>

          <p>
            Member of Heritage Travel Guild
          </p>
        </div>
      </div>
    </footer>
  );
}