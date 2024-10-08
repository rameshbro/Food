import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import {food_list} from '../assets/assests.js'
export const StoreContext =createContext(null)

const StoreContextProvider = (props) => {
  const [cardItems,setCartItems]=useState({});

  const addToCart=(itemId)=>{
    if(!cardItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        // Convert item to the correct type for comparison if necessary
        const itemId = parseInt(item, 10); // Assuming item IDs should be numbers
        const itemInfo = food_list.find(product => product.id === itemId);
  
        if (itemInfo) {
          totalAmount += itemInfo.price * cardItems[item];
        } else {
          console.warn(`Item with ID ${itemId} not found in food_list.`);
        }
      }
    }
  
    return totalAmount;
  }
  

  // useEffect(()=>{
  // console.log(cardItems);
  
  // },[cardItems])

  
 const contextValue = {
    food_list,
    cardItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
 }
  return (
   <StoreContext.Provider value={contextValue}>
     {props.children}
   </StoreContext.Provider>
  )
}

export default StoreContextProvider