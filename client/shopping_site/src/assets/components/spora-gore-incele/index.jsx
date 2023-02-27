import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SporImg1 from '../../images/spora-gore-incele/resmi-nike-sitesi (8).jpg'
import SporImg2 from '../../images/spora-gore-incele/resmi-nike-sitesi (9).jpg'
import SporImg3 from '../../images/spora-gore-incele/resmi-nike-sitesi (10).jpg'
import SporImg4 from '../../images/spora-gore-incele/resmi-nike-sitesi (11).jpg'
import SporImg5 from '../../images/spora-gore-incele/resmi-nike-sitesi (12).jpg'
import SporImg6 from '../../images/spora-gore-incele/resmi-nike-sitesi (13).jpg'
import SporImg7 from '../../images/spora-gore-incele/resmi-nike-sitesi (14).jpg'
import SporImg8 from '../../images/spora-gore-incele/resmi-nike-sitesi (15).jpg'
const SporaGoreKesfet = () => {
  const settings = {
    className: "center w-full border-transparent max-w-[93.5vw] mx-auto overflow-x-hidden ",
    centerMode: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 3,
    autoplay:true,

    speed: 500,
    arrows: false,
    focusOnSelect: true,
  };
  return (
    <div className="py-10  max-w-[1900px] mx-auto ">
      <p className="text-dark text-2xl pb-5 px-[3.1rem] ">Spora Göre İncele</p>

      <Slider {...settings}>
    <div className="mx-5">
        <img src={SporImg1} alt="" width={'560px'}/>
        <p className="pt-10 text-dark text-xl">Koşu</p>
    </div>
    <div className="mx-5">
        <img src={SporImg2} alt=""  width={'560px'} />
          <p className="pt-10 text-dark text-xl">Futbol</p>
    </div>
    <div className="mx-5">

        <img src={SporImg3} alt=""  width={'560px'}/>
          <p className="pt-10 text-dark text-xl">Basketbol</p>
    </div>
    <div className="mx-5">
        <img src={SporImg4} alt=""  width={'560px'} />
          <p className="pt-10 text-dark text-xl">Antrenman</p>
    </div>
    <div className="mx-5">
        <img src={SporImg5} alt=""  width={'560px'}/>
          <p className="pt-10 text-dark text-xl">Tenis</p>
    </div>
    <div className="mx-5">
        <img src={SporImg6} alt=""  width={'560px'} />
          <p className="pt-10 text-dark text-xl">Kaykay</p>
    </div>
    <div className="mx-5">
        <img src={SporImg7} alt=""  width={'560px'} />
          <p className="pt-10 text-dark text-xl">Yoga</p>
    </div>
    <div className="mx-5">
        <img src={SporImg8} alt=""  width={'560px'} />
          <p className="pt-10 text-dark text-xl">Dans</p>
    </div>
      </Slider>
    </div>
  );
};

export default SporaGoreKesfet;
