import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from './Home'
import Signin from './Login'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}

export default AllRoutes