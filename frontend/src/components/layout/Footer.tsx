import React from "react";
import Image from "next/image";
import Wrapper from "../ui/Wrapper";
import { Logo2, Send } from "../../../public/icons";
import { contact_links, links } from "@/data/footer";

const Footer: React.FC = () => {
  return (
    <Wrapper className="bg-primary w-full flex flex-col gap-12 text-white py-9">
      <div className="flex gap-10 justify-between w-full items-center">
        <div className="flex flex-col gap-6 w-64">
          <Image src={Logo2} alt="" />
          <h4>Leading the Way in Medical Excellence, Trusted Care.</h4>
        </div>
        <div className="flex flex-col gap-9 ">
          <span className="font-semibold text-lg md:text-nowrap">Important Links</span>
          <ul>
            {links.map((item, index) => (
              <a
                href={item.route || "#"}
                key={index}
                target="_blank"
                className="flex gap-2"
              >
                <p className="hover:text-accent text-white duration-200">
                  {item.name}
                </p>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-9">
          <span className="font-semibold text-lg">Contact Us</span>
          <ul>
            {contact_links.map((item, index) => (
              <a
                href={item.route}
                key={index}
                target="_blank"
                className="flex gap-2 md:text-nowrap"
              >
                <p className="hover:text-accent text-white duration-200">
                  {item.name}
                </p>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-9 ">
          <span className="font-semibold text-lg">Newsletter</span>
          <div className="bg-accent rounded-lg flex gap-2 py-3.5 px-2.5">
            <input
              type="email"
              name="Email"
              id=""
              className="bg-accent rounded-lg placeholder:text-primary/50 text-primary w-[260px] focus:outline-none"
              placeholder="Enter your email address"
            />
            <button>
              <Image src={Send} alt="message button" />
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="flex justify-between">
        <p>&copy; 2021 Hospital&apos;s name All Rights Reserved by PNTEC-LTD</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
