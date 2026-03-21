import React from 'react'
import SmallCard from "./SmallCard";
const HeroBottom = () => {
  return (
    <div className=" container p-3 bg-white sm:flex items-center justify-center gap-3">
          <h2 className="font-bold w-40 sm:w-full lg:w-120 xl:w-96 sm:text-[28px] text-2xl">Why Choosing Us</h2>
          <div className="right mt-2 sm:flex">
            <SmallCard h3="Luxury facilities" p="The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."/>
            <SmallCard h3="Affordable Price" p="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."/>
            <SmallCard h3="Many Choices" p="We provide many unique work space choices so that you can choose the workspace to your liking."/>
          </div>
        </div>
  )
}

export default HeroBottom
