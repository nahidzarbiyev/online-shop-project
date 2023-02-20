import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { Formik, Form, Field } from "formik";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import * as Yup from "yup";
import {
  addCategory,
  getAllCategory,
} from "../../redux/actions/categories.actions";
import Logo from "../../images/nike_PNG9.png";
import { CiCircleRemove } from "react-icons/ci";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const [parentId, setparentId] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [checked, setChecked] = useState([]);
  const [expanded, setExpended] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);
  const [expandedArr, setexpandedArr] = useState([]);
  const [updateCategorytoggle, setUpdateCategorytoggle] = useState(false);
  useEffect(() => {
    dispatch(getAllCategory());
    setData(category.categories);
  }, []);

  const handleEdit = () => {
    setToggle(!toggle);
  };

  // console.log(data);

  const handleCategory = (categories) => {
    let categoryArray = [];
    for (let category of categories) {
      categoryArray.push({
        label: category.name,
        value: category._id,
        children:
          category.children.length > 0 && handleCategory(category.children),
      });
    }
    return categoryArray;
  };

  const categoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
      });
      if (category.children.length > 0) {
        categoryList(category.children, options);
      }
    }
    return options;
  };

  const updateCategory = () => {
    setUpdateCategorytoggle(!updateCategorytoggle);
    const categories = categoryList(category.categories);
    const checkedArray = [];
    const expandedArray = [];
    checked.length > 0 &&
      checked.forEach((categoryId, index) => {
        const category = categories.find(
          (category, index) => categoryId == category.value
        );
        category && checkedArray.push(category);
      });

    expanded.length > 0 &&
      expanded.forEach((categoryId, index) => {
        const category = categories.find(
          (category, index) => categoryId == category.value
        );
        category && expandedArray.push(category);
      });
    setCheckedArr(checkedArray);
    setexpandedArr(expandedArray);
    console.log({ checked, expanded, categories, checkedArray, expandedArray });
  };

  return (
    <div className="ml-56 p-5 min-h-[100vh]">
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
          // <>{<ul className="">{handleCategory(category.categories)}</ul>}</>
          <CheckboxTree
            nodes={handleCategory(category.categories)}
            checked={checked}
            expanded={expanded}
            onCheck={(checked) => setChecked(checked)}
            onExpand={(expanded) => setExpended(expanded)}
            icons={{
              check: <ImCheckboxChecked />,
              uncheck: <ImCheckboxUnchecked />,
              halfCheck: <ImCheckboxUnchecked />,
              expandClose: <BiChevronDown />,
              expandOpen: <BiChevronRight />,
            }}
          />
        )}
        <div>
          <button
            className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
            onClick={() => updateCategory()}
          >
            Edit Category
          </button>
          <button className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary">
            Delete Category
          </button>
        </div>
      </div>
      <div
        className={
          toggle
            ? "fixed top-0 scale-100 left-0 w-full h-full bg-black/60  transition-all"
            : "scale-0 fixed top-40 left-10  transition-all duration-300"
        }
      >
        <div
          className={
            "w-96 min-h-[450px] bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-10 justify-center items-center fixed left-[43%] top-[20%] "
          }
        >
          <CiCircleRemove
            className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer"
            onClick={() => handleEdit()}
          />

          <div className="flex text-primary items-center w-full justify-around ">
            <img src={Logo} width={"70px"} alt="" />
            <p>Add new Category</p>
          </div>

          <Formik
            initialValues={{
              name: "",
              parentId: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              const form = new FormData();
              form.append("name", values.name);
              form.append("parentId", values.parentId);

              dispatch(addCategory(form));
              console.log(values);
              resetForm({ values: "" });
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col gap-3 w-full  bg-dark p-5 justify-center items-center">
                <Field
                  name="name"
                  placeholder="category Name"
                  className="p-2 outline none border w-full border-blue-500"
                />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}

                <Field
                  className="p-2 outline none border w-full border-blue-500"
                  component="select"
                  id="parentId"
                  name="parentId"
                  multiple={false}
                >
                  <option value="" selected>
                    select a category
                  </option>
                  {categoryList(category.categories).map((option) => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    );
                  })}
                </Field>

                <button
                  type="submit"
                  className="py-2 px-6 bg-primary rounded-3xl my-4"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div
        className={
          updateCategorytoggle
            ? "fixed top-0 scale-100 left-0 w-full min-h-[100vh] bg-black/60  transition-all"
            : "scale-0 fixed top-40 left-10  transition-all duration-300"
        }
      >
        <div
          className={
            "min-w-[400px] min-h-[450px] bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-10 justify-center items-center fixed left-[43%] top-[20%] "
          }
        >
          <CiCircleRemove
            className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer"
            onClick={() => setUpdateCategorytoggle(!updateCategorytoggle)}
          />

          <div className="flex text-primary items-center w-full justify-around ">
            <img src={Logo} width={"70px"} alt="" />
            <p>Update Category</p>
          </div>

          <Formik
            initialValues={{
              name: "",
              parentId: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {}}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col  gap-3 w-full  bg-dark p-5 justify-center items-center">
                {checkedArr.length > 0 &&
                  checkedArr.map((el, index) => {
                    return (
                      <>
                        <div className="flex gap-3">
                          <Field
                            name="name"
                            value={el.name}
                            placeholder="category Name"
                            className="p-2 outline none border w-full border-blue-500"
                          />
                          {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                          ) : null}
                          <Field
                            className="p-2 outline none border w-full border-blue-500"
                            component="select"
                            id="parentId"
                            name="parentId"
                            multiple={false}
                          >
                            {categoryList(category.categories).map((option) => {
                              return (
                                <option key={option.value} value={option.value} selected={el.name}>
                                  {option.name}
                                </option>
                              );
                            })}
                          </Field>
                        </div>
                      </>
                    );
                  })}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Categories;
