import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import getPrams from "../../utils/getPrams";
import Products from "./Products";
import ProductStore from "./productStore";

const ProductsPage = (props) => {
  const location = useLocation();

  useEffect(() => {}, []);
  const renderProduct = () => {
    const params = getPrams(location.search);
    let content = null;
    if (params.type === 'page') {
      return   <ProductStore/>
       
    }
    else if (params.type === 'store') {
      return <Products/>
    }
  }
  return (
    <>
      <div className="max-w-[1900px] m-auto">
        <nav className="flex"></nav>

        {renderProduct()}
   
      </div>
    </>
  );
};

export default ProductsPage;
