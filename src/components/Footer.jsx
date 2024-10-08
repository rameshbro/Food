import React from 'react'
import logo from '../assets/images/zomato-logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer bg-gray-950 md:w-auto w-full text-white md:flex md:flex-col md:items-center md:gap-5 md:p-10 p-2 pt-2' id='footer'>
        <div className="footer-content md:grid md:grid-cols-3 md:w-full md:gap-20 md:mt-4">
            <div className="footer-content-left mt-2">
             <img className='h-6 w-6' src={logo} alt="" />
              <p className='mt-4 text-sm md:text-lg'> adipisicing elit. Vero sapiente libero est quis tenetur soluta voluptates dicta aspernatur, veritatis, esse explicabo? Repellendus provident quod laborum corrupti dolor similique minima adipisci?</p>
           <div className="footer-social-icons flex md:gap-4  gap-2 rounded-xl mt-4 ">
            <p className='border-2 border-gray-400 rounded-xl p-2'><FaFacebookSquare /></p>
            <p className='border-2 border-gray-400 rounded-xl p-2'><FaTwitter /></p>
            <p className='border-2 border-gray-400 rounded-xl p-2'><FaLinkedin /></p>
           </div>
           </div>
            <div className="footer-content-center space-y-6 md:mt-auto mt-5">
                <h2>COMPANY</h2>
                <ul className='space-y-2 '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right   md:mt-auto mt-8">
                     <h2>GET IN TOUCH</h2>
                     <ul className='md:space-y-6 space-y-2'>
                        <li>+1-212-456-7</li>
                        <li>contact@Zomato.com</li>
                     </ul>
            </div>
        </div>
        <hr className='border-gray-700 border-2 w-full mt-8' />
        <p className='mt-3'>Copyright 2024 @ Zomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer