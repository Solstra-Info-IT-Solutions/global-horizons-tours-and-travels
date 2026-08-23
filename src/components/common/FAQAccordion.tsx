"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/src/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#d4af37] shadow-lg"
                : "bg-white/80 border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base sm:text-lg font-bold text-[#0b132b] flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#b8860b] shrink-0" />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#b8860b]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
