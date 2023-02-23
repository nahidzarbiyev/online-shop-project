import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";
import { Formik, Form, Field } from "formik";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BiChevronRight, BiChevronDown, BiCategoryAlt } from "react-icons/bi";
import * as Yup from "yup";
import {
  addCategory,
  deleteCategories,
  getAllCategory,
  updateCategories,
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
  const [deleteToggle, setDeleteToggle] = useState(false);
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
    updateCheckedAndExpandedCategories();
    setUpdateCategorytoggle(!updateCategorytoggle);
  };

  const updateCheckedAndExpandedCategories = () => {
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
  };

  const handleDeleteCategory = () => {
    updateCheckedAndExpandedCategories();
    setDeleteToggle(!deleteToggle);
  };

  const deleteCategoriesbyId = () => {
    const checkedIdsArray = checkedArr.map((elem, i) => ({ _id: elem.value }));
    const expandedIdsArray = expandedArr.map((elem, i) => ({
      _id: elem.value,
    }));
    const idsArray = expandedIdsArray.concat(checkedIdsArray);

    if (checkedArr.length > 0) {
      dispatch(deleteCategories(checkedIdsArray)).then((res) => {
        if (res) {
          dispatch(getAllCategory());
          setDeleteToggle(!deleteToggle);
        }
      });
    }
  };

  const handleCategoryInput = (key, value, index, type) => {
    if (type == "checked") {
      const updatedCheckedArr = checkedArr.map((item, _index) =>
        index == _index ? { ...item, [key]: value } : item
      );
      setCheckedArr(updatedCheckedArr);
    } else if (type == "expanded") {
      const updatedExpandedArr = expandedArr.map((item, _index) =>
        index == _index ? { ...item, [key]: value } : item
      );
      setexpandedArr(updatedExpandedArr);
    }
  };

  return (
    <div className="ml-56 p-5 min-h-[100vh]  ">
      <div className="flex justify-around p-5">
        <span className="text-dark font-bold text-sm uppercase">
          Categories
        </span>{" "}
        <button
          onClick={() => handleEdit()}
          className=" px-10 py-2 bg-dark rounded-3xl text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
        >
          Add Categories
        </button>{" "}
      </div>
      <div className=" flex flex-col justify-center items-center h-[80vh]">
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
              expandAll: <BiChevronRight />,
              collapseAll: <BiChevronRight />,
              parentClose: <BiCategoryAlt className="hidden" />,
              parentOpen: <BiChevronRight />,
              leaf: <BiChevronRight />,
            }}
          />
        )}
        <div className="flex gap-10 py-10">
          <button
            className=" px-10 py-2 bg-dark  rounded-3xl text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
            onClick={() => updateCategory()}
          >
            Edit Category
          </button>
          <button
            className=" px-10 py-2 bg-dark rounded-3xl text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
            onClick={() => handleDeleteCategory()}
          >
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
            "min-w-[400px] min-h-[450px] py-2 bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-10 justify-center items-center fixed left-[43%] top-[20%] "
          }
        >
          <CiCircleRemove
            className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer"
            onClick={() => setUpdateCategorytoggle(!updateCategorytoggle)}
          />

          <div className="flex text-primary items-center pt-16 w-full justify-around ">
            <img src={Logo} width={"70px"} alt="" />
            <p>Update Category</p>
          </div>

          <Formik
            initialValues={{
              name: "",
              parentId: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              const form = new FormData();
              expandedArr.forEach((elem, index) => {
                form.append("_id", elem.value);
                form.append("name", elem.name);
                form.append("parentId", elem.parentId ? elem.parentId : "");
              });
              checkedArr.forEach((elem, index) => {
                form.append("_id", elem.value);
                form.append("name", elem.name);
                form.append("parentId", elem.parentId ? elem.parentId : "");
              });
              dispatch(updateCategories(form)).then((res) => {
                if (res) {
                  dispatch(getAllCategory());
                }
              });
              console.log(values);
              resetForm({ values: "" });
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col  gap-3 w-full  bg-dark p-5 py-2 justify-center items-center">
                <h6 className="text-primary text-sm uppercase font-bold">
                  Expanded Categories
                </h6>
                {expandedArr.length > 0 &&
                  expandedArr.map((el, index) => {
                    return (
                      <>
                        <div className="flex gap-3">
                          <Field
                            name="name"
                            value={el.name}
                            onKeyUp={(e) =>
                              handleCategoryInput(
                                "name",
                                e.target.value,
                                index,
                                "expanded"
                              )
                            }
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
                            value={el.parentId}
                            onKeyUp={(e) =>
                              handleCategoryInput(
                                "parentId",
                                e.target.value,
                                index,
                                "expanded"
                              )
                            }
                            name="parentId"
                            multiple={false}
                          >
                            {categoryList(category.categories).map((option) => {
                              return (
                                <option
                                  key={option.value}
                                  value={option.value}
                                  selected={el.name}
                                >
                                  {option.name}
                                </option>
                              );
                            })}
                          </Field>
                         
                        </div>
                      </>
                    );
                  })}

                <h6 className="text-primary text-sm uppercase font-bold">
                  Checked Categories
                </h6>
                {checkedArr.length > 0 &&
                  checkedArr.map((el, index) => {
                    return (
                      <>
                        <div className="flex gap-3">
                          <Field
                            name="name"
                            value={el.name}
                            onKeyUp={(e) =>
                              handleCategoryInput(
                                "name",
                                e.target.value,
                                index,
                                "checked"
                              )
                            }
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
                            value={el.parentId}
                            onKeyUp={(e) =>
                              handleCategoryInput(
                                "parentId",
                                e.target.value,
                                index,
                                "checked"
                              )
                            }
                            name="parentId"
                            multiple={false}
                          >
                            {categoryList(category.categories).map((option) => {
                              return (
                                <option
                                  key={option.value}
                                  value={option.value}
                                  selected={el.name}
                                >
                                  {option.name}
                                </option>
                              );
                            })}
                          </Field>
                        
                        </div>
                      </>
                    );
                  })}
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
          deleteToggle
            ? "fixed top-0 scale-100 left-0 w-full min-h-[100vh] bg-black/60  transition-all"
            : "scale-0 fixed top-40 left-10  transition-all duration-300"
        }
      >
        <div
          className={
            "min-w-[400px] min-h-[150px] py-16 bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-3 justify-center items-center fixed left-[43%] top-[20%] "
          }
        >
          <CiCircleRemove
            className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer"
            onClick={() => setDeleteToggle(!deleteToggle)}
          />

          <div className="flex text-primary items-center p-4 w-full justify-around ">
            <img src={Logo} width={"70px"} alt="" />
            <p>Category Delete </p>
          </div>

          <h2 className="text-primary text-xl uppercase text-center font-bold">
            Are You Sure?
          </h2>
          <h5 className="text-start text-primary uppercase text-sm font-bold">
            Expanded
          </h5>
          {expandedArr?.map((elem, index) => (
            <p
              className="text-start text-primary uppercase text-sm font-bold"
              key={index}
            >
              Category name: <span className="text-gray-500">{elem?.name}</span>
            </p>
          ))}
          <h5 className="text-start text-primary uppercase text-sm font-bold">
            Checked
          </h5>
          {checkedArr?.map((elem, index) => (
            <p
              className="text-start text-primary uppercase text-sm font-bold"
              key={index}
            >
              Category name: <span className="text-gray-500">{elem?.name}</span>
            </p>
          ))}
          <div className="flex gap-10">
            <button
              className="text-dark bg-primary px-10 py-2 transition-all duration-300 hover:opacity-70 rounded-3xl outline-none"
              onClick={() => deleteCategoriesbyId()}
            >
              Yes
            </button>
            <button
              className="text-dark bg-primary px-10 py-2 transition-all duration-300 hover:opacity-70 rounded-3xl outline-none"
              onClick={() => setDeleteToggle(!deleteToggle)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
