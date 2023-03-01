import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className='h-[60vh] flex justify-center items-center text-center w-full'>
        <div>
            <p className='text-dark text-xl'>Aradığın sayfayı bulamıyoruz.

Bu durumun yarattığı rahatsızlıktan dolayı özür dileriz.</p>
  <button className='underline text-dark uppercase text-sm ' onClick={()=>navigate('/')}> Ana Sayfaya Dön</button>
        </div>
    </div>
  )
}

export default ErrorPage