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
    className: "center w-full border-transparent max-w-[93.5vw] ml-[3.25rem] overflow-x-hidden ",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
  };
  return (
    <div className="py-10  max-w-[1900px] mx-auto ">
      <p className="text-dark text-2xl pb-5 px-[3.1rem] ">Nike Üyeliği</p>

      <Slider {...settings}>
    <div>
        <img src={NikeUyeImg1} alt=""     width={'540px'}/>
        <p className="pt-10 text-gray-600 text-[16px]">Üye Ödüllerine Eriş</p>
    </div>
    <div>
        <img src={NikeUyeImg2} alt=""      width={'540px'} />
          <p className="pt-10 text-gray-600 text-[16px]">Üye Ödüllerinden Yararlan</p>
    </div>
    <div>

        <img src={NikeUyeImg3} alt=""      width={'540px'}/>
          <p className="pt-10 text-gray-600 text-[16px]">Spor içeriklerinden yararlanın</p>
    </div>
    <div>
        <img src={NikeUyeImg4} alt=""      width={'540px'} />
          <p className="pt-10 text-gray-600 text-[16px]">Üye Deneyimlerine Katıl</p>
    </div>
    <div>
        <img src={NikeUyeImg5} alt=""      width={'540px'}/>
          <p className="pt-10 text-gray-600 text-[16px]">Üyelik Hakkında Daha Fazlası</p>
    </div>
   
      </Slider>
    </div>
  );
};

export default NikeUyeligi;
