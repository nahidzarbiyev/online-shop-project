import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NikeUyeImg1 from '../../images/nike-uyeligi/resmi-nike-sitesi (18).jpg'
import NikeUyeImg2 from '../../images/nike-uyeligi/resmi-nike-sitesi (19).jpg'
import NikeUyeImg3 from '../../images/nike-uyeligi/resmi-nike-sitesi (20).jpg'
import NikeUyeImg4 from '../../images/nike-uyeligi/resmi-nike-sitesi (21).jpg'
import NikeUyeImg5 from '../../images/nike-uyeligi/resmi-nike-sitesi (22).jpg'

const NikeUyeligi = () => {
  const settings = {
    className: "center w-full border-transparent max-w-[92.5vw] mx-auto overflow-x-hidden ",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="py-10  max-w-[1900px] mx-auto ">
      <p className="text-dark text-2xl pb-5 px-[3.1rem] ">Nike Üyeliği</p>

      <Slider {...settings}>
    <div>
        <img src={NikeUyeImg1} alt=""  className=" w-full max-w-[540px]"    />
        <p className="pt-10 text-gray-600 text-[16px]">Üye Ödüllerine Eriş</p>
    </div>
    <div>
        <img src={NikeUyeImg2} alt=""      className=" w-full max-w-[540px]"  />
          <p className="pt-10 text-gray-600 text-[16px]">Üye Ödüllerinden Yararlan</p>
    </div>
    <div>

        <img src={NikeUyeImg3} alt=""      className=" w-full max-w-[540px]" />
          <p className="pt-10 text-gray-600 text-[16px]">Spor içeriklerinden yararlanın</p>
    </div>
    <div>
        <img src={NikeUyeImg4} alt=""      className=" w-full max-w-[540px]"  />
          <p className="pt-10 text-gray-600 text-[16px]">Üye Deneyimlerine Katıl</p>
    </div>
    <div>
        <img src={NikeUyeImg5} alt=""      className=" w-full max-w-[540px]" />
          <p className="pt-10 text-gray-600 text-[16px]">Üyelik Hakkında Daha Fazlası</p>
    </div>
   
      </Slider>
    </div>
  );
};

export default NikeUyeligi;
