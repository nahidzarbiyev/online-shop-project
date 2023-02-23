import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SaleCarusel from '../components/saleCarusel'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import HelpHeader from '../layouts/helpheader'
import Home from '../pages/home'
import Joinus from '../pages/join-us'
import ProductsPage from '../pages/productsPage'
import Signup from '../pages/register/sign-up'
import Signin from '../pages/register/signin'
import Size from '../pages/size'
import StoreMap from '../pages/storeMap'
import Yardim from '../pages/Yardim'

const Routing = () => {
  return (
  <>
  <HelpHeader/>
  <Header/>

  <SaleCarusel/>
  <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/:slug' exact element={<ProductsPage/>}/>
    <Route path='/help' element={<Yardim/>} />
    <Route path='/size' element={<Size/>}/>
    <Route path='/retail' element={<StoreMap/>} />
    <Route path='/join-us' element={<Joinus/>} />
    <Route path='/sign-in' element={<Signin/>} />
    <Route path='/sign-up' element={<Signup/>} />
  </Routes>
  <Footer/>
  </>
  )
}

export default Routing