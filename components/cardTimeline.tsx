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
    <div className="card bg-base-color shadow-xl mx-auto my-4 w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
      <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
        <img src={src} alt={alt} className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center p-4 sm:p-6">
        <h2 className="card-title text-lg sm:text-xl">{year}</h2>
        <p className="text-sm sm:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default CardTimeline;
// w-[400px] h-[390px]

// w-[320px] h-[178px]
