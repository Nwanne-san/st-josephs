import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { Work_Sans } from "next/font/google";
import Button from "@/components/ui/Button";

const workSans = Work_Sans({ subsets: ["latin"], weight: ['400', '500'] });

const Appointment: React.FC = () => {
  return (
    <Wrapper
      style={{ backgroundImage: "url('/icons/appointment-bg.svg')" }}
      className="flex justify-between items-center py-16 w-full relative"
    >
      <div className="absolute inset-0 bg-white opacity-60 z-0"></div>

      <div className="flex flex-col gap-4 w-full relative">
        <h2 className={`${workSans.className} text-secondary text-4xl`}>Book an Appointment</h2>
        <p className="max-w-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>
      <form action="" className="rounded-lg w-full relative">
        <Button className="uppercase w-full !rounded-none">submit</Button>
      </form>
    </Wrapper>
  );
};

export default Appointment;
