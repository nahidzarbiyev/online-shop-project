import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../redux/actions/user.action'
import { BiHeart, BiTrash } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Orders = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    useEffect(() => {
      
        dispatch(getOrders())
    
     
    }, [])
    

  return (
 
<div className="flex flex-col  justify-between gap-10  my-10 w-full lg:max-w-[600px] max-w-[400px] mx-auto ">

<p className='text-center uppercase text-xl m-6'>Siparişlerim</p>
{
    user.orders.map((order)=>{
 return (
    order.items.map((elem)=>{
        return (
            <Link to={`/orderDetails/${order._id}`} key={elem._id} className="flex flex-col justify-between bg-secondary items-end lg:flex-row gap-5">
            {console.log(elem)}
           
            <div className="flex  gap-3">
            <img
              width={"100px"}
              height={'80px'}
              src={`http://localhost:8080/public/${elem.productId.productPictures[0].img}`}
              alt=""
            /> 
             <div className='flex flex-col justify-end gap-3'>
             <p className='text-xl '> {elem.productId.name}</p>
      
      <p>₺ {elem.payablePrice}</p>
             </div>
      
          
            </div>
              <p className='text-green-600 p-3 uppercase text-sm font-bold'> {order.paymentStatus}</p>
          </Link>
        )
    }

  
    )
 )
    })
}





  </div>


  )
}

export default Orders