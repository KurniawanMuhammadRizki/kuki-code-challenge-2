"use client";
import "./testiSwipper.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CardCarousel from "./cardCarousel";

const TestiCarousel: React.FC = () => {
  return (
    <div className="h-[272px]  bg-base-color w-full sm:w-[352px] md:w-[452px] lg:w-[553px] rounded-xl items-center">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        //   navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper pt-0 rounded-2xl">
        <SwiperSlide className="h-[272px] pt-0 ">
          <CardCarousel
            imgSrc="/logo-148x56-akseleran.webp"
            imgAlt="akseleran"
            imgHeight={56}
            imgwidth={148}
            name={"Jayus Tambunan"}
            position={"Akseleran"}
            desc={
              "Two crucial factors in platform selection are features and pricing. Kuki Jurnal & Kuki Talenta offer comprehensive features and competitive pricing, perfectly aligning with our needs"
            }
          />
        </SwiperSlide>

        <SwiperSlide className="h-[272px] pt-0">
          <CardCarousel
            imgSrc="/logo-148x56-klar.webp"
            imgAlt="klar"
            imgHeight={56}
            imgwidth={148}
            name={"Elle Pradipta"}
            position={"KLAR"}
            desc={
              "Utilizing Kuki Jurnal & Kuki Talenta together is a lifesaver for boosting business efficiency."
            }
          />
        </SwiperSlide>

        <SwiperSlide className="h-[272px] pt-0">
          <CardCarousel
            imgSrc="/Mitsubishi.webp"
            imgAlt="Mitsubishi"
            imgHeight={56}
            imgwidth={148}
            name={"Kai Sarutobi"}
            position={"Indonesia Head of Administration"}
            desc={
              "We trust Kukilabs because it is one of the leading SaaS in Indonesia, and as Japanese companies we put lot of trust and confidence in using service from any kind of company."
            }
          />
        </SwiperSlide>

        <SwiperSlide className="h-[272px] pt-0">
          <CardCarousel
            imgSrc="/Tata-Logam.webp"
            imgAlt="tata"
            imgHeight={56}
            imgwidth={148}
            name={"Nicholas Pradipta"}
            position={"Vice President"}
            desc={
              "Automation from Kukis's Software as a service cuts down work processes that might otherwise take around 7 days for interdepartmental work, now it can be completed in 1 day."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestiCarousel;
