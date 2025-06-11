import Image from "next/image";
import React from "react";

const Get = () => {
  return (
    <>
      <div className=" bg-[url(/images/backgroundbg.png)]  xl:pt-25 md:pt-20 sm:pt-15 max-sm:pt-10 bg-center  bg-no-repeat bg-cover  rounded-b-4xl pb-50 ">
        <div className="flex  max-lg:flex-col justify-between px-4 container">
          <div className=" flex flex-col max-lg:mx-auto  ">
            <h2 className=" max-w-[900px]  max-lg:text-center leading-[93%]  w-full sm:pb-7 max-sm:pb-4 lg:pb-10 xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl max-sm:text-xl  2xl:text-size mont text-white font-black ">
              WE ARE ALWAYS ON THE LOOKOUT FOR NEW PROBLEMS TO SOLVE.
            </h2>
            <p className=" lg:max-w-[728px]   w-full max-lg:text-center lg:pb-20 sm:pb-12 pb-4 xl:pb-27 text-white mont lg:text-lg sm:text-base text-sm  xl:text-xl font-medium leading-[130%] ">
              We have hands on experience with a broad range of sectors and
              industries – is yours next?Wle work closely with your business to
              ensure that we can deliver you results quickly and confidently,
              every time.
            </p>
            <div className=" flex max-sm:flex-col max-lg:pb-10  max-lg:mx-auto ">
              <h3 className=" text-white mont font-bold  max-sm:text-center max-sm:pb-2 lg:text-2xl sm:text-xl text-lg  xl:text-[32px] pr-7 ">
                want to know more?
              </h3>
              <button className=" xl:max-w-[396px] lg:max-w-[360px] w-full lg:p-1  sm:p-1 max-sm:p-1  xl:p-2.5 rounded-xl bg-[#F9DD00] max-sm:text-[12px]  text-sm mont max-lg:text-base font-bold  uppercase text-primary ">
                {" "}
                give us a call today on 0208 058 8852 
              </button>
            </div>
          </div>
          <div className="">
            <Image
              className=" h-[762px]  max-lg:mx-auto max-sm:object-cover max-sm:w-full max-sm:h-fit "
              src="/images/girlmic.png"
              width={470}
              height={740}
              alt="photo"
            />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Get;
