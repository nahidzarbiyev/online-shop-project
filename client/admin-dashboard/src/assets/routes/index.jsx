import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../layouts/header";
import Categories from "../pages/categories";
import DashboardHome from "../pages/dashboard-home";
import AdminDashboard from "../pages/home";
import Orders from "../pages/orders";
import ProductPage from "../pages/ProductPage";
import Products from "../pages/products";
import Register from "../pages/register";
import Settings from "../pages/settings";
import Signin from "../pages/signin";
import { userLoggedin } from "../redux/actions";
import { getInitialData } from "../redux/actions/initialData.actions";

const Routing = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(userLoggedin());
    }
    dispatch(getInitialData())
    navigate("/sign-in") 
  }, []);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
    navigate("/sign-in") 
      
    }
  }, [token]);

  return (
    <>
    {
      token
      ?
      <AdminDashboard />
      :
      <Header/>
    }
      {
        
        <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" exact element={<Signin />} />

        <Route path="/" exact element={<DashboardHome/>}/>
        <Route path="/page" element={<ProductPage/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>}
    </>
  );
};

export default Routing;
