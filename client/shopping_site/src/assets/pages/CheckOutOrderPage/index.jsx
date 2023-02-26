import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiHeart, BiTrash } from "react-icons/bi";
import Logo from "../../images/png/Logo_NIKE.svg.png";
import { getAddress } from "../../redux/actions/user.action";
import AdressForm from "./addressform";

const CheckOutOrder = () => {
  const dispatch = useDispatch()
const [toggle, settoggle] = useState(true)
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.cart);
  const [cartItems, setcartItems] = useState(basket.cartItems);
  const [address, setAdress] = useState([])
  const [newAddress, setNewAddress] = useState(false)
console.log(user.address);
useEffect(() => {
  

  auth.authenticate &&  dispatch(getAddress())
}, [auth.authenticate])

useEffect(() => {
  const address = user.address.map((el)=({...el, selected:false, edit:false}))
setAdress(address)
}, [user.address])

  return (
<>

<img src={Logo} className={'w-[70px] my-16 mx-auto'} alt="" />
<div className="max-w-[1000px] flex justify-between  my-16 mx-auto">
      <div className="w-full flex flex-col gap-2 max-w-[450px] ">
        <span className="w-full py-2 bg-primary  text-[14px] text-blue-400 uppercase"><span className="w-4 h-4 rounded-full  text-[14px] text-blue-400">1</span> Login</span>

       {
        auth.authenticate
        ?
        <>
        <p>Kullanıcı adı:{auth.user.fullName} </p>
        <p>Email:{auth.user.email} </p>
        </>
        :
null
       }
        {
        
        
        <>
        <span className="w-full py-2 text-[14px] text-blue-400 bg-primary uppercase"><span className="w-4 h-4 rounded-full text-[14px] text-blue-400">2</span> Teslimat Addressi</span>

       {
        auth.authenticate 
        ?
        <>
         <p className="text-blue-500"
        onClick={()=>settoggle(!toggle)}
        >{
          toggle ?
          'adress Bilgilerini göster'
          :
          'adress Bilgilerini gizle'
        }</p>

         {
          toggle ?
          null
          :
          <div className="w-full flex flex-col gap-4">
          {
            user?.address?.map((el)=>{
             return (

              <div key={el._id} className='border border-secondary rounded-xl bg-primary p-5'>
                <input type="radio" name='address' className="mx-3" value={el._id} />
              <span>isim:{el?.name}</span>-
              <span>Bilgiler:{el?.addressType}/<span>{el?.alternatePhone}</span>/<span>{el?.cityDistrictTown}</span>/<span>{el?.landmark}</span>/<span>{el?.locality}</span></span>-
              <span>{el?.mobileNumber}</span>
              
              <div className="flex gap-3 my-4">
                <button className=" px-10 py-2  bg-dark rounded text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary">Edit</button> <button className=" px-10 py-2  bg-dark rounded text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary">delete</button>
              </div>
              <button className=" px-10 py-2  bg-dark rounded text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary">Bu Addresse Teslim Et</button>
              
              
              
            </div>
             )
            })
          }
          </div>
         }
        </>
        :
        null
       }
        </>
        }




        <p>Siparişini nasıl almak istersin?</p>
        <p>
          Türkiye'deki yeni ithalat düzenlemeleri nedeniyle Nike, vergi ve
          gümrük vergisi dahil toplam değeri 150 Euro'yu aşan siparişlerin
          teslimatını garanti edemez. Siparişini verebilmek için, lütfen
          sepetindeki ürünlerin değerini vergi ve gümrük vergisi dahil 150
          Euro'nun altında olacak şekilde ayarla. Lütfen her tüketici için günde
          bir sipariş sınırlaması olduğunu unutma. Bu durumun yol açmış
          olabileceği rahatsızlık için özür dileriz. Türkiye'deki
          tüketicilerimize en iyi alışveriş deneyimini sunmak için durmaksızın
          çalışıyoruz.
        </p>
        <button className="w-full py-7 rounded-2xl border-2 border-dark">Teslim Et </button>
       <AdressForm/>
      </div>
      <div>
      <div className="w-full max-w-[300px] ">
        <p className="text-dark text-2xl py-5   uppercase ">Sipariş özeti </p>
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
                      <BiTrash className="text-2xl text-secondary" />
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
};

export default CheckOutOrder;
