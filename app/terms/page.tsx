import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Global Horizons Tours & Travels",
};

export default function TermsPage() {
  return (
    <div className="bg-[#faf8f5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg text-slate-800">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b]">
          Terms & Conditions
        </h1>
        <div className="w-16 h-1 bg-[#d4af37] rounded-full" />

        <p className="text-sm leading-relaxed">
          Welcome to <strong>Global Horizons Tours & Travels</strong>. By using our website, submitting enquiries, or booking transportation and tour services with us, you agree to comply with the following terms and conditions.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">1. Quotations & Reservations</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          All travel quotations are calculated based on your specific requirements (dates, group size, vehicle category, route, and duration). A booking is confirmed once the agreed terms and advance details are finalized directly with our team.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">2. Passenger Responsibilities</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Passengers are responsible for carrying necessary personal identification, monument entry tickets (unless included in custom agreed package), and abiding by local heritage site regulations at Ajanta, Ellora, and other monuments.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">3. Route Adjustments & Force Majeure</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          While we strive to adhere strictly to your planned schedule, minor route modifications may occur due to unforeseen road conditions, weather, or monument closures. Our driver and travel team will assist you to maintain a smooth experience.
        </p>
      </div>
    </div>
  );
}
