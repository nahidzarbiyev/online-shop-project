import React from 'react'
import BannerVideo from '../../components/banner-video'
import DahaFazlaKesfet from '../../components/daha-fazla-kesfet'
import ProductSlides from '../../components/product-Slides'
import SporaGoreKesfet from '../../components/spora-gore-incele'
import UrunInceleme from '../../components/urun-inceleme'

const Home = () => {
  return (
 <>
 <UrunInceleme/>
 <BannerVideo/>
 <ProductSlides/>
 <DahaFazlaKesfet/>
 <SporaGoreKesfet/>
 </>
  )
}

export default Home