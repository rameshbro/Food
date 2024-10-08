import React from 'react';
import bg from '../assets/images/bg-head-2.webp';

const Header = () => {
  return (
<div>
<div className='relative'>
    <img className='md:w-full rounded-lg md:h-[500px] md:mx-10 md:container container mx-auto w-72 ' src={bg} alt="" />
    <div className='md:mx-12 absolute md:top-28 md:left-16 md:space-y-10 top-4 left-10 mt-4 space-y-4'>
      <h1 className='md:text-6xl font-bold text-white md:w-[600px] w-40'>Order your favourite food here</h1>
      <p className='hidden md:block text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, libero vero delectus numquam rem, saepe enim officia corporis quo necessitatibus voluptatem ut cupiditate nihil accusantium debitis tempora ipsam ipsum totam?</p>
      <button className='px-1 bg-white md:p-2 font-semibold rounded-xl md:max-w-none'>View Menu</button>
    </div>
    </div>
</div>
  )
}

export default Header


  