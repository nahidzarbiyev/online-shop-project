import React, { useState } from 'react'
import Logo from "../../images/png/Logo_NIKE.svg.png";
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const SearchInput = ({setToggle,toggle}) => {
const handleInput = ()=>{
  setToggle(!toggle)
}

  return (
    <div className=" fixed z-40 w-[100vw]  top-0 transition-all duration-300 min-h-[400px] bg-white   ">
    <div className="max-w-[1900px] m-auto font-Roboto flex relative justify-between items-center px-10 py-2 ">
      <img src={Logo} alt="" width={"70px"} />

      <div className="flex relative flex-col  w-[700px]">
        <input
          type="text"
          className=" border w-full  border-primary bg-primary rounded-3xl p-2 outline-none px-10"
          placeholder="Ara"
        />{" "}
        <AiOutlineSearch className="absolute left-3 top-[25%] text-xl" />
        <div className="flex flex-col absolute top-10 mt-10  ">
          <span className="text-gray-700 text-[16px] flex">
            Popüler Arama Terimleri
          </span>
          <ul className="flex flex-col gap-3 text-xl mt-3">
            <li>
              <Link>Air Force</Link>
            </li>
            <li>
              <Link>Jordan</Link>
            </li>
            <li>
              <Link>Air Max</Link>
            </li>
            <li>
              <Link>Blazer</Link>
            </li>
          </ul>
        </div>
      </div>

      <span
        className="text-dark text-sm cursor-pointer"
        onClick={() => handleInput()}
      >
        İptal
      </span>
    </div>
  </div>
  )
}

export default SearchInput