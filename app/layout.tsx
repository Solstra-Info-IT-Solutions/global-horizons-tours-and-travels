import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { WhatsAppButton } from "@/src/components/layout/WhatsAppButton";
import { MobileBottomBar } from "@/src/components/layout/MobileBottomBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Global Horizons Tours & Travels | Aurangabad Taxi & Ajanta Ellora Tours",
    template: "%s | Global Horizons Tours & Travels",
  },
  description:
    "20+ years of trusted experience in Chhatrapati Sambhajinagar (Aurangabad). Private transportation, Ajanta & Ellora cave tours, airport transfers, and customized Maharashtra travel packages.",
  keywords: [
    "Aurangabad travel agency",
    "Chhatrapati Sambhajinagar travel agency",
    "Ajanta Ellora tour package",
    "Ajanta Ellora taxi service",
    "Aurangabad airport transfer",
    "Shirdi taxi from Aurangabad",
    "Maharashtra private tour operator",
    "Foreign tourist travel assistance India",
  ],
  openGraph: {
    title: "Global Horizons Tours & Travels | Aurangabad Taxi & Ajanta Ellora Tours",
    description:
      "Reliable private transportation, Ajanta & Ellora cave tours, airport transfers, and customized travel itineraries backed by 20+ years of industry experience.",
    url: "https://globalhorizonstours.com",
    siteName: "Global Horizons Tours & Travels",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Horizons Tours & Travels",
    description: "20+ Years Experience in Private Transportation, Ajanta & Ellora Tours, and Maharashtra Travel.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for LocalBusiness / TravelAgency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Global Horizons Tours & Travels",
    description:
      "20+ years of experience offering private transportation, airport transfers, Ajanta & Ellora tours, and customized Maharashtra travel packages.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chhatrapati Sambhajinagar (Aurangabad)",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: ["Chhatrapati Sambhajinagar", "Ajanta Caves", "Ellora Caves", "Shirdi", "Maharashtra"],
    priceRange: "$$",
    currenciesAccepted: "INR",
    openingHours: "Mo-Su 00:00-23:59",
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919422200000",
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#d4af37]/30 selection:text-[#0b132b]">
        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomBar />
      </body>
    </html>
  );
}
