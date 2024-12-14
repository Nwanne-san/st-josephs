import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Herosection";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        backgroundImage="/icons/about-bg.svg"
        breadcrumbs="Home/ About"
        heading="About us"
      />
      
      {/* <MapComponent/> */}
    </div>
  );
};

export default AboutUs;
