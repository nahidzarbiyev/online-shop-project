import React from "react";
import Phone from "../../../images/icons/phone.png";
import Mail from "../../../images/icons/email.png";
import Store from "../../../images/icons/store.png";
const Contact = () => {
  return (
    <div>
      <span className="block h1 border-b border-gray-400 w-full max-w-[1400px] mx-auto my-3">
        <h1 className="font-normal text-dark text-[2rem]  p-5">BIZE ULAŞ</h1>
      </span>
      <div className="grid grid-cols-3 gap-10  w-full max-w-[1400px] mx-auto my-10">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={Phone} alt="" />
          <p>ÜRÜNLER VE SİPARİŞLER</p>
          <span>+90 (212) 365 04 90</span>
          <span>9.00 - 18.00</span> <span>Pazartesi - Cuma</span>
        </div>
        <div  className="flex flex-col gap-2 justify-center items-center">
          <img src={Phone} alt="" />
          <p>NRC ve NTC</p>
          <span>+31 (0) 20 5820542</span>
          <span>9.00 - 18.00</span> <span>Pazartesi - Cuma</span> <span>YALNZCA INGILIZCE*</span>
        </div>
        <div  className="flex flex-col gap-2 justify-center items-center">
          <img src={Mail} alt="" />
          <p>ÜRÜNLER VE SİPARİŞLER</p>
          <span>Bize e-mail gönder 1 günde geri dönüş yapalım </span>
         
        </div>
        <div  className="flex flex-col gap-2 justify-center items-center">
          <img src={Mail} alt="" />
          <p>ŞİRKET BİLGİLERİ VE SORULAR</p>
          <span className="capitalize">lütfen kurumsal iletişim seçeneklerimize göz at</span>
        </div>
        <div  className="flex flex-col gap-2 justify-center items-center">
          <img src={Store} alt="" />
          <p>MAĞAZA BULUCU</p>
          <span>yakınındakı Nike perakende mağazalarını bul</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
