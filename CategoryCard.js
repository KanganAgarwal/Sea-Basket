import React from 'react'

const CategoryCard = ({title,url}) => {
  return (
    <div className="bg-white p-[2px] rounded-lg shadow-lg mx-[2px] h-20 sm:h-[100px] md:h-[150px] lg:h-[200px]">
      <img src={url} alt="url" className=" w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[120px] md:h-[120px] xl:
      lg:w-[150px] lg:h-[150px] xl:w-[170px] xl:h-[170px]
      py-1 object-contain "/>
      <p className="text-center font-semibold text-xs sm:text-sm md:text-base lg:text-lg  ">{title}</p>
    </div>
  )
}

export default CategoryCard