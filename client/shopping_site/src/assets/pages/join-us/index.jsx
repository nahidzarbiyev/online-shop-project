import React from "react";
import BannerVideo from "../../components/banner-video";
import ImgBestUser from "../../images/join-us/nike-üyeliği.jpg";
import ImgBestUser2 from "../../images/join-us/nike-üyeliği (1).jpg";
import ImgBestUser3 from "../../images/join-us/nike-üyeliği (2).jpg";
import ImgBestUser4 from "../../images/join-us/nike-üyeliği (3).jpg";
import ImgBestUser5 from "../../images/join-us/nike-üyeliği (4).jpg";
import ImgBestUser6 from "../../images/join-us/nike-üyeliği (5).jpg";
import { Link } from "react-router-dom";

const Joinus = () => {
  return (
    <div className="container  mx-auto max-w-[1900px] p-10 flex flex-col gap-16 w-full">
      <div>
        <h1 className="text-dark text-2xl">Nike Üyeliği</h1>
        <div className="flex justify-center items-center">
          <div className=" text-center items-center justify-center flex flex-col gap-4 ">
            <span className="uppercase font-Anton text-7xl flex w-[100px] tracking-wide font-bold leading-snug">
              Üye Ol
            </span>{" "}
            <span className="text-dark text-xl">
              Ücretsiz kaydol. Topluluğa katıl.
            </span>
            <Link to={'/sign-in'} className="px-5 py-2 bg-dark text-primary hover:opacity-70 rounded-3xl">
              Bize Katıl
            </Link>
          </div>
        </div>
      </div>
      {/* <BannerVideo /> */}
      <h1 className="text-dark text-center text-[32px]">Üyeliğin en iyileri</h1>
      <div className="w-full flex gap-4">
        <div className="relative">
          <img src={ImgBestUser} alt="" />
          <div className="absolute bottom-14 left-14">
            <p className="text-xl text-gray-900">Member Shop</p>
            <span className="text-dark text-2xl">
              Shop Member-exclusive styles
            </span>
          </div>
        </div>
        <div className="relative">
          <img src={ImgBestUser2} alt="" />
          <div className="absolute bottom-14 left-14">
            <p className="text-xl text-gray-900">Nike By You</p>
            <span className="text-dark text-2xl">
              Customize Your so-you shoe
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-dark text-center text-[32px]">Diğer Avantajlar</h1>
      <div className="w-full flex justify-center items-center gap-4">
        <div className="relative">
          <img src={ImgBestUser3} alt="" />
          <div className="absolute bottom-14 left-14">
            <p className="text-xl text-gray-900">
              Antrenmanlar ve Antrenman Planları
            </p>
            <span className="text-dark text-2xl">
              Nike Trainer'ların hazırladığı antrenmanları keşf et.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-dark text-center text-[32px]">Nike Uygulamaları</h1>
        <p className="text-xl text-dark ">
          Dünyanın dört bir yanındaki sporculara destek olmak ve herkesin aktif,
          pozitif ve sağlıklı kalmasına yardımcı olmak için her gün ilham verici
          içerikler ve bilgiler sunuyoruz. Hepsi Üyelere özel uygulamalarımızda.
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-4">
        <div className="relative">
          <img src={ImgBestUser4} alt="" />
          <div className="absolute bottom-14 left-14">
     
          <span className="text-primary text-xl">
              Nike'ın en iyi ürünlerine,  ilham verici içeriklerine ve topluluğuna eriş.
            </span>
          </div>
        </div>{" "}
        <div className="relative">
          <img src={ImgBestUser5} alt="" />
          <div className="absolute bottom-14 left-14">
        
        
          <span className="text-primary text-xl">
              Nike Training Club ile vücudunu ve zihnini güçlendir.
            </span>
          </div>
        </div>{" "}
        <div className="relative">
          <img src={ImgBestUser6} alt="" />
          <div className="absolute bottom-14 left-14">

            <span className="text-primary text-xl">
              Nike RUn CLub ile daha sık koşmak için ilham al.
            </span>
          </div>
        </div>
      </div>

<div className="flex flex-col gap-7 justify-center items-center">
<span className="uppercase font-Anton text-7xl flex w-[100px] tracking-wide font-bold leading-snug">
              01
            </span>{" "}
            <p className="text-dark text-xl">Bir Nike uygulamasına giriş yaptıysan zaten Üyesin demektir. Hoş geldin! <Link to={'/sign-in'} className="underline">Oturum aç.</Link></p>
            <span className="uppercase font-Anton text-7xl flex w-[100px] tracking-wide font-bold leading-snug">
              02
            </span>{" "}
            <p className="text-dark text-xl">Üye değilsen <Link to={'/register'} className="underline">bize katıl</Link> ve yalnızca üç tıklamayla Üye Avantajlarından yararlan.</p>
            <span className="uppercase font-Anton text-7xl flex w-[100px] tracking-wide font-bold leading-snug">
              03
            </span>{" "}
            <p className="text-dark text-xl">İşte bu kadar kolay. Artık Üyesin.</p>
            <span className="uppercase font-Anton text-7xl flex max-w-[400px] pt-5 tracking-wide font-bold leading-snug">
            ÜYE OLDUĞUN
İÇİN TEŞEKKÜRLER
            </span>{" "}
            <p className="text-dark text-xl">Dünya çapındaki topluluğun seni bekliyor.</p>
            <Link to={'/sign-in'} className="px-5 py-2 bg-dark text-primary hover:opacity-70 rounded-3xl">
              Bize Katıl
            </Link>

</div>
<div className="w-150px">
<p className="text-dark text-center text-xl">Başka bir şey
mi arıyordun?</p>
</div>
<div className="flex gap-2 justify-center items-center">
<Link className="px-5 py-2 bg-dark text-primary hover:opacity-70 rounded-3xl">
              Hesabım
            </Link>  <Link className="px-5 py-2 bg-dark text-primary hover:opacity-70 rounded-3xl">
           Destek
            </Link>
</div>
    </div>
  );
};

export default Joinus;
