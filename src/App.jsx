import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path='/:category' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/success' element={<Success />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
