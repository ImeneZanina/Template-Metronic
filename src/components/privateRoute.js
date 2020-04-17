import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user == null) user = { isAuth: false };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
