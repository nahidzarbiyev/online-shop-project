import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../../redux/actions/user.action';

const OrderDetails = () => {
    const {orderId} = useParams()
    const dispatch = useDispatch();
    const orderDetails = useSelector((state) => state.user.orderDetails);
    useEffect(() => {
        const payload = {
       orderId,
        };
        dispatch(getOrder(payload));
      }, [orderId]);
      
  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  const formatDate2 = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (date) {
      const d = new Date(date);
      return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  };

  if (!(orderDetails && orderDetails.address)) {
    return null;
  }

  return (
    <div className='max-w-[1200px] py-10 mx-auto'>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{orderDetails.address.name}</title>
      </Helmet>
<div
   
      >
        <div
     
        >
          <div className="">
            <div className="">
              <div className="uppercase text-dark font-bold">Teslimat adresi
              <div className="">{orderDetails.address.name}</div>
              <div className="">{orderDetails.address.address}</div>
              </div>
             
              <div className="">
                Telefon Numarası {orderDetails.address.mobileNumber}
              </div>
            </div>
            <div className="">
              <div className="">Daha fazla</div>
              <div className="">Faturayı İndir</div>
            </div>
          </div>
        </div>

        {orderDetails.items.map((item, index) => (
          <div
            
          >
            <div >
              <div >
                <img width={'350px'} className='my-5' src={`http://localhost:8080/public/${item.productId.productPictures[0].img}`}  alt="" />
              </div>
              <div >
                <div className="text-sm uppercase font-bold pl-5 text-dark">Ürün: <span className='lowercase text-gray-500 font-sm font-normal'>{item.productId.name}</span></div>
                <div value={item.payablePrice} />
              </div>
            </div>
            <div >
            <div  className='flex p-5 gap-4 mt-16'>
              
              {orderDetails.orderStatus.map((status) => (
                <div 
                  className={` w-[33.3%] h-1  bg-gray-500 relative ${
                    status.isCompleted ? "bg-green-500" : ""
                  }`}
                >
                  <div
                    className={`w-4 h-4 absolute rounded-[8px] bg-gray-500 left-[100%] -top-[150%] ${status.isCompleted ? "bg-green-500" : ""}`}
                  ></div> 
                  <div className="h-[60px] w-16 flex flex-col justify-between  -top- translate-x-[50%]">
                    <div className="flex mt-4"><span>{status.type}</span></div>
                    <div className="w-24 mt-1 ">{formatDate(status.date)}</div>
                  </div>
                </div>
              ))}
            </div>
            </div>
            <div className='my-16'>
              {orderDetails.orderStatus[3].isCompleted &&
                `Delivered on ${formatDate2(orderDetails.orderStatus[3].date)}`}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default OrderDetails