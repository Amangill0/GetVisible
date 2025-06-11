"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowIcon } from "../common/Icon";
import { CardsData } from "../common/Helper";

const Options = () => {
  return (
    <div className=" container pt-10 lg:pt-40  justify-between  max-xl:gap-14 pb-20 md:pb-40 px-4 flex flex-col  ">
      {/* ===web design==== */}
      {CardsData.map((item, index) => (
        <div
          key={index}
          className={`${
            index % 2 !== 0 ? "lg:ml-auto 2xl:-mt-42  " : ""
          } flex max-w-[700px] max-md:items-center md:gap-10 gap-4 w-full flex-col `}
        >
          <h2 className="text-primary max-md:text-center leading-93 mont font-black lg:text-4xl xl:text-5xl  sm:text-3xl max-sm:text-2xl  2xl:text-size uppercase">
            {item.head}
          </h2>
          <div className="md:flex  max-md:items-center  gap-10 ">
            <div className=" max-md:w-[60%] mx-auto ">
              <Image src={item.images} width={293} height={305} alt="web" />
            </div>
            <div className="flex pt-5 md:pt-2 flex-col">
              <p className="mont pb-2 md:pb-8 text-sm max-md:text-center lg:text-[17px] font-semibold max-w-[321px] w-full">
                {item.paragraph}
              </p>
              <div className="lg:w-17 lg:h-17 w-11 max-md:mx-auto max-md: h-11 rounded-[56px] flex justify-center items-center bg-[#F9DD00]">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
