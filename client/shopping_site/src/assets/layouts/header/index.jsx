import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/png/Logo_NIKE.svg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import SearchInput from "../../components/search_input";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleInput = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
<SearchInput setToggle = {setToggle} toggle={toggle}/>
      ) : (
        <nav className="max-w-[1900px] m-auto font-Roboto flex relative justify-between items-center px-10 py-2">
          <div className="flex items-center">
            {" "}
            <Link to={"/"}>
              {" "}
              <img src={Logo} width={"60px"} alt="" />{" "}
            </Link>
          </div>

          <ul className=" ml-56 flex justify-between w-96">
            <li className="navbar-p  hover:navbar ">
              <Link>New & Featured </Link>

              <div className="absolute dropdown top-[65%] mt-6 flex w-[100vw]  m-auto -left-[3.1vw] bg-white  z-10 min-h-[400px] justify-between gap-24 transition-all duration-300 opacity-0 invisible h-0 py-10  p-8 -translate-y-2">
                <div className="  flex max-w-[1200px]  left-0  justify-between gap-24 min-h-[400px] bg-white m-auto">
                  <ul className=" text-gray-500 text-sm gap-y-1  flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New & Fetured</Link>
                    </h4>
                    <li>
                      <Link className="hover:text-dark">New Arrivals</Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">
                        New in Running Invincible 3
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">
                        SNKRS Lunch Calendar
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">
                        Valentine's Day Shop
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">
                        Trending Now: NBA All Star
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">Member Exclusive</Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">
                        Sale - Up to 40% Off
                      </Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Men</Link>
                    </h4>
                    <li>
                      <Link className="hover:text-dark">Shoes</Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">Clothing</Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">Equipment</Link>
                    </li>
                    <li>
                      <Link className="hover:text-dark">Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Women</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Kids</Link>
                    </h4>
                    <li>
                      <Link>Boys Shoes</Link>
                    </li>
                    <li>
                      <Link>Boys Clothing</Link>
                    </li>
                    <li>
                      <Link>Girls Shoes</Link>
                    </li>
                    <li>
                      <Link>Girls Clothing</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>Drops</Link>
                    </h4>
                    <li>
                      <Link>Air Jordan 1</Link>
                    </li>
                    <li>
                      <Link>Dunks</Link>
                    </li>
                    <li>
                      <Link>Get Em in SNKRS</Link>
                    </li>
                    <li>
                      <Link>Jordan Heat Check</Link>
                    </li>
                    <li>
                      <Link>Last Chance Kicks</Link>
                    </li>
                    <li>
                      <Link>Complete your Look</Link>
                    </li>
                    <li>
                      <Link>Latest In Jordan Clothing</Link>
                    </li>
                    <li>
                      <Link>Drops 101</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="navbar-p  hover:navbar">
              <Link>Men </Link>
              <div className="absolute dropdown top-[65%] mt-6 flex w-[100vw]  m-auto -left-[3.1vw] bg-white  z-10 min-h-[400px] justify-between gap-24 transition-all duration-300 opacity-0 invisible h-0 py-10  p-8 -translate-y-2">
                <div className=" flex max-w-[1200px]  m-auto left-0  justify-between gap-24 min-h-[400px] bg-white">
                  <ul className=" text-gray-500 text-sm gap-y-1 hover:text-dark flex flex-col">
                    <h4 className=" text-[16px] text-dark py-2">
                      <Link>New & Fetured</Link>
                    </h4>
                    <li>
                      <Link className="hover:text-dark">New Arrivals</Link>
                    </li>
                    <li>
                      <Link>New in Running Invincible 3</Link>
                    </li>
                    <li>
                      <Link>SNKRS Lunch Calendar</Link>
                    </li>
                    <li>
                      <Link>Valentine's Day Shop</Link>
                    </li>
                    <li>
                      <Link>Trending Now: NBA All Star</Link>
                    </li>
                    <li>
                      <Link>Member Exclusive</Link>
                    </li>
                    <li>
                      <Link>Sale - Up to 40% Off</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Men</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Women</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Kids</Link>
                    </h4>
                    <li>
                      <Link>Boys Shoes</Link>
                    </li>
                    <li>
                      <Link>Boys Clothing</Link>
                    </li>
                    <li>
                      <Link>Girls Shoes</Link>
                    </li>
                    <li>
                      <Link>Girls Clothing</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>Drops</Link>
                    </h4>
                    <li>
                      <Link>Air Jordan 1</Link>
                    </li>
                    <li>
                      <Link>Dunks</Link>
                    </li>
                    <li>
                      <Link>Get Em in SNKRS</Link>
                    </li>
                    <li>
                      <Link>Jordan Heat Check</Link>
                    </li>
                    <li>
                      <Link>Last Chance Kicks</Link>
                    </li>
                    <li>
                      <Link>Complete your Look</Link>
                    </li>
                    <li>
                      <Link>Latest In Jordan Clothing</Link>
                    </li>
                    <li>
                      <Link>Drops 101</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="navbar-p  hover:navbar">
              <Link>Women</Link>
              <div className="absolute dropdown top-[65%] mt-6 flex w-[100vw]  m-auto -left-[3.1vw] bg-white  z-10 min-h-[400px] justify-between gap-24 transition-all duration-300 opacity-0 invisible h-0 py-10  p-8 -translate-y-2">
                <div className=" flex max-w-[1200px]  m-auto left-0  justify-between gap-24 min-h-[400px] bg-white">
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New & Fetured</Link>
                    </h4>
                    <li>
                      <Link>New Arrivals</Link>
                    </li>
                    <li>
                      <Link>New in Running Invincible 3</Link>
                    </li>
                    <li>
                      <Link>SNKRS Lunch Calendar</Link>
                    </li>
                    <li>
                      <Link>Valentine's Day Shop</Link>
                    </li>
                    <li>
                      <Link>Trending Now: NBA All Star</Link>
                    </li>
                    <li>
                      <Link>Member Exclusive</Link>
                    </li>
                    <li>
                      <Link>Sale - Up to 40% Off</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Men</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Women</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Kids</Link>
                    </h4>
                    <li>
                      <Link>Boys Shoes</Link>
                    </li>
                    <li>
                      <Link>Boys Clothing</Link>
                    </li>
                    <li>
                      <Link>Girls Shoes</Link>
                    </li>
                    <li>
                      <Link>Girls Clothing</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>Drops</Link>
                    </h4>
                    <li>
                      <Link>Air Jordan 1</Link>
                    </li>
                    <li>
                      <Link>Dunks</Link>
                    </li>
                    <li>
                      <Link>Get Em in SNKRS</Link>
                    </li>
                    <li>
                      <Link>Jordan Heat Check</Link>
                    </li>
                    <li>
                      <Link>Last Chance Kicks</Link>
                    </li>
                    <li>
                      <Link>Complete your Look</Link>
                    </li>
                    <li>
                      <Link>Latest In Jordan Clothing</Link>
                    </li>
                    <li>
                      <Link>Drops 101</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>{" "}
            <li className="navbar-p  hover:navbar">
              <Link>Kids </Link>
              <div className="absolute dropdown top-[65%] mt-6 flex w-[100vw]  m-auto -left-[3.1vw] bg-white  z-10 min-h-[400px] justify-between gap-24 transition-all duration-300 opacity-0 invisible h-0 py-10  p-8 -translate-y-2">
                <div className=" flex max-w-[1200px]  m-auto left-0  justify-between gap-24 min-h-[400px] bg-white">
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New & Fetured</Link>
                    </h4>
                    <li>
                      <Link>New Arrivals</Link>
                    </li>
                    <li>
                      <Link>New in Running Invincible 3</Link>
                    </li>
                    <li>
                      <Link>SNKRS Lunch Calendar</Link>
                    </li>
                    <li>
                      <Link>Valentine's Day Shop</Link>
                    </li>
                    <li>
                      <Link>Trending Now: NBA All Star</Link>
                    </li>
                    <li>
                      <Link>Member Exclusive</Link>
                    </li>
                    <li>
                      <Link>Sale - Up to 40% Off</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Men</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Women</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Kids</Link>
                    </h4>
                    <li>
                      <Link>Boys Shoes</Link>
                    </li>
                    <li>
                      <Link>Boys Clothing</Link>
                    </li>
                    <li>
                      <Link>Girls Shoes</Link>
                    </li>
                    <li>
                      <Link>Girls Clothing</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>Drops</Link>
                    </h4>
                    <li>
                      <Link>Air Jordan 1</Link>
                    </li>
                    <li>
                      <Link>Dunks</Link>
                    </li>
                    <li>
                      <Link>Get Em in SNKRS</Link>
                    </li>
                    <li>
                      <Link>Jordan Heat Check</Link>
                    </li>
                    <li>
                      <Link>Last Chance Kicks</Link>
                    </li>
                    <li>
                      <Link>Complete your Look</Link>
                    </li>
                    <li>
                      <Link>Latest In Jordan Clothing</Link>
                    </li>
                    <li>
                      <Link>Drops 101</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="navbar-p  hover:navbar">
              <Link>Sale </Link>
              <div className="absolute dropdown top-[65%] mt-6 flex w-[100vw]  m-auto -left-[3.1vw] bg-white  z-10 min-h-[400px] justify-between gap-24 transition-all duration-300 opacity-0 invisible h-0 py-10  p-8 -translate-y-2">
                <div className=" flex max-w-[1200px]  m-auto left-0  justify-between gap-24 min-h-[400px] bg-white">
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New & Fetured</Link>
                    </h4>
                    <li>
                      <Link>New Arrivals</Link>
                    </li>
                    <li>
                      <Link>New in Running Invincible 3</Link>
                    </li>
                    <li>
                      <Link>SNKRS Lunch Calendar</Link>
                    </li>
                    <li>
                      <Link>Valentine's Day Shop</Link>
                    </li>
                    <li>
                      <Link>Trending Now: NBA All Star</Link>
                    </li>
                    <li>
                      <Link>Member Exclusive</Link>
                    </li>
                    <li>
                      <Link>Sale - Up to 40% Off</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Men</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Women</Link>
                    </h4>
                    <li>
                      <Link>Shoes</Link>
                    </li>
                    <li>
                      <Link>Clothing</Link>
                    </li>
                    <li>
                      <Link>Equipment</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>New For Kids</Link>
                    </h4>
                    <li>
                      <Link>Boys Shoes</Link>
                    </li>
                    <li>
                      <Link>Boys Clothing</Link>
                    </li>
                    <li>
                      <Link>Girls Shoes</Link>
                    </li>
                    <li>
                      <Link>Girls Clothing</Link>
                    </li>
                    <li>
                      <Link>Shop All New</Link>
                    </li>
                  </ul>
                  <ul className=" text-gray-500 text-sm gap-y-1 flex flex-col">
                    <h4 className=" text-dark text-[16px] py-2">
                      <Link>Drops</Link>
                    </h4>
                    <li>
                      <Link>Air Jordan 1</Link>
                    </li>
                    <li>
                      <Link>Dunks</Link>
                    </li>
                    <li>
                      <Link>Get Em in SNKRS</Link>
                    </li>
                    <li>
                      <Link>Jordan Heat Check</Link>
                    </li>
                    <li>
                      <Link>Last Chance Kicks</Link>
                    </li>
                    <li>
                      <Link>Complete your Look</Link>
                    </li>
                    <li>
                      <Link>Latest In Jordan Clothing</Link>
                    </li>
                    <li>
                      <Link>Drops 101</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
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
              <Link>
                <BiHeart className="text-2xl" />
              </Link>
            </li>
            <li>
              <Link>
                <CgShoppingBag className="text-2xl" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
