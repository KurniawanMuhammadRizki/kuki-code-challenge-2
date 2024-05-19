import React from "react";
import Image from "next/image";
import WhatsappsBtn from "../../../components/whatsappsBtn";

const CardProductTitle: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color ">
      <div className="card lg:card-side flex ">
        <div className="card-body p-1 flex flex-col sm:items-start md:items-center lg:items-start font-Helvetica-Neue  text-black">
          <div>
            <span className="mb-2">Kukilabs Product</span>
            <h2 className="max-w-[580px] font-bold text-4xl mb-6 text-left">
              Technology to meet modern business needs
            </h2>
          </div>
          <div className="max-w-[580px] text-wrap mb-10 text-left">
            <p>
              Every solution from Kukilabs is meticulously crafted to enhance
              productivity by streamlining operational activities for your
              business.
            </p>
          </div>
          <WhatsappsBtn />
        </div>
        {/* <figure>
          <Image
            src={"/Mekari-produk-hero.webp"}
            alt={"img-hero-product"}
            width={1301}
            height={929}
          />
          
        </figure> */}
        <div className="flex flex-col md:items-center">
          <img
            className="md:md:items-center"
            src={"/Mekari-produk-hero.webp"}
            alt={"img-our-value"}
            width={496}
            height={413}
          />
        </div>
      </div>
    </div>
  );
};

export default CardProductTitle;
