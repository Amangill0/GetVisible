import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div className=" bg-[url(/images/aboutbg.png)] -mt-16 bg-no-repeat bg-cover  bg-contain bg  ">
      <h2 className=" relative text-[#03498A] text-center  mont  text-[274px]  font-black   uppercase pt-37  ">
        about us
      </h2>
      <div className='  ' >
        <Image src="/images/alienship.png" width={937} height={937} alt='ship'/>


      </div>
    </div>
  );
}

export default About