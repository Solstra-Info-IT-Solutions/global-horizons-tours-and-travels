import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Global Horizons Tours & Travels",
};

export default function CancellationPolicyPage() {
  return (
    <div className="bg-[#faf8f5] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg text-slate-800">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0b132b]">
          Cancellation Policy
        </h1>
        <div className="w-16 h-1 bg-[#d4af37] rounded-full" />

        <p className="text-sm leading-relaxed">
          At <strong>Global Horizons Tours & Travels</strong>, we understand that travel plans can change due to flight alterations or personal emergencies. We maintain fair and transparent cancellation guidelines.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">1. Advance Notice Cancellations</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          If you need to cancel or reschedule your trip, please notify us via WhatsApp or phone as early as possible. Cancellations made well in advance of vehicle dispatch are handled with minimal processing fees or full flexibility to reschedule.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">2. Same-Day or Last-Minute Cancellations</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Cancellations requested after a driver or vehicle has already been dispatched to your pickup location may incur nominal driver mobilization and mileage fees.
        </p>

        <h2 className="font-serif text-xl font-bold text-[#0b132b] pt-4">3. Refunds & Rescheduling</h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We encourage travelers to adjust their dates rather than cancel whenever possible. Our team will happily reschedule your vehicle assignment to match your revised flight or train arrival free of penalty whenever vehicle availability permits.
        </p>
      </div>
    </div>
  );
}
