"use client";

import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/src/lib/whatsapp";

interface WhatsAppButtonProps {
  customMessage?: string;
}

export function WhatsAppButton({ customMessage }: WhatsAppButtonProps) {
  const whatsappUrl = getWhatsAppUrl(customMessage);

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group-hover:shadow-emerald-900/50"
        aria-label="Chat with Global Horizons Tours & Travels on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
