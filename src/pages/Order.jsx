import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';


const Order = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='md:w-full md:p-6  md:container md:mx-auto container mx-auto p-1 md:flex md:justify-between'>
      <div className="place-order-left md:space-y-3  space-y-2 md:p-2">
        <p className='font-bold text-md md:text-xl'>Delivery Information</p>
        <div className='multi-fields flex md:gap-12 gap-1 mx-auto container '>
          <input className='border-2 md:w-auto w-1/2 md:p-1 p-0 rounded-sm border-gray-400 text-black ' type="text" placeholder='First name' />
          <input className='border-2 md:p-1 p-0 rounded-sm border-gray-400 text-black ' type="text" placeholder='Last name' />
        </div>
        <input className='border-2 md:p-1 p-0  w-full  rounded-sm border-gray-400 text-black ' type="email" placeholder='Email address' />
      <input type="text" className='border-2 md:p-1 p-0  w-full rounded-sm border-gray-400 text-black ' placeholder='Street' />
      <div className='multi-fields flex gap-1  md:gap-12'>
          <input className='border-2 md:p-1 p-0 md:w-auto w-1/2 rounded-sm border-gray-400 text-black ' type="text" placeholder='City' />
          <input className='border-2 md:p-1 p-0 rounded-sm border-gray-400 text-black ' type="text" placeholder='State' />
        </div>
      <div className='multi-fields flex md:gap-12 gap-1 '>
          <input className='border-2 md:p-1 md:w-auto w-1/2 p-0 rounded-sm border-gray-400 text-black ' type="text" placeholder='Zip code' />
          <input className='border-2 md:p-1 p-0 rounded-sm border-gray-400 text-black ' type="text" placeholder='Country' />
        </div>
        <input type="text" className='border-2 md:p-1 p-0 rounded-sm border-gray-400 text-black ' placeholder='phone' />
      </div>
      <div className="place-order-right  w-full md:ml-36 p-2">
      <div className="card-total flex-1 flex md:mt-auto mt-4 flex-col gap-5 space-y-3">
          <h2 className='font-bold text-md  md:text-xl'>Cart Totals</h2>
          <div className='space-y-2'>
            <div className="card-total-details flex justify-between text-gray-600">
              <p>Sub total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr className='border-black' />
            <div className="card-total-details flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()===0?"0":"2"}</p>
            </div>
            <hr className='border-black' />
            <div className="card-total-details flex justify-between text-gray-600">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?"0":getTotalCartAmount()+2}</b>
            </div>
            <button className='text-white bg-orange-400 p-2 md:w-52 rounded-md text-xs'>PROCEED TO PAYMENT</button>
          </div>
          
        </div> 
      </div>
    </form>
  )
}

export default Order