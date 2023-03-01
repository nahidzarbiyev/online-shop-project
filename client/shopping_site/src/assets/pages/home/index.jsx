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
import {Helmet} from "react-helmet";

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
    <Helmet>
                <meta charSet="utf-8" />
                <title>Nike Tr</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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