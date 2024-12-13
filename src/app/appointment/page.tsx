import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/ui/Herosection";
import MapComponent from "@/components/ui/Map";
import BookAppointment from "../components/Appointment";
import Schedule from "./components/Schedule";
import Wrapper from "@/components/ui/Wrapper";

const Appointment: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        backgroundImage="/icons/book-appointment.svg"
        breadcrumbs="Home/ Appointment"
        heading="Book an Appointment"
      />
      <Wrapper className="grid grid-cols-2 justify-between gap-4 w-full ">
        <BookAppointment className="!bg-none flex flex-col !px-0 !w-full !text-primary"/>
        <Schedule />
      </Wrapper>
      {/* <MapComponent/> */}
    </div>
  );
};

export default Appointment;
