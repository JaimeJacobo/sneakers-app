import axios from "axios";

import { useState, useEffect } from "react";

import { Redirect } from "react-router-dom";

import Navbar from "./Navbar";

const Sneakers = () => {
  const [user, setUser] = useState(false);
  const [userVerified, setUserVerified] = useState(false);
  const [searchedSneakers, setSearchedSneakers] = useState([]);
  const [loader, setLoader] = useState(false);
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
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoader(true);
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
            <div
              className="Sneakers"
              style={{
                backgroundColor:
                  loader || searchedSneakers.length > 0 ? "white" : "inherit",
              }}
            >
              <div style={{ position: "fixed", width: "100%" }}>
                <Navbar />
              </div>
              <h2>Search for your favorite sneakers:</h2>
              <div className="Sneakers__searcher">
                <div>
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="nameInput"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    onClick={searchBrand}
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* <input id="nameInput" type="text"></input> */}
              {/* <button onClick={searchBrand}>Search</button> */}
              <div>
                {loader && (
                  <div className="Sneakers__loader">
                    <p>We are looking for your sneakers. Hold tight! </p>
                    <img
                      src={process.env.PUBLIC_URL + "/img/sneakers.gif"}
                      alt="Sneakers loader"
                    />
                  </div>
                )}
                {searchedSneakers.map((sneaker) => {
                  return (
                    <div id={sneaker.id}>
                      <div className="Sneakers__sneaker-info">
                        <img
                          onClick={() => goToDetailsPage(sneaker)}
                          src={sneaker.media.smallImageUrl}
                          alt={sneaker.title}
                        />
                        <p>{sneaker.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
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
