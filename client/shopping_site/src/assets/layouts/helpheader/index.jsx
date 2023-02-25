import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Jordan from "../../images/png/584292c4a6515b1e0ad75aca.png";
import Converse from "../../images/png/Converse-logo.png";
import { FiLogOut } from "react-icons/fi";
import { signout } from "../../redux/actions/auth.actions";

const HelpHeader = () => {
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
  }, [auth.authenticate]);
  const dispatch = useDispatch()
  const logout =()=>{
  dispatch(signout(token))
  }
  const renderLoggedinMenu = () => {
    return (
      <div className="flex gap-2  text-dark text-xs   ">
        <Link to={"/retail"} className="hover:opacity-70">
          Find a Store
        </Link>{" "}
        <span>|</span>{" "}
        <div className="navbar-p p-0 border-none ">
          {" "}
          <Link className="hover:opacity-70 ">Help</Link>
          <div className="absolute dropdown top-10 bg-white z-30  right-24 transition-all duration-300 opacity-0 invisible h-0 py-10   -translate-y-2  ">
            <NavLink
              to={"/help"}
              className=" text-dark text-[16px] px-10 py-2 mb-4"
            >
              Yardım
            </NavLink>
            <ul className=" text-gray-500 text-sm gap-y-2 mt-5 px-10  bg-white flex flex-col">
              <li>
                <Link>Sipariş durumu</Link>
              </li>

              <li>
                <Link>Kargo ve Teslimat </Link>
              </li>
              <li>
                <Link>İadeler </Link>
              </li>
              <li>
                <Link to={"/size"}>Beden Numara Çizelgeleri</Link>
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
        <div className="navbar-p p-0 border-none ">
          {" "}
          <Link className="hover:opacity-70 ">
            Merhaba, {auth.user.fullName}
          </Link>
          <div className="absolute dropdown top-10 bg-white z-30  right-10 transition-all duration-300 opacity-0 invisible h-0 py-10 w-[200px]  -translate-y-2  ">
            <NavLink
              to={"/help"}
              className=" text-dark text-[16px] px-10 py-2 mb-4"
            >
              Hesap
            </NavLink>
            <ul className=" text-gray-500 text-sm gap-y-2 mt-5 px-10  bg-white flex flex-col">
              <li>
                <Link>Profil</Link>
              </li>

              <li>
                <Link>Siparişler </Link>
              </li>
              <li>
                <Link>Favoriler </Link>
              </li>
              <li>
                <Link to={"/size"}>Gelen Kutusu</Link>
              </li>
              <li>
                <Link>Deneyimler</Link>
              </li>
              <li>
                <Link>Hesap ayarları</Link>
              </li>
              <li>
               <button  className="flex gap-2 items-center" onClick={()=>logout()}>Oturumu Kapat <FiLogOut/></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderNonLoggedinMenu = () => {
    return (
      <div className="flex gap-2  text-dark text-xs   ">
        <Link to={"/retail"} className="hover:opacity-70">
          Find a Store
        </Link>{" "}
        <span>|</span>{" "}
        <div className="navbar-p p-0 border-none ">
          {" "}
          <Link className="hover:opacity-70 ">Help</Link>
          <div className="absolute dropdown top-10 bg-white z-30  right-24 transition-all duration-300 opacity-0 invisible h-0 py-10   -translate-y-2  ">
            <NavLink
              to={"/help"}
              className=" text-dark text-[16px] px-10 py-2 mb-4"
            >
              Yardım
            </NavLink>
            <ul className=" text-gray-500 text-sm gap-y-2 mt-5 px-10  bg-white flex flex-col">
              <li>
                <Link>Sipariş durumu</Link>
              </li>

              <li>
                <Link>Kargo ve Teslimat </Link>
              </li>
              <li>
                <Link>İadeler </Link>
              </li>
              <li>
                <Link to={"/size"}>Beden Numara Çizelgeleri</Link>
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
        <Link to={"/join-us"} className="hover:opacity-70">
          Join us
        </Link>{" "}
        <span>|</span>{" "}
        <Link to={"/sign-in"} className="hover:opacity-70">
          Sign In
        </Link>
      </div>
    );
  };

  return (
    <div className=" bg-primary  p-2 ">
      <div className="max-w-[1800px] m-auto font-Roboto flex relative justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={Jordan} width={"22px"} alt="" />
          <img src={Converse} width={"25px"} alt="" />
        </div>
        {auth.authenticate ? renderLoggedinMenu() : renderNonLoggedinMenu()}
      </div>
    </div>
  );
};

export default HelpHeader;
