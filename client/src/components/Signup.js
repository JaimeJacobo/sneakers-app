import { useContext, useMemo } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

import MyContext from "../contexts/context";

import Navbar from "./Navbar";

const Signup = () => {
  const valueFromContext = useContext(MyContext);
  const {
    userInput,
    setUserInput,
    setErrorMessage,
    signupSuccess,
    setSignupSuccess,
    setActualPage,
  } = valueFromContext;

  useMemo(() => {
    setActualPage("signup");
  }, []);

  const changeHandler = (event, type) => {
    setUserInput({
      ...userInput,
      [type]: event.target.value,
    });
  };

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "/api/auth/signup",
      data: {
        username: userInput.username,
        password: userInput.password,
      },
    })
      .then((result) => {
        console.log(result.data);
        if (result.data.message) {
          setErrorMessage(result.data.message);
        } else {
          setErrorMessage("");
          setSignupSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return signupSuccess ? (
    <Redirect to="/login" />
  ) : (
    <>
      <Navbar />
      <h1>Signup Page</h1>
      <p>Username</p>
      <input onChange={(event) => changeHandler(event, "username")}></input>
      <p>Password</p>
      <input
        type="password"
        onChange={(event) => changeHandler(event, "password")}
      ></input>

      <button onClick={() => handleSubmit()}>Sign up 😗</button>
    </>
  );
};

export default Signup;
