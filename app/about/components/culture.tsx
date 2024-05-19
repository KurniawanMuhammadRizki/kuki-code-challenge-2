import Image from "next/image";
import React from "react";
import CultureItem from "./cultureItem";

const Culture: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px]  bg-base-color flex flex-col justify-center items-center  font-Helvetica-Neue">
      <h2 className="text-4xl font-bold mb-2">The Kukinian way</h2>
      <p className="max-w-[600px] text-center mb-12">
        As Kukinians, we collaborate in a way that is unique to uplift each
        other. If how we do things resonates with you, we welcome you to join
        us.
      </p>
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6 grid">
        <CultureItem
          src="/ic-mw-01.svg"
          alt="logo1"
          title="We embrace experimentation"
          desc="Due to the nature of our SaaS products, we're always bold enough to
            take calculated risks and experiment with our offerings-no judgment
            included."
        />

        <CultureItem
          src="/ic-mw-02.svg"
          alt="logo2"
          title="We reward achievements"
          desc="We make sure no great performance, both team and individual, goes
          unrewarded. One of the ways is through our Mekari Culture Awards."
        />

        <CultureItem
          src="/ic-mw-03.svg"
          alt="logo3"
          title="We foster relationships"
          desc="We strive to respect our peers, customers, partners, and other
          stakeholders in coming up with a long term win-win solution for all
          parties."
        />
      </div>
    </div>
  );
};

export default Culture;
