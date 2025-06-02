import React from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'
import { PackagePlus, Box, FileBox } from 'lucide-react';




const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-300'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] pr-2 text-[15px]'>
            <NavLink className="flex items-center gap-3 border border-gray-400 px-3 py-2 rounded-lg" to="/add">
                {/* <img className='w-5 h-5' src={assets.add_icon} alt='addicon'/> */}
               <PackagePlus className='w-6 h-6 text-gray-800'/>
                <p className='hidden md:block'>Add Item</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 border border-gray-400  px-3 py-2 rounded-lg" to="/list">
                {/* <img className='w-5 h-5' src={assets.order_icon} alt='addicon'/> */}
                <Box />
                <p className='hidden md:block'>List Item</p>
            </NavLink>

            <NavLink className="flex items-center gap-3 border border-gray-400  px-3 py-2 rounded-lg" to="/orders">
                {/* <img className='w-5 h-5' src={assets.order_icon} alt='addicon'/> */}
                <FileBox />
                <p className='hidden md:block'>Orders</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar