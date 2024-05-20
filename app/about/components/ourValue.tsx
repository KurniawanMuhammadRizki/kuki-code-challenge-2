import React from "react";
import Image from "next/image";

const OurValue: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-primary-color">
      <div className="card lg:card-side flex  ">
        <figure>
          {/* <Image
            src={"/Mekari-dukungan-purna-jual-hero-2.webp"}
            alt={"img-our-value"}
            width={697}
            height={509}
          /> */}
          <img
            src={"/Mekari-dukungan-purna-jual-hero-2.webp"}
            alt={"img-our-value"}
          />
        </figure>
        <div className="card-body p-1 flex flex-col font-Helvetica-Neue justify-center items-center max-w-[580px]  text-white">
          <div>
            <h2 className="max-w-[580px] font-bold text-4xl text-start">
              Our values
            </h2>
          </div>

          <div className="max-w-[580px] text-wrap  text-left">
            <p>
              Kukilabs is made of a group of Kukinians who share the same
              pillars and values. In creating our biggest impact, Kukinians
              believe in six main values:
            </p>
            <br />
            <div>
              <ul className="flex flex-col mb-4">
                <li className="flex items-center mb-2">
                  <img src={"/ic-check-alt.svg"} alt="check" className="mr-2" />{" "}
                  Customer First
                </li>
                <li className="flex items-center mb-2">
                  <img src={"/ic-check-alt.svg"} alt="check" className="mr-2" />{" "}
                  Teamwork
                </li>
                <li className="flex items-center mb-2">
                  <img src={"/ic-check-alt.svg"} alt="check" className="mr-2" />{" "}
                  Think Win-Win
                </li>
                <li className="flex items-center mb-2">
                  <img src={"/ic-check-alt.svg"} alt="check" className="mr-2" />{" "}
                  Highest Standard
                </li>
                <li className="flex items-center mb-2">
                  <img src={"/ic-check-alt.svg"} alt="check" className="mr-2" />{" "}
                  Learn & Be Curious
                </li>
                <li className="flex items-center mb-2">
                  <img src={"/ic-check-alt.svg"} alt="check" className="mr-2" />{" "}
                  Deliver Better
                </li>
              </ul>
              To embody these 6 values, Kukinians always give our best to uphold
              the critical behaviors of #BukaJalan, #BikinBangga, and
              #BarengBareng.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
