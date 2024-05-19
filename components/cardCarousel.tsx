import Image from "next/image";
import React from "react";

interface CardCarouselProps {
  name: string;
  position: string;
  imgSrc: string;
  imgAlt: string;
  imgwidth: number;
  imgHeight: number;
  desc: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({
  name,
  position,
  imgSrc,
  imgAlt,
  imgHeight,
  imgwidth,
  desc,
}) => {
  return (
    <div className="card h-[252px] pt-0 font-Helvetica-Neue  bg-base-color rounded-xl">
      <div className="card-body  bg-base-color grid grid-rows-2 ">
        <div className="font-normal font-Helvetica-Neue text-left">{desc}</div>
        <div className="grid grid-cols-5 items-end text-justify">
          <div className="col-span-3">
            <div className="flex flex-col">
              <div className="font-semibold font-Helvetica-Neue">{name}</div>
              <div className="font-Helvetica-Neue">{position}</div>
            </div>
          </div>
          <div className="col-span-2 text-right">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={imgwidth}
              height={imgHeight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
