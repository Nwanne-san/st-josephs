"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LogoMain } from "../../../public/icons";
import { details } from "@/data/navbar";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { links } from "@/data/navbar";
import Wrapper from "../ui/Wrapper";

const Navbar: React.FC = () => {
  const router = useRouter();

  const ButtonClick = () => {
    router.push("/appointment");
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <Wrapper className="w-full flex justify-between !py-4 items-center" >
          <Link href={'/'}>
            <Image src={LogoMain} alt="Hospital Logo" />
          </Link>
          <div>
            <ul className="flex gap-5">
              {details.map((item, index) => (
                <Link
                  href={item.href || "#"}
                  key={index}
                  className="flex gap-2"
                >
                  <Image src={item.src} alt={item.alt} />
                  <div className="flex flex-col font-medium text-sm xl:text-base">
                    <p className="uppercase text-primary">{item.message}</p>
                    <span className="text-secondary">{item.text}</span>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </Wrapper>
        <Wrapper className="w-full bg-primary flex items-center justify-between !py-4">
          <ul className="flex gap-5">
            {links.map((item, index) => (
              <Link
                href={item.route || "#"}
                key={index}
                className="flex gap-2"
              >
                <p className="hover:text-accent text-white duration-200">
                  {item.name}
                </p>
              </Link>
            ))}
          </ul>
          <Button onClick={ButtonClick}>Appointment</Button>
        </Wrapper>
      </div>
    </>
  );
};

export default Navbar;
