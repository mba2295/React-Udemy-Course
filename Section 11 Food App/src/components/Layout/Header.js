import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton.js";
import mealsImage from "../../assets/meals.webp";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={props.toggleCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A webpage full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
