import React, { useEffect, useState } from "react";
import { BiHeart, BiTrash } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getCartItems } from "../../redux/actions/cart.action";

const BasketPage = () => {
    const basket = useSelector((state) => state.cart);
    const [cartItems, setcartItems] = useState(basket.cartItems);
    const [qty, setqty] = useState(cartItems.qty)
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  useEffect(() => {
    setcartItems(basket.cartItems);
  }, [basket.cartItems]);

  useEffect(() => {
    
  if (auth.authenticate) {
    dispatch(getCartItems())
  }
   
  }, [auth.authenticate])
  
  const incrementPrice = (_id,qty) => {
  const { name, price, color,img, size}=  cartItems[_id]
  dispatch(addToCart({_id, name, price, qty,color,img, size}, +1))
  };
  const decrementPrice = (_id, qty) => {
    if (qty<=1) {
        const { name, price, color,img, size}=  cartItems[_id]
        dispatch(addToCart({_id, name, price, qty,color,img, size}, -1))
    }
    
  };

  return (
    <div className="max-w-[1200px] flex justify-between mx-auto my-16">
      <div className="w-full">
        <p className="text-dark text-2xl py-5   uppercase ">Sepet</p>
        {Object.keys(cartItems).map((key, i) => {
          return (
            <div className="flex justify-between gap-5 my-10 w-full max-w-[700px]  ">
              <div className="flex gap-5">
                <img
                  width={"200px"}
                  src={`http://localhost:8080/public/${cartItems[key].img}`}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <p>{cartItems[key].name}</p>

                  <p>{cartItems[key].color?.[0]}</p>
                  <p>NUMARA/BEDEN {cartItems[key].size?.[0]}</p>
                  <div className="flex items-center w-[100px] justify-between gap-2">
                    <button disabled={
                        cartItems[key].qty == 0
                        ?
                        true
                        :
                        false

                    }
                      className="w-10 h-10 rounded-full bg-primary font-bold text-xl"
                      onClick={() => decrementPrice(cartItems[key]._id,cartItems[key].qty)}
                    >
                      -
                    </button>
                    <p>{cartItems[key].qty}</p>
                    <button
                      className="w-10 h-10 rounded-full bg-primary  font-bold text-xl"
                      onClick={() => incrementPrice(cartItems[key]._id,cartItems[key].qty )}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-2 w-[100px] justify-between items-center">
                    <span className="flex justify-center items-center h-10 w-10 rounded-full">
                      <BiHeart className="text-2xl text-dark" />
                    </span>
                    <span className="flex justify-center items-center h-10 w-10 rounded-full">
                      {" "}
                      <BiTrash className="text-2xl text-dark" />
                    </span>
                  </div>
                </div>
              </div>
              <p>₺ {cartItems[key].price}</p>
            </div>
          );
        })}
      </div>
      <div className=" w-full flex flex-col gap-3 max-w-[300px]">
        <p className="text-dark text-2xl py-5  uppercase ">Özet</p>
        <div className="border-b-2 flex justify-between  border-b-primary">
          <span>Ara Toplam </span> <span>₺ 10000</span>
        </div>
        <button className="w-full h-30 rounded-[30px] bg-dark border mt-5 hover:opacity-70 text-white py-4 flex justify-center items-center gap-2"
        onClick={()=>navigate('/checkout')}
        >
          Üye Girişi Yaparak Ödeme
        </button>
      </div>
    </div>
  );
};

export default BasketPage;
