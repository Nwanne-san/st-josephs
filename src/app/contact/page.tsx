import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Herosection";
import MapComponent from "@/components/ui/Map";
import React from "react";
import ContactUs from "./components/ContactUs";
import Footer from "@/components/layout/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero
        backgroundImage="/icons/contact-bg.svg"
        breadcrumbs="Home / Contact"
        heading="Our Contacts"
      />
      <MapComponent />
      <ContactUs/>
      <Footer/>
    </>
  );
};

export default Contact;
