"use client";
import React, { useState } from "react";

const HeroVideo: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <>
      <div className="relative w-full h-full">
        <img
          src="/heroThumbnail.webp"
          alt="Loading video..."
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          onCanPlayThrough={() => setVideoLoaded(true)}>
          <source
            src={
              "https://res.cloudinary.com/dwrm5t649/video/upload/f_auto:video,q_auto/yj52s8y1z3qgts1rt42g"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default HeroVideo;
