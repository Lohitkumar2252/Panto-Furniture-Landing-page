import React from "react";

const AboutSectionCard2 = () => {
  return (
    <div className="container sm:flex flex-row-reverse gap-10 justify-between py-10 sm:px-3">
      <div className="img  p-2 w-full overflow-x-clip flex gap-3 h-full">
        <div className="v-img  flex flex-col h-full gap-3 w-[30%] shrink-0">
          <img src="/about2.png" alt="img" className="w-full shadow-2xl" />
          <img src="/about3.png" alt="img" className="w-full shadow-2xl" />
        </div>
        <div className="big_img  overflow-clip h-[30%] mt-auto">
          <img
            src="/about4.png"
            alt="img"
            className="rounded-xl h-full w-full mb-2"
          />
        </div>
      </div>
      <div className="content  p-5 flex flex-col items-start gap-2 lg:gap-4 w-fit justify-center">
        <p className="uppercase text-[#E58411] text-sm">materials</p>
        <h4 className="font-semibold text-3xl lg:text-5xl xl:text-6xl capitalize">
          Very serious materials for making furniture
        </h4>
        <p className="font-light text-sm xl:text-base">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <p className="text-[#E58411] text-sm">More Info</p>
      </div>
    </div>
  );
};

export default AboutSectionCard2;
