import Image from "next/image";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Rating from "@/components/rating";
import ListedLogo from "@/components/listedLogo";
import TestiCarousel from "@/components/testiCarousel";
import RatingAndTesti from "@/components/ratingAndTesti";
import HomeTrusted from "@/components/homeTrusted";
import CardInformation from "@/components/cardInformation";
import ClientsLogo from "@/components/clientsLogo";
import WhykukiLabs from "@/components/whyKukilabs";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import CardServiceHome from "@/components/cardServiceHome";
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <RatingAndTesti />
      <CardInformation />
      <div id="our-client">
        <ClientsLogo />
      </div>
      <CardServiceHome />
      <WhykukiLabs />
      <Cta
        title="Ready to grow with Kukilabs"
        desc="Boost efficiency, productivity, and business performance with a
              range of Kukilabs products and services."
      />
      <Footer />
      ///react responsive carousel
    </div>
  );
}
