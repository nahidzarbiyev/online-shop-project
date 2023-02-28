import React, { useEffect, useState } from "react";
import { BiHeart, BiTrash } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getCartItems, removeCartItem } from "../../redux/actions/cart.action";

const BasketPage = (props) => {
  const basket = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const [cartItems, setcartItems] = useState(basket.cartItems);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setcartItems(basket.cartItems);
  }, [basket.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const incrementPrice = (_id, qty) => {
    const { name, price, color, img, size } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, qty, color, img, size }, +1));
  };
  const decrementPrice = (_id, qty) => {
    const { name, price, color, img, size } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, qty, color, img, size }, -1));
  };

  const totalItem = Object.keys(cart.cartItems).reduce(function (qty, key) {
    return qty + cart.cartItems[key].qty;
  }, 0);
  const totalPrice = Object.keys(cart.cartItems).reduce((totalItem, key) => {
    const { price, qty } = cart.cartItems[key];
    return totalItem + price * qty;
  }, 0);
  const fixtotalPrice = totalPrice.toFixed(2)

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };



  if (props.cartItems) {
    return (
      <>
        <div className="w-full mx-auto">
        <p className="text-dark text-2xl py-5 lg:text-start text-center  uppercase ">Orders</p>
        {Object.keys(cartItems).map((key, i) => {
          return (
          <>
            <div className="flex justify-between gap-5 my-10 w-full lg:max-w-[1000px] max-w-[400px] lg:mx-0 mx-auto ">
              <div className="flex flex-col lg:flex-row gap-5">
                <img
                  width={"100px"}
                  height={'80px'}
                  src={`http://localhost:8080/public/${cartItems[key].img}`}
                  alt=""
                />
                <div className="flex flex-col justify-end gap-2">
                  <p>{cartItems[key].name}</p>

                  <p>{cartItems[key].color?.[0]}</p>
                  <p>NUMARA/BEDEN {cartItems[key].size?.[0]}</p>
                  <div className="flex items-center w-[100px] justify-between gap-2">
                    <button
                      disabled={cartItems[key].qty == 0 ? true : false}
                      className="w-10 h-10 rounded-full bg-primary font-bold text-xl"
                      onClick={() =>
                        decrementPrice(cartItems[key]._id, cartItems[key].qty)
                      }
                    >
                      -
                    </button>
                    <p > {cartItems[key].qty}</p>
                    <button
                      className="w-10 h-10 rounded-full bg-primary  font-bold text-xl"
                      onClick={() =>
                        incrementPrice(cartItems[key]._id, cartItems[key].qty)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-2 w-[100px] justify-between items-center">
                    <span className="flex justify-center items-center h-10 w-10 rounded-full">
                      <BiHeart className="text-2xl  text-gray-500 transition-all duration-300 hover:text-dark cursor-pointer" />
                    </span>
                    <span className="flex justify-center items-center h-10 w-10 rounded-full">
                      {" "}
                      <BiTrash className="text-2xl text-gray-500 transition-all duration-300 hover:text-dark cursor-pointer "  onClick={()=>onRemoveCartItem(cartItems[key]._id)}/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end"><p className="text-dark font-bold"> Fiyat: <span className="text-gray-500">₺ {cartItems[key].price}</span></p></div>
            </div>
 
          </>
          );
        })}
      </div>
      </>
    )
  }

  return (
    <div className="max-w-[1200px] flex lg:flex-row flex-col justify-between mx-auto my-16">
      <div className="w-full mx-auto">
        <p className="text-dark text-2xl py-5 lg:text-start text-center  uppercase ">Sepet</p>
        {Object.keys(cartItems).map((key, i) => {
          return (
            <div className="flex justify-between gap-5 my-10 w-full lg:max-w-[700px] max-w-[400px] lg:mx-0 mx-auto ">
              <div className="flex flex-col lg:flex-row gap-5">
                <img
                  width={"200px"}
                  src={`http://localhost:8080/public/${cartItems[key].img}`}
                  alt=""
                />
                <div className="flex flex-col justify-end gap-2">
                  <p>{cartItems[key].name}</p>

                  <p>{cartItems[key].color?.[0]}</p>
                  <p>NUMARA/BEDEN {cartItems[key].size?.[0]}</p>
                  <div className="flex items-center w-[100px] justify-between gap-2">
                    <button
                      disabled={cartItems[key].qty == 0 ? true : false}
                      className="w-10 h-10 rounded-full bg-primary font-bold text-xl"
                      onClick={() =>
                        decrementPrice(cartItems[key]._id, cartItems[key].qty)
                      }
                    >
                      -
                    </button>
                    <p > {cartItems[key].qty}</p>
                    <button
                      className="w-10 h-10 rounded-full bg-primary  font-bold text-xl"
                      onClick={() =>
                        incrementPrice(cartItems[key]._id, cartItems[key].qty)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-2 w-[100px] justify-between items-center">
                    <span className="flex justify-center items-center h-10 w-10 rounded-full">
                      <BiHeart className="text-2xl  text-gray-500 transition-all duration-300 hover:text-dark cursor-pointer" />
                    </span>
                    <span className="flex justify-center items-center h-10 w-10 rounded-full">
                      {" "}
                      <BiTrash className="text-2xl text-gray-500 transition-all duration-300 hover:text-dark cursor-pointer "  onClick={()=>onRemoveCartItem(cartItems[key]._id)}/>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end"><p className="text-dark font-bold"> Fiyat: <span className="text-gray-500">₺ {cartItems[key].price}</span></p></div>
            </div>
          );
        })}
      </div>
      <div className=" w-full flex flex-col gap-3 lg:mx-0 mx-auto max-w-[300px]">
        <p className="text-dark text-2xl py-5  uppercase ">Özet</p>
        <div className="border-b-2 flex justify-between  border-b-primary">
          <span>Ara Toplam </span> <span className="text-gray-500"> ₺{fixtotalPrice}</span>
          {<span>ürün Sayı <span className="text-gray-500">{totalItem}</span></span>}
        </div>
        <button
          className="w-full h-30 rounded-[30px] bg-dark border mt-5 hover:opacity-70 text-white py-4 flex justify-center items-center gap-2"
          onClick={() => navigate("/checkout")}
        >
          Üye Girişi Yaparak Ödeme
        </button>
      </div>
    </div>
  );
};

export default BasketPage;
