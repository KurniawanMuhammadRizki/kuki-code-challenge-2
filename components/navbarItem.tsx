import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  title: string;
  desc: string;
  href: string;
}
const NavbarItem: React.FC<NavbarItemProps> = ({ title, desc, href }) => {
  return (
    <Link className="hover:bg-base-color focus:bg-base-color" href={href}>
      <div className="flex flex-col items-start w-full hover:bg-base-color focus:bg-base-color">
        <p className="font-bold">{title}</p>
        <p className="font-normal">{desc}</p>
      </div>
    </Link>
  );
};

export default NavbarItem;
