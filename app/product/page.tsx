import CardProductTitle from "@/app/product/components/cardProductTitle";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatIsKuki from "@/components/whatIsKuki";
import React from "react";
import CardProduct from "./components/cardProduct";

const Page: React.FC = () => {
  const kukiTalentaList: string[] = [
    "A flexible, cost-free implementation, and maintenance cloud-based HR system.",
    "A secure HR database, seamlessly integrated with various management modules.",
    "High scalability, easy configuration, and adaptation to company culture and rules.",
    "Automated HR processes to streamline day-to-day operational workflows.",
    "Various strategic integrations for HR analysis, planning, and decision-making.",
  ];
  const kukiJurnalList: string[] = [
    "Bookkeeping processes assisted by automation.",
    "Simplify bank reconciliation through integration.",
    "Comprehensive management of inventory and stock.",
    "Performance analysis through real-time reporting.",
  ];
  const kukiKlikPajakList: string[] = [
    "Pay and report taxes securely online.",
    "Receive official proof of tax reporting.",
    "Well-organized storage of tax reporting history.",
    "Compliance with applicable tax regulations.",
  ];
  const kukiFlexList: string[] = [
    "Benefit management within budget constraints.",
    "Option for early salary access.",
    "Comprehensive and curated list of vendors.",
    "Maintain employee satisfaction and retention.",
  ];
  const kukiSignList: string[] = [
    "Legally valid electronic signatures in Indonesia and globally",
    "Affix official electronic stamps from Peruri anytime, anywhere.",
    "Send and sign documents in bulk.",
    "Track document status in real-time.",
    "Set up and receive automatic contract renewal reminders.",
  ];

  const products = [
    {
      src: "/img-produk-talenta.webp",
      alt: "kuki talenta",
      appName: "Kuki-Talenta",
      title: "HR, payroll, and workforce management software",
      desc: "One-stop solution for various workforce management needs, encompassing operational and strategic HR for enhanced efficiency in business processes.",
      list: kukiTalentaList,
      imgLeft: true,
      id: "kuki-talenta",
    },
    {
      src: "/img-product-jurnal-1.webp",
      alt: "kuki jurnal",
      appName: "Kuki-Jurnal",
      title: "Accounting and supply chain management software",
      desc: "Reduce the risk of recording errors and ensure data accessibility anytime, anywhere.",
      list: kukiJurnalList,
      imgLeft: false,
      id: "kuki-jurnal",
    },
    {
      src: "/img-product-klikpajak-1.png",
      alt: "kuki klik pajak",
      appName: "Kuki-KlikPajak",
      title: "Company and individual tax management software",
      desc: "A secure solution for your business tax needs, also an official partner of the Directorate General of Taxation (DJP).",
      list: kukiKlikPajakList,
      imgLeft: true,
      id: "kuki-klik-pajak",
    },
    {
      src: "/img-product-flex-1.png",
      alt: "kuki flex",
      appName: "Kuki-Flex",
      title: "Employee benefit and welfare support management software",
      desc: "Enhance employee engagement and well-being with flexible and tailored benefit schemes.",
      list: kukiFlexList,
      imgLeft: false,
      id: "kuki-flex",
    },
    {
      src: "/Sign-KV.png",
      alt: "kuki sign",
      appName: "Kuki-Sign",
      title: "Electronic signature and meterai software",
      desc: "Trim down time and costs in digital document administration with eSignatures and eStamps, securely and legally binding.",
      list: kukiSignList,
      imgLeft: true,
      id: "kuki-sign",
    },
  ];

  return (
    <div className="scroll-smooth">
      <Navbar />
      <CardProductTitle />
      <div className=" pt-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] text-center font-Helvetica-Neue text-black bg-base-color text-3xl font-bold">
        <h2>
          Cloud-based business software <br /> for the future of work{" "}
        </h2>
      </div>
      <div className="flex bg-base-color flex-col justify-center items-center">
        {products.map((product, index) => (
          <div key={product.id} id={product.id}>
            <CardProduct
              key={index}
              src={product.src}
              alt={product.alt}
              appName={product.appName}
              title={product.title}
              desc={product.desc}
              list={product.list}
              imgLeft={product.imgLeft}
            />
          </div>
        ))}
      </div>

      <WhatIsKuki />
      <Cta
        title="Ready to power your growth?"
        desc="Start free consultation with our expert team, we're here to help you turbocharge your business efficiency and team productivity!"
      />
      <Footer />
    </div>
  );
};

export default Page;
{
  /* <CardProduct
        src="/img-produk-talenta.webp"
        alt="kuki talenta"
        appName="Kuki-Talenta"
        title="HR, payroll, and workforce management software"
        desc="One-stop solution for various workforce management needs, encompassing operational and strategic HR for enhanced efficiency in business processes."
        list={kukiTalentaList}
        imgLeft={true}
      />
      <CardProduct
        src="/img-product-jurnal-1.webp"
        alt="kuki jurnal"
        appName="Kuki-Jurnal"
        title="Accounting and supply chain management software"
        desc="Reduce the risk of recording errors and ensure data accessibility anytime, anywhere."
        list={kukiJurnalList}
        imgLeft={false}
      />
      <CardProduct
        src="/img-product-klikpajak-1.png"
        alt="kuki klik pajak"
        appName="Kuki-KlikPajak"
        title="Company and individual tax management software"
        desc="A secure solution for your business tax needs, also an official partner of the Directorate General of Taxation (DJP)."
        list={kukiKlikPajakList}
        imgLeft={true}
      />
      <CardProduct
        src="/img-product-flex-1.png"
        alt="kuki flex"
        appName="Kuki-Flex"
        title="Employee benefit and welfare support management software"
        desc="Enhance employee engagement and well-being with flexible and tailored benefit schemes."
        list={kukiFlexList}
        imgLeft={false}
      />
      <CardProduct
        src="/Sign-KV.png"
        alt="kuki sign"
        appName="Kuki-Sign"
        title="Electronic signature and meterai software"
        desc="Trim down time and costs in digital document administration with eSignatures and eStamps, securely and legally binding."
        list={kukiSignList}
        imgLeft={true}
      /> */
}
