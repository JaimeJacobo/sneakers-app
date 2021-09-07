import axios from "axios";
import { useEffect, useState } from "react";

import { Redirect } from "react-router-dom";

import Navbar from "./Navbar";

const Profile = () => {
  const [user, setUser] = useState(false);
  const [userVerified, setUserVerified] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/auth/check-auth",
    })
      .then(async (result) => {
        result.data.id && (await setUser(result.data));
        setUserVerified(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPage = () => {
    if (userVerified) {
      if (user.id) {
        return (
          <>
            <Navbar />
            <h2>Welcome, {user.username}</h2>
          </>
        );
      } else {
        return <Redirect to="/login" />;
      }
    }
  };

  return <>{renderPage()}</>;
};

export default Profile;
