import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/solid'

const Box2 = ({title,img,}) => {
  return (
    <div className={`bg-white text-black my-6 px-5 py-4 rounded-lg border border-gray-300  ${ img ? " bg-[url(/src/images/4.jpg)] bg-no-repeat bg-cover	":""}`} >
        <h1 className="text font-semibold">{title}</h1>
        <p className={`text mt-4 ${img?"w-[65%]":" "} `}>Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et Cursus tortor ut fames sapien a vulputate amet malesuada</p>
       
    
       <div className={`flex items-center mt-4 ${img ? "justify-start": "justify-end"}`} >
           <span className="text-b">READ MORE</span>
           <ChevronRightIcon className="h-9 w-9 text-blue-500"/>
        </div>
        </div>
 
    
       
    
  )
}

export default Box2