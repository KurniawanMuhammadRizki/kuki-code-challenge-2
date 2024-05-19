import AnimationWrapper from "@/components/animationWrapper";
import Image from "next/image";
import React from "react";
import TeamStatisticItem from "./teamStatisticItem";

const TeamStatistic: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
      <div className="flex font-Helvetica-Neue text-black flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col w-full md:max-w-[440px] mr-4">
          <AnimationWrapper
            y={40}
            transition={{ ease: "easeOut", duration: 1 }}>
            <h2 className="text-4xl mb-4 font-bold">
              31% Woman(and counting++)
            </h2>
            <div className="flex">
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-woman.svg"}
                alt={"icon-woman"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-woman.svg"}
                alt={"icon-woman"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-woman.svg"}
                alt={"icon-woman"}
                height={100}
                width={100}
              />
            </div>
            <div className="flex flex-wrap mb-4">
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-man.svg"}
                alt={"icon-man"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-man.svg"}
                alt={"icon-man"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-man.svg"}
                alt={"icon-man"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-man.svg"}
                alt={"icon-man"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-man.svg"}
                alt={"icon-man"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-man.svg"}
                alt={"icon-man"}
                height={100}
                width={100}
              />
              <Image
                className="w-[60px] h-[60px]"
                src={"/icon-man.svg"}
                alt={"icon-man"}
                height={100}
                width={100}
              />
            </div>
          </AnimationWrapper>
        </div>
        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center">
            <TeamStatisticItem title="27" desc="Nations" />
            <TeamStatisticItem title=">10" desc="language" />
            <TeamStatisticItem title="80%" desc="Indonesian" />
            <TeamStatisticItem title="12%" desc="Indian" />
            <TeamStatisticItem title="85%" desc="Age < 30 years" />
            <TeamStatisticItem title="60%" desc="Engineer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamStatistic;
