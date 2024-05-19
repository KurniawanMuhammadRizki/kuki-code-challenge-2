import CardTransparent from "@/components/cardTransparent";
import Footer from "@/components/footer";
import Leader from "@/components/leader";
import Navbar from "@/components/navbar";
import WhatIsKuki from "@/components/whatIsKuki";
import Culture from "./components/culture";
import Dna from "./components/dna";
import Grow from "./components/grow";
import Investor from "./components/investor";
import Milestone from "./components/milestone";
import OurValue from "./components/ourValue";

const Page: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <CardTransparent />
      <Milestone />
      <Leader />
      <Investor />
      <OurValue />
      <Dna />
      <Culture />
      <WhatIsKuki />
      <Grow />
      <Footer />
    </div>
  );
};

export default Page;
