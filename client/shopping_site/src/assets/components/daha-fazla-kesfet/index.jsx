import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CategoryImg1  from '../../images/dahaFazlaKesfet/resmi-nike-sitesi (5).jpg'
import CategoryImg2  from '../../images/dahaFazlaKesfet/resmi-nike-sitesi (6).jpg'
import CategoryImg3  from '../../images/dahaFazlaKesfet/resmi-nike-sitesi (7).jpg'
import {TfiEye} from 'react-icons/tfi'
import { Link } from "react-router-dom";
const DahaFazlaKesfet = () => {
  const settings = {
    className:'-mx-2 w-full border-transparent max-w-[93.5vw] overflow-x-hidden ',
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows:false,
    responsive: [
     
      {
        breakpoint: "600px",
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <div className="max-w-[1800px]  py-20 px-2 mx-auto">
      <p className="text-dark text-2xl pb-5 ">Daha Fazla Keşfet</p>

      <div>
      <Slider {...settings}>
        <div className="mx-1 relative">
          <img src={CategoryImg1}  alt="" />
          <div className="absolute md:flex-row flex-col items-start flex gap-2 z-30 bottom-10 left-12">
    <Link className="px-6 py-2  bg-white hover:bg-secondary text-dark rounded-3xl"> Kadın </Link> <Link className="px-6 py-2 hover:bg-secondary bg-white text-dark items-center rounded-3xl flex gap-2" ><TfiEye/> Stili İncele</Link>
          </div>
        </div>
        <div className="mx-1 relative">
          <img src={CategoryImg2} alt="" />
          <div className="absolute md:flex-row flex-col flex gap-2 items-start z-30 bottom-10 left-12">
    <Link className="px-6 py-2 bg-white hover:bg-secondary text-dark rounded-3xl"> Kadın </Link> <Link className="px-6 py-2 hover:bg-secondary bg-white text-dark items-center rounded-3xl flex gap-2" ><TfiEye/> Stili İncele</Link>
          </div>
        </div>
        <div className="mx-1 relative">
          <img src={CategoryImg3} alt="" />
          <div className="absolute md:flex-row flex-col items-start  flex gap-2 z-30 bottom-10 left-12">
    <Link className="px-6 py-2 hover:bg-secondary bg-white text-dark rounded-3xl"> Kadın </Link> <Link className="px-6 py-2 hover:bg-secondary items-center bg-white text-dark rounded-3xl flex gap-2" ><TfiEye/> Stili İncele</Link>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
};

export default DahaFazlaKesfet;
