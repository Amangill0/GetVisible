"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ButtonIcon } from "./Icon";

const Navbar = () => {
  const [togglebtn, Settogglebtn] = useState();
  return (
    <div className=" bg overflow-hidden">
      <div className="  px-4  container flex justify-between  ">
        <Image className=" max-md:w-[100px] max-md:h-[100px]  "
          src="/images/navbarlogo.png"
          width={159}
          height={217}
          alt="navbarlgo"
        />
        <div className=" flex  h-23 items-center  pt-12.5 max-lg:hidden  gap-10 xl:gap-11  ">
          <Link
            className="  text-white mont lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Agency
          </Link>
          <Link
            className="  text-white mont lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Featured Work
          </Link>
          <Link
            className="  text-white mont lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Web Design
          </Link>
          <Link
            className="  text-white mont lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Re-Branding
          </Link>{" "}
          <Link
            className="  text-white mont lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Products
          </Link>{" "}
          <Link
            className="  text-white mont lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Contact Us
          </Link>
          <button className=" flex items-center h-12.5 gap-2.5 xl:p-2.5 lg:p-2.5 max-xl:px-1.5 xl:w-[215px] bg-[#F9DD00]  justify-center rounded-xl  mont text-base font-bold text-primary  ">
            {" "}
            <ButtonIcon /> Start Project
          </button>
        </div>
        <h2
          onClick={() => Settogglebtn(!togglebtn)}
          className=" font-bold  sm:text-3xl text-xl md:text-5xl text-white lg:hidden  absolute right-3 top-0 "
        >
          +
        </h2>

        {/* sidebar */}
        <div
          className={`  ${
            togglebtn ? "left-0  " : "left-[-115%] "
          } flex   flex-col justify-center absolute min-h-screen top-0   duration-300 transition-all bg w-full lg:hidden   items-center gap-11 `}
        >
          <Link
            className="  text-white mont  text-sm md:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Agency
          </Link>
          <Link
            className="  text-white mont text-sm md:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Featured Work
          </Link>
          <Link
            className="  text-white mont text-sm md:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Web Design
          </Link>
          <Link
            className="  text-white mont text-sm md:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Re-Branding
          </Link>{" "}
          <Link
            className="  text-white mont text-sm md:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Products
          </Link>{" "}
          <Link
            className="  text-white mont text-sm md:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
            href="/"
          >
            Contact Us
          </Link>
          <button className=" flex items-center gap-2.5 md:p-2.5 p-1  px-2.5 md:w-[215px] bg-[#F9DD00]  justify-center rounded-xl  mont text-sm md:text-base font-bold text-primary  ">
            {" "}
            <ButtonIcon /> Start Project
          </button>
          <h2
            onClick={() => Settogglebtn(!togglebtn)}
            className=" font-bold sm:text-3xl text-xl   md:text-5xl text-white lg:hidden  absolute  top-0 right-0 "
          >
            +
          </h2>
          <div
            onClick={() => Settogglebtn(!togglebtn)}
            className="bg-black/10 absolute top-0 left-0 min-h-screen  z-[9999] w-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
