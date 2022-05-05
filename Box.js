import React from 'react'
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/solid'
const Box = ({long}) => {
  return (
    <div className="bg-white text-black  my-6 px-5 py-4 rounded-lg border border-gray-300 ">
        <div className="flex items-center justify-between">
        <p className="text">Velit venenatis pretium mattis consectetur massa pretium mattis?</p>
        <div>{long &&
 <ChevronDownIcon className="h-9 w-9 text-blue-500"/>
            }
            {!long &&
 <ChevronUpIcon className="h-9 w-9 text-blue-500 "/>
            }
       
       
    </div>
       

        </div>
  { long && (
        <p className="text mt-4 w-[85%]">Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et Cursus tortor ut fames sapien a vulputate amet malesuada</p>
        )} 
    
       
    </div>
    
  )
}

export default Box