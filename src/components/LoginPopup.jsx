import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const LoginPopup = ({setShow}) => {
  const [currState,setCurrState]=useState("Sign Up")
  return (
    <div className='absolute w-full h-full z-10  grid'>
      <form className='place-self-center  text-black max-w-96 rounded-xl text-xl  bg-white flex flex-col gap-6 p-6' >
           <div className='flex justify-between '>
            <h2 className='font-bold text-black'>{currState}</h2>
             <IoMdClose className='cursor-pointer' onClick={()=>setShow(false)} />
           </div>
           <div className='space-y-2 '>
            {currState==="Login"?<></>:<input className='w-full p-1' type="text" placeholder='Your name' required/>}
            <input className='w-full p-1' type="email" placeholder='Your email' required/>
            <input className='w-full p-1' type="password" placeholder='Password' required/>
           </div>
           <button className='text-white p-1 rounded-md bg-orange-500'>{currState==="Sign Up"?"Create account":"Login"}</button>
           <div className='flex items-baseline gap-2'>
            <input className='h-4 w-4' type='checkbox' required/>
            <p>By continuing , i agree to the terms of use & privacy policy.</p>
           </div>
           {currState==="Login"?
           <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
           :<p>Already have an account? <span className='text-orange-500' onClick={()=>setCurrState("Login")}>Click here</span></p>

           }
           
      </form>
    </div>
  )
}

export default LoginPopup