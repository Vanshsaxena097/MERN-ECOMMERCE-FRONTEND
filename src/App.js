import './App.css';
import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import menban from './Components/Assets/banner_mens.png'
import woban from './Components/Assets/banner_women.png'
import kiban from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory  banner={menban} category="men" />} />
          <Route path='/womens' element={<ShopCategory  banner={woban} category="women" />} />
          <Route path='/kids' element={<ShopCategory  banner={kiban} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
} 

export default App;
