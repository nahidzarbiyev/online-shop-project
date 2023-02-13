import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../images/productSlidesImg/resmi-nike-sitesi.jpg'
import Img2 from '../../images/productSlidesImg/resmi-nike-sitesi (1).jpg'
import Img3 from '../../images/productSlidesImg/resmi-nike-sitesi (2).jpg'
import Img4 from '../../images/productSlidesImg/resmi-nike-sitesi (3).jpg'
import Img5 from '../../images/productSlidesImg/resmi-nike-sitesi (4).jpg'
const ProductSlides = () => {
    const settings = {
      className: "center w-full border-transparent max-w-[96vw]  overflow-x-hidden ",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      arrows:false,
      focusOnSelect: true,
      };
  return (
    <div className='py-10 max-w-[1900px] mx-auto'>
         <Slider {...settings}>
          <div className='w-[500px] '>
          <img src={Img1} alt="" className='w-[500px] ' />
          </div>
          <div className='w-[500px] '>
          <img src={Img2} alt="" className='w-[500px] ' />

          </div>
          <div className='w-[500px] '>
          <img src={Img3} alt=""  className='w-[500px] '/>

          </div>
          <div className='w-[500px] '>
          <img src={Img4} alt=""  className='w-[500px] '/>

          </div>
          <div className='w-[500px] '>
          <img src={Img5} alt="" className='w-[500px] ' />

          </div>
         
        </Slider>
    </div>
  )
}

export default ProductSlides