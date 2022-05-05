import React from 'react'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <div className="flex items-center justify-between px-2 py-3 md:px-4 md:py-5 lg:px-8 lg:py-6 xl:px-14 xl:py-8">
         <img src={logo} alt="logo" className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] xl:h-[70px] xl:w-[70px] rounded-full "/>
         <div className="space-x-2 md:space-x-3  lg:space-x-6 flex items-center">
           <div className="nav-link">Category</div>
           <div className="nav-link">FAQs</div>
           <div className="nav-link">My Cart</div>
           <button className=" bg-sky-600 text-white text-xs md:text-sm md:text-lg lg:text-xl px-5 py-2 md:px-6 md:py-3 rounded-md font-semibold lg:px-10 py-4 ">Login</button>
         </div>
    </div>
  )
}

export default Header