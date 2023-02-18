import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SaleCarusel from '../components/saleCarusel'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import HelpHeader from '../layouts/helpheader'
import Home from '../pages/home'
import ProductsPage from '../pages/productsPage'

const Routing = () => {
  return (
  <>
  <HelpHeader/>
  <Header/>
  <SaleCarusel/>
  <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/:slug' exact element={<ProductsPage/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default Routing