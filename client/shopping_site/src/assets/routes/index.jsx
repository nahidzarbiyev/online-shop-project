import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SaleCarusel from '../components/saleCarusel'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import HelpHeader from '../layouts/helpheader'
import Home from '../pages/home'
import ProductsPage from '../pages/productsPage'
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
  </Routes>
  <Footer/>
  </>
  )
}

export default Routing