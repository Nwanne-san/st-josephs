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
    <div className="h-screen flex justify-between flex-col pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <HeroSection />
      <Welcome />
      <Wrapper>
        <Hero showOverlay={false} backgroundImage="/icons/about-bg.svg" />
      </Wrapper>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
      <Services />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}
