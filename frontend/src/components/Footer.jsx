import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-14 text-sm border-t border-t-gray-300 pt-8'>
        <div>
            {/* <img src={assets.logo} className='mb-5 w-32' alt='footer-lgo' /> */}
             <p className="text-2xl font-medium mb-2">MODVEIL</p>
            <p className='w-full md:w-2/3 text-gray-600 text-[0.95rem] font-light'>
            blends timeless style with modern edge. Discover thoughtfully curated fashion that elevates your everyday wardrobe — made to move with you.
            </p>
        </div>

        <div>
            <p className='text-lg font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collection">Shop</Link></li>
                <li><Link to="/about">About us</Link></li>
                 <li><Link to="/contact">Contact Us</Link></li>
         
            
            </ul>
        </div>

        <div>
            <p className='text-lg font-medium mb-5'>QUICK LINKS</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><Link to="#">Profile</Link></li>
                <li><Link to="/orders">My Orders</Link></li>
                <li><Link to="/cart">My Cart</Link></li>
                 <li><Link to="/place-order">Checkout</Link></li>
         
            
            </ul>
        </div>

        <div>
            <p className='text-lg font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+94 9864783</li>
                <li>contact@Modveil.com</li>

            </ul>
        </div>
    </div>
    <div>
    <hr />
    <p className='py-5 text-sm text-center'>Copyright 2024@ Modveil.com - All Right Reserved. </p>
</div>
</div>

  )
}

export default Footer