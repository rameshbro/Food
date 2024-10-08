import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';

const Home = () => {
    const [category,setGategory]=useState("All"); 
  return (
    <div >
        <Header/>
        <ExploreMenu category={category} setGategory={setGategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home