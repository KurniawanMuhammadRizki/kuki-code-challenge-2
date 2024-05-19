import Image from "next/image";
import React from "react";
import WhyKukilabsProofStat from "./whyKukilabsProofStat";

const WhyKukilabsProof: React.FC = () => {
  return (
    <div className="stats shadow w-full ">
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
  );
};

export default WhyKukilabsProof;
