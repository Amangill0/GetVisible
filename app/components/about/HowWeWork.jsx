import React from "react";
import { PathIcon } from "../common/Icon";
import Image from "next/image";

const HowWeWork = () => {
  return (
    <div className="bg">
      <h2 className=" text-white mont text-center text-size font-black uppercase pb-25">
        HOW WE WORK
      </h2>

      <div className=" pb-7 max-w-[1534px] gap-5 flex justify-between  w-full mx-auto ">
        <h2 className="max-w-[329px] text-[40px] w-full text-white mont font-black uppercase leading-[93%] ">
          Free Consultation
        </h2>
        <h2 className="max-w-[329px] pl-4 text-[40px]  w-full text-white mont font-black uppercase leading-[93%] ">
          Discovery Call
        </h2>
        <h2 className="max-w-[329px]  pl-4 text-[40px] -mt-10 w-full text-white mont font-black uppercase leading-[93%] ">
          Scope of Works
        </h2>
        <h2 className="max-w-[311px] pl-4 text-[40px] w-full text-white mont font-black uppercase leading-[93%] ">
          Delivery of Work
        </h2>
      </div>
      <div className=" absolute ">
        <Image src="/images/pathimg.png" width={1820} height={80} alt="path" />
      </div>
      <div className=" flex justify-between pb-45 max-w-[1564px] w-full mx-auto">
        <p className=" max-w-[298px] text-white mont text-[17px] tracking-[160%]  w-full pt-44 -mt-10   ">
          Free Consultation, begin your journey with Just Get Visible by
          scheduling a complimentary consultation. We'll discuss your project
          vision, goals, and requirements, providing initial guidance to bring
          your ideas to life.
        </p>
        <p className=" max-w-[298px] text-white mont text-[17px] tracking-[160%]  w-full pt-40  ">
          After the consultation, we'll schedule a call to dive deeper into your
          project requirements. This lets us gather detailed information about
          your brand, audience, and desired project features.
        </p>
        <p className=" max-w-[298px] text-white mont text-[17px] tracking-[160%] -mt-6  w-full pt-40  ">
          Based on the insights gathered during the discovery call, we'll
          prepare a comprehensive scope of works document outlining the project
          details, deliverables, and timeline. This document serves as a roadmap
          for our collaboration, providing clarity on the tasks involved,
          project milestones, and responsibilities.
        </p>
        <p className=" max-w-[298px] text-white mont text-[17px] tracking-[160%]  w-full pt-40  ">
          We'll design and develop unique concepts tailored to your brand and
          objectives, showcasing our creativity and expertise.
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;
