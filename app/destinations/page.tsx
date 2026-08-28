import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationHero from "@/components/destinations/DestinationHero";
import LocalBaseSection from "@/components/destinations/LocalBaseSection";
import HeritageWondersSection from "@/components/destinations/HeritageWondersSection";

export const metadata: Metadata = {
  title: "Destinations - Discover Maharashtra | Global Tours & Travels",
  description:
    "Explore ancient wonders, sacred sites, and UNESCO World Heritage landmarks in Maharashtra with local experts at Global Tours & Travels.",
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5]">
      <Navbar />
      <main className="flex-grow">
        <DestinationHero />
        <LocalBaseSection />
        <HeritageWondersSection />
      </main>
      <Footer />
    </div>
  );
}
