// import axios from "axios";
import React, { useRef } from "react";
import "./LoginForm.css";
// import { User } from "../../../../models/user";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { loginUser } from "../../../../redux/Slices/AuthSlice";


// interface LoginFormProps {
//     upadateLoggedInUser: (user: User) => void;
// }


export const LoginForm: React.FC = () => {
  // const [error, setError] = useState<boolean>(false);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const auth = useSelector((state : RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch(); 

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current && passwordRef && passwordRef.current) {
      dispatch(loginUser(
        {email : emailRef.current.value ,
           password : passwordRef.current.value
        }));
    }


    // if (
    //   emailRef.current &&
    //   passwordRef.current &&
    //   passwordRef &&
    //   passwordRef.current
    // ) {
    //   try {
    //     console.log(
    //       "import.meta.env.VITE_BASE_URL = ",
    //       import.meta.env.VITE_BASE_URL
    //     );
    //     const res = await axios.post(
    //       `${import.meta.env.VITE_BASE_URL}/auth/login`,
    //       {
    //         email: emailRef.current.value,
    //         password: passwordRef.current.value,
    //       }
    //     );

        // setError(false);
      //   upadateLoggedInUser(res.data.user);
      //   console.log(res.data.user);
      // } catch (error) {
      //   console.error(error);
      //   setError(true);
      // }


    }

  return (
    <form className="login-form">
      <h2>Please Login to your account</h2>
      
      {auth.error}
      <div className="login-form-input-group">
        <h6>Email</h6>
        <input
          className="login-form-input"
          name="email"
          type="text"
          placeholder="Email"
          required
          ref={emailRef}
        />
      </div>
      <div className="login-form-input-group">
        <h6>Password</h6>
        <input
          className="login-form-input"
          name="password"
          type="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
      </div>
      <button className="login-form-submit" onClick={handleLoginUser}>
        Login
      </button>
      <p>
        Don't have an account?
        <span className="login-form-register">Create Account</span>
      </p>
    </form>
  );
};
