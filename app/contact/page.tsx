import { Metadata } from "next";
import { Phone, Mail, MapPin, MessageSquare, Clock, Map } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";
import { EnquiryForm } from "@/src/components/enquiry/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Global Horizons Tours & Travels",
  description:
    "Get in touch with Global Horizons Tours & Travels in Chhatrapati Sambhajinagar (Aurangabad). Contact us via WhatsApp, phone, or online enquiry for tour quotes.",
};

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl("Hello Global Horizons Tours & Travels, I am reaching out through your contact page.");
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 94222 00000";
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL || "info@globalhorizonstours.com";
  const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.google.com";

  return (
    <div className="bg-[#faf8f5]">
      {/* Hero Header */}
      <section className="bg-[#0b132b] text-white py-16 sm:py-24 border-b border-[#1c2541]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Phone className="w-4 h-4" />
            <span>24/7 Customer Support</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Contact Global Horizons Tours & Travels
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We are always here to help you plan your travel across Maharashtra. Connect with us on WhatsApp, call our office, or submit an enquiry form.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
                <h2 className="font-serif text-2xl font-bold text-[#0b132b]">
                  Get In Touch
                </h2>
                <div className="w-12 h-1 bg-[#d4af37] rounded-full" />

                <div className="space-y-6 text-sm text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#0b132b] text-[#d4af37] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#0b132b]">Office Location</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        Chhatrapati Sambhajinagar (Aurangabad), Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#0b132b] text-[#d4af37] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#0b132b]">Phone Support</h3>
                      <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="text-xs text-slate-600 hover:text-[#b8860b] transition-colors mt-0.5 block">
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-600 text-white shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#0b132b]">WhatsApp Instant Chat</h3>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-700 font-bold hover:underline mt-0.5 block">
                        Click to chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#0b132b] text-[#d4af37] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#0b132b]">Email Desk</h3>
                      <a href={`mailto:${emailAddress}`} className="text-xs text-slate-600 hover:text-[#b8860b] transition-colors mt-0.5 block">
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#0b132b] text-[#d4af37] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#0b132b]">Business Hours</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                        Monday – Sunday: 24/7 On-Call Assistance & Transfers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder Container */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-[#0b132b] text-base">Find Us On Google Maps</h3>
                  <Map className="w-5 h-5 text-[#b8860b]" />
                </div>
                <div className="relative h-48 w-full bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center p-4">
                  <MapPin className="w-8 h-8 text-[#d4af37] mb-2" />
                  <span className="text-xs font-bold text-[#0b132b]">Global Horizons Tours & Travels</span>
                  <span className="text-[11px] text-slate-500">Chhatrapati Sambhajinagar (Aurangabad), Maharashtra</span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-4 py-1.5 rounded-lg bg-[#0b132b] text-[#d4af37] text-[11px] font-bold hover:bg-[#1c2541] transition-colors"
                  >
                    Open Google Maps Location
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#0b132b] text-white rounded-3xl p-8 sm:p-10 border border-[#d4af37]/30 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  Send Message
                </span>
                <h2 className="font-serif text-3xl font-bold text-white mt-1">
                  Online Trip Enquiry Form
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Fill out the form below to receive a personalized quote for your trip, taxi, or airport transfer.
                </p>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
