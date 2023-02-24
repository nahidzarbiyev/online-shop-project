import React, { useEffect, useState } from "react";
import Logo from "../../images/nike_PNG9.png";
import { CiCircleRemove } from "react-icons/ci";
import linearCategories from "../../helpers/linearCategories";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [ panners, setBanners] = useState([])
  const [ product, setProduct] = useState([])
  const category = useSelector((state) => state.category);
  const handleEdit = () => {
    setToggle(!toggle);
  };

  const handleBannersImg = (e)=>{

  }
  
  const handleProductsImg = (e)=>{

}
  useEffect(() => {
    setCategories(linearCategories(category.categories));
  }, []);

  return (
    <div className="ml-56 p-5 ">
      <button
        className=" px-10 py-2 bg-dark rounded-3xl text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
        onClick={() => handleEdit()}
      >
        Create Page
      </button>

      <div
        className={
          toggle
            ? "fixed top-0 scale-100 left-0 w-full h-full bg-black/60  transition-all"
            : "scale-0 fixed top-40 left-10  transition-all duration-300"
        }
      >
        <div
          className={
            "w-96 min-h-[550px] bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-10 justify-center items-center fixed left-[43%] top-[20%] "
          }
        >
          <CiCircleRemove
            className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer"
            onClick={() => handleEdit()}
          />


          <div className="flex text-primary items-center w-full justify-around ">
            <img src={Logo} width={"70px"} alt="" />
            <p>Create New Page</p>
          </div>
          <select  className="p-2   border outline-none  w-[90%] mx-auto border-blue-500"
              value={categoryId} onChange={(e) => setCategoryId( e.target.value)}>
                <option value="">Select Category</option>
               {categories?.map((elem)=>
               <option key={elem._id}>{elem.name}</option>)}
              </select>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Page Title"
            className="p-2  border w-[90%] mx-auto outline-none border-blue-500"
          />
           <input
            type="text"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            placeholder="Page Title"
            className="p-2  border w-[90%] mx-auto outline-none border-blue-500"
          />
          <input type="file" name="banners"
          className="p-2  border w-[90%] mx-auto outline-none border-blue-500 bg-white"
          onChange={(e)=>handleBannersImg()} />
           <input type="file" name="banners"
          className="p-2  border w-[90%] mx-auto outline-none border-blue-500 bg-white"

          onChange={(e)=>handleProductsImg()} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
