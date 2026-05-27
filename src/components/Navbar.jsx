import React from "react";

const Navbar = () => {
  return (
  
      <div className=" absolute top-0 left-0 w-full text-white flex justify-between items-center p-4">
        <h1 className="font-bold text-md sm:text-2xl">Panto</h1>
        <ul className="hidden sm:flex gap-8 justify-self-center text-[#ffffffc0]">
          <li>
            <a href="#heroSection">Furniture</a>
          </li>
          <li>
            <a href="#shopSection">Shop</a>
          </li>
          <li>
            <a href="#aboutUsSection">About Us</a>
          </li>
          <li>
            <a href="#footerSection">Contact</a>
          </li>
        </ul>
        <div className="icon">
          <img
            src="/icons/menu.svg"
            alt=""
            className="w-5 opacity-80 sm:hidden"
          />
        </div>
      </div>

  );
};

export default Navbar;
