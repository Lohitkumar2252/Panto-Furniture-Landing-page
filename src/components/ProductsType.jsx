import React from "react";
import { useState } from "react";
const ProductsType = () => {
  const types = ["Chair", "Beds", "Sofa", "Lamp"];
  const [clickedItem, setclickedItem] = useState();

  function handleClick(item) {
    setclickedItem((prev) => item);
  }
  return (
    <ul className="flex bg-[#EEEEEE] rounded-4xl font-extralight text-sm cursor-pointer p-1 items-center justify-center select-none">
      {types.map((item, i) => {
        return (
          <li
            onClick={() => handleClick(item)}
            key={i}
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
