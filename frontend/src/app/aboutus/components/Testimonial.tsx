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
          From the moment I walked in, I felt supported and cared for. The
          doctors were knowledgeable and explained every step of my treatment
          clearly, and the nurses were incredibly kind and attentive. The
          facility was clean and well-maintained, and the staff went above and
          beyond to make me feel comfortable. I truly felt like I was in the
          best hands possible.
        </p>
        <hr className="w-[100px]" />
        <span>John Nwankpa</span>
      </div>
    </Wrapper>
  );
};

export default Testimonial;
