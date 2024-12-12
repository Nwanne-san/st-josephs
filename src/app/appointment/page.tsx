import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/ui/Herosection";

const Appointment: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        backgroundImage="/icons/book-appointment.svg"
        breadcrumbs="Home/ Appointment"
        heading="Book an Appointment"
      />
    </div>
  );
};

export default Appointment;
