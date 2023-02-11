import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getAllCategory } from "../../redux/actions/categories.actions";
import { useDispatch, useSelector } from "react-redux";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  size: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  quantity: Yup.string().required("Required"),
});
const Products = () => {
  const [toggle, setToggle] = useState(false);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);


  const categoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        categoryList(category.children, options)
      }
    }
    return options;
  };

  return (
    <div className="ml-56 p-5 ">
      <div className="w-96">
        <Formik
          initialValues={{
            name: "",
            price: "",
            quantity: "",
            size: "",
            description: "",
            productPicture: "",
            category:[]
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-3 w-full min-h-[450px] bg-black p-5 justify-center items-center">
              <Field
                name="name"
                placeholder="name"
                className="p-2 outline none border w-full border-blue-500"
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field
                name="price"
                type="number"
                placeholder="price"
                className="p-2 outline none border w-full border-blue-500"
              />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
              <Field
                name="size"
                placeholder="size"
                className="p-2 outline none border w-full border-blue-500"
              />
              {errors.size && touched.size ? <div>{errors.size}</div> : null}
              <Field
                name="description"
                placeholder="description"
                className="p-2 outline none border w-full border-blue-500"
              />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <Field
                name="productPicture"
                type="file"
                className="px-4 p-2 bg-blue-500  text-white outline none border w- border-transparent "
              />
              {errors.productPictures && touched.productPictures ? (
                <div>{errors.productPictures}</div>
              ) : null}
              <Field
                className="p-2 outline none border w-full border-blue-500"
                component="select"
                id="category"
                name="category"
                multiple={false}
              >
                  <option value="" disabled selected>
            select a category
          </option>
        {
          categoryList(category.categories).map(option=>{
       
            return (
              <option key={option.value} value={option.value}>{option.name}</option>
            )
          })
        }
              </Field>
              <Field
                name="quantity"
                placeholder="quantity"
                className="p-2 outline none border w-full border-blue-500"
              />
              {errors.quantity && touched.quantity ? (
                <div>{errors.quantity}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Products;
