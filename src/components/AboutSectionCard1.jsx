import React from 'react'

const AboutSectionCard1 = () => {
  return (
    <div>
      <div className="container sm:flex gap-10 justify-between py-10 sm:px-3">
        <div className="img p-2 w-full ">
          <img src="/about1.png" alt="img" className="rounded-xl w-full h-full"/>
        </div>
        <div className="content p-5 flex flex-col items-start gap-2 lg:gap-4 w-fit justify-center">
          <p className="uppercase text-[#E58411] text-sm">experiences</p>
          <h4 className="font-semibold text-3xl lg:text-5xl xl:text-6xl capitalize">
            we provide you the best experience
          </h4>
          <p className="font-light text-sm xl:text-base">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <p className="text-[#E58411] text-sm">More Info</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSectionCard1
