import Link from "next/link";
import React from "react";
import AnimationWrapper from "./animationWrapper";
import HeroVideo from "./heroVideo";
// import heroVid from "@/assets/herovid.mp4";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="hero min-h-[85vh] relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted>
          <source src={"/herovid.mp4"} type="video/mp4" />
        </video>
        {/* <HeroVideo /> */}

        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>

        <div className="hero-content font-Helvetica-Neue text-white  absolute inset-0 flex flex-col sm:ml-16 md:ml-20  lg:ml-24 items-start ">
          <div className="max-w-md mx-auto sm:ml-0 md:ml-0 lg:ml-0">
            <h1 className="mb-3 lg:mb-5 text-4xl md:text-5xl lg:text-7xl font-extrabold lg:w-[750px] ">
              Simplify business processes through safe, reliable, and integrated
              SaaS platforms
            </h1>
            <p className="mb-3 lg:mb-5 text-sm lg:text-pretty">
              We help you eliminate manual tasks and streamline workflow for
              faster decision-making.
            </p>
            <Link
              className="link link-hover flex items-center"
              href={"#solution"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-2 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Explore kuki's solution
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
