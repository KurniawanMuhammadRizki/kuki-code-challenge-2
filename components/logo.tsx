import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      className=" text-xl hover:border-b-2 border-b-0 border-transparent border-solid"
      href={"/"}>
      <img className="w-[105px] h-4" src={"/kukilabs_logo.png"} alt="" />
    </Link>
  );
};

export default Logo;
