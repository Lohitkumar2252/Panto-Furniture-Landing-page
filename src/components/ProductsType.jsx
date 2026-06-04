import React from "react";
import { useState } from "react";

const ProductsType = (props) => {
  const types = ["All", "Chair", "Bed", "Sofa", "Lamp"];

  const [clickedItem, setclickedItem] = useState("All");
  function handleClick(item) {
    setclickedItem(item);
    props.filterProducts(item);
  }
  return (
    <ul className="flex bg-[#EEEEEE] rounded-4xl font-extralight text-sm cursor-pointer p-1 items-center justify-center select-none">
      {types.map((item) => {
        return (
          <li
            onClick={() => handleClick(item)}
            key={item}
            className={`${item == clickedItem && "bg-white"} px-4 py-2 rounded-4xl`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsType;
