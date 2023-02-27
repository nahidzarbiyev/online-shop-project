import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {TfiYoutube } from 'react-icons/tfi'
import {TiSocialInstagram} from 'react-icons/ti'
import axios from 'axios'
const Footer = () => {
useEffect(() => {
  
axios.get

}, [])


  return (

<div className='w-full  min-h-[300px]  bg-dark'>
<div className='max-w-[1400px] mx-auto flex justify-between items-start  py-10 text-white'>

<ul className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mx-auto gap-x-16 gap-y-16'>
  <li>
    <ul className='flex flex-col gap-5 text-xs uppercase  font-Anton'>
      <li><Link className='text-xs uppercase r font-Anton'>Mağaza Bul</Link></li>
      <li><Link className='text-xs uppercase  font-Anton'>Nike Journal</Link></li>
      <li><Link className='text-xs uppercase  font-Anton'>Üye Ol</Link></li>
      <li><Link className='text-xs uppercase  font-Anton'>Geri Bİldirim</Link></li>
      <li><Link className='text-xs uppercase  font-Anton'>Promosyon Kodları</Link></li>
    </ul>
  </li>
  <li>
    <ul className='flex flex-col gap-5 text-sm text-secondary'>
      <li><Link className='text-xs uppercase  font-Anton'>Yardım Al</Link></li>
      <li><Link>Sipariş Durumu </Link></li>
      <li><Link>İadeler</Link></li>
      <li><Link>Ödeme Seçenekleri</Link></li>
      <li><Link>Bize ulaşın</Link></li>
    </ul>
  </li>
  <li>
    <ul>
      <li > <Link className='text-xs uppercase  font-Anton'>Nike Hakkında</Link></li>
      <li><Link>Nike Journal</Link></li>
      <li><Link>Üye Ol</Link></li>
      <li><Link>Geri Bİldirim</Link></li>
      <li><Link>Promosyon Kodları</Link></li>
    </ul>
  </li>
  <li>
    <ul>
      <li><Link className='text-xs uppercase  font-Anton'>Bize Katıl</Link></li>
      <li><Link>Nike Journal</Link></li>
      <li><Link>Üye Ol</Link></li>
      <li><Link>Geri Bİldirim</Link></li>
      <li><Link>Promosyon Kodları</Link></li>
    </ul>
  </li>
  <li>
  <ul className='flex gap-2'>
  <span className='flex w-8  h-8 text-xl text-dark bg-secondary rounded-full items-center justify-center'><BsTwitter/></span>
  <span className='flex w-8  h-8 text-xl text-dark bg-secondary rounded-full items-center justify-center'><FaFacebookF/></span>
  <span className='flex w-8  h-8 text-xl text-dark bg-secondary rounded-full items-center justify-center'><TfiYoutube/></span>
  <span className='flex w-8  h-8 text-xl text-dark bg-secondary rounded-full items-center justify-center'><TiSocialInstagram/></span>
 
</ul>
  </li>
</ul>

</div>

</div>
    )
}

export default Footer