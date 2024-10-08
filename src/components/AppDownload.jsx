import React from 'react';
import app from '../assets/images/app-download.png';
import download from '../assets/images/app-img.jpg'

const AppDownload = () => {
  return (
<>

<div id='app-download' className='flex flex-col justify-center items-center mt-4 font-serif font-bold md:w-auto w-72'>
    <div className='space-y-4'>
    <h2 className='md:text-3xl text-xl text-center'>For Better Experience Download</h2>
    <h4 className='md:text-2xl text-lg text-center'>Tomato App</h4>
    </div>
    <div className='flex items-center gap-4'>
        <img className='h-36 w-56 hover:scale-95 duration-150' src={app} alt="" />
        <img className='h-28 w-56 rounded-xl hover:scale-95 duration-150' src={download} alt="" />
    </div>
</div>
</>
  )
}

export default AppDownload