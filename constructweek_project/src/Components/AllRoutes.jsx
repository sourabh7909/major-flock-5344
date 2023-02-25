import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from './Home'
import Signin from './Signin'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}

export default AllRoutes