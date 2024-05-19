import WhyKukilabsProof from "@/components/whyKukilabsProof";
import WhyKukilabsProofStat from "@/components/whyKukilabsProofStat";
import React from "react";

const Grow: React.FC = () => {
  return (
    <div className="py-[64px]  px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color flex flex-col justify-center items-center">
      <div className="text-black text-center flex flex-col justify-center items-center mb-4">
        <p className="mb-2 font-semibold">Grow with Kukilabs</p>
        <h2 className="max-w-[580px] mb-2 font-bold text-4xl ">
          Unlock your potential
        </h2>
        <p>
          Headquartered in Jakarta, Kukilabs aims to be the trusted and
          accelerated development solution.
        </p>
      </div>
      <div className="stats bg-base-color  text-center w-full">
        <WhyKukilabsProofStat
          title="Clients"
          desc="20.000++"
          src="/ic-p-tips.svg"
          alt={"ic-p-tips"}
        />
        <WhyKukilabsProofStat
          title="Application users"
          desc="1.000.000++"
          src="/ic-team.svg"
          alt={"ic-team"}
        />
        <WhyKukilabsProofStat
          title="Business transaction"
          desc="9+ Trilion"
          src="/ic-p-payslip.svg"
          alt={"ic-p-payslip"}
        />
      </div>
    </div>
  );
};

export default Grow;
