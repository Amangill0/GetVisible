import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FacebookIcon, InstaIcon, MailIcon, PhoneIcon, PicsIcon } from "./Icon";

const Footer = () => {
  return (
    <div className=" max-w-[1726px] px-4 gap-8 w-full mx-auto   max-xl:flex-col-reverse  flex  justify-between  ">
      <div>
        <Image
          className="mx-auto  max-md:w-[200px] "
          src="/images/footer.png"
          width={390}
          height={324}
          alt="footer"
        />
      </div>
      <div className=" flex max-w-[1326px] gap-5   w-full flex-col ">
        <div className=" flex  max-2xl:flex-col  gap-2 justify-between pt-3 items-center ">
          <div className=" grid md:grid-cols-6 max-sm:grid-cols-2  sm:grid-cols-3 gap-2 2xl:gap-6 ">
            <Link
              className="  text-primary mont  lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
              href="/"
            >
              Agency
            </Link>
            <Link
              className="  text-primary mont  lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
              href="/"
            >
              Featured Work
            </Link>
            <Link
              className="  text-primary mont  lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
              href="/"
            >
              Web Design
            </Link>
            <Link
              className="  text-primary mont   lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
              href="/"
            >
              Re-Branding
            </Link>
            <Link
              className="  text-primary mont  lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
              href="/"
            >
              Products
            </Link>
            <Link
              className="  text-primary mont  lg:text-sm xl:text-base font-bold hover:opacity-[0.7] duration-300 transition-all "
              href="/"
            >
              Contact Us
            </Link>
          </div>
          <div className="  max-md:flex-col   flex 2xl:gap-10 gap-2 items-center  ">
            <div className=" flex items-center gap-1">
              <MailIcon />
              <Link
                className=" text-primary mont text-sm xl:text-base font-bold "
                href=""
              >
                info@justgetvisible.com
              </Link>
            </div>
            <div className="   flex items-center gap-1">
              <PhoneIcon />
              <Link
                className=" text-primary mont text-sm xl:text-base font-bold "
                href=""
              >
                0208 068 4939
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex max-w-[1143px] max-lg:flex-col gap-2 w-full justify-between  items-center pt-4  xl:pt-16">
          <h2 className=" text-primary max-md:text-center  mont text-sm  ">
            © 2024 Just Get Visible Ltd, Company Registered in England & Wales:
            09882516
          </h2>
          <div className=" flex  items-center">
            <h2 className="  text-primary mont font-bold text-base   ">
              Follow us
            </h2>
            <div className="flex pl-5 gap-7">
              <PicsIcon />
              <FacebookIcon />
              <InstaIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
