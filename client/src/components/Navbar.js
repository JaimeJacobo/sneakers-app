import axios from "axios";
import { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import MyContext from "../contexts/context";

import "./General.scss";

const Navbar = () => {
  const { loggedUser, setLoggedUser } = useContext(MyContext);

  const [logoutSuccess, setLogoutSuccess] = useState(false);

  const logout = () => {
    axios({
      method: "POST",
      url: "/api/auth/logout",
    })
      .then(async () => {
        await setLogoutSuccess(true);
        setLoggedUser({});
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {logoutSuccess ? (
        <Redirect to="/" />
      ) : (
        <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p>Sneakers App</p>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {!loggedUser.id && (
                  <li className="nav-item">
                    <p>
                      <Link className="nav-link " to="/signup">
                        Sign Up
                      </Link>
                    </p>
                  </li>
                )}
                {!loggedUser.id && (
                  <li className="nav-item">
                    <p>
                      <Link className="nav-link" to="/login">
                        Log In
                      </Link>
                    </p>
                  </li>
                )}
                {loggedUser.id && (
                  <li className="nav-item">
                    <p>
                      <Link className="nav-link" to="/profile">
                        Profile
                      </Link>
                    </p>
                  </li>
                )}
                {loggedUser.id && (
                  <li className="nav-item">
                    <p>
                      <Link className="nav-link" to="/sneakers">
                        View Sneakers
                      </Link>
                    </p>
                  </li>
                )}
                {loggedUser.id && (
                  <li className="nav-item">
                    <p
                      className="nav-link"
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Log out
                    </p>
                  </li>
                )}
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Are you sure you want to log out?
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    NO! I want to stay 😄
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => logout()}
                  >
                    Yes, log out 👋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
