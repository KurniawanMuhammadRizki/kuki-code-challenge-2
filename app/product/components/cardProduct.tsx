import AnimationWrapper from "@/components/animationWrapper";
import Image from "next/image";
import React from "react";

interface CardProductProps {
  src: string;
  alt: string;
  appName?: string;
  title: string;
  desc: string;
  list?: string[];
  imgLeft: boolean;
}

const CardProduct: React.FC<CardProductProps> = ({
  src,
  alt,
  appName,
  title,
  desc,
  list,
  imgLeft,
}) => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
      <AnimationWrapper y={40} transition={{ ease: "easeOut", duration: 1 }}>
        <div className="flex font-Helvetica-Neue text-black flex-col lg:flex-row">
          {imgLeft ? (
            <>
              <div className="pr-8">
                <Image src={src} alt={alt} width={704} height={543} />
              </div>
              <div className="flex flex-col max-w-[540px] items-start">
                <div className="text-2xl mb-1 font-bold text-primary-color">
                  <h2>{appName}</h2>
                </div>
                <div className="text-3xl mb-4 font-bold">
                  <h2>{title}</h2>
                </div>
                <div className="mb-6">
                  <p>{desc}</p>
                </div>
                <div>
                  <ul className="flex flex-col mb-4">
                    {list?.map((item, index) => (
                      <li key={index} className="flex mb-2">
                        <div className="flex items-start">
                          <img
                            src={"/ic-check-alt.svg"}
                            alt="check"
                            className="mr-2"
                          />
                          <p>{item}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col max-w-[540px] items-start">
                <div className="text-2xl mb-1 font-bold text-primary-color">
                  <h2>{appName}</h2>
                </div>
                <div className="text-3xl mb-4 font-bold">
                  <h2>{title}</h2>
                </div>
                <div className="mb-6">
                  <p>{desc}</p>
                </div>
                <div>
                  <ul className="flex flex-col mb-4">
                    {list?.map((item, index) => (
                      <li key={index} className="flex mb-2">
                        <div className="flex items-start">
                          <img
                            src={"/ic-check-alt.svg"}
                            alt="check"
                            className="mr-2"
                          />
                          <p>{item}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pr-8">
                <Image src={src} alt={alt} width={704} height={543} />
              </div>
            </>
          )}
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default CardProduct;
