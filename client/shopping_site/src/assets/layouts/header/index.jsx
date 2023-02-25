import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/png/Logo_NIKE.svg.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import SearchInput from "../../components/search_input";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categories.actions";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const handleCategory = (categories) => {
    let categoryArray = [];
    for (let category of categories) {
      categoryArray.push(
        <>
          <li key={category?.name}>
            {category.parentId ? (
              <Link
                to={`/${category.slug}?cid=${category._id}&type=${category.type}`}
                className="hover:text-dark py-3 "
                key={category.name}
              >
                {category.name}
              </Link>
            ) : (
              <span className="text-xl">{category.name}</span>
            )}

            {category.children.length > 0 ? (
              <ul>{handleCategory(category.children)}</ul>
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
        <nav className="max-w-[1900px] m-auto font-Roboto flex relative justify-between items-center px-10 py-2">
          <div className="flex items-center">
            {" "}
            <Link to={"/"}>
              {" "}
              <img src={Logo} width={"60px"} alt="" />{" "}
            </Link>
          </div>

          <div className="navbar w-full  h-10 bg-white ">
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
              <Link to={'/favorites'}>
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
