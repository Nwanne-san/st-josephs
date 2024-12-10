import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import { contacts } from "@/data/contact";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <Wrapper className="flex flex-col gap-16 w-full">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-lg text-secondary uppercase font-bold">Get in touch</h1>
        <h1 className="text-4xl text-primary">Contact</h1>
      </div>
      <section className="grid grid-cols-4 gap-4 w-full">
        {contacts.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-3.5 px-7 py-12 ${item.bgColor} rounded-lg w-full md:text-wrap`}
          >
            <Image src={item.src} alt="" />
            <p className={`${item.color} uppercase font-bold text-lg`}>
              {item.name}
            </p>
            <span className={`${item.color} `}>{item.text}</span>
          </div>
        ))}
      </section>
    </Wrapper>
  );
};

export default Contact;
