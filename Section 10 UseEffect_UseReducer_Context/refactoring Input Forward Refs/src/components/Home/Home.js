import React, { useContext } from "react";
import { AuthenticationContext } from "../../contexts/authenticationContext";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const authContext = useContext(AuthenticationContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
