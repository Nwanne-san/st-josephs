import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import HeroSection from "./components/HeroSection";
import Hero from "@/components/ui/Herosection";
import Services from "./components/Services";
import Wrapper from "@/components/ui/Wrapper";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="relative flex justify-between flex-col pb-20 gap-5 sm:gap-10  font-[family-name:var(--font-geist-sans)]">
      <div className="relative">
        <Navbar className="backdrop-blur-xl fixed top-0 w-full" />
        <HeroSection />
      </div>
      <Welcome />
      <Wrapper>
        <Hero showOverlay={false} backgroundImage="/icons/about-bg.svg" />
      </Wrapper>
      <Services />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}
