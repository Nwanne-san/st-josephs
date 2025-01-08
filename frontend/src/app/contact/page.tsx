import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Herosection";
import MapComponent from "@/components/ui/Map";
import React from "react";
import ContactUs from "./components/ContactUs";
import Footer from "@/components/layout/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Navbar className="backdrop-blur-xl fixed top-0 w-full" />
        <div className=" mt-[2rem] sm:mt-[5rem] lg:mt-[8rem]">
          <Hero
            backgroundImage="/icons/contact-bg.svg"
            breadcrumbs="Home / Contact"
            heading="Our Contacts"
          />
          <MapComponent />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
