import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Spinns from '../../../components/spins'
import { getAllCategory } from '../../../redux/actions/categories.actions'
import { getProductBySlug } from '../../../redux/actions/product.action'
import {BiHeart} from 'react-icons/bi'

const ProductStore = () => {
    const {slug} = useParams()

    const dispatch = useDispatch()
    const products = useSelector(state=> state.product)
    const category = useSelector(state=> state.category)
        useEffect(() => {
      
        dispatch(getProductBySlug(slug))
         
        }, [slug])
    return (
        <>
     
     
     
     {
       products.loading ?
       <Spinns/>
       :
       <>
       <div className='grid grid-cols-1 md:grid-cols-3 mx-auto max-w-[1700px] w-full lg:flex-nowrap flex-wrap p-10 gap-5'>
        {
         products?.products?.map((product)=>{
           return (
           <Link to={`/${product.slug}/${product._id}/p`} key={product?._id} className='max-w-[500px] relative flex flex-col gap-2 text-gray-500'>
             <img className='  w-full ' src={`http://localhost:8080/public/${product?.productPictures[0]?.img}`} alt="" />
            <span className='w-10 h-10 rounded-full absolute top-5 right-5 bg-primary flex justify-center items-center'> <BiHeart className="text-2xl " /></span>
     
             <p className='text-dark'>{product?.name}</p>
             <p>₺ {product?.price}</p>
             <p>{product?.color[0].split(",").length} Renk</p>
             </Link>
           )
         })
        }
       </div>
       </>
     }
        </>
       )
}

export default ProductStore