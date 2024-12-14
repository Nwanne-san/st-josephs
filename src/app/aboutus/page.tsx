import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Herosection";
import About from "./components/About";
import Contact from "../components/Contact";
import Testimonial from "./components/Testimonial";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        backgroundImage="/icons/about-bg.svg"
        breadcrumbs="Home/ About"
        heading="About us"
      />
      <About/>
      <Testimonial/>
      <Contact/>
      {/* <MapComponent/> */}
    </div>
  );
};

export default AboutUs;
