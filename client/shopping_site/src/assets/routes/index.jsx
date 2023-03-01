import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SaleCarusel from "../components/saleCarusel";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import HelpHeader from "../layouts/helpheader";
import Home from "../pages/home";
import ProductDetailPage from "../pages/productDetails";
import Joinus from "../pages/join-us";
import ProductsPage from "../pages/productsPage";
import Signin from "../pages/register/signin";
import Signup from "../pages/register/signup";

import Size from "../pages/size";
import StoreMap from "../pages/storeMap";
import Yardim from "../pages/Yardim";
import { userLoggedin } from "../redux/actions/auth.actions";
import Favorites from "../pages/favorites";
import BasketPage from "../pages/basketpage";
import { updateCart } from "../redux/actions/cart.action";
import CheckOutOrder from "../pages/CheckOutOrderPage";
import Orders from "../pages/OrderPage";
import OrderDetails from "../pages/OrderPage/OrderDetails";
import ErrorPage from "../pages/error";

const Routing = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(userLoggedin());
  //   }
  // }, [auth.authenticate]);
  // useEffect(() => {
  // dispatch(updateCart())
  // }, [auth.authenticate]);


  
  return (
    <>
      <HelpHeader />
      <Header />

      <SaleCarusel />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/:productSlug/:productId/p"
          element={<ProductDetailPage />}
        />
        <Route path="/category/:slug" exact element={<ProductsPage />} />
        <Route path="/help" element={<Yardim />} />
        <Route path="/size" element={<Size />} />
        <Route path="/retail" element={<StoreMap />} />
        <Route path="/join-us" element={<Joinus />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/basket" element={<BasketPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        {
          auth.authenticate
          ?
          <Route path="/orderDetails/:orderId" element={<OrderDetails/>}/>
          :
          null
        }
        {
          auth.authenticate
          ?
          <Route path="/checkout" element={<CheckOutOrder/>}/>
          :
          null
        }
        <Route path="/account/orders" element={<Orders/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
