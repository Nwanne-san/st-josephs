import Wrapper from "@/components/ui/Wrapper";
import Image from "next/image";
import { Quote } from "../../../../public/icons";

const Testimonial = () => {
  return (
    <Wrapper
      style={{ backgroundImage: "url(/icons/testimony-bg.svg)" }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute inset-0 bg-primary opacity-60 z-0"></div>

      <div className="py-16 flex flex-col gap-5 justify-center items-center text-white relative z-0">
        <Image src={Quote} alt="quote-vector" />
        <p className="text-center max-w-[640px] pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur Consequat
          faucibus porttitor enim et.
        </p>
        <hr className="w-[100px]" />
        <span>John Doe</span>
      </div>
    </Wrapper>
  );
};

export default Testimonial;
