import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPrams from "../../../utils/getPrams";

import { getProductPage } from '../../../redux/actions/product.action'
const Products = () => {

    const dispatch = useDispatch()
    const product = useSelector(state=>state.product)
console.log(product)
        useEffect(() => {
            const params = getPrams(location.search);
            console.log(params)
       const payload = {
       params
       }
       dispatch(getProductPage(payload))
        }, [])
        
  return (
    <div>
{JSON.stringify(product.page)}
    </div>
  )
}

export default Products