import axios from "axios";

import { useState, useEffect } from "react";

import { Redirect } from "react-router-dom";

import Navbar from "./Navbar";

const Sneakers = () => {
  const [user, setUser] = useState(false);
  const [userVerified, setUserVerified] = useState(false);
  const [searchedSneakers, setSearchedSneakers] = useState([]);
  // const [goToDetailsPage, setGoToDetailsPage] = useState(false)
  const [sneaker, setSneaker] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/auth/check-auth",
    })
      .then(async (result) => {
        result.data.id && (await setUser(result.data));
        await setUserVerified(true);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchBrand = () => {
    const name = document.getElementById("nameInput").value;
    axios({
      method: "POST",
      url: "/api/sneakers",
      data: { limit: 30, name },
    })
      .then((result) => {
        setSearchedSneakers(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToDetailsPage = (sneaker) => {
    setSneaker(sneaker);
  };

  const renderPage = () => {
    if (userVerified) {
      if (user.id) {
        if (sneaker.id) {
          return (
            <Redirect
              to={{
                pathname: `sneaker-details/${sneaker.id}`,
                state: sneaker,
              }}
            />
          );
        } else {
          return (
            <>
              <Navbar />
              <h2>Search for your favorite sneakers:</h2>

              <input id="nameInput" type="text"></input>
              <button onClick={searchBrand}>Search</button>
              <div>
                {searchedSneakers.map((sneaker) => {
                  return (
                    <div
                      id={sneaker.id}
                      onClick={() => goToDetailsPage(sneaker)}
                    >
                      <p>{sneaker.title}</p>
                      <img
                        src={sneaker.media.smallImageUrl}
                        alt={sneaker.title}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          );
        }
      } else {
        return <Redirect to="/login" />;
      }
    }
  };

  return <>{renderPage()}</>;
};

export default Sneakers;
