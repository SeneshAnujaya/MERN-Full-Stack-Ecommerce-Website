import React from 'react';
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className='mt-[4.5rem]'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[600px] rounded-md' src={assets.aboutPageImg} alt='about-img'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='font-light'>At Modveil, we believe that fashion is more than clothing — it’s a statement.
Founded with a passion for modern minimalism and timeless style, Modveil offers carefully curated collections for those who value quality, comfort, and confidence. Our monochrome aesthetic, driven by black and white tones, reflects the essence of effortless fashion for every occasion.

From everyday essentials to standout pieces, each product is crafted to inspire self-expression and elevate your wardrobe. We are committed to providing premium fabrics, thoughtful designs, and a seamless shopping experience.

Modveil isn’t just a brand — it’s a lifestyle.</p>
          <b className='text-gray-800 font-medium text-lg'>Our Vision</b>
          <p className='font-light'>At Modveil, our vision is to redefine everyday fashion through simplicity, quality, and confidence. We aim to create a space where minimal design meets bold expression — where everyone can feel empowered in what they wear.

We envision a future where clothing is not just stylish but also sustainable, inclusive, and timeless. Through thoughtfully crafted collections and an unwavering focus on customer experience, we strive to be more than a brand — a movement that celebrates individuality through fashion.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-2'>
        <div className='border border-gray-300 rounded-md px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='font-medium text-base'>Quality Assurance:</b>
          <p className='text-gray-600  font-light'>At Modveil, we take pride in delivering high-quality garments made with precision, care, and durable materials. Every product goes through a rigorous quality check to ensure it meets our standards and your expectations.</p>
        </div>
        <div className='border border-gray-300 rounded-md px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b className='font-medium text-base'>Convenient:</b>
        <p className='text-gray-600 font-light'>From seamless browsing to fast delivery and easy returns, we’ve designed every step of your shopping experience to be effortless and stress-free — so you can focus on looking and feeling great.</p>
        </div>
        <div className='border border-gray-300 rounded-md px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b className='font-medium text-base'>Exceptional Customer Service:</b>
        <p className='text-gray-600 font-light'>Our support team is here for you — ready to help with any questions or concerns. We believe in building trust through prompt, friendly, and reliable service every step of the way.</p>
        </div>
         </div>

      <NewsletterBox />
    </div>
  )
}

export default About