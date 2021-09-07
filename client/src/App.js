import React, { useMemo, useState } from "react";
import axios from "axios";

import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/Routes";

import MyContext from "./contexts/context";

function App() {
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [actualPage, setActualPage] = useState("");
  const [loggedUser, setLoggedUser] = useState({});

  const data = {
    userInput,
    setUserInput,
    errorMessage,
    setErrorMessage,
    signupSuccess,
    setSignupSuccess,
    actualPage,
    setActualPage,
    loggedUser,
    setLoggedUser,
  };

  useMemo(() => {
    axios({
      method: "GET",
      url: "/api/auth/check-auth",
    })
      .then((result) => {
        const { id, username } = result.data;
        setLoggedUser({ id, username });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <MyContext.Provider value={data}>
        <Router>
          <Routes />
        </Router>
      </MyContext.Provider>
    </div>
  );
}

export default App;
