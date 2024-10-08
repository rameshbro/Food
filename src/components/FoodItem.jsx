import React, { useContext } from 'react';
import { IoIosAdd } from "react-icons/io";
import { FaWindowMinimize } from "react-icons/fa6";
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,details,rating,pic,price,category}) => {


  const {cardItems,addToCart, removeFromCart}=useContext(StoreContext)
  return (
   <div className="food_item w-full space-y-5 text-gray-600">
   <div className="food-img relative">
   <img className='h-44 rounded-xl w-full' src={pic} alt="" />
   {!cardItems[id]
   ?<div><IoIosAdd onClick={()=>addToCart(id)} className='h-8 bg-white w-8 absolute bottom-3 border rounded-full cursor-pointer right-12'/></div>:
   <div className='absolute right-12 bottom-3 flex items-center py-0 justify-center rounded-full p-1 bg-white gap-2'>
    <div><FaWindowMinimize className='h-6 w-6 bg-red-200 rounded-full text-red-500 ' onClick={()=>removeFromCart(id)}/></div>
    <p>{cardItems[id]}</p>
    <div><IoIosAdd className='h-8 text-green-500  bg-green-200  rounded-full w-8' onClick={()=>addToCart(id)}/></div>
   </div>
   }
   </div>
   <div className="food-item-info m-2 space-y-3">
    <div className="food-name-rating font-bold text-lg flex text-black justify-between">
        <p>{name}</p>
       <p className=''>{rating}</p>
      
    </div>
    <p className="foo-des text-sm font-semibold">{details}</p>
    
    <p className="food-price text-lg font-bold text-orange-500">${price}</p>
   </div>
    

   </div>
  )
}

export default FoodItem