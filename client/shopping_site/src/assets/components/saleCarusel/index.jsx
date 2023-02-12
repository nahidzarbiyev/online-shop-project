import React from 'react'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
const SaleCarusel = () => {
  
  return (
    <>
<div className= ' mx-auto max-w-[1900px] bg-primary'>

 <Carousel autoplay dots={false} infinite={true}>
    <div  className='h-16 text-center flex flex-col items-center justify-center mx-auto max-w-[1900px]'>
      <h3 className='p-2 text-[16px] capitalize' >Save Up to 40%</h3>
      <Link className='text-[12px] underline'>Shop All Our New Markdowns</Link>
    </div>
    <div  className='h-16 text-center flex flex-col items-center justify-center mx-auto max-w-[1900px]'>
      <h3 className='p-2 text-[16px] capitalize' >Free Shipping + Returns, Free Membership, Exclusive Products</h3>
    <Link className='text-[12px] underline'>Join now</Link>
    </div>
    <div  className='h-16 text-center flex flex-col items-center justify-center mx-auto max-w-[1900px]'>
      <h3 className='p-2 text-[16px] capitalize'>Why Wait? Try Store Pickup</h3>
      <p className='text-[12px]'>Buy online and find a store near you for pick up in less than 2 hours. <Link className='underline'>Shop now</Link></p>
    </div>
  
  </Carousel>
 </div>

    </>
  )
}

export default SaleCarusel