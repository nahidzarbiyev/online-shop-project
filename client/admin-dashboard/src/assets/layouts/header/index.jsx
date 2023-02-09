import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/nike_PNG9.png";
const Header = () => {
  return (
    <div className="fixed w-[100%]">
      <nav className="flex justify-between items-center p-10">
        <div className="logo">
          <img src={Logo} alt="" width={"70px"} />
        </div>
        <ul className="flex gap-5">
          <li>
            <Link
              to={"/sign-in"}
              className="border  px-8 py-3 bg-dark border-dark text-primary text-sm rounded-lg transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to={"/sign-up"}
              className="border px-8 py-3 bg-dark border-dark text-primary text-sm rounded-lg transition-colors duration-300 hover:text-dark  hover:bg-primary hover:border-primary"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
