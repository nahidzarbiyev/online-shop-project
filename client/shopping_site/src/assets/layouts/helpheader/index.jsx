import React from "react";
import { Link, NavLink } from "react-router-dom";
import Jordan from "../../images/png/584292c4a6515b1e0ad75aca.png";
import Converse from "../../images/png/Converse-logo.png";
const HelpHeader = () => {
  return (
    <div className=" bg-primary  p-2 ">
      <div className="max-w-[1800px] m-auto font-Roboto flex relative justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={Jordan} width={"22px"} alt="" />
          <img src={Converse} width={"25px"} alt="" />
        </div>
        <div className="flex gap-2  text-dark text-xs   ">
          <Link className="hover:opacity-70">Find a Store</Link> <span>|</span>{" "}
        <div className="navbar-p p-0 border-none ">  <Link className="hover:opacity-70 ">Help
          </Link> 
          
          <div className="absolute dropdown top-10 bg-white z-30  right-24 transition-all duration-300 opacity-0 invisible h-0 py-10   -translate-y-2  ">
              <NavLink to={'/help'} className=' text-dark text-[16px] px-10 py-2 mb-4'>Yardım</NavLink>
            <ul className=" text-gray-500 text-sm gap-y-2 mt-5 px-10  bg-white flex flex-col">
              <li>
                <Link>Sipariş durumu</Link>
              </li>
             
              <li>
                <Link>Kargo ve Teslimat  </Link>
              </li>
              <li>
                <Link>İadeler </Link>
              </li>
              <li>
                <Link to={'/size'}>Beden Numara Çizelgeleri</Link>
              </li>
              <li>
                <Link>Bize Ulaş</Link>
              </li>
              <li>
                <Link>Gizlilik Politikası</Link>
              </li>
              <li>
                <Link>Satış Şartları </Link>
              </li>
              <li>
                <Link>Kullanım Şartları</Link>
              </li>
              <li>
                <Link>Bize Geri Bildirim Gönder</Link>
              </li>

            </ul>
          </div>
          </div>
       

          <span>|</span>{" "}
          <Link className="hover:opacity-70">Join us</Link> <span>|</span>{" "}
          <Link className="hover:opacity-70">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default HelpHeader;
