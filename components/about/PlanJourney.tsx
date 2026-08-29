import { ArrowRight, MessageCircle } from "lucide-react";

export default function PlanJourney() {
  return (
    <section className="px-6 pb-16 pt-2 md:px-10 lg:px-20">

      <div className="mx-auto max-w-[900px] text-center">

        <h2 className="font-serif text-4xl font-bold text-[#14596a] md:text-[42px]">
          Let&apos;s Plan Your Journey
        </h2>

        <p className="mx-auto mt-4 max-w-[600px] text-[11px] leading-[17px] text-gray-600">
          Speak with our travel designers today to begin crafting an itinerary
          that perfectly aligns with your aspirations and timeline.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="/contact"
            className="inline-flex h-10 items-center justify-center gap-2 bg-[#dc6945] px-6 text-[10px] font-medium text-white transition hover:bg-[#c55332]"
          >
            Start Planning
            <ArrowRight size={13} />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 border border-gray-400 bg-white px-6 text-[10px] text-gray-700 transition hover:bg-gray-100"
          >
            <MessageCircle size={13} />
            WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}