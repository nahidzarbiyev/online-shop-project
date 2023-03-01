import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiHeart, BiTrash } from "react-icons/bi";
import Logo from "../../images/png/Logo_NIKE.svg.png";
import { addOrder, getAddress } from "../../redux/actions/user.action";
import AdressForm from "./addressform";

import {
  getCartItems,
  removeCartItem,
  updateCart,
} from "../../redux/actions/cart.action";
import EditAdressForm from "./addressform/editAdressForm";
import BasketPage from "../basketpage";
import { Link } from "react-router-dom";

const CheckOutOrder = () => {
  const dispatch = useDispatch();
  const [toggle, settoggle] = useState(true);
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const basket = useSelector((state) => state.cart);
  const [cartItems, setcartItems] = useState(basket.cartItems);
  const [orderSummary, setOrderSummary] = useState(false);

  const [address, setAdress] = useState([]);
  const [newAddress, setNewAddress] = useState(false);
  const [confrimAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editform, seteditForm] = useState([]);
  const [editadress, setEditAddress] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false)
  const [confrimOrder, setConfirmOrder] = useState(false)
  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((el) => ({
      ...el,
      selected: false,
      edit: false,
    }));
    setAdress(address);
  }, [user.address]);

  const selectAddress = (adr) => {
    const updatedAdres = address.map((adres) =>
      adres._id === adr._id
        ? { ...adres, selected: true }
        : { ...adres, selected: false }
    );
    setAdress(updatedAdres);
  };
  const handleEdit = (adr) => {
    seteditForm(true);
    const updatedAdres = address.map((adres) =>
      adres._id === adr._id
        ? { ...adres, edit: true }
        : { ...adres, edit: false }
    );
    setAdress(updatedAdres);
  };

  const ConfirmDeliveryAddress = (adr) => {
    if (totalItem===0) {
      alert("Şu an da satın alınacak ürününüz yok")
    }
    else{
      setSelectedAddress(adr);
    setConfirmAddress(true);
    setEditAddress(true);
    setOrderSummary(true);
    }
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
    dispatch(updateCart());
  };
  const totalItem = Object.keys(cart.cartItems).reduce(function (qty, key) {
    return qty + cart.cartItems[key].qty;
  }, 0);
  const totalPrice = Object.keys(cart.cartItems).reduce((totalItem, key) => {
    const { price, qty } = cart.cartItems[key];
    return totalItem + price * qty;
  }, 0);


  const userOrderConfirmHandle= ()=>{
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true)
  }

  const confirmOrderHandle = ()=>{
    const totalAmount = Object.keys(cart.cartItems).reduce(
      (totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      },
      0
    );
    const items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].price,
      purchasedQty: cart.cartItems[key].qty,
    }));
    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: "pending",
      paymentType: "cod",
    };
    dispatch(addOrder(payload))

setConfirmOrder(true)
  }
  
  
  if (confrimOrder) {
    return <div className="w-full max-w-[1200px] flex flex-col gap-5 justify-center items-center mx-auto h-[60vh]">
<img   width={'70px'} src={Logo} alt="" />

       <p className="text-xl text-dark"> Siparişiniz başarıyla onaylandı. kargo takipi için <Link className="underline " to={'/account/orders'}>SIparişlerim</Link>'e git.</p>
       <Link className="underline " to={'/'}>Ana sayfaya dön</Link>
    </div>
  }
  else{
    return (
      <>
        <img src={Logo} className={"w-[70px] my-16 mx-auto"} alt="" />
        <div className="max-w-[1000px] flex lg:flex-row flex-col lg:justify-between  my-16 mx-auto">
          <div className="w-full flex flex-col lg:mx-0 mx-auto gap-2 max-w-[450px] ">
            <span className="w-full py-2 bg-primary  text-[14px] text-blue-400 uppercase">
              <span className="w-4 h-4 rounded-full pl-2 text-[14px] text-blue-400">
                1
              </span>{" "}
              Login
            </span>
  
            {auth.authenticate ? (
              <>
                <p>Kullanıcı adı:{auth.user.fullName} </p>
                <p>Email:{auth.user.email} </p>
              </>
            ) : null}
            {
              <>
                <span
                  className={
                    !confrimAddress
                      ? "w-full py-2 text-[14px] text-blue-400 bg-primary uppercase"
                      : "w-full py-2 text-[14px] bg-blue-400 text-primary uppercase"
                  }
                >
                  <span className="w-4 h-4 rounded-full pl-2 text-[14px] text-blue-400">
                    2
                  </span>{" "}
                  Teslimat Addressi
                </span>
  
                {auth.authenticate ? (
                  <>
                    <p
                      className="text-gray-500"
                      onClick={() => settoggle(!toggle)}
                    >
                      {toggle
                        ? "adress Bilgilerini göster"
                        : "adress Bilgilerini gizle"}
                    </p>
  
                    {toggle ? null : (
                      <div className="w-full flex flex-col gap-4">
                        {confrimAddress ? (
                          <>
                            {null ? (
                              <p>{console.log(selectedAddress.edit)}</p>
                            ) : (
                              <>
                                <div className="flex flex-col bg-secondary p-3 gap-3 my-4">
                                <span>{selectedAddress?.name}</span>
                                <span className="flex gap-4">
                                  Bilgiler:{selectedAddress?.addressType}
                                  <span>{selectedAddress?.alternatePhone}</span>
                                  <span>{selectedAddress?.cityDistrictTown}</span>
                                  <span>{selectedAddress?.landmark}</span>
                                  <span>{selectedAddress?.locality}</span>
                                </span>
                                <span>{selectedAddress?.mobileNumber}</span>


                                </div>
                              </>
                            )}
                          </>
                        ) : (
                          address?.map((el) => {
                            return !el.edit ? (
                              <div
                                key={el._id}
                                className="border border-secondary relative  rounded-xl bg-primary px-8 py-4"
                              >
                                <input
                                  type="radio"
                                  name="address"
                                  className="mx-3"
                                  value={el._id}
                                  onClick={() => selectAddress(el)}
                                />
                               <div className="flex flex-col gap-3">
                               <span className="text-gray-500">isim:{el?.name}</span>
                                <span className="flex gap-3 text-gray-500 leading-3 ">
                                  Bilgiler:{el?.addressType}
                                  <span>{el?.alternatePhone}</span>
                                  <span>{el?.cityDistrictTown}</span>
                                  <span>{el?.landmark}</span>
                                  <span>{el?.locality}</span>
                                </span>
                                <span className="text-gray-400 tracking-wide">telefon: {el?.mobileNumber}</span>
                               </div>
                                {el?.selected ? (
                                  <div className="mt-5">
                                    <button
                                      className=" uppercase text-sm font-bold px-4 py-1   text-dark transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
                                      onClick={() => ConfirmDeliveryAddress(el)}
                                    >
                                      Bu Addresse Teslim Et
                                    </button>
                                    <button
                                      className="text-gray-500 absolute font-bold top-5 right-5 uppercase text-xs"
                                      onClick={() => handleEdit(el)}
                                    >
                                      Edit
                                    </button>{" "}
                                  </div>
                                ) : null}
                              </div>
                            ) : (
                              <EditAdressForm
                                initialData={el}
                                setOrderSummary={setOrderSummary}
                                orderSummary={orderSummary}
                              />
                            );
                          })
                        )}
                      </div>
  
                    )}
                         <div   className={
                    !confrimAddress
                      ? "w-full py-2 max-w-[450px] mx-auto mb-3 px-3 text-[14px] text-blue-400 bg-primary uppercase"
                      : "w-full py-2 max-w-[450px] mx-auto px-3 mb-3 text-[14px] bg-secondary  uppercase"
                  }>
          <p>sipariş özeti</p>
          {orderSummary ? (
            <>
              <div className="w-full mx-auto">
                <BasketPage cartItems={true} />
                <div className="border border-gray-500  bg-primary text-dark p-2 flex justify-around my-5">
                <p>Sipariş Onay e-postası e-postanıza gönderilecek</p> <button className="w-24 py-2  bg-dark text-white" onClick={()=>userOrderConfirmHandle()}>Devam et</button>
              </div >
              </div>
            </>
          ) : orderConfirmation ? (
            <div className="w-full m-4 max-w-[1000px] mx-auto"><span className="px-5 py-1 bg-gray-500 text-white uppercase text-sm">{Object.keys(cart.cartItems).length}Items</span></div>
          ) : null}
        </div>
        <div   className={
                    !paymentOption
                      ? "w-full py-2 max-w-[450px] mx-auto mb-3 px-3 text-[14px] text-blue-400 bg-primary uppercase"
                      : "w-full py-2 max-w-[450px] mx-auto px-3 mb-3 text-[14px] bg-secondary  uppercase"
                  }>
          <p>Ödeme seçeneği</p>
          {paymentOption && 
          <>
          <input name="paymentOption" type={"radio"} value={'code'}/>
          <div className="flex justify-between p-2"><span className="uppercase text-sm text-dark">Kapıda ödeme</span>
          <button onClick={()=>confirmOrderHandle()}>Devam Et</button>
          </div>
          </>
          }
        </div>
                  </>
                ) : null}
              </>
            }
  
            <p>Siparişini nasıl almak istersin?</p>
            <p>
              Türkiye'deki yeni ithalat düzenlemeleri nedeniyle Nike, vergi ve
              gümrük vergisi dahil toplam değeri 150 Euro'yu aşan siparişlerin
              teslimatını garanti edemez. Siparişini verebilmek için, lütfen
              sepetindeki ürünlerin değerini vergi ve gümrük vergisi dahil 150
              Euro'nun altında olacak şekilde ayarla. Lütfen her tüketici için
              günde bir sipariş sınırlaması olduğunu unutma. Bu durumun yol açmış
              olabileceği rahatsızlık için özür dileriz. Türkiye'deki
              tüketicilerimize en iyi alışveriş deneyimini sunmak için durmaksızın
              çalışıyoruz.
            </p>
            <button className="w-full py-7 rounded-2xl border-2 border-dark">
              Teslim Et{" "}
            </button>
            {confrimAddress ? null : <AdressForm />}
          </div>
          <div>
            <div className="w-full mx-auto max-w-[400px] ">
              <p className="text-dark text-2xl py-5 lg:text-start text-center   uppercase ">
                Sipariş özeti{" "}
              </p>
              <div className="border-b-2 flex justify-between w-full gap-4  border-b-primary">
                <span>Ara Toplam </span> <span>₺{totalPrice}</span>
                {<span>ürün Sayı {totalItem}</span>}
              </div>
              {Object.keys(cartItems).map((key, i) => {
                return (
                  <div className="flex  gap-5 my-10 w-full max-w-[700px]  ">
                    <div className="flex gap-5">
                      <img
                        width={"100px"}
                        src={`http://localhost:8080/public/${cartItems[key].img}`}
                        alt=""
                      />
                      <div className="flex flex-col gap-1">
                        <p>{cartItems[key].name}</p>
  
                        <p>{cartItems[key].color?.[0]}</p>
                        <p>NUMARA/BEDEN {cartItems[key].size?.[0]}</p>
                        <p>₺ {cartItems[key].price}</p>
  
                        <div className="flex gap-2 w-[100px] justify-between items-center">
                          <span className="flex justify-center items-center h-10 w-10 rounded-full">
                            {" "}
                            <BiTrash
                              className="text-2xl text-secondary"
                              onClick={() => onRemoveCartItem(cartItems[key]._id)}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
   
      </>
    );

  }
 
};

export default CheckOutOrder;
