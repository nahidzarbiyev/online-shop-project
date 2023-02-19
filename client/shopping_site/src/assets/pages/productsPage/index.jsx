import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductBySlug } from '../../redux/actions/product.action'

const ProductsPage = (props) => {

const dispatch = useDispatch()
const products = useSelector(state=> state.products)
    useEffect(() => {
      console.log(products);
    dispatch(getProductBySlug())
     
    }, [])
    

  return (
    <div>ProductsPage</div>
  )
}

export default ProductsPage