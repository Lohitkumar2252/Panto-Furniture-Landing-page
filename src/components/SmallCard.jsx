import React from "react";
import { NavLink } from "react-router";
const SmallCard = (props) => {
  return (
    <div className="p-2 flex flex-col items-start justify-center gap-2">
      <h3 className="font-bold text-[#1E1E1E] text-lg">{props.h3}</h3>
      <p className="text-[#1E1E1E] text-sm  ">
        {props.p}
      </p>
      <NavLink to="/More_Info" className="text-xs text-[#E58411]">More Info</NavLink>
    </div>
  );
};

export default SmallCard;
