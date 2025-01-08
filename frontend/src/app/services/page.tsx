import React from "react";
import Hero from "@/components/ui/Herosection";
import Navbar from "@/components/layout/Navbar";
import Contact from "../components/Contact";

function OurServices() {
  return (
    <div className="relative">
      <Navbar className="backdrop-blur-xl fixed top-0 w-full" />
      <div className=" mt-[2rem] sm:mt-[5rem] lg:mt-[8rem]">
        <Hero
          backgroundImage="/icons/contact-bg.svg"
          breadcrumbs="Home/ Contact"
          heading="Our Contacts"
        />
        <Contact/>
      </div>
    </div>
  );
}

export default OurServices;
