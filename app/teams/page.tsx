import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Leader from "@/components/leader";
import Navbar from "@/components/navbar";
import React from "react";
import TeamCard from "./components/teamCard";
import TeamMember from "./components/teamMember";
import TeamStatistic from "./components/teamStatistic";

const Page: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <TeamCard />
      <Leader />
      <TeamStatistic />
      <TeamMember />
      <Cta
        title="With any opportunities, we move with agility but not hastily"
        desc="With any opportunities, we move with agility but not hastily. We take time to calculate, then deliver our actions based on that. Afterall, we always come back to what is important: the client."
      />
      <Footer />
    </div>
  );
};

export default Page;
