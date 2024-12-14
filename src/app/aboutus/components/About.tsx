import Wrapper from "@/components/ui/Wrapper";
import React from "react";
import Image from "next/image";
import { AboutImage } from "../../../../public/icons";

const About = () => {
  return (
    <Wrapper className="flex gap-5">
      <Image src={AboutImage} alt="" />
      <div className="flex flex-col h-full gap-7">
        <div></div>
        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
