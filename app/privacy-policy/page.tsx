import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Horizons Tours & Travels",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#faf8f5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg text-slate-800">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b]">
          Privacy Policy
        </h1>
        <div className="w-16 h-1 bg-[#d4af37] rounded-full" />

        <p className="text-sm leading-relaxed">
          At <strong>Global Horizons Tours & Travels</strong>, we respect your privacy and are committed to protecting the personal information you share with us during trip enquiries, bookings, or consultations.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">1. Information Collection</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We collect personal information such as your name, phone number, email address, travel dates, starting point, and destination solely for the purpose of communicating with you, designing custom itineraries, and arranging private transportation services.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">2. Use of Information</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Your details are used strictly to provide quotations, confirm reservations, provide driver dispatch updates, and deliver travel assistance. We do not sell, rent, or trade your personal information to third parties.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">3. Contact & Updates</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          If you have questions regarding this privacy policy or wish to update your details, please contact us directly through our website contact form or official WhatsApp support desk.
        </p>
      </div>
    </div>
  );
}
