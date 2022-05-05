import React from 'react'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <footer className=" bg-sky-600 min-h-[20%] px-4">
      <div className="flex items-center justify-between px-4 py-12  mx-auto max-w-5xl ">
        <img src={logo} alt="logo" className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full"/>
        <div className="flex items-center space-x-8">
            <div className="text-b text-white space-y-3">
                <p className="para">
                Support</p>

                <p className="para">About Us</p>
                <p className="para">Privacy Policy</p>
</div>
            <div className="text-b text-white space-y-3">
            <p className="para">    Terms & Condition</p>


            <p className="para">Return & Refund Policy</p>

            <p className="para">Shipping & Delivery Policy</p>
            </div>
           
        </div>
        
        </div>
        <p className="text-center pb-5 para ">Sea Basket | All Rights Reserved | 2021 | Copyright</p>
    </footer>
  )
}

export default Footer