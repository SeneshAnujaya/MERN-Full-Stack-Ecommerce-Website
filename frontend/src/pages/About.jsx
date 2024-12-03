import React from 'react';
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='about-img'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto ipsa deleniti rerum tenetur facilis placeat minima libero! Repellendus dolorem reprehenderit doloribus ab impedit adipisci debitis ipsum excepturi vitae beatae!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequatur adipisci fugit consectetur! Asperiores, inventore, quis aut explicabo rem facilis voluptatum laudantium porro veniam fugiat beatae exercitationem veritatis amet ex!</p>
          <b className='text-gray-800'>Our Misson</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nihil.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quam accusantium placeat sapiente tenetur quisquam!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenient:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quam accusantium placeat sapiente tenetur quisquam!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quam accusantium placeat sapiente tenetur quisquam!</p>
        </div>
         </div>

      <NewsletterBox />
    </div>
  )
}

export default About