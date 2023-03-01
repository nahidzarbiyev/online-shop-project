import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../images/png/Logo_NIKE.svg.png";
import { signup } from "../../../redux/actions/auth.actions";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
   
  const Signuphandle = (e) => {
    
    e.preventDefault();
    const user = { email, password, lastName, firstName };

    dispatch(signup(user))

  };
  
  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);
 

  if (user.loading) {
    return <div className="h-[100vh] flex items-center justify-center">Loading...!</div>;
  }


  return (
    <div className="max-w-[1900px] mx-auto flex justify-center h-[80vh] items-center">
      <form
        action=""
        className="flex flex-col gap-4 p-4 w-[300px] items-center justify-center"
        onSubmit={(e)=>Signuphandle(e)}
      >
        <img src={Logo} width={"50px"} alt="" />
        <p className="font-Anton uppercase text-center text-2xl">
          NIKE ÜYESİ OL
        </p>
        <span className="text-gray-500 text-xs text-center">
          Nike Üye profilini oluşturarak Nike'ın en iyi ürünlerine ilk erişen
          sen ol, topluluğa eriş ve ilham al.
        </span>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border placeholder:text-sm  outline-none p-2 w-80 rounded"
        />
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border placeholder:text-sm  outline-none p-2 w-80 rounded"
        />
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
          Hesap oluşturarak Nike'ın Gizlilik Politikası'nı ve Kullanım
          Şartları'nı kabul etmiş olursun.
        </span>
        <button
          type="submit"
          className=" px-10 py-2 w-80 bg-dark rounded text-primary transition-colors duration-300 hover:text-dark hover:bg-primary hover:border-primary"
        >
          submit
        </button>
        <span className="text-gray-500 text-xs text-end">
          Zaten üye misin?{" "}
          <Link className="text-dark underline" to={"/sign-in"}>
            Oturum Aç.
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
