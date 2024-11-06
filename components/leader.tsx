"use client";
import "../components/leader.module.css";

import LeaderCard from "./leaderCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import useLeaderList from "@/hooks/leaderList";

const leaderData = [
  {
    name: "Kurniawan Rizki",
    src: "https://res.cloudinary.com/dwrm5t649/image/upload/v1716131269/poat6ctmd4indd78fghk.jpg",
    alt: "Kurniawan Rizki's picture",
    quote:
      "Leading with vision and empathy transforms a startup into a lasting company.",
    position: "Chief Executive Officer (CEO)",
    experience:
      "10 years in tech startups, specializing in strategic growth and team building",
  },
  {
    name: "Michael Chen",
    src: "https://res.cloudinary.com/dwrm5t649/image/upload/v1716131271/qxevzun4aoyd6crzbjrm.jpg",
    alt: "Michael Chen's picture",
    quote:
      "Great products are built on strong customer insights and data-driven decisions.",
    position: "Chief Product Officer (CPO)",
    experience:
      "8 years in product management, with a focus on user-centered design and innovation",
  },
  {
    name: "Sarah Lee",
    src: "https://res.cloudinary.com/dwrm5t649/image/upload/v1716131270/bqcecsyqc6cdnttceycd.jpg",
    alt: "Sarah Lee's picture",
    quote:
      "Scaling infrastructure to support growth while maintaining agility is my top priority.",
    position: "Chief Technology Officer (CTO)",
    experience: "12 years in software engineering and cloud infrastructure",
  },
];

const Leader: React.FC = () => {
  const { leaderList, loading } = useLeaderList();

  return (
    <div className="pt-[14px] pb-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] ">
      {!loading && (
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <LeaderCard
              src={leaderData[0].src}
              alt={leaderData[0].alt}
              quote={leaderData[0].quote}
              name={leaderData[0].name}
              position={leaderData[0].position}
              experience={leaderData[0].experience}
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
              src={leaderData[1].src}
              alt={leaderData[1].alt}
              quote={leaderData[1].quote}
              name={leaderData[1].name}
              position={leaderData[1].position}
              experience={leaderData[1].experience}
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
              src={leaderData[2].src}
              alt={leaderData[2].alt}
              quote={leaderData[2].quote}
              name={leaderData[2].name}
              position={leaderData[2].position}
              experience={leaderData[2].experience}
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
