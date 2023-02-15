import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getAllCategory } from "../../redux/actions/categories.actions";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/actions/products.actions";
import TableAntd from "../../components/antd-table";
import Logo from "../../images/nike_PNG9.png";
import { CiCircleRemove } from "react-icons/ci";
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
    color: Yup.string()
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



  const handleEdit = () => {
    setToggle(!toggle);
  };

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
      <div className="flex justify-between items-center p-10">
        <h1 className="uppercase text-sm font-bold ">Product</h1> <button onClick={()=>setToggle(!toggle)}    className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary">Add new product</button>
      </div>
      <div className={
          toggle
            ? "w-96 min-h-[400px] bg-dark flex scale-100 transition-all duration-300 rounded-xl visible flex-col gap-10 justify-center items-center absolute top-[20%] left-[42%] z-30  py-5"
            : "scale-0 transition-all w-96 min-h-[400px] z-30 bg-dark flex  duration-300 invisible flex-col justify-center items-center absolute top-[20%] left-[42%]"
        }>
        <div className="flex justify-between  items-center ">
        <CiCircleRemove
          className="text-white absolute top-4 right-4 font-extrabold text-3xl cursor-pointer"
          onClick={() => handleEdit()}
        />
        <p className="flex text-white items-center py-4 justify-between gap-10">
          <img src={Logo} width={"70px"} alt="" /> Add New Category
        </p>

        </div>
        <Formik
          initialValues={{
            name: "",
            price: "",
            quantity: "",
            size: [""],
            color: [""],
            description: "",
            productPicture: [""],
            category:[""]
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, {resetForm}) => {
            const product = new FormData()
            product.append('name', values.name)
            product.append('price', values.price)
            product.append('size', values.size)
            product.append('color', values.color)
            product.append('quantity', values.quantity)
            product.append('description', values.description)
            product.append('category', values.category)
            product.append('productPicture', values.productPicture)
            console.log(values);
            dispatch(addProduct(product))
            resetForm({values: ''})
          }}
        >
          
          {({ errors, touched }) => (
            
            <Form className="flex flex-col gap-3 w-full min-h-[450px] bg-black px-5 justify-center items-center">
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
                name="color"
                placeholder="color"
                className="p-2 outline none border w-full border-blue-500"
              />
              {errors.color && touched.color ? <div>{errors.color}</div> : null}
              <Field
                name="description"
                placeholder="description"
                className="p-2 outline none border w-full border-blue-500"
              />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <Field
              multiple={true}
                name="productPicture"
                type="file"
                className="px-4 p-2 bg-blue-500  text-white outline none border w- border-transparent "
              />
              {errors.productPicture && touched.productPicture ? (
                <div>{errors.productPicture}</div>
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
              <button type="submit"
                 className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
              >Submit</button>
            </Form>
          )}
        </Formik>
      </div>
        <TableAntd/>
    </div>
  );
};

export default Products;
