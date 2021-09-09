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
    errorMessage,
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

  const checkForSamePasswords = () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    return password === confirmPassword;
  };

  const handleSubmit = () => {
    if (checkForSamePasswords()) {
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
    } else {
      setErrorMessage("Passwords don't match. Please try again");
    }
  };

  return signupSuccess ? (
    <Redirect to="/login" />
  ) : (
    <>
      <div style={{ position: "fixed", width: "100%" }}>
        <Navbar />
      </div>
      <div className="Login container">
        <div
          style={{ display: !errorMessage && "none" }}
          class="alert alert-danger zoomer"
          role="alert"
        >
          {errorMessage}
        </div>
        <div className="form-signin">
          <img
            className="jordans-image"
            src={process.env.PUBLIC_URL + "/img/jordans-dior.png"}
            alt="Jordans yellow"
          />
          <p class="Login__mainText h3 mb-3 font-weight-normal">Sign up</p>
          <div className="Login__buttonAndMsg">
            <input
              onChange={(event) => changeHandler(event, "username")}
              type="text"
              id="username"
              class="form-control"
              placeholder="Username"
              required=""
              autofocus=""
            />
            <input
              onChange={(event) => changeHandler(event, "password")}
              type="password"
              id="password"
              class="form-control"
              placeholder="Password"
              required=""
            />
            <input
              onChange={(event) => changeHandler(event, "password")}
              type="password"
              id="confirmPassword"
              class="form-control"
              placeholder="Confirm password"
              required=""
            />
          </div>
          <div>
            <button
              class="btn btn-lg btn-block blue"
              onClick={() => handleSubmit()}
            >
              Sign up
            </button>
            <p class="mt-3 mb-3 text-muted">© Enjoy the experience &#128516;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
