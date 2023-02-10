import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { getAllCategory } from "../../redux/actions/categories.actions";

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [categoryName , setCategoryName] = useState('')
  const [parentId, setparentId] = useState('')
  const [data, setData] = useState(null);
const [toggle, setToggle] = useState(false)
  useEffect(() => {
    dispatch(getAllCategory());
    setData(category.categories);
  }, []);

  const handleEdit = ()=>{
    setToggle(!toggle)
  }



  return (
    <div className="ml-56 p-5">
      <div className="flex justify-around p-5"><span className="text-dark font-bold text-sm uppercase">Categories</span> <button onClick={()=>handleEdit()}
                className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
      
      >Add Categories</button> </div>
      <ul >
        {category.loading ? (
          "loading"
        ) : (
          <>
            {category.categories?.map((cat) => {

              return (
                <>
                  <li key={cat?._id} className='bg-slate-500' >category: {cat?.name}</li>
                  <p >{cat?.children?.[0]?.name}</p>
                  <button>edit</button>
                  <button>delete</button>
                </>
              );
            })}
          </>
        )}


            <div 
            className={
              toggle 
              ?
              "w-96 h-96 bg-dark flex scale-100 transition-all duration-300  visible flex-col justify-center items-center absolute top-[50%] left-[42%] "
              :
              "scale-0 transition-all w-96 h-96 bg-dark flex  duration-300 invisible flex-col justify-center items-center absolute top-[50%] left-[42%]"
            }>
              <input type="text"
              placeholder="Category name"
              value={categoryName}
              onChange={(e)=>setCategoryName(e.target.value)}
               />
               <select name="" id="">
                <option value="" disabled selected>select a category</option>
                
                   {category.categories?.map((cat) => {

                    return (
                      <>
                        <option value={cat._id} key={cat?._id} className='bg-slate-500' > {cat?.name}</option>
                      
                      </>
                    );
                  })}
                
               </select>
            </div>

      </ul>
    </div>
  );
};

export default Categories;
