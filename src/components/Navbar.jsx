import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute left-0 top-0 w-full text-white flex justify-between items-center p-4'>
      <h1 className='font-bold text-md sm:text-2xl'>Panto</h1>
      <ul className='hidden sm:flex gap-8 text-[#ffffffc0]'>
        <li>Furniture</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="icon"><img src="/icons/menu.svg" alt="" className='w-5 opacity-80'/></div>
    </div>
  )
}

export default Navbar
