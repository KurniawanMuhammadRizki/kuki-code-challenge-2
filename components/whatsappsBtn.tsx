import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhatsappsBtn = () => {
  return (
    <div>
      <Link
        className="btn btn-md text-white btn-primary"
        href="https://wa.me/6281340921609">
        <Image
          src={"/whatsapp-fill-svgrepo-com (1).svg"}
          alt={"wa"}
          width={28}
          height={28}
        />
        WhatsApp Us
      </Link>
    </div>
  );
};

export default WhatsappsBtn;
