import React from 'react'
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
const HeroSection = () => {
  return (
    <section className='bg-[url("/hero.png")] h-[70vh] sm:h-screen bg-no-repeat bg-cover bg-center max-h-280'>
          <div className="container relative pt-16 sm:pt-36 2xl:pt-60 items-center h-full text-white p-3">
            <Navbar />
            <HeroContent />
          </div>
        </section>
  )
}

export default HeroSection
