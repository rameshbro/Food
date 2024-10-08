import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import Order from './pages/Order';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';



function App() {
  const [showPopup,setShowPopup]=useState(false)

  return (
    <>
    {showPopup?<LoginPopup setShow={setShowPopup}/> : <></>}
     <div className='md:block w-full border-2  md:border-none'>
     <Navbar setShow={setShowPopup}/>
     <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/cart' element={<Card/> }/>
      <Route path='/order' element={<Order/> }/>
      
     </Routes>
     </div>
     <Footer path='/about' element={<Footer/>}/>
    </>
  )
}

export default App
