import React from 'react'
import { menu_list } from '../assets/assests.js'

const ExploreMenu = ({category,setGategory}) => {
  return (
    <div className='explore-menu md:mx-10 mt-8 space-y-10 w-72 md:w-auto container mx-auto' id='explore-menu'>
        <h1 className='md:text-4xl font-bold md:w-auto w-full text-2xl'>Explore our menu</h1>
        <p className='mt-2 md:text-lg text-black font-semibold md:w-auto w-full text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, perspiciatis sint aspernatur molestias excepturi, ea illo voluptates delectus mollitia iure tenetur. Tenetur, libero consequatur! Obcaecati error ipsa maxime tenetur est.</p>
        <div className="explore-menu-list overflow-x-scroll cursor-pointer md:w-auto  flex justify-between items-center text-center gap-7">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setGategory(prev => prev === item.menu_name ? "All" :item.menu_name)} key={index} className='explore-menu-list-item  '>
                        <img className={category===item.menu_name ? 'md:p-1 border-red-500 border-4 md:h-32 md:w-32 h-10 w-14 duration-200 rounded-full object-cover': 'md:h-32  md:w-32 h-10 w-16 duration-200  border rounded-full object-cover'} src={item.menu_image} alt={item.menu_name} />
                        <p className='text-black md:text-lg  text-sm cursor-pointer font-sans md:mt-3 mt-0'>{item.menu_name}</p>
                        
                    </div>
                )
            })}
        </div>
        <hr className='border-b-2 border-2 border-gray-500'/>
    </div>
  )
}

export default ExploreMenu