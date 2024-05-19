import React from "react";
import Image from "next/image";
import AnimationWrapper from "./animationWrapper";

const CardInformation: React.FC = () => {
  return (
    <AnimationWrapper y={40} transition={{ ease: "easeOut", duration: 1 }}>
      <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
        <div className="card lg:card-side bg-primary-color flex">
          <div className="card-body flex flex-col font-Helvetica-Neue text-white">
            <h2 className="max-w-[500px] font-bold text-4xl text-left">
              Together, shaping Indonesia's digital economy
            </h2>
            <p className="max-w-[500px] text-wrap text-left">
              Kukilabs is a transformative platform that offers digital
              solutions and services to empower businesses to achieve their best
              results at a larger scale.
            </p>
            <p>A glimpse into Kukilabs</p>
          </div>

          <figure>
            <Image
              src={"/img-home-01.webp"}
              alt={"logo-gartner"}
              width={1301}
              height={929}
            />
          </figure>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default CardInformation;
