import React, { useContext } from "react";
import { AuthenticationContext } from "../../contexts/authenticationContext";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const authContext = useContext(AuthenticationContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <button onClick={authContext.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
