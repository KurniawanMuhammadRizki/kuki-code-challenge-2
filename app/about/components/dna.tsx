import React from "react";
import DnaItem from "./dnaItem";

const Dna: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px]  bg-base-color flex flex-col justify-center items-center  font-Helvetica-Neue">
      <h2 className="text-4xl font-bold mb-2">The Kukinian DNA</h2>
      <p className="max-w-[600px] text-center mb-12">
        In order to create the #BiggestImpact, kukinians are known to embody the
        following 3 behaviors.
      </p>
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6 grid">
        <DnaItem
          title="#BukaJalan"
          subTitle="Solution Minded"
          desc="Always look for ways to remove blockers for own team and others."
        />
        <DnaItem
          title="#BikinBangga"
          subTitle="Ambitious & laser-focused"
          desc="Set ambitious priorities while ensuring clarity among stakeholders."
        />
        <DnaItem
          title="#BarengBareng"
          subTitle="Aligned & collaborative"
          desc="Communicate regularly with others when setting and working towards each goal."
        />
      </div>
    </div>
  );
};

export default Dna;
