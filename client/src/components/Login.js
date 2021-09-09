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
    errorMessage,
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
        <div
          style={{
            height: "calc(var(--vh, 1vh) * 100)",
          }}
        >
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
                src={process.env.PUBLIC_URL + "/img/air-jordan-red.png"}
                alt="Jordans red"
              />
              <p class="Login__mainText h3 mb-3 font-weight-normal">Log in</p>{" "}
              <div className="Login__buttonAndMsg">
                <input
                  type="text"
                  id="username"
                  class="form-control"
                  placeholder="Username"
                  required=""
                  autofocus=""
                />
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Password"
                  required=""
                />
              </div>
              <div>
                <button
                  class="btn btn-lg btn-block red"
                  onClick={() => handleSubmit()}
                >
                  Log in
                </button>
                <p class="mt-3 mb-3 text-muted">
                  © Enjoy the experience &#128516;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
