import React from "react";
import { Link } from "react-router-dom";
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
        <div className="flex gap-2  text-dark text-xs ">
          <Link className="hover:opacity-70">Find a Store</Link> <span>|</span>{" "}
          <Link className="hover:opacity-70">Help</Link> <span>|</span>{" "}
          <Link className="hover:opacity-70">Join us</Link> <span>|</span>{" "}
          <Link className="hover:opacity-70">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default HelpHeader;
