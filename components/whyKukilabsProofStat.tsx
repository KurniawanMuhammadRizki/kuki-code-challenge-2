import React from "react";
import Image from "next/image";

interface WhyKukilabsProofStatProps {
  title: string;
  desc: string;
  src: string;
  alt: string;
}

const WhyKukilabsProofStat: React.FC<WhyKukilabsProofStatProps> = ({
  title,
  desc,
  src,
  alt,
}) => {
  return (
    <div className="stat">
      <div className="stat-title flex flex-col items-center ">
        <div className="mb-2">
          <Image src={src} alt={alt} width={32} height={32} />
        </div>
      </div>
      <div className="stat-value mb-2 text-2xl">{desc}</div>
      <div className="stat-desc text-base mb-2">{title}</div>
    </div>
  );
};

export default WhyKukilabsProofStat;
