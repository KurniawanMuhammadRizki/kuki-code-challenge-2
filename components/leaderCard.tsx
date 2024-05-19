"use client";
import React from "react";
import Image from "next/image";

interface LeaderCardProps {
  src: string;
  alt: string;
  quote: string;
  name: string;
  position: string;
  experience: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  src,
  alt,
  quote,
  name,
  position,
  experience,
}) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100  font-Helvetica-Neue">
        <figure>
          <Image src={src} alt={alt} width={380} height={380} />
          {/* <img src={src} alt={alt} width={380} height={380} /> */}
        </figure>

        <div className="card-body max-w-[692px]">
          <div>
            <p className="mb-2">Our Leaders</p>
            <h2 className="card-title text-xl lg:text-4xl font-bold mb-10">
              Meet the dynamos that keep Kukilabs wheel of awesome innovation
              spinning
            </h2>
          </div>

          <p className=" text-lg lg:text-2xl font-normal border-l-2 border-l-primary-color pl-8 mb-16">
            {quote}
          </p>

          <div>
            <p className="font-semibold">{name}</p>
            <p>{position}</p>
          </div>

          <div className="border-t-2 border-dashed">
            <p>{experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
