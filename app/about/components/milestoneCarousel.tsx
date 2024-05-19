"use client";
import CardTimeline from "@/components/cardTimeline";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MilestoneCarousel: React.FC = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      centerMode={true}
      width="100%"
      // width={600}
      swipeable={true}
      emulateTouch={true}>
      <div>
        <CardTimeline
          year="2018"
          desc="Talenta, Sleekr, and Jurnal merged into a new entity called Kukilabs to realize the same vision and mission."
          src="/2018-1-768x427.webp"
          alt="2018"
        />
      </div>

      <CardTimeline
        year="2019"
        desc="Kukilabs introduced a new product for online tax management, Kuki Klikpajak at the Kuki Conference, which was successfully held as
            the #1 technology conference in Indonesia."
        src="/2020-768x427.webp"
        alt="2019"
      />
      <CardTimeline
        year="2020"
        desc="Kukilabs introduced a new product for managing employee benefits and welfare support, Kuki Flex."
        src="/2021-768x427.webp"
        alt="2020"
      />
      <CardTimeline
        year="2021"
        desc="Kuki Qontak, the Omni-channel and CRM software, joins the Kukilabs ecosystem."
        src="/2022-768x427.png"
        alt="2021"
      />
    </Carousel>
  );
};

export default MilestoneCarousel;
