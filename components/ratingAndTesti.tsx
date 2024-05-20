import React from "react";
import AnimationWrapper from "./animationWrapper";
import CardInformation from "./cardInformation";
import ListedLogo from "./listedLogo";
import Rating from "./rating";
import TestiCarousel from "./testiCarousel";

const RatingAndTesti: React.FC = () => {
  return (
    <div className="py-16 flex px-10 flex-col justify-center items-center bg-base-100 ">
      <Rating />
      <p className="text-base font-semibold mb-2">We’re listed on</p>
      <div className="mb-4">
        <ListedLogo />
      </div>
      <div className="h-[272px] w-full">
        {/* <AnimationWrapper y={40} transition={{ ease: "easeOut", duration: 1 }}> */}
        <TestiCarousel />
        {/* </AnimationWrapper> */}
      </div>
    </div>
  );
};

export default RatingAndTesti;
