import Image from "next/image";
import React from "react";
import { ProuddeliveredData } from "../common/Helper";

const ProudDelivered = () => {
  return (
    <div className=" bg-[url(/images/proudToBebg.png)] overflow-hidden h-[320vh]  bg-no-repeat bg-center  bg-cover  ">
      <div className=" px-4">
        {" "}
        <h2 className="text-size mont uppercase  mx-auto  font-black text-white md:pb-15 pb-8 xl:pb-25 max-w-[740px] leading-[93%] sm:pt-50 pt-30 lg:pt-80 w-full">
          Proud to have delivered
        </h2>
        <div className="max-w-[1706px] ml-auto overflow-auto  gap-10  flex  ">
          {ProuddeliveredData.map((items, index) => (
            <div className="  " key={index}>
              <div className=" lg:w-[723px] md:w-[523px] md:h-[428px] max-sm:w-[300px] max-sm:h-[300px] sm:h-[328px] sm:w-[423px] lg:h-[528px] ">
                <Image
                  className="lg:w-[723px] md:w-[523px] md:h-[428px] max-sm:w-[280px] max-sm:h-[230px] sm:h-[328px] sm:w-[423px] lg:h-[528px]"
                  src={items.img}
                  width={723}
                  height={528}
                  alt="franzo"
                />
              </div>
              <h2 className="  md:pt-9 mont text-white font-black sm:text-3xl text-xl  lg:text-[40px] uppercase  ">
                {items.head}
              </h2>
              <h4 className=" text-white mont font-bold sm:text-base text-sm   lg:text-xl ">
                {items.subhead}
              </h4>
            </div>
          ))}
        </div>
        <h2 className="text-center   max-w-[1650px] mx-auto leading-[93%]  w-full mont  font-black uppercase text-[6.1vw] text-white ">
          <span className=" text-[#F9DD00]">transforming</span> visions into
          visibility
        </h2>
        <p className=" text-white mont lg:text-xl sm:text-lg text-base   font-bold uppercase pt-15 pb-18 max-w-[1364px] w-full mx-auto  ">
          At Just Get visible, we highlight brands with innovative solutions,
          individual strategies and relentless dedication. we strive to empower
          companies to stand out, engage with your audience and thrive in a
          dynamic world.
        </p>
        <button className=" max-w-[413px]  w-full mx-auto flex justify-center items-center rounded-xl bg-[#F9DD00]  p-2.5 h-12.5 text-primary mont text-base font-bold  ">
          Learn More About our Methods
        </button>
      </div>
    </div>
  );
};

export default ProudDelivered;
