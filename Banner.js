import React from 'react'
import fish from '../images/fish.jpg'
const Banner = () => {
  return (
    <div className="flex flex-col items-center mt-5">
        <img src={fish} alt="fish" className="w-[60%] h-[60%]"/>
        <div className="mt-8 space-y-6">
            <h1 className="text-2xl font-semibold text-center">HOW IT WORKS</h1>
            <p className="text">Sea Basket delivers fresh sourced seafood in a few any clicks</p>
        </div>
    </div>
  )
}

export default Banner