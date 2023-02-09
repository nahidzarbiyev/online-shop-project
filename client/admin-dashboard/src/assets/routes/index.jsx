import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../layouts/header";
import Register from "../pages/register";
import Signin from "../pages/signin";

const Routing = () => {
  return <>
  <Header/>
  <Routes>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<Register/>}/>
  </Routes>
  </>;
};

export default Routing;
