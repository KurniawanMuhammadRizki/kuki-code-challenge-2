import React from "react";
import Image from "next/image";

interface WhyKukilabsItemProps {
  title: string;
  desc: string;
  src: string;
  alt: string;
}
const WhyKukilabsItem: React.FC<WhyKukilabsItemProps> = ({
  title,
  desc,
  src,
  alt,
}) => {
  return (
    <div className="flex flex-col max-w-[288px] items-center px-5">
      <div className="mb-2">
        <Image src={src} alt={alt} width={32} height={32} />
      </div>
      <div className="text-xl font-semibold mb-2">{title}</div>
      <div className="wrap mb-2">{desc}</div>
    </div>
  );
};

export default WhyKukilabsItem;
