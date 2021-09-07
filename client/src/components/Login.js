import { useEffect, useContext, useState } from "react";
import axios from "axios";

import MyContext from "../contexts/context";

import { Redirect } from "react-router-dom";

import Navbar from "./Navbar";

const Login = () => {
  const [logInSuccess, setLogInSuccess] = useState(false);

  const {
    signupSuccess,
    setSignupSuccess,
    setActualPage,
    setErrorMessage,
    setLoggedUser,
  } = useContext(MyContext);

  useEffect(() => {
    signupSuccess && setSignupSuccess(false);
    setActualPage("login");
  }, []);

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "/api/auth/login",
      data: {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      },
    })
      .then(async (result) => {
        if (result.data.message) {
          setErrorMessage(result.data.message);
        } else {
          const { id, username } = result.data;
          await setLoggedUser({ id, username });
          setLogInSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {logInSuccess ? (
        <Redirect to="/profile" />
      ) : (
        <>
          <Navbar />
          <h2>Log in Page</h2>
          <p>Username</p>
          <input id="username" type="text"></input>
          <p>Password</p>
          <input id="password" type="password"></input>
          <button onClick={() => handleSubmit()}>Log in loco 😗</button>
        </>
      )}
    </>
  );
};

export default Login;
