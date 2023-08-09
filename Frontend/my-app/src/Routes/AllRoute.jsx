import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from './../Pages/Product';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Property from '../Pages/Property';
import Booking from '../Pages/Booking';
import Profile from '../Pages/Profile';
import SearchData from '../Pages/SearchData';

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/property' element={<Property/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/searchdata' element={<SearchData/>}/>

        </Routes>
    </div>
  )
}

export default AllRoute