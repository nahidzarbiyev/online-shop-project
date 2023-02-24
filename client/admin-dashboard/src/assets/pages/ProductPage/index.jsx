import React, { useEffect, useState } from "react";
import Logo from "../../images/nike_PNG9.png";
import { CiCircleRemove } from "react-icons/ci";
import linearCategories from "../../helpers/linearCategories";
import { useDispatch, useSelector } from "react-redux";
import { createPage } from "../../redux/actions/page.action";

const ProductPage = () => {
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [banners, setBanners] = useState([]);
  const [product, setProduct] = useState([]);
  const [type, setType] = useState("");
  const category = useSelector((state) => state.category);
  const page = useSelector(state => state.page);
  const dispatch = useDispatch()
  const handleEdit = () => {

    setToggle(!toggle);
  };
  const handleBannersImg = (e) => {
    console.log(e);
    setBanners([...banners, e.target.files[0]]);
  };

  const handleProductsImg = (e) => {
    console.log(e);
    setProduct([...product, e.target.files[0]]);
  };

  const submitPage = (e) => {
    e.preventDefault();

    if (title === '') {
      alert('title is required')
      setToggle(!toggle)
    }

    const form = new FormData();
    form.append("title", title);
    form.append("description", desc);
    form.append("category", categoryId);
    form.append("type", type);
    banners?.forEach((banner, i)=>{
      form.append('banners', banner)
    })
    product?.forEach((prod, i)=>{
      form.append('products', prod)
    })
 dispatch(createPage(form))

  };

  useEffect(() => {
    setCategories(linearCategories(category.categories));
  }, [category]);

  useEffect(() => {
    if (!page.loading) {
      setToggle(false)
      setBanners([])
      setDesc('')
      setProduct([])
      setTitle('')
      setCategoryId('')
    }
  console.log(page);

  }, [page])
  

  const onCategoryChange = (e) => {
    const category = categories.find(category => category._id == e.target.value);

    console.log(categoryId);
    setCategoryId(e.target.value);
    setType(category.type);
  };
  return (
    <div className="ml-56 p-5 ">
      {
        page.loading
        ?
        <p>Creating Page</p>
        :
        <>
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
          <form action="" onSubmit={(e) => submitPage(e)} className='flex flex-col gap-2 justify-center items-center'>
            <select
              className="p-2   border outline-none  w-[90%]  border-blue-500"
              value={categoryId}
              onChange={(e) => onCategoryChange(e)}
            >
              <option value="">Select Category</option>
              {categories?.map((elem) => (
                <option key={elem._id} value={elem._id}>{elem.name}</option>
              ))}
            </select>
       
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Page Title"
              className="p-2  border w-[90%] mx-5 outline-none border-blue-500"
            />
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Page Description"
              className="p-2  border w-[90%] mx-5 outline-none border-blue-500"
            />
            {banners.length > 0
              ? banners.map((el, i) => {
                  <p key={i} className="text-primary uppercase text-xs">
                    {el.name}
                  </p>;
                })
              : null}
            <input
              type="file"
              multiple={true}
              name="banners"
              className="p-2  border w-[90%] mx-5 outline-none border-blue-500 bg-white"
              onChange={(e) => handleBannersImg(e)}
            />

            {product.length > 0
              ? product.map((el, i) => {
                  <p key={i} className="text-primary bg-white uppercase text-xs">
                    {el.name}
                  </p>;
                })
              : null}
            <input
              type="file"
              multiple={true}

              name="banners"
              className="p-2  border w-[90%] mx-5 outline-none border-blue-500 bg-white"
              onChange={(e) => handleProductsImg(e)}
            />

            <button
              type="submit"
              className="py-2 px-7 bg-primary text-dark uppercase m-4 rounded-3xl hover:opacity-70 text-sm font-bold "
            >
              Save
            </button>
          </form>
        </div>
      </div>
        </>
      }
     
    </div>
  );
};

export default ProductPage;
