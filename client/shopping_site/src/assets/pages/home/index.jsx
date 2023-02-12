import React from 'react'
import BannerVideo from '../../components/banner-video'
import DahaFazlaKesfet from '../../components/daha-fazla-kesfet'
import ProductSlides from '../../components/product-Slides'
import Rehberlik from '../../components/rehberlik'
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
 <Rehberlik/>
 </>
  )
}

export default Home