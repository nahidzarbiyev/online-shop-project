import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { getAllCategory } from "../../redux/actions/categories.actions";
import Logo from "../../images/nike_PNG9.png";
import {CiCircleRemove} from 'react-icons/ci'
const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [parentId, setparentId] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    dispatch(getAllCategory());
    setData(category.categories);
  }, []);

  const handleEdit = () => {
    setToggle(!toggle);
  };

  // console.log(data);

const handleCategory = (categories)=>{
  let categoryArray = []
  for(let category of categories){
    categoryArray.push(
    <>
      <li className="uppercase text-sm font-bold  text-dark mx-5 p-2">{category.name}
      
      {category.children.length>0 ? <ul className="text-sm text-blue-600 ">#{handleCategory(category.children)}</ul> : null}
      </li>
    </>
    )
  }
  return categoryArray
}
  

  const categoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        categoryList(category.children, options)
      }
    }
    return options;
  };

  // console.log(category?.categories[0]?.children[2].name)

  return (
    <div className="ml-56 p-5">
      <div className="flex justify-around p-5">
        <span className="text-dark font-bold text-sm uppercase">
          Categories
        </span>{" "}
        <button
          onClick={() => handleEdit()}
          className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
        >
          Add Categories
        </button>{" "}
      </div>
      <div className="">
        {category.loading ? (
          "loading"
        ) : (
          <>
        {
          <ul className="">{handleCategory(category.categories)}</ul>
        }
          </>
        )}
      </div>
      <div
        className={
          toggle
            ? "w-96 h-96 bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-10 justify-center items-center absolute top-[50%] left-[42%] "
            : "scale-0 transition-all w-96 h-96 bg-dark flex  duration-300 invisible flex-col justify-center items-center absolute top-[50%] left-[42%]"
        }
      >
        <CiCircleRemove className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer" onClick={()=>handleEdit()}/>
        <p className="flex text-white items-center w-72 justify-between gap-10"><img src={Logo} width={"70px"} alt="" /> Add New Category</p>
        <input className="px-4 py-2 w-72"
          type="text"
          placeholder="Category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <select name="" id="" className="px-4 py-2 rounded-sm mt-5 w-72 bg-primary">
          <option value="" disabled selected>
            select a category
          </option>
        {
          categoryList(category.categories).map(option=>{
            console.log(option.name)
            return (
              <option key={option.value} value={option.value}>{option.name}</option>
            )
          })
        }
     
        </select>
      </div>
    </div>
  );
};

export default Categories;
