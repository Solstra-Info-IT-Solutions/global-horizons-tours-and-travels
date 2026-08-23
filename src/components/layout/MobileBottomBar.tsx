"use client";

import Link from "next/link";
import { MessageSquare, Phone, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

export function MobileBottomBar() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 94222 00000";

  return (
    <aside aria-label="Mobile Contact Bar" className="fixed bottom-0 left-0 right-0 z-40 bg-[#060b18]/95 backdrop-blur-lg border-t border-[#1c2541] px-2 py-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-1.5">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        <a
          href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#1c2541] hover:bg-[#283559] text-white transition-colors border border-[#d4af37]/30"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#d4af37]" />
          <span className="text-[10px] font-bold">Call Us</span>
        </a>

        <Link
          href="/enquiry"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#060b18] transition-all font-bold"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold">Enquire</span>
        </Link>
      </div>
    </aside>
  );
}
