import React from 'react';
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t mt-[4.5rem]'>
      <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 w-full flex flex-col justify-center md:flex-row gap-16 mb-20'>
        <div>
        <img className='w-full  md:w-[580px] rounded-md' src={assets.contactPageImg} alt='' />
        </div>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-medium text-xl text-gray-800'>Our Store</p>
          <p className='text-gray-500 font-light'>Modveil, No. 45, Galle Road, <br/> Colombo 03, Sri Lanka</p>
          <p className='text-gray-500 font-light'>Tel: +94 77 9864783 <br/> Email: support@modveil.lk</p>
          <p className='font-medium text-xl text-gray-800'>Careers at Modveil</p>
          <p className='text-gray-500 md:w-3/4 font-light'>Join a passionate team shaping the future of fashion in Sri Lanka. Discover exciting roles in design, retail, marketing, and more.</p>
          <button className='border border-black px-6 py-3 text-sm md:text-base hover:bg-black hover:text-white transition-all duration-500'>Explore Careers</button>
        </div>
      </div>

      





    
      <NewsletterBox />
    </div>
  )
}

export default Contact