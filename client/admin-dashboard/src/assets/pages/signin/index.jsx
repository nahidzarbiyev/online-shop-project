import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/nike_PNG9.png";
import {login} from  '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import Header from "../../layouts/header";
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8)
    .matches(/\d+/ )
    .matches(/[a-z]+/)
    .matches(/[A-Z]+/)
    .matches(/[!@#$%^&*()-+]+/)

    .required("password is required: password: uppercase, lowercase, number, no spaces, special characters"),

  email: Yup.string()
    .email("Invalid email")
    .required("Required")
    .matches(/^(?!.*@[^,]*,)/),
});



const Signin = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [toggle, settogle] = useState(true)
const dispatch = useDispatch()
// useEffect(() => {
//   if (!auth.authenticate) {
//     dispatch(userLoggedin())
    
//   }

// }, [])

const navigate = useNavigate()
const auth = useSelector(state=>state.auth)
  const userLogin = (e)=>{
    e.preventDefault()
    const user = {
    email, password
    }
  
   dispatch( login(user))
   
  
  }

  if (auth.authenticate) {
    navigate('/')
   }

  return (
 <>
    <div className="h-[100vh] flex gap-5 justify-center items-center bg-hero-pattern bg-cover">
      <div className="p-10 bg-dark max-w-[400px] min-h-[300px] flex flex-col gap-8 items-center justify-between">
        <img src={Logo} alt="" width={"70px"} />
        <p className="text-center text-white">
          The Nike dashboard is intended for sellers of the Nike online sales
          platform. If you are a user, please login and continue. if you are not
          a user, you can become a member of our family by accepting our terms
          of service.
        </p>{" "}
        <p className="text-white ">
          to work with us:{" "}
          <span className="underline text-gray-400 text-xs">
            test@gmail.com
          </span>
        </p>
        <span className="text-gray-500 text-xs">
          © 2023 Nike, Inc. All Rights Reserved
        </span>
      </div>
      {/* <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          userLogin

        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col justify-center items-center gap-7 p-4">
            <Field
              name="email"
              type="email"
              className={
                errors.email && touched.email
                  ? "border-2 placeholder:text-sm border-red-800 shadow-2xl  placeholder:text-red-900 shadow-red-800 outline-none p-2 w-96 rounded-lg"
                  : "border placeholder:text-sm  outline-none p-2 w-96 rounded-lg"
              }
              placeholder={
                errors.email && touched.email ? "email is required" : "email"
              }
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              name="password"
              className={
                errors.password && touched.password
                  ? "border-2  border-red-800 shadow-2xl placeholder:text-red-900 placeholder:text-sm shadow-red-800 outline-none p-2 w-96 rounded-lg"
                  : "border placeholder:text-sm outline-none p-2 w-96 rounded-lg"
              }
              placeholder={
                errors.email && touched.email
                  ? "password is required"
                  : "password: uppercase, lowercase, number, no spaces, special characters"
              }
            />
            {errors.password && touched.password ? (
              <p className="text-dark">{errors.password}</p>
            ) : null}
            <div className="flex gap-4 justify-center items-center">
              {" "}
              <button
                type="submit"
                className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
              >
                sign up
              </button>{" "}
              <Link to={"/sign-up"} className="text-white underline">
                Create an account
              </Link>
            </div>
          </Form>
        )}
      </Formik> */}
      <form action="" className="flex flex-col gap-8 items-center justify-center" onSubmit={userLogin}>
     
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border placeholder:text-sm  outline-none p-2 w-96 rounded-lg"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder=" password" className="border placeholder:text-sm  outline-none p-2 w-96 rounded-lg"/>
        <button type="submit" 
                className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
        
        >submit</button>
      </form>
    </div>
 </>
  );
};

export default Signin;
