import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SaleCarusel from '../components/saleCarusel'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import HelpHeader from '../layouts/helpheader'
import Home from '../pages/home'

const Routing = () => {
  return (
  <>
  <HelpHeader/>
  <Header/>
  <SaleCarusel/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default Routing