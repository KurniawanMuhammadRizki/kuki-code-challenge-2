import Image from "next/image";
import React from "react";
import WhyKukilabsItem from "./whyKukilabsItem";
import WhyKukilabsProof from "./whyKukilabsProof";

// const WhykukiLabs: React.FC = () => {
//   return (
//     <div className="py-16 bg-primary-color flex flex-col text-center  h-[500px] text-white">
//       <p className="mb-2">Why Kukilabs</p>
//       <h2 className="font-bold text-4xl mb-10">
//         Integrated digital solution <br></br>with security assurance and
//         scalability
//       </h2>

//       <div className="flex flex-row  justify-center gap flex-wrap bg-primary-color">
//         <WhyKukilabsItem
//           title="Cloud-based"
//           desc="Installation, maintenance, and platform development come at no cost."
//           src="/ic-w-cloud.svg"
//           alt="ic-w-cloud"
//         />

//         <div className="flex flex-col max-w-[288px] items-center">
//           <WhyKukilabsItem
//             title="World-class security"
//             desc="System certified to industry security standards and regulations."
//             src="/ic-w-protection-Copy.svg"
//             alt="ic-w-protection"
//           />
//         </div>

//         <div className="flex flex-col max-w-[288px] items-center">
//           <WhyKukilabsItem
//             title="Dedicated support"
//             desc="Consultation support, implementation assistance, and aftersales support."
//             src="/Call-Center.svg"
//             alt="Call-Center"
//           />
//         </div>
//       </div>
//       <div className="pt-8 pb-16  px-5 sm:px-10 md:px-14 lg:px-[76px] bg-primary-color h-[500px]">
//         <WhyKukilabsProof />
//       </div>
//     </div>
//   );
// };
const WhykukiLabs: React.FC = () => {
  return (
    <div className="py-16 bg-primary-color flex flex-col text-center text-white">
      <p className="mb-2">Why Kukilabs</p>
      <h2 className="font-bold text-4xl mb-10">
        Integrated digital solution <br /> with security assurance and
        scalability
      </h2>

      <div className="flex flex-row justify-center gap flex-wrap bg-primary-color">
        <WhyKukilabsItem
          title="Cloud-based"
          desc="Installation, maintenance, and platform development come at no cost."
          src="/ic-w-cloud.svg"
          alt="ic-w-cloud"
        />

        <div className="flex flex-col max-w-[288px] items-center">
          <WhyKukilabsItem
            title="World-class security"
            desc="System certified to industry security standards and regulations."
            src="/ic-w-protection-Copy.svg"
            alt="ic-w-protection"
          />
        </div>

        <div className="flex flex-col max-w-[288px] items-center">
          <WhyKukilabsItem
            title="Dedicated support"
            desc="Consultation support, implementation assistance, and aftersales support."
            src="/Call-Center.svg"
            alt="Call-Center"
          />
        </div>
      </div>

      <div className="py-8 px-5 sm:px-10 md:px-14 lg:px-[76px] bg-primary-color">
        <WhyKukilabsProof />
      </div>
    </div>
  );
};

export default WhykukiLabs;
