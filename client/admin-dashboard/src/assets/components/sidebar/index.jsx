import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../images/nike_PNG9.png";
import { IoMdStats } from "react-icons/io";
import { AiFillFileText, AiFillSetting } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../redux/actions/auth.action";
const Asidebar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const activeLink =
    "flex gap-3 active:bg-dark transition-all duration-300 items-center text-sm  text-white px-10 py-2 ";
  const normalLink =
    "flex gap-3 active:bg-white transition-all duration-300 items-center text-sm  bg-white text-dark px-10 py-2 ";

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, [token]);

  return (
    <>
      <div className="w-56 h-[100vh] bg-dark flex flex-col justify-between fixed  py-10 px-2 gap-7 items-center">
        <img src={Logo} width={"70px"} alt="" />
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="profile w-28 h-28  rounded-full bg-white"> </div>
          <p className="text-white text-sm uppercase font-bold">
            {" "}
            Nahid Zarbiyev
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-7">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {" "}
                <IoMdStats className="" /> Dashboard
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }              >
                {" "}
                <AiFillFileText className="" /> Orders
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }              >
                {" "}
                <BsBoxSeam className="" /> Products
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }              >
                {" "}
                <BiCategory className="" /> Categories
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                isActive ? activeLink : normalLink
              }              >
                {" "}
                <AiFillSetting className="" /> Settings
              </NavLink>
            </li>{" "}
          </ul>
        </div>
        <div className="flex flex-col gap-4 p-2">
          <p className="font-bold text-white ">Need Help?</p>
          <span className="underline text-gray-400 text-xs">
            test@gmail.com
          </span>

          <span className="text-gray-500 text-xs">
            © 2023 Nike, Inc. All Rights Reserved
          </span>
          <button
            onClick={() => dispatch(signout(!token))}
            className="uppercase px-10 flex items-center justify-center gap-2 py-2 bg-gray-800 text-white text-sm font-bold"
          >
            Log Out <FiLogOut />
          </button>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
