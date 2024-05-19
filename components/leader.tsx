"use client";
import "../components/leader.module.css";

import LeaderCard from "./leaderCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useLeaderList from "@/hooks/leaderList";

const Leader: React.FC = () => {
  const { leaderList, loading } = useLeaderList();

  return (
    <div className="pt-[14px] pb-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] ">
      {!loading && (
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <LeaderCard
              src={leaderList[0].src}
              alt={leaderList[0].alt}
              quote={leaderList[0].quote}
              name={leaderList[0].name}
              position={leaderList[0].position}
              experience={leaderList[0].experience}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <LeaderCard
              src={leaderList[1].src}
              alt={leaderList[1].alt}
              quote={leaderList[1].quote}
              name={leaderList[1].name}
              position={leaderList[1].position}
              experience={leaderList[1].experience}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <LeaderCard
              src={leaderList[2].src}
              alt={leaderList[2].alt}
              quote={leaderList[2].quote}
              name={leaderList[2].name}
              position={leaderList[2].position}
              experience={leaderList[2].experience}
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leader;
