import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Aboutpage from '../Pages/About'


function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
       
        
    </Routes>
  )
}

export default Routing