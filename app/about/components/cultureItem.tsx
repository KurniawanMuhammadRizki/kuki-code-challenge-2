import React from "react";
import Image from "next/image";
import AnimationWrapper from "@/components/animationWrapper";

interface CultureItemProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}
const CultureItem: React.FC<CultureItemProps> = ({ src, alt, title, desc }) => {
  return (
    <AnimationWrapper y={40} transition={{ ease: "easeOut", duration: 1 }}>
      <div className="flex flex-col p-2">
        <Image className="mb-2" src={src} alt={alt} width={48} height={48} />
        <p className="font-semibold mb-3">{title}</p>
        <p className="max-w-[348px]">{desc}</p>
      </div>
    </AnimationWrapper>
  );
};

export default CultureItem;
