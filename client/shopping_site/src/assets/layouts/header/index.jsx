import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/png/Logo_NIKE.svg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHeart,BiLogIn } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiUser, FiLogOut } from "react-icons/fi";
import { CiCircleRemove } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import SearchInput from "../../components/search_input";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categories.actions";
import { signout } from "../../redux/actions/auth.actions";
const Header = () => {
  const token = localStorage.getItem("token");
  const auth = useSelector((state) => state.auth);
  const [dropdown, setdrodopdown] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [asidebar, setAsidebar] = useState(true);
  const [signInState, setsignInState] = useState(true)
  const category = useSelector((state) => state.category);
  const basket = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [nav, setnav] = useState(false);
  useEffect(() => {}, [auth.authenticate]);
  const logout = () => {
    dispatch(signout(token));
  };
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const totalItem = Object.keys(cart.cartItems).reduce(function (qty, key) {
    return qty + cart.cartItems[key].qty;
  }, 0);
  const handleCategory = (categories) => {
    let categoryArray = [];
    for (let category of categories) {
      categoryArray.push(
        <>
          <li key={category?.name}>
            {category.parentId ? (
              <Link
                to={`/category/${category.slug}?cid=${category._id}&type=${category.type}`}
                className="hover:text-dark py-3 "
                key={category.name}
              >
                {category.name}
              </Link>
            ) : (
              <span className="text-xl " onClick={() => setnav(!nav)}>
                {category.name}
              </span>
            )}

            {category.children.length > 0 ? (
              <ul className="">{handleCategory(category.children)}</ul>
            ) : null}
          </li>
        </>
      );
    }
    return categoryArray;
  };

  const handleInput = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
        <SearchInput setToggle={setToggle} toggle={toggle} />
      ) : (
        <nav className="max-w-[1900px]   m-auto font-Roboto flex relative justify-between items-center px-10 py-2">
          <div className="flex items-center">
            {" "}
            <Link to={"/"}>
              {" "}
              <img src={Logo} width={"60px"} alt="" />{" "}
            </Link>
          </div>

          <div className="navbar w-full lg:block hidden  h-10 bg-white ">
            <ul className="flex mx-14 justify-center items-center pt-2 ml-56 relative">
              {category.categories.length > 0
                ? handleCategory(category.categories)
                : null}
            </ul>
          </div>
          <ul className="flex   justify-between gap-x-6 items-center ">
            <li>
              <div
                className="flex relative w-[180px]"
                onClick={() => handleInput()}
              >
                <input
                  disabled
                  type="text"
                  className=" cursor-text w-full bg-primary p-3 hover:bg-gray-200 px-14  rounded-[30px]"
                  placeholder="Search"
                />{" "}
                <AiOutlineSearch className="absolute left-3 top-[25%] text-2xl" />
              </div>
            </li>
            <li>
              <Link to={"/favorites"}>
                <BiHeart className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link to={"/basket"} className='relative'>
                <CgShoppingBag className="text-2xl" /> <span className="absolute flex  w-5 h-5 rounded-full bg-dark text-primary  justify-center items-center text-xs -top-2 -right-2">{totalItem}</span>
              </Link>
            </li>
            <li className="lg:hidden ">
              <Link to={"/"}>
                <FiUser
                  className="text-2xl"
                  onClick={() => setAsidebar(!asidebar)}
                />
              </Link>
            </li>
          </ul>
          <div
            className={
              !asidebar
                ? "lg:hidden w-[300px] visible transition-all duration-500   h-[100vh] p-4 z-40 bg-primary  fixed top-0 right-0"
                : "lg:hidden w-0 hidden invisible  transition-allduration-500  h-[100vh] p-4 z-40 bg-primary fixed top-0 right-0"
            }
          >
            <div className={!nav ? "sidebar " : null}>
              <CiCircleRemove
                className="absolute text-xl cursor-pointer font-extrabold text-dark top-5 right-10 z-50"
                onClick={() => setAsidebar(!asidebar)}
              />

              {auth.authenticate ? (
                <Link className="hover:opacity-70 text-sm uppercase pt-3 ">
                  Merhaba, {auth?.user?.fullName}
                </Link>
              ) : null}
              <ul className={"text-sm uppercase h-[200px] overflow-y-scroll"}>
                {category?.categories?.length > 0
                  ? handleCategory(category?.categories)
                  : null}
              </ul>
          

              {
                auth.authenticate
                ?
        <>
            <ul className="flex flex-col text-xl uppercase">
                <li
                  className="flex items-center gap-2"
                  onClick={() => setdrodopdown(!dropdown)}
                >
                  Hesap {!dropdown ? <BsChevronUp /> : <BsChevronDown />}
                </li>
              </ul>
              <ul
                className={
                  !dropdown
                    ? "flex  visible opacity-100 transition-all duration-300 flex-col text-xl uppercase"
                    : "hidden invisible opacity-0"
                }
              >
                <li>
                  <Link>Profil</Link>
                </li>

                <li>
                  <Link 
                  to={
                    
                    '/account/orders'
                  }
                  
                  
                  >Siparişler </Link>
                </li>
                <li>
                  <Link>Favoriler </Link>
                </li>
                <li>
                  <Link to={""}>Gelen Kutusu</Link>
                </li>
                <li>
                  <Link>Deneyimler</Link>
                </li>
                <li>
                  <Link>Hesap ayarları</Link>
                </li>
                <li>
                    <button
                      className="flex gap-2 items-center"
                      onClick={() => logout()}
                    >
                      Oturumu Kapat <FiLogOut />
                    </button>
                  </li>
           
              </ul>
        </>
                :
          <>
              <li
                  className="flex items-center text-xl uppercase gap-2"
                  onClick={() => setsignInState(!signInState)}
                >
                  Sign In {!dropdown ? <BsChevronUp /> : <BsChevronDown />}
                </li>
              <ul    className={
                  !signInState
                    ? "flex  visible opacity-100 transition-all duration-300 flex-col  text-xl uppercase"
                    : "hidden invisible opacity-0"
                }>
                <li>
                  <Link >Sipariş durumu</Link>
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
                <li>
                  <Link className="flex items-center gap-2" to={"/sign-in"} onClick={() => setAsidebar(!toggle)}>
                    Sign In <BiLogIn/>
                  </Link>
                </li>
                <li>
                  <Link to={"/join-us"} className="hover:opacity-70">
                    Join us
                  </Link>{" "}
                </li>
              </ul>
          </>

              }
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
