import React from 'react'

const Visible = () => {
  return (
    <div>
      {/* =====strategy===== */}
      <div className=" bg-[url(/images/startegy.png)] pt-100 max-w-[1665px] w-full  bg-center bg-cover bg-no-repeat">
        <div className=" flex flex-col justify-center  pl-40">
          <h2 className="  text-primary mont text-size  font-black uppercase pb-20  ">
            strategy
          </h2>
          <div className="  flex justify-between  gap-10 ">
            <h2 className=" text-primary font-bold w-[170px]  uppercase  text-[26px] ">
              Content strategy
            </h2>
            <h2 className=" text-primary  max-w-[263px] w-full font-bold  uppercase  text-[26px] ">
              user experience strategy
            </h2>
            <h2 className=" text-primary font-bold max-w-[305px] w-full uppercase  text-[26px] ">
              Analytics & keyword strategy
            </h2>
            <h2 className=" text-primary font-bold max-w-[189px] w-full uppercase  text-[26px] ">
              Social Strategy
            </h2>
            <h2 className=" text-primary font-bold max-w-[305px] w-full uppercase  text-[26px] ">
              business consultation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visible