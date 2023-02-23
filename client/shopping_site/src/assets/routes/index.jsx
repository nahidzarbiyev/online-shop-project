import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import SaleCarusel from '../components/saleCarusel'
import Footer from '../layouts/footer'
import Header from '../layouts/header'
import HelpHeader from '../layouts/helpheader'
import Home from '../pages/home'
import Joinus from '../pages/join-us'
import ProductsPage from '../pages/productsPage'
import Signin from '../pages/register/signin'
import Signup from '../pages/register/signup'

import Size from '../pages/size'
import StoreMap from '../pages/storeMap'
import Yardim from '../pages/Yardim'
import { userLoggedin } from '../redux/actions/auth.actions'

const Routing = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth)
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(userLoggedin())
    }
 
  }, [auth.authenticate])
  
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