import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';


const FoodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
  return (
   <div className="food_display md:mx-10 mt-10 w-72 md:w-full container mx-auto" id="food_display">
    <h3 className='md:text-4xl text-xl font-bold'>Top dishes near you</h3>
   <div className="food-display-list mt-10 grid grid-cols-1 lg:grid-cols-4  md:grid-cols-3 gap-4 p-2 border-2">
   {
    food_list.map((item,index)=>{
      if(category==="All" || category===item.category){
        return <FoodItem  key={index} id={item.id} name={item.name} details={item.details} rating={item.rating} pic={item.pic} price={item.price} category={item.category}/>
      }
       
    }) 
   }
    
   </div>
   </div>
  )
}

export default FoodDisplay