import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Exclusive Updates, Just for You</p>
        <p className='text-gray-500 mt-3'>Subscribe for new arrivals, special offers, and fashion inspiration — straight to your inbox. </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-1 mx-auto mt-6'>
            <input type='email' placeholder='Enter your email' className='w-full sm:flex-1 outline-none border px-4 py-3' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox;