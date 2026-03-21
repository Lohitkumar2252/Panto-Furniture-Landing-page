import React from 'react'

const HeroContent = () => {
  return (
    <div className='flex flex-col items-center gap-4 2xl:gap-8'>
      <h2 className='text-center text-2xl font-bold sm:text-5xl lg:text-6xl xl:text-5xl xl:w-132 2xl:text-7xl 2xl:w-240'>Make your interior more minimalistic & modern</h2>
                <p className='text-center text-xs opacity-70 xl:text-lg xl:w-lg font-extralight'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                <div className="input_box backdrop-blur-sm rounded-4xl overflow-hidden flex items-center justify-between relative border xl:w-3xs xl:h-12">
                  <input type="text" id='Search'
                   placeholder='Search Furniture'
                  className='text-xs px-2 w-full h-full py-2 outline-none xl:text-base text-[#ffffffa1]'/>
                  <div className="search p-2 flex items-center justify-center bg-[#E58411] rounded-full absolute right-1"><img src="/icons/search.svg" alt="seacrh icon" className='w-3 xl:w-5' /></div>
                </div>
    </div>
  )
}

export default HeroContent
