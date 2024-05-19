"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../milestoneSwipper.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import CardTimeline from "@/components/cardTimeline";
import AnimationWrapper from "@/components/animationWrapper";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import stylesheet dari Carousel
import MilestoneCarousel from "./milestoneCarousel";

const Milestone: React.FC = () => {
  return (
    <div className=" py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-primary-color flex flex-col justify-center items-center">
      <div className="text-white mb-4">
        <p>Milestone</p>
        <h2 className="max-w-[580px] font-bold text-4xl ">
          Kukilabs&apos;s story
        </h2>
        <p>Bringing digital transformation possible in Indonesia.</p>
      </div>

      {/* <div className="w-[90%] md:w-[70%] lg:w[40%]">
        <MilestoneCarousel />
      </div> */}
      <div className="w-[90%] md:w-[60%] lg:w[30%] flex-wrap">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <CardTimeline
              year="2018"
              desc="Talenta, Sleekr, and Jurnal merged into a new entity called Kukilabs to realize the same vision and mission."
              src="/2018-1-768x427.webp"
              alt="2018"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTimeline
              year="2019"
              desc="Kukilabs introduced a new product for online tax management, Kuki Klikpajak at the Kuki Conference, which was successfully held as
            the #1 technology conference in Indonesia."
              src="/2020-768x427.webp"
              alt="2019"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTimeline
              year="2020"
              desc="Kukilabs introduced a new product for managing employee benefits and welfare support, Kuki Flex."
              src="/2021-768x427.webp"
              alt="2020"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTimeline
              year="2021"
              desc="Kuki Qontak, the Omni-channel and CRM software, joins the Kukilabs ecosystem."
              src="/2022-768x427.png"
              alt="2021"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Milestone;
{
  /* <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <CardTimeline
              year="2018"
              desc="Talenta, Sleekr, and Jurnal merged into a new entity called Kukilabs to realize the same vision and mission."
              src="/2018-1-768x427.webp"
              alt="2018"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTimeline
              year="2019"
              desc="Kukilabs introduced a new product for online tax management, Kuki Klikpajak at the Kuki Conference, which was successfully held as
            the #1 technology conference in Indonesia."
              src="/2020-768x427.webp"
              alt="2019"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTimeline
              year="2020"
              desc="Kukilabs introduced a new product for managing employee benefits and welfare support, Kuki Flex."
              src="/2021-768x427.webp"
              alt="2020"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardTimeline
              year="2021"
              desc="Kuki Qontak, the Omni-channel and CRM software, joins the Kukilabs ecosystem."
              src="/2022-768x427.png"
              alt="2021"
            />
          </SwiperSlide>
        </Swiper> */
}
