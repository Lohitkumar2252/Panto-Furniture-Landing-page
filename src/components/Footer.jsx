import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#F7F7F7]">
      <div className="container">
        <div className="footer_container   py-15 px-5 flex justify-between items-center gap-20 flex-col sm:flex-row">
          <div className=" left  flex flex-col items-start justify-center gap-3">
            <h5 className="text-xl font-semibold capitalize">panto</h5>
            <p className="text-[#373737] text-sm sm:w-[70%]">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className="right  grid grid-cols-3 grid-rows-1 w-full gap-3">
            <div className=" flex flex-col items-start justify-start gap-2 ">
              <p className="capitalize text-[#F6973F] text-sm">services</p>
              <ul className="capitalize text-[#373737] text-[0.85rem] flex flex-col justify-center items-start gap-2">
                <li>email marketing</li>
                <li>campaigns</li>
                <li>branding</li>
              </ul>
            </div>
            <div className=" flex flex-col items-start justify-start gap-2 ">
              <p className="capitalize text-[#F6973F] text-sm">furniture</p>
              <ul className="capitalize text-[#373737] text-[0.85rem] flex flex-col justify-center items-start gap-2">
                <li>beds</li>
                <li>chair</li>
                <li>all</li>
              </ul>
            </div>
            <div className=" flex flex-col items-start justify-start gap-2">
              <p className="capitalize text-[#F6973F] text-sm">follow us</p>
              <ul className="capitalize text-[#373737] text-[0.85rem] flex flex-col justify-center items-start gap-2">
                <li className="flex justify-center items-end gap-1"><img src="/icons/facebook.svg" alt="img" className="w-5"/>facebook</li>
                <li className="flex justify-center items-end gap-1"><img src="/icons/twitter.svg" alt="img" className="w-5"/>twitter</li>
                <li className="flex justify-center items-end gap-1"><img src="/icons/instagram.svg" alt="img" className="w-5"/>instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
