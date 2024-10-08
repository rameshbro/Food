import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    
    
    const {cardItems,food_list,removeFromCart,getTotalCartAmount }=useContext(StoreContext);
    const navigate = useNavigate();
  return (
    <div className='mt-24 container mx-auto w-72 md:w-auto'>
      <div className="card-items w-72 md:w-auto">
        <div className="card-item-title grid grid-cols-6 items-center md:gap-0 gap-4 bg-gray-100 text-xs md:text-lg font-bold">
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='border-b-2 border-red-400' />
        {
          food_list.map((item,index)=>{
             if(cardItems[item.id]>0)
             {
              return(
                <>
                <div className='grid grid-cols-6  items-center bg-gray-100 text-sm md:gap-0 gap-6 md:text-lg my-3 mx-0 text-black'>
                  <img className='w-12 ' src={item.pic} alt="" />
                  <p className='w-10'>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item.id]}</p>
                  <p>{item.price*cardItems[item.id]}</p>
                  <p onClick={()=>removeFromCart(item.id )} className='cursor-pointer '>x</p>
                </div>
                <hr className=' h-1 bg-slate-200 border-none'/>
                </>
              )
             }
          })
        }
      </div>
      <div className='mt-20 flex md:justify-between md:flex-row flex-col-reverse mb-4 md:mb-auto gap-28 mr-20 md:p-4 w-72 md:w-auto'>
        <div className="card-total flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div className='space-y-2'>
            <div className="card-total-details flex justify-between text-gray-600">
              <p>Sub total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?"0":"2"}</p>
            </div>
            <hr />
            <div className="card-total-details flex justify-between text-gray-600">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?"0":getTotalCartAmount()+2}</b>
            </div>
            <button onClick={()=>navigate('/order')} className='text-white bg-orange-400 border-none font-bold text-xs rounded-md p-2'>PROCEED TO CHECKOUT</button>
          </div>
          
        </div>
        <div className="promo-code">
            <div className='space-y-2'>
              <p className='text-sm  md:text-base'>If you have a promo code,Enter it here</p>
              <div className='flex  gap-2'>
                <input className='border-2 border-black rounded-md' type="text" placeholder='promo code'/>
                <button className='text-white bg-black px-3 py-1 rounded-sm'>Submit</button>
              </div>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Card