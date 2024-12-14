import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Herosection";
import MapComponent from "@/components/ui/Map";
import BookAppointment from "../components/Appointment";
import Schedule from "./components/Schedule";
import Wrapper from "@/components/ui/Wrapper";

const Appointment: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero
        backgroundImage="/icons/book-appointment.svg"
        breadcrumbs="Home/ Appointment"
        heading="Book an Appointment"
      />
      <Wrapper className="grid grid-cols-2 justify-between gap-4 w-full ">
        <BookAppointment className="!bg-none flex flex-col !gap-16 !px-0 !w-full !text-primary" />
        <Schedule />
      </Wrapper>
      <Wrapper>
        <MapComponent />
      </Wrapper>
    </div>
  );
};

export default Appointment;
