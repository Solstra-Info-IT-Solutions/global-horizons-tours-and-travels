import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Services from "@/components/Services";
import About from "@/app/about/page";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Destinationss from "@/components/Destinationss";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlanTour from "@/components/PlanTour";
import HappyClients from "@/components/HappyClients";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinationss/>
        <WhyChooseUs/>
        <PlanTour/>
        <HappyClients/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
