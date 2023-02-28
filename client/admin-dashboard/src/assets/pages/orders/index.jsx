import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerOrders, updateOrder } from '../../redux/actions/order.actions';

const Orders = () => {
  const [type, setType] = useState("");

  const order = useSelector((state) => state.order);
  const dispatch = useDispatch()
  useEffect(() => {
    
  
  dispatch(getCustomerOrders())
  }, [])
  
  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };
  console.log(order);
  return (
    <div className="ml-56 p-5 min-h-[100vh] max-w-[1600px] mx-auto  ">

{
order?.order?.map((elem)=>{
  return (
    <>
    <p className='text-center'> User Id:{elem.user}</p>
    <div
        className='flex justify-center gap-5 my-5 max-w-[1200px] max-auto'
          >
            <div>
              <div className="title">Items</div>
              {elem.items.map((item, index) => (
                <div className="value" key={index}>
                  {item.productId.name}
                </div>
              ))}
            </div>
            <div>
              <span className="title">Total Price</span>
              <br />
              <span className="value">{elem.totalAmount}</span>
            </div>
            <div>
              <span className="title">Payment Type</span> <br />
              <span className="value">{elem.paymentType}</span>
            </div>
            <div>
              <span className="title">Payment Status</span> <br />
              <span className="text-green-500">{elem.paymentStatus}</span>
            </div>
          </div>
            <div
        className='flex flex-col max-w-[1200px] mx-auto gap-10'
          >
            <div  className='flex p-5 gap-4 mt-16'>
              
              {elem.orderStatus.map((status) => (
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

            <div
             className='flex gap-5 justify-end'
            >
              <select className='outline-none' onChange={(e) => setType(e.target.value)}>
                <option value={""}>select status</option>
                {elem.orderStatus.map((status) => {
                  return (
                    <>
                      {!status.isCompleted ? (
                        <option key={status.type} value={status.type}>
                          {status.type}
                        </option>
                      ) : null}
                    </>
                  );
                })}
              </select>
              
            <div
           
           >
             <button className='px-5 py-1 bg-dark text-primary' onClick={() => onOrderUpdate(elem._id)}>
               confirm
             </button>
           </div>
            </div>

          </div>
    </>
  )
})
}
</div>
  )
}

export default Orders