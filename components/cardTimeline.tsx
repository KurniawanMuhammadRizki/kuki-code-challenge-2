import React from "react";

interface CardTimelineProps {
  year: string;
  desc: string;
  src: string;
  alt: string;
}

const CardTimeline: React.FC<CardTimelineProps> = ({
  year,
  desc,
  src,
  alt,
}) => {
  return (
    <div className="card w-94 bg-base-color shadow-xl  mr-4">
      <figure className="px-10 pt-10">
        <img src={src} alt={alt} className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{year}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CardTimeline;
// w-[400px] h-[390px]

// w-[320px] h-[178px]
