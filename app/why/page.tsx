import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import CardProduct from "../product/components/cardProduct";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Cta
        title="Why Choose Kukilabs"
        desc="Expand your business worry-free with the help of best-in-class cloud-based SaaS platform and after sales services."
      />
      <CardProduct
        src="/01_Security.webp"
        alt="security"
        title="Data security compliant with ISO 27001 standards"
        appName="Security & compliance"
        desc="Your company's data is securely stored and managed under international regulations and security standards."
        imgLeft={true}
      />
      <CardProduct
        src="/02_Dukungan_purna_jual.webp"
        alt="post-sales"
        title="Comfort through the best post-sales services"
        appName="Post-sales support"
        desc="Attain overall satisfaction with the best-in-class and comprehensive post-sales service components."
        imgLeft={false}
      />
      <CardProduct
        src="/03_Clients.webp"
        alt="client"
        title="Growing alongside
        businesses in Indonesia"
        appName="Our clients"
        desc="Tens of thousands of businesses across various industries have entrusted Kukilabs to optimize their operational processes."
        imgLeft={true}
      />
      <CardProduct
        src="/04_Business.webp"
        alt="business"
        title="International best practices
        standard for"
        appName="Partnership"
        desc="Kukilabs ensures that every client receives solutions for business growth and strategy with the assurance of the best ecosystem partner."
        imgLeft={false}
      />
      <Cta
        title="Ready to power your growth?"
        desc="Start free consultation with our expert team, we're here to help you turbocharge your business efficiency and team productivity!"
      />
      <Footer />
    </div>
  );
};

export default Page;
