"use client";
//import React from "react";
import "./cardSwipper.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Autoplay, Navigation } from "swiper/modules";
const ClientsLogo: React.FC = () => {
  const swiperStyle = {
    width: "300px",
    height: "300px",
    padding: "50px",
  };

  const swiperSlideStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
  };

  const swiperSlideImgStyle = {
    display: "block",
    width: "100%",
  };
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold font-Helvetica-Neue mb-10">
        Trusted by 20,000+ businesses across various industries in the region
      </h2>
      <div className="flex flex-row flex-wrap wrap">
        <Swiper
          loop={true}
          autoplay={{
            delay: 5100,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img src="/logo-abdi-waluyo-148x56-1.webp" alt="logo-abdi-waluyo" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/logo-agung-sedayu-group-148x56-1.webp"
              alt="logo-agung-sedayu-group"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 5200,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img src="/logo-alodokter-148x56-1.webp" alt="logo-alodokter" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/logo-bank-mayora-148x56-1.webp"
              alt="logo-bank-mayora-148x56-1"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 5300,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img
              src="/logo-BCA-insurance-148x56-1.webp"
              alt="logo-BCA-insuranc"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-DHL-148x56-1.png" alt="logo-DHL-" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 6400,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img
              src="/logo-faber-castle-148x56-1.webp"
              alt="logo-faber-castle"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-gojek-148x56-1.webp" alt="logo-gojek" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img src="/logo-grand-lucky-148x56-1.webp" alt="logo-grand-lucky" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-hana-bank-148x56-1.webp" alt="logo-hana-bank" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 5600,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img src="/logo-hokben-148x56-1.webp" alt="logo-hokben" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-toyota-148x56-1.webp" alt="logo-toyota" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 6700,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img src="/logo-JKT-GO-148x56-1.webp" alt="logo-JKT-GO" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-kemenhub-148x56-1.webp" alt="logo-kemenhub" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 5900,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img
              src="/logo-mayapada-hospital-148x56-1.webp"
              alt="ogo-mayapada-hospital"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-meratus-148x56-1.webp" alt="logo-meratus" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 7800,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img src="/logo-novotel-148x56-1.webp" alt="logo-novotel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-puma-148x56-1.webp" alt="logo-puma" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          autoplay={{
            delay: 4600,
            disableOnInteraction: false,
          }}
          effect={"flip"}
          flipEffect={{
            slideShadows: false,
          }}
          grabCursor={false}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
          style={{ width: "256px", height: "56px", padding: "50px" }}>
          <SwiperSlide>
            <img src="/logo-shell-148x56-1.webp" alt="logo-shell" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logo-tatsuya-148x56-1.webp" alt="logo-tatsuya" />
          </SwiperSlide>
        </Swiper>
        <div className=" lg: hidden">
          <Swiper
            loop={true}
            autoplay={{
              delay: 7300,
              disableOnInteraction: false,
            }}
            effect={"flip"}
            flipEffect={{
              slideShadows: false,
            }}
            grabCursor={false}
            modules={[EffectFlip, Autoplay]}
            className="mySwiper"
            style={{ width: "256px", height: "56px", padding: "50px" }}>
            <SwiperSlide>
              <img
                src="/logo-transvision-148x56-1.webp"
                alt="ogo-transvision"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/logo-tupperware-148x56-1.webp" alt="logo-tupperware" />
            </SwiperSlide>
          </Swiper>

          <Swiper
            loop={true}
            autoplay={{
              delay: 5100,
              disableOnInteraction: false,
            }}
            effect={"flip"}
            flipEffect={{
              slideShadows: false,
            }}
            grabCursor={false}
            modules={[EffectFlip, Autoplay]}
            className="mySwiper"
            style={{ width: "256px", height: "56px", padding: "50px" }}>
            <SwiperSlide>
              <img src="/Mitsubishi.webp" alt="Mitsubishi" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/Tata-Logam.webp" alt="Tata-Logam" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;
