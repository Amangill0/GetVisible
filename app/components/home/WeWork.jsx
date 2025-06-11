import Image from "next/image";
import React from "react";
import { CompanyData } from "../common/Helper";

const WeWork = () => {
  return (
    <div className=" max-w-[1220px] max-sm:-mt-60  sm:-mt-90 px-4 lg:pb-55 md:pb-35 sm:pb-25 pb-18 w-full mx-auto  ">
      <h2 className=" text-center mont pb-10 md:pb-22 text-primary  xl:text-6xl lg:text-4xl sm:text-3xl text-xl 2xl:text-size max-w-[941px] w-full mx-auto  font-black   leading-93 uppercase">
        people we have worked with
      </h2>
     

      <div className=" grid lg:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2 md:pt-9 pt-4 xl:pt-15 gap-10 ">
        {CompanyData.map((item, index) => (
          <div key={index}>
            <Image
              className=" mx-auto"
              src={item.img}
              width={272}
              height={97}
              alt="franzo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeWork;
