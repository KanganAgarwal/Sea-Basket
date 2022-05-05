import React from 'react'
import CategoryCard from './CategoryCard'
 import { useEffect,useState
 } 
 from "react";


import glance from "../images/glance.jpg"
const Categories = () => {
  const [info,setInfo]=useState([]);
    const fetchData = async () => {
   
      const res= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
const data = await res.json();
      setInfo(data.meals);
      console.log(data)
      console.log(data.meals)
      console.log(info)
      return res;

      
   };
        
    useEffect(() => {
       fetchData();
       }, []);
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
        <h1 className="font-semibold text-2xl mt-8 pl-4 md:pl-5">CATEGORIES</h1>
        <div className="flex items-center justify-between mt-4">
        { info.map(({idMeal,strCategory,strMealThumb}) =>
        (
<CategoryCard key={idMeal} title={strCategory} url={strMealThumb}/>
        ))
        
}
</div>
<div className="heading my-16">A GLANCE AT OUR PRODUCT</div>
<img className="w-full rounded-lg object-contain" src={glance} />
    </div>
  )
}

export default Categories