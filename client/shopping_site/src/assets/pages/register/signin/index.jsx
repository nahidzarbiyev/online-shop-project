import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../images/png/Logo_NIKE.svg.png";
import { login } from "../../../redux/actions/auth.actions";

const Signin = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  
  
  }, [token])
  
  const userLogin = (e) => {
    e.preventDefault();
    
  
    dispatch(login({email, password}))
    
    setEmail('')
    setPassword('')
  };



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
<>
<Helmet>
    <meta charSet="utf-8" />
    <title>Hesap</title>
</Helmet>
    <div className="max-w-[1900px] mx-auto flex justify-center h-[80vh] items-center">
      <form
        action=""
        className="flex flex-col gap-4 p-4 w-[300px] items-center justify-center"
        onSubmit={userLogin}
      >
        <img src={Logo} width={"50px"} alt="" />
        <p className="font-Anton uppercase text-center text-2xl">
          NIKE'A DAİR HER ŞEY İÇİN HESABIN
        </p>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="border placeholder:text-sm  outline-none p-2 w-80 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" password"
          className="border placeholder:text-sm  outline-none p-2 w-80 rounded"
        />
        <span className="text-gray-500 text-xs text-center">
          Şifreni mi unutdun?
        </span>
        <span className="text-gray-500 text-xs text-center">
          Oturum açarak Nike'ın Gizlilik Politikası'nı ve Kullanım Şartları'nı
          kabul etmiş olursun.
        </span>
        <button
          type="submit"
          className=" px-10 py-2 w-80 bg-dark rounded text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
        >
          submit
        </button>
        <span className="text-gray-500 text-xs text-end">
          Üye değil misin?{" "}
          <Link className="text-dark underline" to={"/sign-up"}>
            Bize Katıl.
          </Link>
        </span>
      </form>
    </div>
</>
  );
};

export default Signin;
