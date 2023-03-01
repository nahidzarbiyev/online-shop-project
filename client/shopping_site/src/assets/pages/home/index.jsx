import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BannerVideo from '../../components/banner-video'
import DahaFazlaKesfet from '../../components/daha-fazla-kesfet'
import FooterDropdown from '../../components/footer-dropdown'
import NikeUyeligi from '../../components/Nike-Uyeligi'
import ProductSlides from '../../components/product-Slides'
import Rehberlik from '../../components/rehberlik'
import SporaGoreKesfet from '../../components/spora-gore-incele'
import UrunInceleme from '../../components/urun-inceleme'
import { userLoggedin } from '../../redux/actions/auth.actions'

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     dispatch(userLoggedin());
  //   }
  // }, [auth.authenticate]);
  return (
 <>
 <UrunInceleme/>
 <BannerVideo/>
 <ProductSlides/>
 <DahaFazlaKesfet/>
 <SporaGoreKesfet/>
 <Rehberlik/>
 <NikeUyeligi/>
 <FooterDropdown/>
 </>
  )
}

export default Home