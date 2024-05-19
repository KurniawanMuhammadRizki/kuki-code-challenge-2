import React from "react";
import AnimationWrapper from "./animationWrapper";
import WhatsappsBtn from "./whatsappsBtn";

interface CtaProps {
  title: string;
  desc: string;
}

const Cta: React.FC<CtaProps> = ({ title, desc }) => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
      <AnimationWrapper y={40} transition={{ ease: "easeOut", duration: 1 }}>
        <div className=" flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className=" text-4xl font-bold mb-4 lg:text-center">
              {title}
            </div>
            <div className=" max-w-[500px] mb-4 lg:text-center">{desc}</div>
            <div className=" max-w-[500px] mb-4 lg:text-center font-semibold text-primary-color">
              #KeepUpKeepInnovating
            </div>
            <WhatsappsBtn />
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default Cta;
