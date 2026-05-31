import React from "react";

const ProductCard = (props) => {
  return (
    <div className="p-3 w-full sm:max-w-60 h-full flex flex-col justify-between bg-white rounded-xl shadow-2xs">
      <div className="img w-full">
        <img src={props.img} alt="" className="w-full object-contain"/>
      </div>
      <div className="content">
        <h4>{props.name}</h4>
        <div className="price flex justify-between">
          <p>{props.price}</p>
          <div className="icon bg-[#0D1B39] p-2 rounded-full"><img src="\icons\plus.svg" className="w-4" alt="add" /></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
