import React from "react";
import Wrapper from "@/components/ui/Wrapper";
import { ArrowRight } from "lucide-react";
import { Yeseva_One } from "next/font/google";
import Link from "next/link";

const yeseva = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

function Welcome() {
  return (
    <Wrapper className="text-center flex flex-col items-center justify-center">
      <div>
        <h2 className="text-center text-xl uppercase font-semibold text-secondary mb-2">
          Welcome to Meddical
        </h2>
        <h3
          className={`${yeseva.className} text-center text-5xl font-bold text-primary mb-8`}
        >
          Our Specialties
        </h3>
        <p className="max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>
      <Link
        href={`/aboutus`}
        className="flex gap-4 items-center text-secondary drop-shadow-2xl"
      >
        Learn More
        <ArrowRight className="text-black"/>
      </Link>
    </Wrapper>
  );
}

export default Welcome;
