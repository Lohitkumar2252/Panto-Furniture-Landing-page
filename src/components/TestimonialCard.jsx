import React from "react";

const TestimonialCard = (props) => {
  const bgImg = {
    backgroundImage: `url(${props.bgImg})`
  }


  return (
    <div
      className={`bg-no-repeat bg-center bg-cover p-3 flex h-100 w-[18rem] sm:max-w-[18rem] rounded-xl shadow-[3px_3px_21px_-5px_#000000]`}
    style={bgImg}>
      <div className="content bg-white h-fit self-end rounded-xl p-3 flex flex-col items-center justify-center relative">
        <div className="profile rounded-full py-3 px-3 absolute -top-7.5 bg-white">
          <img src={props.pfp} alt="img" className="w-full" />
        </div>
        <h5 className="font-bold text-base mt-10">{props.h5}</h5>
        <p className="text-[#8d8c8c] font-extralightlight text-sm">{props.p}</p>
        <p className="text-[#545454] font-light text-center text-[0.8rem] mt-5">
          {props.review}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
