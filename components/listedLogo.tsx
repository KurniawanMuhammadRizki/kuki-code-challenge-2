import Image from "next/image";
import React from "react";

const ListedLogo: React.FC = () => {
  return (
    <div className="flex flex-wrap  md:px-14 items-center gap-5 w-full hi">
      <Image
        src={"/logo-inv-capterra.svg"}
        alt={"logo-capterra"}
        width={148}
        height={40}
      />
      <Image
        src={"/logo-inv-gartner.svg"}
        alt={"logo-gartner"}
        width={148}
        height={40}
      />
      <Image
        src={"/logo-inv-crozdesk.svg"}
        alt={"logo-crozdesk"}
        width={148}
        height={40}
      />
      <Image src={"/logo-inv-g2.svg"} alt={"logo-g2"} width={60} height={40} />
      <Image
        src={"/logo-inv-get-app.svg"}
        alt={"logo-get-app"}
        width={148}
        height={40}
      />
      <Image
        src={"/logo-inv-software-advice.svg"}
        alt={"logo-software-advice"}
        width={148}
        height={40}
      />
    </div>
  );
};

export default ListedLogo;
