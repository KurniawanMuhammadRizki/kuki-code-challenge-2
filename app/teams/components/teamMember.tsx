import AnimationWrapper from "@/components/animationWrapper";
import Image from "next/image";
import React from "react";

const TeamMember: React.FC = () => {
  const listImgUrl = [
    "/teams/0.jpg",
    "/teams/11.jpg",
    "/teams/18.jpg",
    "/teams/23.jpg",
    "/teams/27.jpg",
    "/teams/30.jpg",
    "/teams/34.jpg",
    "/teams/37.jpg",
    "/teams/43.jpg",
    "/teams/44.jpg",
    "/teams/48.jpg",
    "/teams/50.jpg",
    "/teams/60.jpg",
    "/teams/62.jpg",
    "/teams/63.jpg",
    "/teams/64.jpg",
    "/teams/69.jpg",
    "/teams/73.jpg",
    "/teams/75.jpg",
    "/teams/85.jpg",
    "/teams/86.jpg",
    "/teams/90.jpg",
    "/teams/91.jpg",
  ];
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {listImgUrl?.map((item, index) => (
          <div key={index} className="p-3">
            <AnimationWrapper
              y={40}
              transition={{ ease: "easeOut", duration: 1 }}>
              <Image
                className="mask mask-decagon"
                width={100}
                height={100}
                src={item}
                objectFit="cover"
                alt={"img" + index}
              />
            </AnimationWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
