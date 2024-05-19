import React from "react";
import Image from "next/image";

const TeamCard: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
      <div className="card lg:card-side flex ">
        <div className="card-body p-1 flex flex-col font-Helvetica-Neue  text-black">
          <div>
            <p className="mb-2">Meet Kukinians behind the scene</p>
            <h2 className="max-w-[580px] font-bold text-4xl text-left">
              We&apos;re not the usual office workers. We&apos;re Kukinians.
            </h2>
          </div>
          <div className="max-w-[580px] text-wrap  text-left">
            <p>
              This is basically what we do every day. Regardless of our position
              and department, everyone has a part to make an impact. In fact, we
              challenge everyone to do exactly that. It&apos;s always exciting
              going to work everyday since there&apos;s always something new to
              explore and figure out.
            </p>
            <br />
            <p>
              In other words, we don&apos;t care about your tattoos, bleached
              hair, pierced nose, or your background. What we care about is how
              passionate and brave you are to deliver any impactful actions for
              everyone connected with Kukilabs. <br />
              <span className="text-primary-color font-semibold">
                #KeepUpKeepInnovating
              </span>
            </p>
          </div>
        </div>
        <figure>
          <Image
            className="w-[556] h-[434px] mix-blend-multiply"
            src={
              "/vecteezy_business-people-male-and-female-characters-team-stand_20310249.jpg"
            }
            // src={"/img-hero-about.png"}
            alt={"img-hero-about"}
            width={1301}
            height={929}
            priority={true}
          />
        </figure>
      </div>
    </div>
  );
};

export default TeamCard;
