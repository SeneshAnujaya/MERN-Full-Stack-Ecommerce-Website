import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* FILTER OPTION */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} alt='' className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''} `}/>
        </p>
        {/* CATEGROY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Men'}/> Men
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Women'}/> Women
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Kids'}/> Kids
          </p>
        </div>
        </div>
        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '': 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Topwear'}/> Topwear
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Bottomwear'}/> Bottomwear
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Winterwear'}/> Winterwear
          </p>
        </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
        </div>
      </div>
    </div>
  )
}

export default Collection