import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/nike_PNG9.png";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/actions/register.actions";



const Register = () => {
  const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const navigate = useNavigate()
const dispatch = useDispatch()
const user = useSelector(state=>state.user)
const auth = useSelector(state=>state.auth)
 useEffect(() => {
   
  if (auth.authenticate) {
    navigate('/sign-in')
   }

 }, [])
 

   const Signup = (e)=>{
    e.preventDefault()
    const user ={email,password,lastName,firstName} 

    dispatch(signup(user))
   }

 
   console.log(user.loading)
  return (
<>
{
  user.loading
  ?
  "loading"
  :
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

      <form action="" className="flex flex-col gap-8 items-center justify-center" onSubmit={Signup}>
     
     <input type="text" value={firstName} placeholder='first name' onChange={(e)=>setFirstName(e.target.value)} className="border placeholder:text-sm  outline-none p-2 w-96 rounded-lg"/>
     <input type="text" value={lastName} placeholder='last name' onChange={(e)=>setLastName(e.target.value)} className="border placeholder:text-sm  outline-none p-2 w-96 rounded-lg"/>
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border placeholder:text-sm  outline-none p-2 w-96 rounded-lg"/>
     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder=" password" className="border placeholder:text-sm  outline-none p-2 w-96 rounded-lg"/>
     <button type="submit" 
             className=" px-10 py-2 bg-dark rounded-lg text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
     
     >register</button>
   </form>
    </div>
  </>
}
</>
  );
};

export default Register;
