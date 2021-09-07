import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import Sneakers from "../components/Sneakers";
import OneSneaker from "../components/OneSneaker";

import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/sneakers" exact component={Sneakers} />
      <Route
        path="/sneaker-details/:id"
        exact
        component={OneSneaker}
      />
    </div>
  );
};

export default Routes;
