import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import logo from  '../assets/images/zomato-logo.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';


const Navbar = ({setShow}) => {
const [menu,setMenu]=useState('Home');
const {getTotalCartAmount}=useContext(StoreContext)
  
  return (
    <>
    <div className='navbar w-72 container mx-auto mt-4 p-2 flex justify-between md:mt-5 md:p-2 md:w-full  md:font-semibold md:mx-12 md:container md:text-xl'>
      <Link to='./'><img src={logo} className='md:h-14 md:w-16 h-10 w-12' alt="" /></Link>
      <ul className='hidden md:gap-6 md:justify-center md:items-center  md:cursor-pointer  md:flex'>
        <Link to='/' onClick={()=> setMenu("Home")}className={menu== "Home" ? " border-b-red-500 border-b-4 " : "" }>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("Menu")}className={menu=="Menu" ? "border-b-red-500 border-b-4 " : ""}>Menu</a>
        <a href='#app-download' onClick={()=> setMenu("Mobile App")}className={menu=="Mobile App" ? "border-b-red-500 border-b-4" : ""}>Mobile App</a>
        <a href='#footer' onClick={()=> setMenu("Contact Us")}className={menu=="Contact Us" ? "border-b-red-500 border-b-4" : ""}>Contact Us</a>
      </ul>
        <ul className='flex gap-5 justify-center items-center'>
          <li><FaSearch /></li>
          <li className='relative'>
            <Link to='/cart'><IoBag /></Link>
            <span className={getTotalCartAmount()===0?"":"absolute h-2 w-2 bg-red-500 rounded-xl -top-2 -right-2"}></span>
          </li>
          <button onClick={()=>setShow(true)} className='rounded-xl border-2 px-4 py-1 font-bold bg-transparent duration-150 text-sm border-gray-400 hover:bg-slate-950 hover:text-white'>Sign In</button>
        </ul>
    </div>
    
    </>
  )
}

export default Navbar