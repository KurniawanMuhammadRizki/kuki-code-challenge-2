import Link from "next/link";
import React from "react";
// import kukiLogo from "../../assets/kukilabs. (2).png";
import kukiLogo from "../assets/kukilabs_logo.png";
import Logo from "./logo";
import NavbarItem from "./navbarItem";
import WhatsappsBtn from "./whatsappsBtn";

const Navbar: React.FC = () => {
  return (
    <div className=" sticky top-0 z-10 bg-base-color  lg:px-[76px] h-16">
      <div className="navbar sticky top-0 z-10 h-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-color rounded w-52">
              {/* <Link
                className="hover:bg-base-color focus:bg-base-color "
                href={"/"}>
                <li className="custom-hover-style w-full">Home</li>
              </Link> */}

              <li>
                <Link
                  className="hover:bg-base-color focus:bg-base-color "
                  href={"/"}>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-base-color focus:bg-base-color "
                  href={"teams"}>
                  <p>Teams</p>
                </Link>
              </li>
              <li className="custom-hover-style w-full">
                <details>
                  <summary>Product</summary>

                  <ul className="p-2  lg:w-[350px] bg-base-color rounded">
                    <li className="flex flex-row w-full">
                      <NavbarItem
                        href="product/#kuki-talenta"
                        title="Kuki-Talenta"
                        desc="One stop HR and workforce solution"
                      />
                    </li>
                    <li className="flex flex-row w-full">
                      <NavbarItem
                        href="product/#kuki-jurnal"
                        title="Kuki-Jurnal"
                        desc="One stop finance and accounting solution"
                      />
                    </li>
                    <li className="flex flex-row w-full">
                      <NavbarItem
                        href="product/#kuki-flex"
                        title="Kuki-Flex"
                        desc="Employee benefit, fund support, and EWA"
                      />
                    </li>
                    <li className="flex flex-row w-full">
                      <NavbarItem
                        href="product/#kuki-sign"
                        title="Kuki-Sign"
                        desc="One stop online document authorization"
                      />
                    </li>
                    <li className="flex flex-row w-full">
                      <NavbarItem
                        href="product/#kuki-klik-pajak"
                        title="Kuki-Klikpajak"
                        desc="Indonesia's top tax reporting and management"
                      />
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  className="hover:bg-base-color focus:bg-base-color "
                  href={"about"}>
                  <p>About us</p>
                </Link>
              </li>
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar sticky top-0  h-16 z-10 bg-base-color hidden lg:flex justify-start align-middle">
          <ul className="menu bg-base-color menu-horizontal  text-base h-16 px-1">
            <li className="dropdown dropdown-hover button ">
              <Link
                className="hover:bg-base-color focus:bg-base-color "
                href={"/"}>
                <div
                  tabIndex={0}
                  role="button"
                  className="hover:bg-base-color focus:bg-base-color ">
                  Home
                </div>
              </Link>
            </li>
            <li className="dropdown dropdown-hover button ">
              <Link
                className="hover:bg-base-color focus:bg-base-color "
                href={"teams"}>
                <div
                  tabIndex={0}
                  role="button"
                  className="hover:bg-base-color focus:bg-base-color ">
                  Teams
                </div>
              </Link>
            </li>
            <li className="dropdown dropdown-hover button">
              <Link
                className="hover:bg-base-color focus:bg-base-color "
                href={"/product"}>
                <div
                  tabIndex={0}
                  role="button"
                  className="hover:bg-base-color focus:bg-base-color ">
                  Product
                </div>
              </Link>
              <ul className="dropdown-content z-[1] mt-1 w-[300px] menu p-1 bg-base-color rounded">
                <li>
                  <NavbarItem
                    href="product/#kuki-talenta"
                    title="Kuki-Talenta"
                    desc="One stop HR and workforce solution"
                  />
                </li>
                <li>
                  <NavbarItem
                    href="product/#kuki-jurnal"
                    title="Kuki-Jurnal"
                    desc="One stop finance and accounting solution"
                  />
                </li>
                <li>
                  <NavbarItem
                    href="product/#kuki-flex"
                    title="Kuki-Flex"
                    desc="Employee benefit, fund support, and EWA"
                  />
                </li>
                <li>
                  <NavbarItem
                    href="product/#kuki-sign"
                    title="Kuki-Sign"
                    desc="One stop online document authorization"
                  />
                </li>
                <li>
                  <NavbarItem
                    href="product/#kuki-klik-pajak"
                    title="Kuki-Klikpajak"
                    desc="Indonesia's top tax reporting and management"
                  />
                </li>
              </ul>
            </li>

            <li className="dropdown dropdown-hover button">
              <Link
                className="hover:bg-base-color focus:bg-base-color"
                href={"/about"}>
                <div
                  tabIndex={0}
                  role="button"
                  className="hover:bg-base-color focus:bg-base-color">
                  About
                </div>
              </Link>

              <ul className="dropdown-content z-[1] mt-1 w-[300px] menu p-1 bg-base-color rounded">
                <li>
                  <NavbarItem
                    href="/why"
                    title="Why Kukilabs"
                    desc="Learn why business prefer kukilabs"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <WhatsappsBtn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
