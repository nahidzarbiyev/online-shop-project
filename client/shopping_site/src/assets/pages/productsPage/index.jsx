import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinns from '../../components/spins'
import { getAllCategory } from '../../redux/actions/categories.actions'
import { getProductBySlug } from '../../redux/actions/product.action'
import {BiHeart} from 'react-icons/bi'
const ProductsPage = (props) => {
const {slug} = useParams()

const dispatch = useDispatch()
const products = useSelector(state=> state.product)
const category = useSelector(state=> state.category)
    useEffect(() => {
      console.log(products)
      console.log(category)
      console.log(slug);
    dispatch(getProductBySlug(slug))
     
    }, [slug])
    
    
  return (
   <>




    <div className='max-w-[1900px] m-auto'>
    <nav className='flex'>
  <div>
    {/* <p>{products}</p> */}
  </div>
  </nav>

{
  products.loading ?
  <Spinns/>
  :
  <>
  <div className='grid grid-cols-3 max-w-[1700px] w-full mx-auto p-10 gap-5'>
   {
    products?.products?.map((product)=>{
      return (
      <div key={product?._id} className='max-w-[500px] relative flex flex-col gap-2 text-gray-500'>
        <img className='  w-full ' src={`http://localhost:8080/public/${product?.productPictures[0].img}`} alt="" />
       <span className='w-10 h-10 rounded-full absolute top-5 right-5 bg-primary flex justify-center items-center'> <BiHeart className="text-2xl " /></span>

        <p className='text-dark'>{product?.name}</p>
        <p>₺ {product?.price}</p>
        <p>{product?.color[0].split(",").length} Renk</p>
        </div>
      )
    })
   }
  </div>
  </>
}


    </div>
   </>
  )
}

export default ProductsPage