import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Herosection";
import MapComponent from "@/components/ui/Map";
import BookAppointment from "../components/Appointment";
import Schedule from "./components/Schedule";
import Wrapper from "@/components/ui/Wrapper";
import Footer from "@/components/layout/Footer";

const Appointment: React.FC = () => {
  return (
    <div className="relative">
      <Navbar  className="backdrop-blur-xl fixed top-0 w-full"/>
      <div className=" mt-[2rem] sm:mt-[5rem] lg:mt-[10rem]">
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
        <Footer/>
      </div>
    </div>
  );
};

export default Appointment;
