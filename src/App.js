import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/e-com" element={<Home />} />
        <Route path="/e-com/cart" element={<Cart />}  />
      </Routes>
    </>
  )
}

export default App