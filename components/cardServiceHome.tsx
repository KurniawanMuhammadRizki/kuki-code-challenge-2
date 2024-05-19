import React from "react";
import Image from "next/image";
import NavbarItem from "./navbarItem";
import AnimationWrapper from "./animationWrapper";
import Link from "next/link";

const CardServiceHome: React.FC = () => {
  return (
    <div
      id="solution"
      className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color flex flex-col items-center text-center justify-center font-Helvetica-Neue">
      <div>
        <p className="mb-2">Kukilabs's Solution</p>
        <h2 className="text-4xl font-bold mb-7">
          find the right solution here
        </h2>
      </div>
      <AnimationWrapper y={40} transition={{ ease: "easeOut", duration: 1 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 gap-12 justify-center ">
          <div className="card w-94 bg-base-100 ">
            <figure className="px-10 pt-10">
              <Image
                src={"/Mekari-_-Asset-_-Solusi-Cloud-based-software-2.webp"}
                alt={"logo-gartner"}
                width={1301}
                height={929}
              />
            </figure>
            <div className="card-body items-left text-left ">
              <a className="card-title text-lg text-semibold text-left mb-2 hover:text-primary-color">
                Cloud based software
              </a>
              <p>
                Cloud-based software with agility and scalability to accelerate
                business operations and decision-making.
              </p>
              <div>
                <ul className="p-2  rounded">
                  <Link href={"product/#kuki-talenta"}>
                    <li className="flex flex-row w-full p-2 m-2 rounded hover:bg-base-color cursor-pointer">
                      Kuki-Talenta - HR, Workforce, and Payroll solution
                    </li>
                  </Link>
                  <Link href={"product/#kuki-jurnal"}>
                    <li className="flex flex-row w-full p-2 m-2 rounded hover:bg-base-color cursor-pointer">
                      Kuki-Jurnal - Finance, Accounting, and Inventory solution
                    </li>
                  </Link>
                  <Link href={"product/#kuki-sign"}>
                    <li className="flex flex-row w-full p-2 m-2 rounded hover:bg-base-color cursor-pointer">
                      Kuki-Sign - e-Signature, e-Stamps, and authorization
                      solution
                    </li>
                  </Link>
                  <Link href={"product/#kuki-klik-pajak"}>
                    <li className="flex flex-row w-full p-2 m-2 rounded hover:bg-base-color cursor-pointer">
                      Kuki-Klikpajak - Tax reporting and management solution
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="card w-94 bg-base-100 ">
            <figure className="px-10 pt-10">
              <Image
                src={"/Mekari-_-Asset-_-Solusi-Financial-Service-2.webp"}
                alt={"logo-gartner"}
                width={1301}
                height={929}
              />
            </figure>
            <div className="card-body items-left text-left ">
              <a className="card-title text-lg text-semibold text-left mb-2 hover:text-primary-color cursor-pointer">
                Financial
              </a>
              <div>
                A suite of application solutions and services centered around
                supporting benefits, funding, and business transactions.
                <div>
                  <ul className="p-2 rounded">
                    <Link href={"product/#kuki-flex"}>
                      <li className="flex flex-row w-full p-2 m-2 rounded hover:bg-base-color cursor-pointer">
                        Kuki-Flex - Employee benefit and welfare support
                        solution
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default CardServiceHome;
