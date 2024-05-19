import React from "react";
import Image from "next/image";

const Investor: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px]  bg-primary-color flex flex-col text-center font-Helvetica-Neue text-white">
      <div className="font-bold text-4xl mb-4">Our Investors</div>
      <div className="mb-[64px]">
        We’re proud to be backed by the leading investors in the region
      </div>
      <div className="flex flex-row flex-wrap ">
        <Image
          src={"/logo-inv-money-forward.webp"}
          alt={"money-forward"}
          width={180}
          height={180}
        />
        <Image
          src={"/logo-inv-midplaza-holding.webp"}
          alt={"midplaza"}
          width={180}
          height={180}
        />
        <Image
          src={"/logo-inv-biznet.webp"}
          alt={"biznet"}
          width={180}
          height={180}
        />
        <Image
          src={"/logo-inv-east-venture.webp"}
          alt={"east-venture"}
          width={180}
          height={180}
        />
        <Image
          src={"/logo-inv-beenext.webp"}
          alt={"beenext"}
          width={180}
          height={180}
        />
        <Image
          src={"/logo-inv-mandiri-capital.webp"}
          alt={"mandiri-capital"}
          width={180}
          height={180}
        />
        <Image
          src={"/logo-inv-prasetia.webp"}
          alt={"prasetia"}
          width={180}
          height={180}
        />
      </div>
    </div>
  );
};

export default Investor;
