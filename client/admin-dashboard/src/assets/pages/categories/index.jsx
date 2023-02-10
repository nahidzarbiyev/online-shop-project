import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categories.actions";

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // const [ loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(getAllCategory());
    setData(category.categories);
  }, []);

  console.log(data);
  console.log(category.loading);
  const categoriesData = () => {};

  return (
    <div className="ml-56">
      <div>Categories</div>
      <ul>
        {category.loading ? (
          "loading"
        ) : (
          <>
            {data?.map((cat) => {
              return (
                <>
                  <li >category: {cat?.name}</li>
                  <button>edit</button>
                  <button>delete</button>
                </>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default Categories;
