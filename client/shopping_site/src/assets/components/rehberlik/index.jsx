import React from "react";
import { Link } from "react-router-dom";
import Rehberimg1 from "../../images/rehberlik/resmi-nike-sitesi (16).jpg";
import Rehberimg2 from "../../images/rehberlik/resmi-nike-sitesi (17).jpg";
const Rehberlik = () => {
  return (
    <div className="max-w-[1800px]  py-20  mx-auto">
      <p className="text-dark text-2xl pb-5 ">Rehberlik ve Zindelik</p>

      <div className="flex gap-3">
        <div className="relative">
          <img src={Rehberimg1} alt="" />
          <div className="absolute bottom-12 left-12 flex flex-col gap-6 items-start justify-center">
            <p className="text-white text-xl">Koşu takipi, Yarışmalar ve Sesli Koşular</p>
            <Link className="px-6 py-2 hover:bg-secondary bg-white text-dark items-center rounded-3xl flex gap-2">Nike Run Club</Link>
          </div>
        </div>
        <div className="relative">
          <img src={Rehberimg2} alt="" />
          <div className="absolute bottom-12 left-12 flex flex-col gap-6 items-start justify-center">
            <p className="text-white text-xl">Yüzlerce Antrenman, Nefes Çalışması ve Daha Fazlası</p>
            <Link className="px-6 py-2 hover:bg-secondary bg-white text-dark items-center rounded-3xl flex gap-2">Nike Run Club</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rehberlik;
