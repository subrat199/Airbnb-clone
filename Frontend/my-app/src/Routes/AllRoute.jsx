import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from './../Pages/Product';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoute