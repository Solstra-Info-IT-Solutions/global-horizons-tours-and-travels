import Link from "next/link";
import { Briefcase, Building2, ShieldCheck, Clock, FileText, ArrowRight, MessageSquare } from "lucide-react";
import { getCorporateWhatsAppUrl } from "@/src/lib/whatsapp";

const CORP_SERVICES = [
  "Executive Airport & Station Pickup/Drop",
  "Office & Industrial Transit (Chhatrapati Sambhajinagar MIDC / Waluj)",
  "Intercity Business Transportation (Pune, Mumbai, Nashik)",
  "Event & Conference Group Transportation",
  "Custom Corporate Monthly / On-Demand Travel",
  "GST Invoicing & Priority Billing Assistance",
];

export function CorporateTravelSection() {
  const whatsappUrl = getCorporateWhatsAppUrl();

  return (
    <section className="py-16 sm:py-24 bg-[#0b132b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2541] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
              <Briefcase className="w-4 h-4" />
              <span>Business & Executive Mobility</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Professional Transportation for Corporate Travelers
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide dependable, punctual chauffeur-driven vehicles for companies, executives, visiting officers, corporate guests, and management teams.
            </p>

            <ul className="space-y-3 pt-2">
              {CORP_SERVICES.map((serv, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{serv}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/enquiry?tripType=Corporate%20Travel"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] hover:from-[#e5be48] hover:to-[#c5a059] text-[#060b18] text-xs sm:text-sm font-bold text-center shadow-xl transition-transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Corporate Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Corporate Helpdesk</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#060b18] border border-[#1c2541] p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1c2541] text-[#d4af37] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">Strict Punctuality</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Drivers arrive early for executive pickups and flight arrivals so schedules are never missed.
              </p>
            </div>

            <div className="bg-[#060b18] border border-[#1c2541] p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1c2541] text-[#d4af37] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">Corporate Discretion</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Courteous, well-groomed chauffeurs maintaining professional decorum for your visiting guests.
              </p>
            </div>

            <div className="bg-[#060b18] border border-[#1c2541] p-6 rounded-2xl space-y-3 sm:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#1c2541] text-[#d4af37] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">Transparent Tax Invoices</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Itemized bills, route logs, and corporate billing options for company accounting teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
