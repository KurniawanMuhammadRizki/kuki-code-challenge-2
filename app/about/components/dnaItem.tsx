import React from "react";
import Image from "next/image";
import { title } from "process";
import AnimationWrapper from "@/components/animationWrapper";

interface DnaItemProps {
  title: string;
  subTitle: string;
  desc: string;
}
const DnaItem: React.FC<DnaItemProps> = ({ title, subTitle, desc }) => {
  return (
    <AnimationWrapper y={40} transition={{ ease: "easeOut", duration: 1 }}>
      <div className="flex flex-col p-2">
        <h2 className="font-semibold underline text-xl text-primary-color mb-3">
          {title}
        </h2>
        <p className="font-semibold text-xl mb-3">{subTitle}</p>
        <p className="max-w-[348px]">{desc}</p>
      </div>
    </AnimationWrapper>
  );
};

export default DnaItem;
