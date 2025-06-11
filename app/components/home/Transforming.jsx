import React from "react";
import { ProuddeliveredData } from "../common/Helper";
import Image from "next/image";

const Transforming = () => {
  return (
    <div className=" bg-[url(/images/bgbluetransforming.png)] xl:pb-200  max-sm:pb-96 sm:pb-190  bg-cover bg-center bg-no-repeat  ">
      <div className="  ">
        <h2 className="2xl:text-size  px-4 xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl mont uppercase  mx-auto  font-black text-white md:pb-15 pb-8 xl:pb-30 max-w-[740px] leading-93 sm:pt-50 pt-30 lg:pt-77 w-full">
          Proud to have delivered
        </h2>
        <div className="max-w-[1706px] pl-4 ml-auto overflow-auto  lg:gap-10 gap-4  flex  ">
          {ProuddeliveredData.map((items, index) => (
            <div className="  " key={index}>
              <div className=" lg:w-[723px] md:w-[523px] md:h-[428px] max-sm:w-[300px]  sm:h-[290px] sm:w-[423px] lg:h-[528px] ">
                <Image
                  className="lg:w-[723px] md:w-[523px] md:h-[428px] max-sm:w-[280px] max-sm:h-[230px] sm:h-[290px] sm:w-[423px] lg:h-[528px]"
                  src={items.img}
                  width={723}
                  height={528}
                  alt="franzo"
                />
              </div>
              <h2 className="  md:pt-9 max-md:pt-4 mont text-white font-black md::text-2xl text-xl  lg:text-3xlxt xl:text-[40px] uppercase  ">
                {items.head}
              </h2>
              <h4 className=" text-white mont font-bold sm:text-base text-sm   lg:text-lg ">
                {items.subhead}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col  ">
        <div>
          <Image
            className="  w-full max-sm:hidden  h-[951px] "
            src="/images/image.png"
            width={1920}
            height={851}
            alt="img"
          />
        </div>
        <div className=" -mt-50 max-sm:pt-70 px-4">
          <h2 className="text-center   max-w-[1650px] mx-auto leading-93  w-full mont  font-black uppercase text-[4.1vh] md:text-[4.1vh] sm:text-[3.1vh]  xl:text-[6.1vw] text-white ">
            <span className=" text-[#F9DD00]">transforming</span> visions into
            visibility
          </h2>
          <p className=" text-white mont lg:text-xl sm:text-sm md:text-base text-[12px]  font-bold uppercase md:pt-15 sm:pt-10 sm:pb-10 py-6 md:pb-18 max-w-[1364px] w-full mx-auto  ">
            At Just Get visible, we highlight brands with innovative solutions,
            individual strategies and relentless dedication. we strive to
            empower companies to stand out, engage with your audience and thrive
            in a dynamic world.
          </p>
          <button className=" md:max-w-[413px] max-w-[300px]   w-full mx-auto flex justify-center items-center rounded-xl bg-[#F9DD00] p-1  xl:p-2.5 md:p-1.5  xl:h-12.5 text-primary mont text-sm md:text-base font-bold  ">
            Learn More About our Methods
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transforming;
