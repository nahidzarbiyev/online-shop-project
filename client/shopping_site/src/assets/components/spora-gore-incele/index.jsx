import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SporaGoreKesfet = () => {
  const settings = {
    className: "center w-full border-transparent w-[100vw]  ",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
  };
  return (
    <div className="py-10 max-w-[1900px] mx-auto">
      <Slider {...settings}>
    
      </Slider>
    </div>
  );
};

export default SporaGoreKesfet;
